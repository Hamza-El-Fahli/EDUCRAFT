import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Graph = ({styles , data}) => {
  return (
    <View>
    <View style={styles.statistics_graphs}>
            {
            data.map((element, key) => {
              return (
                <View key={key} style={styles.statistics_graphs_graph} >
                    <View style={styles.statistics_graphs_graph_logo}>
                        <Text>{element.logo}</Text>
                    </View>
                        <View 
                        style={styles.statistics_graphs_graph_banner}
                        ><Text style={styles.statistics_graphs_graph_banner_num}
                        >{element.num}</Text>
                        <Text style={styles.statistics_graphs_graph_banner_text}
                        >{element.banner}</Text>
                        </View>
            </View>
              )})
            }


      </View>
    </View>
  )
}

export default Graph

