import React from 'react';
import { StyleSheet, Text, Alert, View } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as firebase from 'firebase';

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
                    <Button style={{ marginTop: 10 }}
                        full
                        rounded
                        primary
                        onPress={() => this.loginWithFacebook()}
                    >
                        <Text style={{ color: 'white' }}> Login With Facebook</Text>
                    </Button>



                </Form>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 10
    },
});