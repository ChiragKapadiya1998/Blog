import React from 'react'
import { View, Text } from 'react-native'
import { Context } from '../Context/BlogContext'; 

const CreateScreen = () => {
    const { state } = useContext(Context);
    
    return (
        <View>
            <Text>Screen</Text>
        </View>
    )
}

export default CreateScreen
