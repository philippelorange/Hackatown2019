import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Dimensions,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Animbutton from './AnimButton'
const { width, height } = Dimensions.get('window')
let arrnew = []
const jsonData = {
    "quiz": {
        "quiz1": {
            "question1": {
                "correctoption": "option1",
                "options": {
                    "option1": "1873",
                    "option2": "1886",
                    "option3": "1903",
                    "option4": "2019"
                },
                "question": "Polytechnique was established in ____"
            },
            "question2": {
                "correctoption": "option2",
                "options": {
                    "option1": "PolyJournal",
                    "option2": "Polyscope",
                    "option3": "PolyPapier",
                    "option4": "PolyQuiPolyQuoi"
                },
                "question": "Polytechnique's student newspaper is called Le ____"
            },
            "question3": {
                "correctoption": "option4",
                "options": {
                    "option1": "Université Sherbrooke",
                    "option2": "Université McGill",
                    "option3": "Université du Québec à Montréal",
                    "option4": "Université Laval"
                },
                "question": "Université de Montréal was founded as a satellite campus to which other university?"
            }
        }
    }
}
export default class Quiz extends Component {
    constructor(props) {
        super(props);
        this.qno = 0
        this.score = 0

        const jdata = jsonData.quiz.quiz1
        arrnew = Object.keys(jdata).map(function (k) { return jdata[k] });
        this.state = {
            question: arrnew[this.qno].question,
            options: arrnew[this.qno].options,
            correctoption: arrnew[this.qno].correctoption,
            countCheck: 0
        }

    }
    prev() {
        if (this.qno > 0) {
            this.qno--
            this.setState({ question: arrnew[this.qno].question, options: arrnew[this.qno].options, correctoption: arrnew[this.qno].correctoption })
        }
    }
    next() {
        if (this.qno < arrnew.length - 1) {
            this.qno++

            this.setState({ countCheck: 0, question: arrnew[this.qno].question, options: arrnew[this.qno].options, correctoption: arrnew[this.qno].correctoption })
        } else {
            this.props.quizFinish(Math.round(this.score * 100 / 3));
        }
    }
    _answer(status, ans) {
        if (status == true) {
            const count = this.state.countCheck + 1
            this.setState({ countCheck: count })
            if (ans == this.state.correctoption) {
                this.score += 1
            }
        } else {
            const count = this.state.countCheck - 1
            this.setState({ countCheck: count })
            if (this.state.countCheck < 1 || ans == this.state.correctoption) {
            }
        }

    }
    render() {
        let _this = this;
        const state = this.state;
        const currentOptions = this.state.options;

        const options = Object.keys(currentOptions).map(function (k) {
            return (<View key={k} style={{ margin: 10 }}>

                <Animbutton style={styles.answers} countCheck={_this.state.countCheck} onColor={_this.state.countCheck > 0 ? "green":''} effect={"tada"} _onPress={(status) => {_this._answer(status,k); _this.next();}} text={currentOptions[k]} />
            </View>)
        });

        return (
            <ScrollView style={{ backgroundColor: '#F5FCFF', paddingTop: 10 }}>
                <View style={styles.container}>



                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: "space-between", alignItems: 'center', }}>

                        <View style={styles.oval} >
                            <Text style={styles.welcome}>
                                {this.state.question}
                            </Text>
                        </View>
                        <View>
                            {options}
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity onPress={() => this.next()} >
                                <View style={{ paddingTop: 5, paddingBottom: 5, paddingRight: 20, paddingLeft: 20, borderRadius: 10, backgroundColor: "green" }}>
                                    <Icon name="md-arrow-round-forward" size={30} color="white" />
                                </View>
                            </TouchableOpacity >

                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    oval: {
        width: width * 90 / 100,
        borderRadius: 20,
        backgroundColor: 'green'
    },
    answer:{
        color:'black'
    },
    container: {
        flex: 1,
        alignItems: 'center'
    },
    welcome: {
        fontSize: 20,
        margin: 15,
        color: "white"
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});