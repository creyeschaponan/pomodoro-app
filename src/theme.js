import { Platform } from 'react-native'
import Constants from 'expo-constants'
const theme ={
    container: {
        flex: 1
      },
      text: {
        fontSize: 24,
        fontWeight: 'bold'
      },
      paddingView:{
        paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight + 10,
        paddingHorizontal: 15,
        flex: 1
      },
      button:{
        backgroundColor: '#333333',
        padding: 15,
        marginTop: 15,
        borderRadius: 15,
        alignItems: 'center',
      },
      textStartStop:{
        fontWeight: 'bold',
        color: '#fff'
      },
      containerTimer:{
        flex: 0.3,
        justifyContent: 'center',
        backgroundColor: '#F2F2F2',
        padding: 15,
        borderRadius: 15,
     },
     time:{
         fontSize: 80,
         fontWeight: 'bold',
         textAlign: 'center',
         color: "#333333"
     },
     header:{
        flexDirection: 'row',
    },
    itemStyleHeader:{
        width: '33%',
        alignItems: 'center',
        borderWidth: 3,
        padding: 5,
        borderRadius: 10,
        borderColor: '#fff',
        marginVertical: 20
    },
    textHeader:{
        fontWeight: 'bold'
    },
    acceptAlertButton:{
        backgroundColor: '#333333',
        padding: 15,
        marginTop: 15,
        borderRadius: 15
    }
}

export default theme