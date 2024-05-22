import { View,Text,StyleSheet } from "react-native";
import theme from "../theme";
export default function Timer({timer}) {
    const formattedTime = `${Math.floor(timer / 60).toString().padStart(2, '0')}:${(timer % 60).toString().padStart(2, '0')}`

    return (
        <View style={theme.containerTimer}>
            <Text style={theme.time}>{formattedTime}</Text>
        </View>
    )
}   
