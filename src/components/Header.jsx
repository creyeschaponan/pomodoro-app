import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../theme';
const options = ['Pomodoro', 'Short Break', 'Long Break']

export default function Header({setTimer, currentTime, setCurrentTime}) {

    const handlePress = (index) => {
        const newTime = index === 0 ? 25 : index === 1 ? 5 : 15
        setCurrentTime(index)
        setTimer(newTime * 60)
    }

    return (
    <View style={theme.header}>
    {
        options.map((item, index) => (
            <TouchableOpacity 
                style={
                    [
                        theme.itemStyleHeader,currentTime !== index && {borderColor: 'transparent'}
                    ]}
                key={index}
                onPress={() => handlePress(index)}>
                    <Text style={theme.textHeader}>{item}</Text>
            </TouchableOpacity>
        ))
    }
    </View>
    );
}
