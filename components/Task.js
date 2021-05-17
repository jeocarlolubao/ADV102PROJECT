import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Task = (props) => {
  return (
    // <View style={styles.item}>
    //   <View style={styles.itemLeft}>
    //     <View style={styles.square}></View>
    //     <Text style={styles.itemText}> {props.text} test 123123</Text>
    //   </View>
    // </View>
    <View style={styles.taskboxmargin}>
    <View style={styles.taskbox}>
      <Text style={styles.tasktext}>{props.text}</Text>
            
    </View>

    </View>
  );
};

const styles = StyleSheet.create({
  taskbox: {
    
    backgroundColor: "#FFF",
    borderColor: "#0085FF",
    borderWidth: 3, 
    width: 380,
    height: 70,
    marginTop: 30,
    borderRadius: 10,
  },  
  tasktext:{
    marginTop: 18,
    marginLeft: 40,
    fontSize: 20
  },
  taskboxmargin:{
    marginTop: -20
    
  },
  // item: {
  //   backgroundColor: "#000000",
  //   padding: 15,
  //   borderRadius: 10,
  //   borderWidth: 3,
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   marginBottom: 20,
  //   marginLeft: 2000,
  //   width: 300,
  //   height: 90,
  // },
  // itemLeft: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   flexWrap: "wrap",
  // },
  // square: {
  //   width: 24,
  //   height: 24,
  //   backgroundColor: "#55BCF6",
  //   opacity: 0.4,
  //   borderRadius: 5,
  //   marginRight: 15,
  // },
  // itemText: {
  //   maxWidth: "100%",
  // },
});

export default Task;
