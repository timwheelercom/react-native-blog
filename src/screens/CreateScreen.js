import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Context } from "../context/BlogContext";

const CreateScreen = () => {
    const [ title, setTitle ] = useState("");
    const [ content, setContent ] = useState("");
    return (
        <View>
            <Text style={styles.textStyle}>Create Blog Post</Text>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)}/>
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)}/>
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
      fontSize: 18,
      borderWidth: 1,
      borderColor: 'black'
    },
    label: {
        fontSize: 20,
        marginBottom: 10
    },
    textStyle: {
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 20
    }
});


export default CreateScreen;
