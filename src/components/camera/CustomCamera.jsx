import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React, {useEffect, useState} from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { theme } from '../../Theme';

import * as MediaLibrary from 'expo-media-library'
import { Camera } from 'expo-camera';

const CustomCamera = () => {
    const [medias, setMedias] = useState([]);
    const [hasPermissions, setHasPermissions] = useState(false)

    const requireCameraRollPermissions = async () => {
        const {status} = await MediaLibrary.requestPermissionsAsync(false);
        return status === "granted"
    }

    const requireCameraPermissions = async () => {
        const {status} = await Camera.requestCameraPermissionsAsync();
        return status === "granted"
    }

    useEffect(() => {
        (async () => {
            if(await requireCameraPermissions()) {
                setHasPermissions(true);
            }
            if(await requireCameraRollPermissions()){
                const files = await MediaLibrary.getAssetsAsync({
                    first: 25,
                    mediaType: ["photo", "video"],
                    sortBy: ["creationTime"]
                })
                setMedias(files.assets)
            }
        })()
    }, []);

    if(!hasPermissions) {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
                <Text style={{color: "#fff"}} >No access to camera</Text>
            </View>
        )
    }


  return (
    <View style={styles.container} >
        <Camera style={styles.camera} />
      <View style={styles.footer}>
        <View style={styles.medias} >
            <FlatList
                data={medias}
                keyExtractor={(item) => {
                    return item.id
                }}
                renderItem={({ item }) => {
                    // console.log("Item>>>", item)
                    return (
                        <Image 
                            style={styles.media} 
                            source={{uri: item.uri}} 
                            resizeMode="cover"
                        />)
                }
            }
            horizontal
            />
        </View>
        <View style={styles.buttons} >
            <TouchableOpacity>
                <Icon name='flash' size={30} color={theme.colors.white} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name='camera-iris' size={100} color={theme.colors.white} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name='camera-party-mode' size={30} color={theme.colors.white} />
            </TouchableOpacity>
        </View> 
      </View>
    </View>
  )
}

export default CustomCamera

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    camera: {
        flex: 1 
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    medias: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 10
    },
    media: {
        width: 80,
        height: 80,
        marginHorizontal: 2
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 20,
    }
})