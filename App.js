import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import Header from './src/components/Header'
import Timer from './src/components/Timer'
import {Audio} from 'expo-av'
import Theme from './src/theme'
import useTimer from './src/hooks/useTimer'

const colors = ['#F7DC6F','#A2D9CE','#D7BDE2']

export default function App() {
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK")
  const time = 25 * 60
  const { timer, setTimer, isActive, setIsActive } = useTimer(time,currentTime)

  const handleStartStop = () => {
    playSound()
    setIsActive(!isActive)
  }

  async function playSound(){
    const { sound } = await Audio.Sound.createAsync( require('./assets/click.mp3')
    );
    await sound.playAsync();
  }

  return (
    <SafeAreaView style={[Theme.container,{backgroundColor: colors[currentTime]}]}>
      <View style={Theme.paddingView}>
        <Text style={Theme.text}>Pomodoro</Text>
        <Header 
          setTimer={setTimer} 
          currentTime={currentTime} 
          setCurrentTime={setCurrentTime} />
        <StatusBar style="auto" />
        <Timer timer={timer} />
        <TouchableOpacity style={Theme.button} onPress={handleStartStop}>
          <Text style={Theme.textStartStop}>
            {isActive ? "STOP" : "START"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
