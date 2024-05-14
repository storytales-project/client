import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { ActivityIndicator, Alert, Image, ImageBackground, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from "react-native";


export default function Register({ navigation }) {



    return (
        <>


            <ImageBackground source={require("../assets/background.png")} style={{ width: '100%', height: '100%' }}>

                <View style={styles.container}>

                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: "https://assets.tumblr.com/images/logo_page/1x/wordmark-white.png?_v=8cec4be4e8da5d4c0d64ca5c0643f655"
                        }}
                    />


                    <TextInput placeholder='Username..' style={styles.textInput} />


                    <TextInput placeholder='Name..' style={styles.textInput} />


                    <TextInput placeholder='Email..' style={styles.textInput} />


                    <TextInput placeholder='Password..' style={styles.textInput} />


                    <TouchableHighlight style={styles.button} >
                        <Text style={{ textAlign: "center" }}>Register</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={{}} onPress={() => navigation.navigate('Login')}>
                        <Text style={{ textAlign: "center", color: "white" }}>Go to Login..</Text>
                    </TouchableHighlight>

                    <StatusBar style="auto" />
                </View>
            </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        color: "white"
    },
    tinyLogo: {
        width: 350,
        height: 200,
    },
    textInput: {
        width: "100%",
        borderColor: "white",
        margin: 5,
        padding: 20,
        borderWidth: 1,
        borderRadius: 20,
        color: "black",
        backgroundColor: "white"
    },
    button: {
        padding: 15,
        borderColor: "black",
        backgroundColor: "#00b8ff",
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 10,
        width: "100%",
    }
});