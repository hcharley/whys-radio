import { useEffect, useMemo, useState } from 'react';
// import TrackPlayer from 'react-native-track-player';
import { Audio, AVPlaybackStatus } from 'expo-av';
import { Sound } from 'expo-av/build/Audio';
import { Alert } from 'react-native';

export class AudioPlayer {
  public metadata: {
    sound: Sound;
    status: AVPlaybackStatus;
  };

  async start() {
    try {
      this.metadata = await Audio.Sound.createAsync({
        uri: `https://104.238.214.101:8088/whys?${new Date().getTime()}`,
        // 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3',
      });
      await this.playAudio();
      Alert.alert(
        'Audio played',
        'Played successfully',
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
    } catch (cause) {
      Alert.alert(
        'Error',
        cause.message || 'Unknown message',
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
