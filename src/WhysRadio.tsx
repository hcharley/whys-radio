import React, { useEffect, useState } from 'react';
import { View, Text, Image, Linking } from 'react-native';

import logo from './images/whys-logo-black.png';
// import playIcon from './images/play.png';
// import pauseIcon from './images/pause.png';
// import { CurrentSong } from './CurrentSong';
import { NavigationLink } from './NavigationLink';
// import { Button } from './Button';

import { StyleSheet } from 'react-native';
import { CurrentSong } from './CurrentSong';
import { useAudioPlayer } from './AudioPlayer';
// import { useAudioPlayer } from './AudioPlayer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  logo: {
    width: 175,
    height: 175,
    margin: 25,
  },
  streamTitleContainer: {
    padding: 20,
  },
  streamTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
  },
  navigation: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
});

export const openAppLink = (url: string) => {
  Linking.openURL(url).catch((err) => console.error('An error occurred', err));
};

export const WhysRadio = () => {
  // static openLink(url: string) {
  //   console.log('Open link');
  //
  // }

  // constructor(props: {}) {
  //   super(props);
  //   this.state = {
  //     streamTitle: '',
  //     playing: false,
  //   };
  // }

  // componentDidMount() {
  //   this.subscription = DeviceEventEmitter.addListener(
  //     'AudioBridgeEvent',
  //     (evt) => {
  //       if (evt.status === 'METADATA_UPDATED' && evt.key === 'StreamTitle') {
  //         this.setState({ streamTitle: evt.value });
  //       } else if (evt.status === 'PLAYING' && !this.state.playing) {
  //         this.setState({ playing: true });
  //       } else if (evt.status === 'STOPPED' && this.state.playing) {
  //         this.setState({ playing: false });
  //       }
  //     }
  //   );

  //   ReactNativeAudioStreaming.getStatus((error, status) => {
  //     this.setState({ playing: status.status === 'PLAYING' });
  //   });
  // }

  // play() {
  //   //   const url = 'http://199.175.55.69:8088/whys?12312312';
  //   //   ReactNativeAudioStreaming.play(url, {
  //   //     showIniOSMediaCenter: true,
  //   //     showInAndroidNotifications: true,
  //   //   });
  //   //   this.setState({ playing: true });
  // }

  // pause() {
  //   //   ReactNativeAudioStreaming.pause();
  //   //   this.setState({ playing: false, streamTitle: '' });
  // }

  // render() {
  const [state, setState] = useState({
    streamTitle: '',
    playing: false,
  });
  const { playing } = state;

  const { player } = useAudioPlayer();

  useEffect(() => {
    if (playing) {
    }
  }, [playing]);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.navigation}>
          <NavigationLink
            text="Donate"
            onPress={() => {
              openAppLink('http://www.whysradio.org/donate.php');
            }}
          />
          <NavigationLink
            text="Schedule"
            onPress={() => {
              openAppLink('http://www.whysradio.org/schedule.php');
            }}
          />
          <NavigationLink
            text="Recently played"
            onPress={() => {
              openAppLink('http://www.whysradio.org/nowplaying.php');
            }}
          />
        </View>
        <Image resizeMode="contain" style={styles.logo} source={logo} />
        {!!state.streamTitle && <CurrentSong streamTitle={state.streamTitle} />}
      </View>
      {/* <View style={styles.footer}>
          {!this.state.playing ? (
            <Button icon={playIcon} text="Play" onPress={() => this.play()} />
          ) : (
            <Button
              icon={pauseIcon}
              text="Pause"
              onPress={() => this.pause()}
            />
          )}
        </View> */}
    </View>
  );
  // }
};
