import { Image, Pressable, SafeAreaView, ActivityIndicator, ScrollView, Text, View } from 'react-native'
import React , { useState , useEffect} from 'react'
import styles from '../styles/styles'
import Colors from '../styles/colors'
import { getChapters } from '../Data/functions'


const upArrowIcon = require('./../images/svg/arrow.png')
const bookIcon = require('./../images/svg/book.png')
const validIcoin = require('./../images/svg/valid.png')
const invalidIcoin = require('./../images/svg/invalid.png')


const Quiz = ({ setShowQuiz, pageNumber, Data, CCNA , ModuleId , Chapters , setChapters }) => {
    const data = Data[CCNA]
    const [loading, setLoading] = useState(true);




    useEffect(() => {
        // Simulate an API call (replace this with your actual getModules API call)
        const fakeApiCall = async () => {
            // Set loading to true when the API call starts
            setLoading(true);

            // Call getModules API function
            try {
                const Chapters = await getChapters(ModuleId);
                setChapters(Chapters);

                // Set loading to false when the API call completes
                setLoading(false);
                console.log(Chapters)
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

        <View style={styles.container}>

            <View>
                <View style={styles.section_item} >
                    <Text style={styles.section_item_title} >{data[0].title}</Text>
                    <Pressable onPress={() => { setShowQuiz(false) }} style={styles.section_item_btn}>
                        <Image source={upArrowIcon} />
                    </Pressable>
                </View>
            </View>

            {loading ? ( // Render loading indicator if loading is true
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <>
            <View style={styles.unite}>
                <Text style={styles.unite_title} >Unite 1 :</Text>
                <Text style={styles.unite_details} >
                    Understand what is OSI module , and why we use it
                </Text>
                <Pressable style={styles.unite_icon} ><Image source={bookIcon} /></Pressable>
            </View>



                    <SafeAreaView style={{
                        height: '50%'
                    }} >
                        <ScrollView>
                            {data[pageNumber].quizUnits.map((unit) => {
                                return (<QuizUnit key={unit.id} data={unit} length={data[pageNumber].quizUnits.length} />
                                )
                            })}
                        </ScrollView>
                    </SafeAreaView>
                </>
            )}
        </View>

    )
}



const QuizUnit = ({ data, length }) => {
    return (
        <View key={data.id} style={{ paddingLeft: '20%', margin: '1%' }}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ marginRight: '5%' }} source={data.completed === data.task ? validIcoin : invalidIcoin} />
                <Text style={{ fontSize: 32, color: Colors.Dark.gray, fontWeight: 'bold' }}>{data.id}.....{data.title}: {data.completed}/{data.task}</Text>
            </View>
            <View style={{ borderColor: data.id < length - 1 ? data.completed === data.task ? Colors.Dark.gray : Colors.Dark.lightGray : 'transparent', borderWidth: 2, width: 0, height: 60, marginLeft: '8%', marginTop: '3%' }} />
        </View>
    )
}





export default Quiz
