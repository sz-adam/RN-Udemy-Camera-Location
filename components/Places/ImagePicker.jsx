import { Button, StyleSheet, Text, View } from 'react-native'
import { launchCameraAsync, useCameraPermissions } from 'expo-image-picker'
import { Colors } from '../../constans/colors';

const ImagePicker = () => {
    async function takeImageHandler() {
        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
        });
        console.log(image)
    }
    return (
        <View>
          <View></View>
        <Button title="Take Image " onPress={takeImageHandler} />
        </View>
    );
}

export default ImagePicker;

const styles = StyleSheet.create({
    imagePreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});