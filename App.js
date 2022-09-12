import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { Button, StyleSheet, Text, View,TextInput } from "react-native";

export default function App() {
  const [displayText, setdisplayText] = useState("");
  const [ListOfTasks, setListOfTasks] = useState([]);
  const textInput=useRef();
  const clickHandler = () => {
    if(displayText=="") return;
    ListOfTasks.push(displayText);
    setdisplayText("");
  };

  const ChangeHandler=(e)=>{
    setdisplayText(e.nativeEvent.text);
  }

  return (
    <View >
      <View style={styles.container}>
        <TextInput style={styles.textInput}  onChange={(e)=>ChangeHandler(e)} value={displayText} placeholder="Your Courses Goal" />
        <Button onPress={clickHandler} title="Add Goals" />
      </View>
      <View style={styles.container}>
      {
        ListOfTasks.map((item,index)=>{
          return(
            <Text>{item}</Text>
          )
        })
      }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput:{
    borderWidth:1,
    paddingHorizontal:10,
    marginBottom:10
  },
  container:{
    marginTop:50,
    marginHorizontal:20,
    padding:10,
    borderWidth:1
  }
});
