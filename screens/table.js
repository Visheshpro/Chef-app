import * as React from 'react';
import { Text, View, StyleSheet,FlatList,TouchableOpacity } from 'react-native';
import firebase from 'firebase'

export default class Table extends React.Component{

  constructor(){
    super()
    this.state={
      table1: []
    }
  }

fetchTable1 = async()=>{
  this.setState({table1:[]})
  await firebase.firestore().collection('table1').get().then((resp)=>{
    resp.docs.map((memb)=>{
this.setState({table1:[...this.state.table1,memb.data()]})
    })
  })
}

componentDidMount(){
  this.fetchTable1()
}

removeTable = (food) =>{
  firebase.firestore().collection('table1').doc(food).delete()
  this.fetchTable1()
}

  render(){
    console.log(this.state.table1)
    return(
      <View>
      <Text style={{alignSelf:'center',marginBottom:30,fontSize:30,fontWeight:500}}>Orders</Text>
      <FlatList keyExtractor={(item,index)=>{index.toString()}} data={this.state.table1} renderItem={({item})=>{
        return(
          <View>
          <View style={{flexDirection:"row",alignSelf:'center',backgroundColor:'white',padding:30,borderRadius:10}}>
          <Text style={{fontSize:20}}>{item.foodName}</Text>
          <TouchableOpacity style={{borderWidth:1,marginLeft:10,backgroundColor:'#ffc520',
            paddingTop:2,
            paddingBottom:2,
            paddingHorizontal:4,
            borderRadius:3}} onPress={()=>this.removeTable(item.foodName)}>
      <Text>Remove</Text>
      </TouchableOpacity>
          </View>
          </View>
        )
      }} />
      </View>
    )
  }
}