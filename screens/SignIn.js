import {StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import Header from '../src/components/Header/Header';
import TextInputField from '../src/components/TextField/TextInputField';
import AppBtn from '../src/components/Button/AppBtn';
import images from '../assets/images';
import CheckBoxComponent from '../src/components/CheckBox/checkBox';


const SignIn = ({navigation}) => {
  return (
    
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Header onPress={() => {navigation.goBack()}} title={'Sign In'} />
      </View>
<ScrollView style={styles.fieldSection}>
        <View style={styles.welcomeTitleWrapper}>
          <Text style={styles.welcomeTitle}>Welcome!</Text>
        </View>
        <View style={styles.emailFieldWrapper}>
          <TextInputField
            title={'Email'}
            placeHolderText={'Enter your Email'}
          />
        </View>
        <View style={styles.emailFieldWrapper}>
          <TextInputField title={'Password'} placeHolderText={'**********'} />
        </View>
        <View style={styles.rememberTitleWrapper}>
          <View style={styles.checkBoxWrapper}>
          <CheckBoxComponent />
          <Text>Remember Me</Text>
          </View>
          <View>
          <Text>Forget Password</Text>
          </View>
        </View>
        <AppBtn onPress={() => navigation.navigate('BottomTab')} btnTitle={'Sign In'} />
        <View style={styles.signinTitleWrapper}>
          <Text style={styles.signInTitle}>- OR -</Text>
          <Text style={styles.signInSubTitle}>Sign in with</Text>
        </View>
        <View style={styles.socialLoginWrapper}>
            <TouchableOpacity style={styles.fbIconWrapper}>
                <Image source={images.fbIcon} style={styles.fbIcon} />
                <Text  style={styles.fbTitle}>FACEBOOK</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.googleIconWrapper}>
                <Image source={images.googleIcon} style={styles.googleIcon} />
                <Text style={styles.googleTitle}>GOOGLE</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.accountTextWrapper}>
            <Text style={styles.accountTextTitle}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E272E',
  },
  headerWrapper: {
    flex:0.3,
  },
  fieldSection: {
    flex: 1,
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    backgroundColor: '#373F45',
  },
  welcomeTitleWrapper: {
    marginTop: 50,
    marginBottom: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    letterSpacing: 1.1,
  },
  emailFieldWrapper: {
    marginBottom: 15,
    alignItems: 'center',
  },
  rememberTitleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    marginHorizontal: 40,
    marginTop: 22,
  },
  checkBoxWrapper:{
    flexDirection:'row',
    alignItems:'center'
  },
  signinTitleWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInTitle:{
    marginBottom:23,
    fontFamily:'Poppins-Light',
    fontSize:20,
    letterSpacing:1
  },
  signInSubTitle:{
    fontFamily:'Poppins-Light',
    fontSize:14,
    textAlign:'center'
  },
  socialLoginWrapper:{
    flexDirection: 'row',
    justifyContent:'space-around',
    marginTop:20
  },
  fbIconWrapper:{
    flexDirection: 'row',
    backgroundColor:"#1E272E",
    width:155,
    height:55,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15

  },
  googleIconWrapper:{
    flexDirection: 'row',
    backgroundColor:"#1E272E",
    width:155,
    height:56,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15

  },
  googleIcon:{
    marginRight: 10
  },
  fbIcon:{
    marginRight: 10
  },
  fbTitle:{
    fontFamily:'Poppins-Medium',
    fontSize:14,
    letterSpacing:0.7
  },
  googleTitle:{
    fontFamily:'Poppins-Medium',
    fontSize:14,
    letterSpacing:0.7
  },
  accountTextWrapper:{
    flexDirection:'row',
    justifyContent:'center',
    marginTop:62,
    marginBottom:20
  },
  accountTextTitle:{
    marginRight:10,
    fontFamily:'Poppins-Regular',
    fontSize:16,
    letterSpacing:0.8
  },
  signUpText:{
    textDecorationLine:'underline',
    fontFamily:'Poppins-SemiBold',
    fontSize:16,
    letterSpacing:0.8
  }
});
