import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const AppBtn = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.btnWrapper, props.btnStyle]}>
      <LinearGradient
        start={{x: 0.3, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        colors={['#F46D1F', '#9250A6']}
        style={styles.linearGradient}>
        <Text style={[styles.btnTitle, props.btnTextStyle]}>
          {props.btnTitle}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default AppBtn;

const styles = StyleSheet.create({
  btnWrapper: {
    // flex:1,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'black',

    borderRadius: 15,
    marginVertical: 50,
  },
  btnTitle: {
    fontFamily: 'Poppins-Medium',
    color: 'white',
    textAlign: 'center',
    margin: 10,
    fontSize: 16,
    backgroundColor: 'transparent',
  },
  linearGradient: {
    // flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    width: 320,
    height: 48,
  },
});
