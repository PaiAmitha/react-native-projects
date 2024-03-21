import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import React from 'react'
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get("window");

export default function OnboardingScreen() {
    const navigation = useNavigation();

    const handleDone = () => {
        navigation.navigate('Home');
    }

    const donebutton = ({...props})=> {
        return (
        <TouchableOpacity style={styles.donebtn}>
            <Text>Done</Text>
        </TouchableOpacity>
        )
    }
    return (
      <View style={styles.container}>
        <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        //DoneButtonComponent={donebutton}
        bottomBarHighlight={false}
          containerStyles={{ paddingHorizontal: 15 }}
          pages={[
            {
              key: 'page1', // Add a unique key prop to each page
              backgroundColor: '#a7f3d0',
              image: (
                <View >
                  <LottieView style={styles.lottie} source={require('../assets/animation/productivity.json')} autoPlay loop />
                </View>
              ),
              title: 'Boost Productivity',
              subtitle: 'Subscribe to this channel to boost your productivity level',
            },
            {
              key: 'page2', // Add a unique key prop to each page
              backgroundColor: '#fef3c7',
              image: (
                <View>
                    <LottieView style={styles.lottie} source={require('../assets/animation/seamless1.json')} autoPlay loop />
                </View>
              ),
              title: 'Work Seamlessly',
              subtitle: 'Get your work done seamlessly without interruption',
            },
            {
              key: 'page3', // Add a unique key prop to each page
              backgroundColor: '#a78bfa',
              image: (
                <View>
                  <LottieView style={styles.lottie} source={require('../assets/animation/goals.json')} autoPlay loop />
                </View>
              ),
              title: 'Achieve Higher Goals',
              subtitle: 'By boosting your productivity we help you to achieve higher goals',
            },
          ]}
        />
      </View>
    );
  }
  

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    lottie:{
        width:300,
        height:400,
    },
    donebtn:{
        padding:18,
        backgroundColor:'white',
        borderTopLeftRadius:40,
        borderBottomLeftRadius:40,
        // borderTopLeftRadius:'100%',
        // borderBottomLeftRadius:'100%',
    },
})