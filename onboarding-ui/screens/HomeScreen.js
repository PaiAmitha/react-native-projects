import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { removeItem } from '../utils/asyncStorage';

const {width, height} = Dimensions.get("window");


export default function HomeScreen() {
    const navigation = useNavigation();
    const gotoboard = ()=>{
       navigation.navigate('Onboarding') ;
    }

    const handleReset = async () => {
        await removeItem('onboarded');
        navigation.push('Onboarding');
    }
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.lottie}>
            <Text style={styles.text}>Welcome!!</Text>
        <LottieView style={styles.lottie} source={require('../assets/animation/rabbit.json')} autoPlay loop />
        </View>
        <TouchableOpacity style={styles.resetbutton} onPress={handleReset}>
            <Text>Reset</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    lottie:{
        width: width*0.9,
        height:width,
    },
    text:{
        fontSize:28,
        fontWeight:'bold',
        marginLeft:115,
    },
    resetbutton:{
        backgroundColor:'#34d399',
        padding:10,
        borderRadius:10,
        width:80,
        alignItems:'center',
        height:40,
        marginTop:20,
    }
})