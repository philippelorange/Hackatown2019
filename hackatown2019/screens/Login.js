import React from 'react';
import { StyleSheet, Text, Alert, View, Image } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as firebase from 'firebase';
import { SocialIcon } from 'react-native-elements'


// Initialize Firebase
<script src="https://www.gstatic.com/firebasejs/5.8.0/firebase.js"></script>
const firebaseConfig = {
    apiKey: "AIzaSyAWYHJEGQpn6zzDdmPdlfTGaPOdPddp9NI",
    authDomain: "hackatown2019-3fda5.firebaseapp.com",
    databaseURL: "https://hackatown2019-3fda5.firebaseio.com",
    projectId: "hackatown2019-3fda5",
    storageBucket: "hackatown2019-3fda5.appspot.com",
    messagingSenderId: "254582279252"
};

firebase.initializeApp(firebaseConfig);


export default class Login extends React.Component {

    constructor(props) {
        super(props)

        this.state = ({
            email: '',
            password: ''
        })
    }

    componentDidMount() {

        firebase.auth().onAuthStateChanged((user) => {
            if (user != null) {
                console.log(user)
            }
        })
    }

    async loginWithFacebook() {

        try {
            const {
                type,
                token,
                expires,
                permissions,
                declinedPermissions,
            } = await Expo.Facebook.logInWithReadPermissionsAsync('282747145742382', {
                permissions: ['public_profile'],
            });
            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
                this.props.navigation.navigate('Tabs')
            } else {
                // type === 'cancel'
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }

    render() {
        return (
            <Container style={styles.container}>
                <Form>
                    <Image
                        source=
                        {
                            __DEV__
                                ? require('../assets/images/TriviaGo.png')
                                : require('../assets/images/robot-prod.png')
                        }
                        style={styles.welcomeImage}
                    />
                    <SocialIcon
                        title={"Sign In With Facebook"}
                        button
                        type={"facebook"}
                        onPress={() => this.loginWithFacebook()}
                    />
                </Form>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: 
    {
        bottom: 150,
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: -10,
    },

    welcomeImage: {
        width: 250,
        height: 500,
        bottom: -30,
        resizeMode: 'contain',
        marginTop: 0,
        marginLeft: 0,
    },
});