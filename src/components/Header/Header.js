import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import images from '../../../assets/images'

const Header = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress} style={styles.iconWrapper}>
        <Image source={images.backArrow} style={styles.backArrowIcon} />
      </TouchableOpacity>

     <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center',
    marginTop: 58
  },
  title:{
    fontFamily:'Poppins-Regular',
    fontSize:18
  },
  iconWrapper:{
    backgroundColor:'#50575C',
    borderRadius:10,
    width:35,
    height:35,
    justifyContent:'center',
    alignItems:'center',
  },
  backArrowIcon: {
    width: 9,
    height: 10
  },
})

export default Header