import React from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native'

const CardNote = ({
    content, 
    onNavigate,
    onDelete
}: {
    content: string, 
    onNavigate: () => void
    onDelete: () => void
}) => {
  return (
    <View>
       <TouchableOpacity
        style={{
          borderColor: "black",
          borderWidth: 1,
          paddingHorizontal: 20,
          paddingVertical: 18,
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
        onPress={onNavigate}
      >
        <Text>{content}</Text>
        <Button title="Delete" onPress={onDelete} />
      </TouchableOpacity>
    </View>
  )
}

export default CardNote;