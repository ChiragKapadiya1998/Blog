import React,{useContext} from 'react'
import { View, Text,StyleSheet ,TouchableOpacity} from 'react-native'
import { Context } from '../Context/BlogContext';
import {FontAwesome5} from '@expo/vector-icons';
const ShowScreen = ({route,navigation}) => {
    const {id }= route.params;
  
    const { state } = useContext(Context);
    const blogPost = state.find( blogPost => blogPost.id === id );


    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity onPress={()=>navigation.navigate('EditScreen' ,{id:id})}>
              <FontAwesome5 name='pen-square'  size={30} style={{marginRight:10}}/>
            </TouchableOpacity>
          ),
        });
      }, [navigation]);
    return (
        <View style={styles.card}>
             <Text style={styles.title}>{blogPost.title}</Text>
             <Text style={styles.content}>{blogPost.content}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    card:{
        marginTop:60,
        marginHorizontal:20,
        borderWidth:1,
        borderColor:'grey',
        borderRadius: 25,
    },
    title:{
        marginHorizontal:20,
        fontSize: 20,
        fontWeight:'bold',
    },
    content:{
        marginHorizontal:20,
        marginTop:10,
        fontSize: 17,
    }
    
})

export default ShowScreen
