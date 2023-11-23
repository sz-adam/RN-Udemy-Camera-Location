import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OutlinedButton from '../Ui/OutlinedButton'
import { Colors } from '../../constans/colors'
import { getCurrentPositionAsync } from 'expo-location'


const LocationPicker = () => {
    
    async function getLocationHandler() { 
       const location=await getCurrentPositionAsync()
       console.log(location)
    }

    function pickOnMapHandler() { }

    return (
        <View>
            <View style={styles.mapPreview}></View>
            <View style={styles.actions}>
                <OutlinedButton icon="location" onPress={getLocationHandler}>
                    Locate User
                </OutlinedButton>
                <OutlinedButton icon="map" onPress={pickOnMapHandler}>
                    Pick on Map
                </OutlinedButton>
            </View>
        </View>
    )
}

export default LocationPicker

const styles = StyleSheet.create({
    mapPreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4,
        overflow: 'hidden',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        // borderRadius: 4
    },
});