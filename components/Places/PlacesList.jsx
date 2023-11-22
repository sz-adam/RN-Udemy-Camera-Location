import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PlaceItem from './PlaceItem'
import { Colors } from '../../constans/colors'

const PlacesList = ({ places }) => {
    if (!places || places.length === 0) {
        return (
            <View style={styles.fallbackContainer}>
                <Text style={styles.fallbackText}>
                    No places added yet - start adding some!
                </Text>
            </View>
        );
    }

    return <FlatList style={styles.list} data={places} keyExtractor={(item) => item.id} renderItem={({ item }) => {
        <PlaceItem place={item} />
    }
    } />
}

export default PlacesList


const styles = StyleSheet.create({
    list: {
        margin: 24,
    },
    fallbackContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fallbackText: {
        fontSize: 16,
        color: Colors.primary200,
    },

})