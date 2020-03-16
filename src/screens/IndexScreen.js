import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {

    const { state, addBlogPost, deleteBlogPost } = useContext(Context);

    return (
        <View>
            <Button
                title={ "Add Post" }
                onPress={ () => addBlogPost() }
            />
            <FlatList
                data={ state }
                keyExtractor={ (blogPost) => blogPost.title }
                renderItem={ ({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={ () => navigation.navigate("Show", { id: item.id, title: item.title }) }
                        >
                            <View style={ styles.rowStyle }>
                                <Text style={ styles.titleStyle }>{ item.title } - { item.id }</Text>
                                <TouchableOpacity
                                    onPress={ () => deleteBlogPost(item.id) }
                                >
                                    <Feather style={ styles.deleteIconStyle } name={ "trash" }/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                } }
            />
        </View>
    )
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight:
            <TouchableOpacity onPress={ () => navigation.navigate('Create') }>
                <Feather style={ styles.headerIconStyle } name={ "plus" }/>
            </TouchableOpacity>

    }
};

const styles = StyleSheet.create({
    rowStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: "grey"
    },
    headerIconStyle: {
        fontSize: 30,
        marginRight: 20
    },
    titleStyle: {
        fontSize: 18
    },
    deleteIconStyle: {
        fontSize: 24
    },
    textStyle: {
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 20
    }
});


export default IndexScreen;
