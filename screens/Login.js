import React, { useState } from 'react'
import { Text, View, StyleSheet,Image } from "react-native"
import TextBox from "../components/TextBox"
import Btn from "../components/Btn"
import firebase from 'firebase/app';
import "firebase/auth";

const styles = StyleSheet.create({
    view: {
        flex: 1,
        width: "100%",
        //justifyContent: "center",
        alignItems: "center",
        marginTop:'10%'
    },
    logo:{
        width:'60%',
        maxWidth:300,
        maxHeight:250,
        marginVertical:"10%",
        borderRadius:200
    }
})

export default function Loginscreen({ navigation }) {

    const [values, setValues] = useState({
        email: "",
        pwd: ""
    })

    function handleChange(text, eventName) {
        setValues(prev => {
            return {
                ...prev,
                [eventName]: text
            }
        })
    }

    function Login() {

        const { email, pwd } = values

        firebase.auth().signInWithEmailAndPassword(email, pwd)
            .then(() => {
            })
            .catch((error) => {
                alert(error.message)
                // ..
            });
    }

    return <View style={styles.view}>
     <Image source={require('../assets/logo.jpg')}
        style={styles.logo}
     />
   
        <Text style={{ fontSize: 34, fontWeight:'bold', marginBottom: 20, color:'grey',fontStyle:'italic' }}>Demo App</Text>
        <TextBox placeholder="Email Address" onChangeText={text => handleChange(text, "email")} />
        <TextBox placeholder="Password" onChangeText={text => handleChange(text, "pwd")} secureTextEntry={true} />
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "92%", }}>
            <Btn onClick={() => Login()} title="Login" style={{ width: "48%" }} />
            <Btn onClick={() => navigation.navigate("Sign Up")} title="Sign Up" style={{ width: "48%", backgroundColor: "#3B71F3" }} />        
        </View>

    </View>
}