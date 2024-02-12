import {
  Image,
  Pressable,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React from 'react';
import styles from '../../styles/quizStyles';
import Header from '../../components/Header';

const upArrowIcon = require('./../../images/svg/arrow.png');
const bookIcon = require('./../../images/svg/book.png');
const validIcoin = require('./../../images/svg/valid.png');
const invalidIcoin = require('./../../images/svg/invalid.png');

const Quiz = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/*/////////////// Header ////////////////// */}
      <Header navigation={navigation} />
      {/*/////////////// Header ////////////////// */}

      {/*/////////////// Module Title ////////////////// */}
      <View style={styles.module}>
        <Text style={styles.module_title}>Modele 1 : Modèle OSI</Text>
      </View>
      {/*/////////////// Module Title END ////////////////// */}

      <ScrollView style={styles.scroll}>
        {/*/////////////// One Chapter ////////////////// */}
        <View style={styles.chapter}>
          <View style={styles.chapter_title}>
            {/*/////////////// Chapter Title////////////////// */}
            <View style={styles.chapter_title_left}>
              <Text style={styles.chapter_title_left1}>Chapter 1</Text>
              <Text style={styles.chapter_title_left2}>
                Understand what is OSI module , and why we use it
              </Text>
            </View>
            <View style={styles.chapter_title_right}>
              <Image source={bookIcon} />
            </View>
          </View>
          {/*///////////////  Chapter Title End ////////////////// */}
          {/*///////////////  Chapter Quiz ////////////////// */}
          <View style={styles.quiz}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
        {/*///////////////  Chapter END ////////////////// */}

        {/*/////////////// One Chapter ////////////////// */}
        <View style={styles.chapter}>
          <View style={styles.chapter_title}>
            {/*/////////////// Chapter Title////////////////// */}

            <View style={styles.chapter_title_left}>
              <Text style={styles.chapter_title_left1}>Chapter 2</Text>
              <Text style={styles.chapter_title_left2}>
                Understand what is OSI module , and why we use it
              </Text>
            </View>

            <View style={styles.chapter_title_right}>
              <Image source={bookIcon} />
            </View>
          </View>
          {/*///////////////  Chapter Title End ////////////////// */}
          {/*///////////////  Chapter Quiz ////////////////// */}
          <View style={styles.quiz}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
        {/*///////////////  Chapter END ////////////////// */}
      </ScrollView>
    </View>
  );
};

export default Quiz;
