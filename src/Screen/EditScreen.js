import React,{useContext,useState} from 'react'
import { View, Text,TextInput,StyleSheet, Button } from 'react-native'
import { Context } from '../Context/BlogContext'

const EditScreen = ({route,navigation}) => {

    const {addBlogPost,state} =useContext(Context);
    
    const {id} =route.params;
   
    const blogPost = state.find( blogPost => blogPost.id === id );

    const [title,setTitle]=useState(blogPost.title);
    const [content,setContent]=useState(blogPost.content);

    return (
        <View style={styles.view}>
            <Text style={styles.label}>Edit New Title</Text>
            <TextInput 
               style={styles.textinput} 
               value={title} 
               onChangeText={(newtext)=>{setTitle(newtext)}}
            />
            <Text style={styles.label}>Edit New Content</Text>
            <TextInput 
                style={styles.textinput} 
                value={content} 
                onChangeText={(newtext)=>{setContent(newtext)}}
            />
            <Button 
                title="Add to New Blog Post" 
                onPress={()=> {
                    addBlogPost(title,content,
                    ()=> {navigation.navigate('IndexScreen');});
                  }}
             />
        </View>
    )
}
const styles = StyleSheet.create({
    view:{
        marginHorizontal: 40,
        flex:1,
       justifyContent:'center',
       alignContent:'center'
    },
    textinput:{
        padding:10,
        fontSize: 18,
        borderWidth:1,
        borderRadius: 25,
        borderColor: 'grey',
        marginBottom:20,
        backgroundColor: '#ff9999',
    },
    label:{
        fontSize: 20,
        marginBottom:10,
        alignSelf:'center'
    }
})
export default EditScreen;
