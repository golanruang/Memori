import { useState } from 'react';
import { View, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { Audio } from 'expo-av';

let recordingInstance = new Audio.Recording();

export default function AudioRecorder(){
  const [permissionResponse, requestPermission] = Audio.usePermissions();
  const [isRecording, setIsRecording] = useState(false);

  async function startRecording() {
    setIsRecording(true);
    try {
      if (permissionResponse.status !== 'granted') {
        console.log('Requesting permission..');
        await requestPermission();
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording..');
      await recordingInstance.prepareToRecordAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      await recordingInstance.startAsync();

      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    setIsRecording(false);
    console.log('Stopping recording..');
    await recordingInstance.stopAndUnloadAsync();
    await Audio.setAudioModeAsync(
      {
        allowsRecordingIOS: false,
      }
    );
    const uri = recordingInstance.getURI();
    console.log('Recording stopped and stored at', uri);
    // client sends audio object to server
    // server parsers obj + sends to openAI
    // axios.post(url, {
    //   data: ...
    // })
  }

  return (
    <View style = {{justifyContent: 'center', alignItems: 'center', marginTop: '22.5%'}}>
      <View style={{ marginTop: 16, width: 175, height: 175, borderRadius: 175, backgroundColor: 'lightgreen', overflow: 'hidden' }}>
          <TouchableOpacity onPress={isRecording ? stopRecording : startRecording}>
              <Image source={require('../assets/puzzle.jpg')} style={{ width: 175, height: 175 , borderRadius: 175/2}} />
          </TouchableOpacity>
      </View>
    </View>
  );
}