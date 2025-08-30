import CardNote from "@/components/CardNote";
import { useDeleteNote, useGetNotes, usePostNote } from "@/hooks/useNote";
import { router } from "expo-router";
import { useState } from "react";

import { Text, View, ScrollView, TextInput, Button } from "react-native";

export default function Index() {
const [content, setContent] = useState("");
const {data,error} = useGetNotes();
const {error:errorCreate,mutate:createNote} = usePostNote();
const {error:errorDelete,mutate:deleteNote} = useDeleteNote();
  return (

    <ScrollView 

      style={{
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
      }}>

        <Text>Notes</Text>

        <View style={{
           flexDirection: "row", gap: 10
        }}>

        <TextInput style={{
            borderColor: "gray",
            padding: 10,
            borderWidth: 1,
            width: "90%",
        }}
        onChangeText={(text) => setContent(text)}
        />


        <Button title="+" onPress={() => createNote({content:content})} />

        </View>
        {data?.map((note, index) => (
          
          <CardNote 
          key = {index}
          content={note.content}
          onDelete={() => deleteNote({id:note.id})} 
          onNavigate={() => router.push({
            pathname: "/detail-note",
            params: {id: note.id, content: note.content},
          })}
          />
        ))}
      

    </ScrollView>
  );
}