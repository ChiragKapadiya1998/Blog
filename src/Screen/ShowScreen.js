import React,{useContext} from 'react'
import { View, Text } from 'react-native'
import { Context } from '../Context/BlogContext';

const ShowScreen = ({route}) => {
    const {id }= route.params;
  
    const { state } = useContext(Context);
    
    const blogPost = state.find( blogPost => blogPost.id === id );
    return (
        <View>
             <Text>{blogPost.title}</Text>
        </View>
    )
}

export default ShowScreen
