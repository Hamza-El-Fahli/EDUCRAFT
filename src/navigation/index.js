import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from '../Screen/Login'
import Register from '../Screen/Register'
import Main from '../Screen/Main'



const Stack = createNativeStackNavigator()


const Navigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  
  )
}

export default Navigation

