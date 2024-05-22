import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Logo = () => {
  return (
    <View style={styles.w} >
      <View style={styles.w4} />
      <View style={styles.w5} />
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({

                w :{
                        position: "relative",
                    width: 79,
                    height: 69.5,
                    left: 157,
                    top: 20.5,
                    },

                    /* 1w 4 */
                w4 : {
                    position: "absolute",
                    left: "0%",
                    right: "0%",
                    top: "39.57%",
                    bottom: "0%",
                    background:' url("../1w.png")',
                    },

                    /* 1w 5 */
                w5 : {
                    position: "absolute",
                    left: "74.05%",
                    right: "-24.68%",
                    top: "0%",
                    bottom: "46.76%",
                    background:' url("../1w.png")',
                    transform: [{ rotate: '45deg' }],
                    }



})