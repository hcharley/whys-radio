import { Alert, Linking } from 'react-native';

export const openAppLink = (url: string) => {
  Linking.openURL(url).catch((cause) =>
    Alert.alert(
      'Failed to Open URL',
      cause.message || 'Unknown error',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      { cancelable: true }
    )
  );
};
