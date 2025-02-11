import { StyleSheet, Alert, View } from 'react-native'
import React, { useState } from 'react'
import OutlinedButton from '../Ui/OutlinedButton'
import { Colors } from '../../constans/colors'
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from 'expo-location'
import { useNavigation } from '@react-navigation/native';
  


const LocationPicker = () => {
    const [pickedLocation, setPickedLocation] = useState();
 
    const navigation = useNavigation();

    const [locationPermissionInformation, requestPermission] = useForegroundPermissions();
    async function verifyPermissions() {
        if (
            locationPermissionInformation.status === PermissionStatus.UNDETERMINED
        ) {
            const permissionResponse = await requestPermission();

            return permissionResponse.granted;
        }

        if (locationPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert(
                'Insufficient Permissions!',
                'You need to grant location permissions to use this app.'
            );
            return false;
        }

        return true;
    }

    async function getLocationHandler() {
        const hasPermission = await verifyPermissions();

        if (!hasPermission) {
          return;
        }
        const location = await getCurrentPositionAsync()
        console.log(location)
    }

    function pickOnMapHandler() {
        navigation.navigate("Map")
     }

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