import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OutlinedButton from '../Ui/OutlinedButton'

const LocationPicker = () => {
    function getLocationHandler() { }

    function pickOnMapHandler() { }

    return (

        <View>
            <View> </View>
            <View>
                <OutlinedButton icon="location" onPress={getLocationHandler}>Locate User</OutlinedButton>
                <OutlinedButton icon="map" onPress={pickOnMapHandler}>Pick on Map</OutlinedButton>
            </View>
        </View>
    )
}

export default LocationPicker

const styles = StyleSheet.create({})