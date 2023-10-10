import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from '../src/components/Header/Header';
import TextInputField from '../src/components/TextField/TextInputField';
import AppBtn from '../src/components/Button/AppBtn';
import images from '../assets/images';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Header title={'Sign Up'}  onPress={() => {navigation.goBack()}}/>
      </View>
      <View style={styles.userImgWrapper}>
        <Image style={styles.userImg} source={images.signUpImg} />
        <TouchableOpacity style={styles.plusIconWrapper}>
          <Image style={styles.plusIcon} source={images.plusIcon} />
        </TouchableOpacity>

      </View>

      <View style={styles.fieldSection}>
        <ScrollView>
          <View style={styles.emailFieldWrapper}>
            <TextInputField icon={images.userIcon} title={'First Name'} placeHolderText={'First Name'} />
          </View>
          <View style={styles.emailFieldWrapper}>
            <TextInputField icon={images.userIcon} title={'Last Name'} placeHolderText={'Last Name'} />
          </View>
          <View style={styles.emailFieldWrapper}>
            <TextInputField
              icon={images.phoneIcon}
              keyboardType={'numeric'}
              title={'Phone'}
              placeHolderText={'Enter your Phone Number'}
            />
          </View>
          <View style={styles.emailFieldWrapper}>
            <TextInputField
              icon={images.emailIcon}
              title={'Email'}
              placeHolderText={'Enter your Email'}
            />
          </View>
          <View style={styles.emailFieldWrapper}>
            <TextInputField
            passwordIcon={images.showPassword}
              icon={images.passwordIcon}
              title={'Password'}
              placeHolderText={'**********'} />
          </View>

          <AppBtn onPress={() => navigation.navigate('Home')} btnTitle={'Sign Up'} />
          <View style={styles.signupTitleWrapper}>
            <Text style={styles.signupTitle}>- OR -</Text>
            <Text style={styles.signupSubTitle}>Sign Up with</Text>
          </View>
          <View style={styles.socialLoginWrapper}>
            <TouchableOpacity style={styles.fbIconWrapper}>
              <Image source={images.fbIcon} style={styles.fbIcon} />
              <Text style={styles.fbTitle}>FACEBOOK</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.googleIconWrapper}>
              <Image source={images.googleIcon} style={styles.googleIcon} />
              <Text style={styles.googleTitle}>GOOGLE</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.accountTextWrapper}>
            <Text style={styles.accountTextTitle}>Already hav an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.signUpText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

      </View>

    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E272E',
  },
  headerWrapper: {
    flex: 0.3
  },
  fieldSection: {
    flex: 2,
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    backgroundColor: '#373F45',
    paddingTop: 70,
  },
  userImgWrapper: {
    // position: 'absolute',
    zIndex: 999,
    left: 155,
    top: 100,
    marginBottom: 30,
    width: 120,
    height: 120,
  },
  plusIconWrapper: {
    backgroundColor: 'white',
    width: 25,
    height: 25,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
    bottom: 30,
    left: 75
  },
  plusIcon: {
    width: 22,
    height: 22
  },
  userImg: {
    width: 100,
    height: 100,
  },
  emailFieldWrapper: {
    marginBottom: 15,
    alignItems: 'center',
  },
  signupTitleWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupTitle: {
    marginBottom: 23,
    fontFamily: 'Poppins-Light',
    fontSize: 20,
    letterSpacing: 1,
  },
  signupSubTitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    textAlign: 'center',
  },
  socialLoginWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  fbIconWrapper: {
    flexDirection: 'row',
    backgroundColor: '#1E272E',
    width: 155,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  googleIconWrapper: {
    flexDirection: 'row',
    backgroundColor: '#1E272E',
    width: 155,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  googleIcon: {
    marginRight: 10,
  },
  fbIcon: {
    marginRight: 10,
  },
  fbTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    letterSpacing: 0.7,
  },
  googleTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    letterSpacing: 0.7,
  },
  accountTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 62,
    marginBottom: 20,
  },
  accountTextTitle: {
    marginRight: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    letterSpacing: 0.8,
  },
  signUpText: {
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    letterSpacing: 0.8,
  },
});
