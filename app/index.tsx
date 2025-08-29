
import CardNote from "@/components/CardNote";
import { useState } from "react";
import { Button, ScrollView, Text, View, Platform } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Index() {

  const [content, setContent] = useState("");

  const handleChangeText = (text: string) => {
    setContent(text);
  };

  const handleSubmit = () => {
    if (Platform.OS === "android") {
      console.log("Android :", content);
    } else if (Platform.OS === "web") {
      console.log("Web :", content);
    } else {
      console.log("Other :", content);
    }
  };

  return (
    <ScrollView style={{ paddingTop: 20, paddingHorizontal: 20 }}>
      <Text>Notes</Text>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <TextInput
          style={{
            borderColor: "black",
            padding: 10,
            borderWidth: 1,
            width: "90%",
          }}
          onChangeText={handleChangeText}
        />
        {/* <TouchableOpacity
          onPress={() => console.log("present")}
          style={{
            backgroundColor: "#7ad6d7ff",
            padding: 10,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center"
          }}
        > */}
  <Button title="+" onPress={handleSubmit} />
        {/* </TouchableOpacity> */}
      </View>
      {/* <TouchableOpacity
        style={{
          borderColor: "black",
          borderWidth: 1,
          paddingHorizontal: 20,
          paddingVertical: 18,
          marginTop: 10
        }}
      >
      </TouchableOpacity> */}
      <CardNote
        content="Today Note's"
        onNavigate={() => console.log("navigate")}
        onDelete={() => console.log("delete")}
      />
    </ScrollView>
  );
}
