import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const MusicCardData = props => {
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        onPress={() => console.log('Pressed')}
        style={styles.cardWrapper}>
        <Image style={styles.cardIcon} source={props.img} />
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subTitle}>{props.subtitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MusicCardData;

const styles = StyleSheet.create({
  cardContainer: {
    marginLeft: 5,
  },
  cardWrapper: {
    // paddingHorizontal: 10,
    width: 126,
    height: 156,
    borderRadius: 15,
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  cardIcon: {
    width: 127,
    height: 144,
    borderRadius:25
  },
  title: {
    bottom: 70,
    left: 15,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    zIndex: 999,
  },
  subTitle: {
    bottom: 70,
    left: 15,
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    zIndex: 999,
  },
});
