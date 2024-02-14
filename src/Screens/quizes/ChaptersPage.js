import {
  Image,
  Pressable,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../../styles/ChaptesStyle';
import Header from '../../components/Header';
import {useSelector} from 'react-redux';

const upArrowIcon = require('./../../images/svg/arrow.png');
const bookIcon = require('./../../images/svg/book.png');
const validIcoin = require('./../../images/svg/valid.png');
const invalidIcoin = require('./../../images/svg/invalid.png');

const ChaptersPage = ({navigation}) => {
  const [loader, setloader] = useState(false);
  const chapters = useSelector(state => state.course.chapter);

  return (
    <View style={styles.container}>
      {loader ? (
        <ActivityIndicator
          size="x-larg"
          style={{alignSelf: 'center', marginTop: '50%'}}
          color="#0000ff"
        />
      ) : (
        <>
          {/*/////////////// Header ////////////////// */}
          <Header navigation={navigation} />
          {/*/////////////// Header ////////////////// */}

          {/*/////////////// Module Title ////////////////// */}
          <View style={styles.module}>
            <Text style={styles.module_title}>Modele 1 : Modèle OSI</Text>
          </View>
          {/*/////////////// Module Title END ////////////////// */}

          <ScrollView style={styles.scroll}>
            {chapters.map((oneChapter, index) => {
              const isLastElement = chapters.length - 1 === index;
              return (
                <View
                  style={{
                    ...styles.chapter,

                    borderBottomWidth: isLastElement ? 2 : 0,
                    borderBottomLeftRadius: isLastElement ? 0 : 20,
                    borderBottomRightRadius: isLastElement ? 0 : 20,
                  }}
                  key={index}>
                  <View style={styles.chapter_title}>
                    {/*/////////////// Chapter Title////////////////// */}

                    <View style={styles.chapter_title_left}>
                      <Text style={styles.chapter_title_left1}>
                        Chapter {index + 1}
                      </Text>
                      <Text style={styles.chapter_title_left2}>
                        {oneChapter.description}
                      </Text>
                    </View>

                    <View style={styles.chapter_title_right}>
                      <Image source={bookIcon} />
                    </View>
                  </View>
                  {/*///////////////  Chapter Title End ////////////////// */}
                  {/*///////////////  Chapter Quiz ////////////////// */}
                  <View style={styles.quiz}>
                    <Pressable onPress={()=>navigation.navigate('Quizes')}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={validIcoin} style={{margin: 10}} />
                        <Text
                          style={{
                            fontSize: 25,
                            fontWeight: 'bold',
                            color: '#E9E8F1' /*Colors.Dark.white*/,
                          }}>
                          Quiz 1 : 5/5
                        </Text>
                      </View>
                    </Pressable>
                  </View>
                  <View style={styles.quiz}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Image source={invalidIcoin} style={{margin: 10}} />
                      <Text
                        style={{
                          fontSize: 25,
                          fontWeight: 'bold',
                          color: '#E9E8F1' /*Colors.Dark.white*/,
                        }}>
                        Quiz 2 : 2/5
                      </Text>
                    </View>
                  </View>
                  <View style={styles.quiz}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Image source={invalidIcoin} style={{margin: 10}} />
                      <Text
                        style={{
                          fontSize: 25,
                          fontWeight: 'bold',
                          color: '#E9E8F1' /*Colors.Dark.white*/,
                        }}>
                        Quiz 3 : 0/5
                      </Text>
                    </View>
                  </View>
                  {/*///////////////  Chapter Quiz END ////////////////// */}
                </View>
              );
            })}
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default ChaptersPage;
