import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import logo from './images/whys-logo-black.png';
import playIcon from './images/play.png';
import pauseIcon from './images/pause.png';
import { NavigationLink } from './NavigationLink';
import { Button } from './Button';
import { CurrentSong } from './CurrentSong';
import { useAudioPlayer } from './AudioPlayer';
import { openAppLink } from './openAppLink';

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

export const WhysRadio = () => {
  const { player, playerState } = useAudioPlayer();

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
        {!!playerState.streamTitle && (
          <CurrentSong streamTitle={playerState.streamTitle} />
        )}
      </View>
      <View style={styles.footer}>
        {!playerState.playing ? (
          <Button
            icon={playIcon}
            text="Play"
            onPress={() => player.playAudio()}
          />
        ) : (
          <Button
            icon={pauseIcon}
            text="Pause"
            onPress={() => player.stopAudio()}
          />
        )}
      </View>
    </View>
  );
  // }
};
