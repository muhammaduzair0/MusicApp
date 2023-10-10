import { StyleSheet, Text, View,TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const TextInputField = (props) => {
  return (
    <View>
     
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.input}>
      <Image style={styles.icon} source={props.icon} />
           <TextInput
           keyboardType={props.keyboardType}
        style={[styles.textInput,props.borderStyle]}
        // onChangeText={onChangeText}
        // value={text}
        placeholder={props.placeHolderText}
        numberOfLines={props.numberOfLines}
        multiline={props.multiLine}
      />
      <TouchableOpacity>
      <Image style={styles.showPassword} source={props.passwordIcon}  />
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default TextInputField

const styles = StyleSheet.create({
    input: {
        width:360,
        height: 48,
        borderRadius:10,
        backgroundColor:'#50575C',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:10
      },
      textInput:{
        width:320,
        height: 48,
      },
      title:{
        fontFamily:'Poppins-Regular',
        fontSize:14,
        marginBottom:10
      },
      icon:{
        width:24,
        height:24
      },
      showPassword:{
        width:24,
        height:24,
        right:30
      }
})