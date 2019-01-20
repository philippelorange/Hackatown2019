import React from 'react';
import MapView from 'react-native-maps';
import Leaderboard from 'react-native-leaderboard';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions
} from 'react-native';


export default class LeaderboardScreen extends React.Component {

    static navigationOptions =
        {
            title: 'TriviaGo',
        }

    constructor(props) {
        super(props);

        this.state = {
            data: [
                { userName: 'Philippe Lorange', highScore: 69 },
                { userName: 'Kayla Charky', highScore: 1337 },
                { userName: 'Mugisha Ava', highScore: 23 },
                { userName: 'Alec Adub', highScore: 450 },
                { userName: 'Daniel Chari Zard', highScore: 420 },
                //...
            ] //can also be an object of objects!: data: {a:{}, b:{}}
        }
    }


    render() {
        return (
            <View>
                <Leaderboard
                    data={this.state.data}
                    sortBy='highScore'
                    labelBy='userName' />
            </View>
        )};
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
        height: 50,
        width: 50,
        borderRadius: 25,
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
    }

});
