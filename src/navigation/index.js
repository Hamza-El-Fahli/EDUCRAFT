import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from '../Screen/auth/Login'
import Register from '../Screen/auth/Register'
import Home from '../Screen/main/Home'
import Profile from "../Screen/profile/Profile"



const Stack = createNativeStackNavigator()


const Navigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  
  )
}

export default Navigation

