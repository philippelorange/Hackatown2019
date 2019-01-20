import React from 'react';
import MapView from 'react-native-maps';
import { Button } from 'react-native';

import {
    StyleSheet,
    View,
    Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.01
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'TriviaGo',
    };
    constructor(props) {
        super(props);

        this.state = {
            initialPosition: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0
            },
            markerPosition: {
                latitude: 0,
                longitude: 0
            },
            polyPosition: {
                latitude: 45.504384,
                longitude: -73.612883
            },
        }
    }

    isUserInRange() {
        let x = this.state.initialPosition.latitude - this.state.polyPosition.latitude;
        let y = this.state.initialPosition.longitude - this.state.polyPosition.longitude;
        if (x > -1 && x < 1) {
            if (y > -1 && y < 1) {
                return <Button
                    title="Start"
                    onPress={() => this.props.navigation.navigate('QuizScreen')}
                />;
            }
        } else {
            return null;
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => {
            var lat = parseFloat(position.coords.latitude)
            var long = parseFloat(position.coords.longitude)

            var initialRegion = {
                latitude: lat,
                longitude: long,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
            }

        }, (error) => alert(JSON.stringify(error)), { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 })

        this.watchID = navigator.geolocation.watchPosition(position => {
            var lat = parseFloat(position.coords.latitude)
            var long = parseFloat(position.coords.longitude)

            var lastRegion = {
                latitude: lat,
                longitude: long,
                longitudeDelta: LONGITUDE_DELTA,
                latitudeDelta: LATITUDE_DELTA
            }

            this.setState({ initialPosition: lastRegion })
            this.setState({ markerPosition: lastRegion })
        })
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID)
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView style={styles.map}
                    region={this.state.initialPosition}
                >
                    <MapView.Marker
                        coordinate={this.state.markerPosition}>
                        <View style={styles.radius}>
                            <View style={styles.marker}>
                            </View>
                        </View>
                    </MapView.Marker>
                    <MapView.Marker coordinate={this.state.polyPosition} />
                    <View style={styles.button}>
                        {this.isUserInRange()}
                    </View>
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
    map:
    {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    radius:
    {
        height: 250,
        width: 250,
        borderRadius: 150,
        overflow: 'hidden',
        backgroundColor: 'rgba(0, 112, 255, 0.1)',
        borderWidth: 1,
        borderColor: 'rgba(0, 112, 255, 0.1)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    marker: {
        height: 20,
        width: 20,
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 20 / 2,
        overflow: 'hidden',
        backgroundColor: '#007AFF'
    },
    button: {
        backgroundColor: '#822F2B',
        color: '#FFFFFF'
    }

});
