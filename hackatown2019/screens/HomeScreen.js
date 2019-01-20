import React from 'react';
import MapView from 'react-native-maps';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.container}>
                <MapView style={styles.map}
                         region={{
                             latitude: 60,
                             longitude: 18,
                             latitudeDelta: 0.1,
                             longitudeDelta: 0.1
                         }}
                >
                </MapView>

            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map: {
        position: 'absolute',
        top: 0,
        left:0,
        bottom: 0,
        right: 0
    }

});
