import React,{useContext,useState} from 'react'
import { View, Text ,TextInput,StyleSheet, Button} from 'react-native'
import { Context } from '../Context/BlogContext'; 

const CreateScreen = ({navigation}) => {

    const { addBlogPost } = useContext(Context);
    const [title ,setTitle]=useState(' ');
    const [content,setContent]=useState(' ');

    return (
        <View style={styles.view}>
    
            <Text style={styles.label}>Enter Title </Text>
            <TextInput  
              style={styles.input} 
              value={title} 
              onChangeText={text=>setTitle(text)}
            />
            <Text style={styles.label}>Enter Content </Text>
            <TextInput 
              style={styles.input} 
              value={content}  
              onChangeText={text=>setContent(text)}
            />
            <Button 
                title='Add To Blog Post' 
                onPress={()=> {
                    addBlogPost(title,content,()=> {navigation.navigate('IndexScreen');});
                  }}/>
        </View>
    )
}
const styles = StyleSheet.create({
    view:{
        marginHorizontal: 40,
        flex:1,
       justifyContent:'center',
       alignContent:'center',
    },
    input:{
       padding:10,
       fontSize: 18,
       borderWidth:1,
       borderRadius: 25,
       borderColor: 'grey',
       marginBottom:20,
       backgroundColor: '#ffe6e6',
    },
    label:{
        fontSize: 20,
        marginBottom:10,
        alignSelf:'center'
    }
 
})
export default CreateScreen
