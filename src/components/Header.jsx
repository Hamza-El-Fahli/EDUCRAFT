import { Pressable, Text, View, Image } from 'react-native'
import React , {useState} from 'react'
import Logo from './../images/svg/Logo'
import Flame from './../images/svg/Flame'
import styles from '../styles/styles'
import Colors from '../styles/colors'
const configIcon = require('./../images/svg/configIcon.png')

let data = [
  {id : 1 , title : 'CCNA 1' },
  {id : 2 , title : 'CCNA 2' },
  {id : 3 , title : 'CCNA 3' },
  {id : 4 , title : 'CCNA 4' },
]
const Header = ({ screen , setCCNA , CCNA ,navigation }) => {
  const [drop, setdrop] = useState(false)
  return (
    <View style={styles.header} >
      <Pressable style={{display :  screen === 'Profile' ? 'none' : 'flex' }} onPress={()=>{setdrop(!drop)}}>
        <Text style={styles.course}>CCNA {CCNA}</Text>
      </Pressable>
      
      <View
        style={{...styles.dropDown,
        display :  drop ? 'flex' : 'none'
        
        }}>
          <View style={{
            width : 0,
            height : 0,
            borderLeftWidth : 50,
            borderLeftColor : 'transparent',
            borderRightWidth : 50,
            borderRightColor : 'transparent',
            borderBottomColor : Colors.Dark.blue,
            borderBottomWidth : 100,
            position : 'absolute',
            top : -25,
            left : 0,

          }} />

          {data.map((item)=>{
            if(item.id === CCNA) return

            return (
          <Pressable key={item.id} onPress={()=>{setCCNA(item.id) ; setdrop(!drop)}}>
            <Text style={styles.dropDown_item}>CCNA {item.id}</Text>
          </Pressable>

            )
          })}

  

      </View>

      <Logo style={{ margin: 10 }} />
      {(screen !== 'Profile') ?
        <View style={styles.strike} >
          <Flame style={styles.strike_svg} />
          <Text style={styles.strike_num}>0</Text>
        </View> :
        <Pressable style={styles.strike} onPress={()=>navigation.navigate('Login')} >
          <Image style={{ height: 30, width: 30 }} source={configIcon} />
        </Pressable>
      }
    </View>
  )
}

export default Header

