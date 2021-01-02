import { useCallback, useEffect } from 'react';
import TrackPlayer from 'react-native-track-player';

export const AudioPlayer = () => {
  const callback = useCallback(async () => {
    await TrackPlayer.setupPlayer();
    return () => {
      TrackPlayer.destroy();
    };
  }, []);

  useEffect(() => {
    callback();
  }, [callback]);

  return null;
};
