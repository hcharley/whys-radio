import { useEffect, useMemo, useState } from 'react';
import { Audio, AVPlaybackStatus } from 'expo-av';
import { Alert } from 'react-native';
import type { Sound } from 'expo-av/build/Audio/Sound';
import { EventEmitter } from 'events';
import { INTERRUPTION_MODE_IOS_DUCK_OTHERS } from 'expo-av/build/Audio';

export type ValueOf<T> = T[keyof T];
export type IdOf<T> = keyof T;

export const AudioPlayerEvent = {
  UserPlaying: 'user-playing',
  UserStopped: 'user-stopped',
  StreamError: 'stream-error',
} as const;

export type AudioPlayerEvent_Type = ValueOf<typeof AudioPlayerEvent>;
export type AudioPlayerEvent_Id = IdOf<typeof AudioPlayerEvent>;

export class AudioPlayer {
  public _emitter = new EventEmitter();

  public metadata: {
    sound: Sound;
    status: AVPlaybackStatus;
  };

  public debug = false;

  async start() {
    try {
      this.metadata = await Audio.Sound.createAsync({
        uri: `http://104.238.214.101:8088/whys?${new Date().getTime()}`,
      });
      this.metadata.sound.setProgressUpdateIntervalAsync(5 * 1000);
      if (this.debug) {
        this.metadata.sound.setOnPlaybackStatusUpdate((status) => {
          console.log('New status', status);
        });
      }
      await Audio.setAudioModeAsync({
        staysActiveInBackground: true,
        playsInSilentModeIOS: true,
        allowsRecordingIOS: true,
        interruptionModeIOS: INTERRUPTION_MODE_IOS_DUCK_OTHERS,
      });
      await this.playAudio();
    } catch (cause) {
      Alert.alert(
        'Failed to Start Audio',
        cause.message || 'Unknown error',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ],
        { cancelable: true }
      );
    }
  }

  private newEvent(
    event: AudioPlayerEvent_Type,
    details: Record<string, any> = {}
  ) {
    try {
      this._emitter.emit(event, { detail: details });
    } catch (cause) {
      console.warn(`Failed to dispatch event: ${event}`);
    }
  }

  async playAudio() {
    await this.metadata.sound.playAsync();
    this.newEvent(AudioPlayerEvent.UserPlaying);
  }

  async stopAudio() {
    await this.metadata.sound.pauseAsync();
    this.newEvent(AudioPlayerEvent.UserStopped);
  }

  async on(event: AudioPlayerEvent_Type, callback: () => void) {
    this._emitter.on(event, callback);
  }

  async tearDown() {
    await this.metadata.sound.stopAsync();
    await this.metadata.sound.unloadAsync();

    // TrackPlayer.destroy();
  }
  // const callback = useCallback(async () => {
  //   return () => {
  //     TrackPlayer.destroy();
  //   };
  // }, []);

  // useEffect(() => {
  //   callback();
  // }, [callback]);

  // return null;
}

export interface AudioPlayerState {
  setupSuccessful: boolean;
  setupFailed: boolean;
  playing: boolean;
  streamErrored: boolean;
  streamTitle: string | null;
}

export const useAudioPlayer = () => {
  const [playerState, setPlayerState] = useState<AudioPlayerState>({
    setupSuccessful: false,
    setupFailed: false,
    playing: false,
    streamErrored: false,
    streamTitle: null,
  });

  const setState = (state: Partial<AudioPlayerState>) => {
    setPlayerState({
      ...playerState,
      ...state,
    });
  };

  const player = useMemo(() => {
    return new AudioPlayer();
  }, [AudioPlayer]);

  useEffect(() => {
    player
      .start()
      .then(() => {
        setState({
          playing: true,
          setupFailed: false,
          setupSuccessful: true,
        });
      })
      .catch(() => {
        setState({
          setupFailed: false,
          setupSuccessful: false,
        });
      });
    player.on('user-playing', () => {
      setState({
        playing: true,
      });
    });
    player.on('user-stopped', () => {
      setState({
        playing: false,
      });
    });
    player.on('stream-error', () => {
      setState({
        playing: false,
        streamErrored: true,
      });
    });
    return () => {
      setState({
        playing: false,
      });
      player.tearDown();
    };
  }, [player]);

  return { player, playerState };
};
