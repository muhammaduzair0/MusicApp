import { View, FlatList } from 'react-native'
import React from 'react'
import Data from '../../../assets/Data'
import MusicCardData from './MusicCardData'

const MusicCard = () => {
  return (
    <View>
      <FlatList
      horizontal={true}
        data={Data}
        renderItem={(a) => {
          const { item } = a
          return (
            <MusicCardData
              title={item.title}
              img={item.image}
              subtitle={item.subTitle}
              key={item.id}
            />
          )
        }}
      />
    </View>
  )
}

export default MusicCard
