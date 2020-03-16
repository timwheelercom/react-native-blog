import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam("id"));

    return (
        <View>
            <Text style={styles.textStyle}>{blogPost.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 20
    }
});


export default ShowScreen;
