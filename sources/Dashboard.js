import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';


let MainBoard = () =>{
    return(
      <View style={styles.container,{
          backgroundColor:'yellow', 
          marginTop:100, 
          marginRight:50, 
          marginLeft:50}}>
         <View style={styles.row}>
            <View style={styles.even}/>
            <View style={styles.odd}/>
            <View style={styles.even}/>
            <View style={styles.odd}/>
            <View style={styles.even}/>
            <View style={styles.odd}/>
            <View style={styles.even}/>
            <View style={styles.odd}/>
          </View>
          <View style={styles.row}>
            <View style={styles.odd}/>
            <View style={styles.even}/>
            <View style={styles.odd}/>
            <View style={styles.even}/>
            <View style={styles.odd}/>
            <View style={styles.even}/>
            <View style={styles.odd}/>
            <View style={styles.even}/>
          </View>
          <View style={styles.row}>
            <View style={styles.even}/>
            <View style={styles.odd}/>
            <View style={styles.even}/>
            <View style={styles.odd}/>
            <View style={styles.even}/>
            <View style={styles.odd}/>
            <View style={styles.even}/>
            <View style={styles.odd}/>
          </View>
          <View style={styles.row}>
            <View style={styles.odd}/>
            <View style={styles.even}/>
            <View style={styles.odd}/>
            <View style={styles.even}/>
            <View style={styles.odd}/>
            <View style={styles.even}/>
            <View style={styles.odd}/>
            <View style={styles.even}/>
          </View>
          <View style={styles.row}>
            <View style={styles.even}/>
            <View style={styles.odd}/>
            <View style={styles.even}/>
            <View style={styles.odd}/>
            <View style={styles.even}/>
            <View style={styles.odd}/>
            <View style={styles.even}/>
            <View style={styles.odd}/>
          </View>
          <View style={styles.row}>
            <View style={styles.odd}/>
            <View style={styles.even}/>
            <View style={styles.odd}/>
            <View style={styles.even}/>
            <View style={styles.odd}/>
            <View style={styles.even}/>
            <View style={styles.odd}/>
            <View style={styles.even}/>
          </View>
          <View style={styles.row}>
            <View style={styles.even}/>
            <View style={styles.odd}/>
            <View style={styles.even}/>
            <View style={styles.odd}/>
            <View style={styles.even}/>
            <View style={styles.odd}/>
            <View style={styles.even}/>
            <View style={styles.odd}/>
          </View>
          <View style={styles.row}>
            <View style={styles.odd}/>
            <View style={styles.even}/>
            <View style={styles.odd}/>
            <View style={styles.even}/>
            <View style={styles.odd}/>
            <View style={styles.even}/>
            <View style={styles.odd}/>
            <View style={styles.even}/>
          </View>
      </View>
    );
};
  
  const styles = StyleSheet.create({    
    odd: {
        height:30,
        width:30, 
        backgroundColor: 'wheat', 
        margin:1,
    },
    even: {
        height:30,
        width:30, 
        backgroundColor: 'brown', 
        margin:1,
    },
    row:{
        flexDirection: "row", 
        margin:3,
        alignContent:'center',
        justifyContent: 'center'
    },
  });

  export default MainBoard;