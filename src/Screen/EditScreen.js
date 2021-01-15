import React,{useContext,useState} from 'react'
import { View, Text,TextInput,StyleSheet, Button } from 'react-native'
import { Context } from '../Context/BlogContext'
import BlogPostForm from '../components/BlogPostFrom';

const EditScreen = ({route,navigation}) => {

    const {editBlogPost,state} =useContext(Context);
    
    const {id} =route.params;
   
    const blogPost = state.find( blogPost => blogPost.id === id );

    const [title,setTitle]=useState(blogPost.title);
    const [content,setContent]=useState(blogPost.content);

    return (
        <BlogPostForm
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => {
          editBlogPost(id, title, content, () => navigation.pop());
        }}
      />
    )
}
const styles = StyleSheet.create({
    
})
export default EditScreen;
