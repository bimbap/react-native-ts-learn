import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useEditNote } from '@/hooks/useNote';
const DetailNote = () => {
    const params = useLocalSearchParams()
    const [content, setContent] = useState(params.content)
    const {error, mutate: editNote} = useEditNote()
  return (
<View>

    <View style={{
      flexDirection:"row", 
      padding:10, 
      width: "100%", 
      justifyContent:"space-between", 
      marginTop:30
      }}>
        
        <TouchableOpacity onPress={() => router.replace("/")}>
        <Ionicons name='arrow-back' size={20}></Ionicons>
        </TouchableOpacity>
        
      <Text style={{}}>DetailNote</Text>
      <View></View>
    </View>

      <TextInput style={{borderColor: "black", borderWidth:1, width:"100%"}}
      onChangeText={(text) => setContent(text)}
      value={content as string}
      ></TextInput>
      <Button title='update' onPress={() => editNote({
        content:content as string,
        id:parseInt(params.id as string)
      })}></Button>

      <Text>{params.id}</Text>
      <Text>{params.content}</Text>
      
      </View>
  )
}

export default DetailNote