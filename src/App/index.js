import React from 'react';
import { View, Image, DeviceEventEmitter, Text } from 'react-native';
import { ReactNativeAudioStreaming } from 'react-native-audio-streaming';

import styles from './styles';
import logo from './images/whys-logo-black.png';
import playIcon from './images/play.png';
import pauseIcon from './images/pause.png';
import { Button, CurrentSong } from './components';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      streamTitle: '',
      playing: false,
    };
  }

  componentDidMount() {
    this.subscription = DeviceEventEmitter.addListener('AudioBridgeEvent', (evt) => {
      if (evt.status === 'METADATA_UPDATED' && evt.key === 'StreamTitle') {
        this.setState({ streamTitle: evt.value });
      } else if (evt.status === 'PLAYING' && !this.state.playing) {
        this.setState({ playing: true });
      } else if (evt.status === 'STOPPED' && this.state.playing) {
        this.setState({ playing: false });
      }
    });

    ReactNativeAudioStreaming.getStatus((error, status) => {
      this.setState({ playing: status.status === 'PLAYING' });
    });
  }

  play() {
    const url = 'http://199.175.55.69:8088/whys?12312312';
    ReactNativeAudioStreaming.play(url, {
      showIniOSMediaCenter: true,
      showInAndroidNotifications: true,
    });
    this.setState({ playing: true });
  }

  pause() {
    ReactNativeAudioStreaming.pause();
    this.setState({ playing: false, streamTitle: '' });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={logo}
          />
          {!!this.state.streamTitle &&
            <CurrentSong streamTitle={this.state.streamTitle} />
          }
        </View>
        <View style={styles.footer}>
          {!this.state.playing ? (
            <Button icon={playIcon} text="Play" onPress={() => this.play()} />
          ) : (
            <Button icon={pauseIcon} text="Pause" onPress={() => this.pause()} />
          )}
        </View>
      </View>
    );
  }
}
