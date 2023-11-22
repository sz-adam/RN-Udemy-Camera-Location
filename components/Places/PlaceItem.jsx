import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PlaceItem = ({ place,onSelect }) => {
    return (
        <Pressable onPress={onSelect}>
            <Image source={{ uri: place.imageUri }} />
            <View>
                <Text>{place.title}</Text>
                <Text>{place.address}</Text>
            </View>
        </Pressable>
    )
}

export default PlaceItem

const styles = StyleSheet.create({
    item: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      borderRadius: 6,
      marginVertical: 12,
      backgroundColor: Colors.primary500,
      elevation: 2,
      shadowColor: 'black',
      shadowOpacity: 0.15,
      shadowOffset: { width: 1, height: 1 },
      shadowRadius: 2,
    },
    pressed: {
      opacity: 0.9,
    },
    image: {
      flex: 1,
      borderBottomLeftRadius: 4,
      borderTopLeftRadius: 4,
      height: 100,
    },
    info: {
      flex: 2,
      padding: 12,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 18,
      color: Colors.gray700,
    },
    address: {
      fontSize: 12,
      color: Colors.gray700,
    },
  })