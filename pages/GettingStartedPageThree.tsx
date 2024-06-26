import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import IzzyAILogo from '../assets/IzzyAILogo';
import BlackDot from '../assets/BlackDot';
import WhiteDot from '../assets/WhiteDot';
import MicroPhoneIconGradient from '../assets/MicrophoneIconWithGradient';
import CustomButton from '../components/Button';

function GettingStartedPageThree({navigation}: any) {
  const navigate = () => {
    navigation.push('signInPage');
  };

  return (
    <SafeAreaView>
      <View style={{minHeight: '100%'}}>
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={{
            display: 'flex',
            alignItems: 'center',
            flex: 1,
          }}>
          <IzzyAILogo style={{marginTop: 60}} />

          <Text style={[styles.base, styles.heading]}>Izzy AI Rationale</Text>
          <Text style={[styles.base, styles.para]}>
            Izzy AI is the only Human Avatar based model that captures
            audio-visual and emotional features of the user and provides a
            comprehensive assessment. The wide variety of therapy options,
            especially the gamification, provides an easy and captivating
            intervention method. Izzy AI model training is on data with
            articulation, stammering, voice, language, narration, phonology,
            learning disabilities.
          </Text>
          {/* <View style={styles.svgContainer}>
            <WhiteDot style={styles.baseDot} />
            <WhiteDot style={styles.baseDot} />
            <BlackDot style={styles.baseDot} />
          </View> */}
          {/* <View style={styles.secondContainer}>
        <View style={styles.micContainer}>
          <MicroPhoneIconGradient />
          <Text style={[styles.base, styles.micText]}>izzy</Text>
        </View>
        <View>
          <Text style={[styles.base, styles.para2]}>
            Hello there! you can start saying words you feel difficult to
            pronounce
          </Text>
        </View>
      </View> */}
          {/* <Image
            style={styles.img}
            source={require('../assets/images/getStarted3.png')}
          /> */}
          <View style={styles.btnContainer}>
            <CustomButton onPress={() => navigate()} title="Get Started" />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  base: {
    fontFamily: 'SF-Pro-Display-Regular',
    color: '#111920',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
  },
  heading: {
    paddingTop: 50,
    fontSize: 30,
    fontWeight: '500',
  },
  para: {
    paddingTop: 5,
    fontSize: 16,
    textAlign: 'justify',
    fontWeight: '400',
    width: '85%',
    marginTop: 5,
  },
  svgContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 20,
    fontSize: 16,
    paddingHorizontal: 30,
    textAlign: 'center',
    fontWeight: '400',
  },
  baseDot: {
    marginHorizontal: 3,
  },
  // secondContainer: {
  //   marginTop: 40,
  //   paddingHorizontal: 30,
  //   display: 'flex',
  //   flexDirection: 'row',
  // },
  // micContainer: {
  //   display: 'flex',
  //   justifyContent: 'center',
  // },
  // micText: {
  //   textAlign: 'center',
  // },
  // para2: {
  //   paddingTop: 5,
  //   fontSize: 14,
  //   paddingHorizontal: 30,
  //   fontWeight: '400',
  //   marginTop: 10,
  // },
  img: {
    marginTop: 40,
  },
  btnContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    // marginTop: 120,
  },
});

export default GettingStartedPageThree;
