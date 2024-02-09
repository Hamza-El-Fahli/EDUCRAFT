import { Animated,  Pressable , Text, View , ActivityIndicator } from 'react-native'
import React , { useState , useEffect  } from 'react'
import styles from '../styles/styles'
import { getModules } from '../Data/functions'

import AsyncStorage from '@react-native-async-storage/async-storage'


const Body = ({ pageNumber: slideNum, setPageNumber : setslideNum, setShowQuiz, UserName, CCNA, Data , Modules , setModules }) => {
  const data = Data[CCNA];
  const [loading, setLoading] = useState(true); // State to track loading status
  useEffect(() => {
    // Simulate an API call (replace this with your actual getModules API call)
    const fakeApiCall = async () => {
      // Set loading to true when the API call starts
      setLoading(true);

      // Call getModules API function
      try {
        const storedData = await AsyncStorage.getItem('modules');
        if (storedData) {
          // If data exists, parse it and set it in state
          setModules(JSON.parse(storedData));
        }

        const modules = await getModules(CCNA);
        setModules(modules);

        // Set loading to false when the API call completes
        setLoading(false);
        await AsyncStorage.setItem('modules', JSON.stringify(modules));
        
      } catch (error) {
        console.error('Error fetching modules:', error);
        // Handle error
        setLoading(false);
      }
    };

    // Call the API function
    fakeApiCall();
  }, [CCNA]); // Run effect when CCNA prop changes

  return (
    <View style={styles.body}>
      <View style={styles.welcom}>
        <Text style={styles.welcom1}>Hello, {UserName}</Text>
        <Text style={styles.welcom2}>Welcome back to your course</Text>
      </View>

      {loading ? ( // Render loading indicator if loading is true
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Slides slideNum={slideNum} setShowQuiz={setShowQuiz} data={data} Modules={Modules} />

          <View style={styles.nav_btns}>
            {Modules.map((Module) => {
              if (Module.id == slideNum)
                return (
                  <Pressable style={{ padding: 10 }} onPress={() => setslideNum(Module.id)} key={Module.id}>
                    <Text style={{ ...styles.nav_btn, ...styles.nav_btn_selected }}>.</Text>
                  </Pressable>
                );
              return (
                <Pressable style={{ padding: 10 }} onPress={() => setslideNum(Module.id)} key={Module.id}>
                  <Text style={styles.nav_btn}>.</Text>
                </Pressable>
              );
            })}
          </View>
        </>
      )}
    </View>
  );
};


const Slides = ({ slideNum  , Modules , data , setShowQuiz })=>{
  const fading = new Animated.Value(0)
  Animated.timing(fading,
    {
      toValue:1,
      useNativeDriver: true,
      duration: 200,
    }).start()

    ////////////////////////////////
    const progression = 100
    ////////////////////////////
return (
  
  <Animated.View style={{...styles.slide,
      opacity:fading,
    }} >
   <View style={{...styles.slide_item,
  }} >
    <Text style={styles.slide_item_title} >{(slideNum)+' : '+Modules[slideNum-1 || 0].title}</Text>
    <Pressable ><Text style={styles.slide_item_details}>VOIR DETAILS</Text></Pressable>
    
    
    { 
    /*Modules[slideNum].*/progression === 100 &&
     <View >
         <Text style={styles.slide_item_progression}>You Completed this Section!</Text>
    </View>
    }

      {
        /*Modules[slideNum].*/progression < 100 &&
        <View 
        style={styles.progression_bar_bg} 
        key='progression_bar'
        >
        <View 
          style={{...styles.progression_bar,width : /*Modules[slideNum].*/progression+'%'}}
          />
        </View>
      }

      <Pressable onPress={()=>{setShowQuiz(true)}} style={styles.slide_item_btn_grp}>
        <Text style={styles.slide_item_btn}>{/*Modules[slideNum].*/progression < 100 ? 'CONTINUE' : 'REVIEW'}</Text>
      </Pressable>
      
  </View>
  
</Animated.View>

)
}





export default Body

