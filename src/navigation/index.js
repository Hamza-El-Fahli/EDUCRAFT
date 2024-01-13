import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from '../Screen/auth/Login'
import Register from '../Screen/auth/Register'
import Home from '../Screen/main/Home'



const Stack = createNativeStackNavigator()


const Navigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  
  )
}

export default Navigation

