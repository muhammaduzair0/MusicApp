import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ImageBackground,
  ScrollView
} from 'react-native';
import React from 'react';
import images from '../assets/images';
import LinearGradient from 'react-native-linear-gradient';
import MusicCard from '../src/components/MusicCard/MusicCard';
const Home = () => {
  return (
    
    <View style={styles.container}>
      <ScrollView >
      <View style={styles.headerWrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>GOOD MORNING Rabecca!</Text>
        </View>
        <View style={styles.iconWrapper}>
          <TouchableOpacity style={styles.searchIconWrapper}>
            <LinearGradient
              start={{x: 0.3, y: 0.25}}
              end={{x: 0.5, y: 1.0}}
              colors={['#F46D1F', '#9250A6']}
              style={styles.linearGradientSearch}>
              <Image source={images.searchIcon} />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuIconWrapper}>
            <Image source={images.menuIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.playlistTitleWrapper}>
        <Text style={[styles.playlistTitle, {marginTop:20}]}>MY PLAYLISTS</Text>
        <MusicCard />
      </View>
      <View style={styles.exploreWrapper}>
        <TouchableOpacity>
          <LinearGradient
            start={{x: 0.3, y: 0.25}}
            end={{x: 0.5, y: 1.0}}
            colors={['#F46D1F', '#9250A6']}
            style={styles.linearGradient}>
            <Text>Explore</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#50575C',
            width: 250,
            borderRadius: 25,
          }}>
          <Image
            style={{width: 14, height: 14, marginHorizontal: 5}}
            source={images.searchIcon}
          />
          <TextInput placeholder="Search your favorite song..." />
          <Image
            style={{width: 10, height: 14, marginRight: 5}}
            source={images.microphoneIcon}
          />
        </View>
      </View>
      <View>
      <View style={styles.playlistTitleWrapper}>
        <Text style={[styles.playlistTitle, {marginTop:20}]}>RECENTLY PLAYED</Text>
        <View style={{flexDirection:'row', justifyContent:'center', marginBottom:10,}}>
          <View style={{alignItems:'center', marginTop:10, marginRight:10}}>
          <Image style={{width:122,height:127, borderRadius:60}}source={images.music2}/>
        <Text  style={{marginTop:10, fontFamily:'Poppins-Light', fontSize:12, letterSpacing:2.4}}>The Weekend</Text>
        </View>
          <View style={{alignItems:'center', marginTop:10}}>
          <Image style={{width:122,height:127, borderRadius:60}}source={images.music4}/>
        <Text  style={{marginTop:10,fontFamily:'Poppins-Light', fontSize:12, letterSpacing:2.4}}>Kendrick Lamar</Text>
        </View>
          <View style={{alignItems:'center', marginTop:10}}>
          <Image style={{width:122,height:127, borderRadius:60}}source={images.music3}/>
        <Text  style={{marginTop:10, fontFamily:'Poppins-Light', fontSize:12, letterSpacing:2.4}}>Eminem</Text>
        </View>
        </View>
      </View>
      <View style={styles.playlistTitleWrapper}>
        <Text style={styles.playlistTitle}>2021 wrapped</Text>
        <View style={{backgroundColor:'#414348', width:380,height:160, borderRadius:15, flexDirection:'row'}}>
          <Image style={{width:133,height:133, marginTop:15, marginLeft:5}} source={images.wrapped} />
          <View>
          <Text style={{fontFamily:'Poppins-SemiBold',fontSize:16, letterSpacing:0.14, marginLeft:5, marginTop:24}}>SEE WHO YOU LISTENED {'\n'}TO IN 2020</Text>
          <Text style={{fontFamily:'Poppins-Light',fontSize:12,letterSpacing:0.32, marginLeft:5, marginTop:24}}>Your top artists and songs of{'\n'}the year and more..</Text>
          </View>
        </View>
      </View>
      <View style={styles.playlistTitleWrapper}>
        <Text style={[styles.playlistTitle, {marginTop:20}]}>POPULAR</Text>
        <MusicCard />
      </View>
      <View>
        <Text style={[styles.playlistTitle, {marginLeft:12}]}>FEATURED</Text>
        <ImageBackground style={{width:'100%',height:250}} source={images.feature} resizeMode="cover">
        </ImageBackground>
        <TouchableOpacity
            style={{alignItems:'center',justifyContent:'center', width:120, height:40,borderRadius: 45, borderWidth: 1, borderColor: '#fff', zIndex:999, bottom:50, left:20}}>
            <Text>CHECK IT OUT</Text>
          </TouchableOpacity>
      </View>
      <View style={[styles.playlistTitle, {marginTop:20, marginLeft:12}]}>
        <Text style={styles.playlistTitle}>NEW RELEASE</Text>
        <MusicCard />
      </View>
      </View>
      </ScrollView>
    </View>
    
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E272E',
  },
  titleWrapper: {
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    letterSpacing: 2,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    marginHorizontal: 12,
  },
  iconWrapper: {
    flexDirection: 'row',
  },
  searchIconWrapper: {
    marginRight: 15,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
  },
  menuIconWrapper: {
    backgroundColor: '#fff',
    marginRight: 15,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
  },
  playlistTitleWrapper: {
    // marginTop: 18,
    // // marginBottom: 10,
    marginLeft: 12,
  },
  playlistTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    letterSpacing: 3.6,
  },
  exploreWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center',
  },
  linearGradient: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 25,
    width: 115,
    height: 48,
  },
  linearGradientSearch: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 25,
    width: 30,
    height: 30,
  },
});
