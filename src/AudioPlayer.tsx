import { useEffect, useMemo, useState } from 'react';
import { Sound, Audio, AVPlaybackStatus } from 'expo-av';
import { Alert } from 'react-native';

export class AudioPlayer {
  public metadata: {
    sound: Sound;
    status: AVPlaybackStatus;
  };

  async start() {
    try {
      this.metadata = await Audio.Sound.createAsync({
        uri: `http://104.238.214.101:8088/whys?${new Date().getTime()}`,
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
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
      );
    }
  }

  async playAudio() {
    await this.metadata.sound.playAsync();
  }

  async tearDown() {
    await this.metadata.sound.stopAsync();

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

export const useAudioPlayer = () => {
  const [playerState, setPlayerState] = useState({
    setupSuccessful: false,
    setupFailed: false,
  });

  const player = useMemo(() => {
    return new AudioPlayer();
  }, [AudioPlayer]);

  useEffect(() => {
    player.start().then(() => {
      setPlayerState({
        setupFailed: false,
        setupSuccessful: true,
      });
    });
    return () => {
      player.tearDown();
    };
  }, [player]);

  return { player, playerState };
};
