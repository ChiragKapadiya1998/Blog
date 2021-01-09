import React ,{useContext}from 'react'
import { View, Text, SafeAreaView,FlatList } from 'react-native'
import BlogContext from '../Context/BlogContext';
const IndexScreen = () => {
    const blogPosts=useContext(BlogContext);
    return (
        <SafeAreaView>
        <View>
            <Text>IndexScreen</Text>
            <FlatList 
             data={blogPosts}
             keyExtractor={blogPosts =>blogPosts.title}
             renderItem={({item})=>{
                return (<Text>{item.title}</Text>);
             }}
            />

        </View>
        </SafeAreaView>
    )
}

export default IndexScreen;
