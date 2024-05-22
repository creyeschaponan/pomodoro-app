import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import theme from '../theme'
const useTimer = (time,currentTime) => {
  const [isActive, setIsActive] = useState(false)
  const [timer, setTimer] = useState(time)
  const [isWorking, setIsWorking] = useState(false)
  useEffect(() =>{
    let interval = null
    if(isActive){
      // run timer
      interval = setInterval(() => {
        setTimer(timer - 1)
      },1000)
    }else{
      // clear interval
      clearInterval(interval)
    }
    if(timer === 0){
      setIsActive(false)
      setIsWorking((prev) => !prev)
      if(currentTime === 0){
        setTimer(25 * 60)
      }else if(currentTime === 1){
        setTimer(5 * 60)
      } else if(currentTime === 2){
        setTimer(15 * 60)
      }

      Alert.alert(
        'Pomodoro',
        'You have finished your time!',
        [
          {
            text: 'Accept',
            style: theme.acceptAlertButton,
          },
        ]
      );
      
    }
    return () => clearInterval(interval)
  },[isActive, timer])

  return {
    timer,
    isWorking,
    setTimer,
    setIsWorking,
    isActive,
    setIsActive
  }
}



export default useTimer