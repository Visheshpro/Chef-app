import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import firebase from 'firebase';

export default class AddRecipe extends React.Component {
  constructor() {
    super();
    this.state = {
      previewImage:
        '',
      foodName: '',
      ingredients: '',
      price: 0,
    };
  }

  addFood = async() => {
    await firebase.firestore().collection('food').doc(this.state.foodName).set({
      previewImage: this.state.previewImage,
      foodName: this.state.foodName,
      price: this.state.price,
      ingredients: this.state.ingredients,
    });
    alert('Food Added Successfuly');
    this.setState({
      previewImage: '',
      foodName: '',
      ingredients: '',
      price: 0,
    });
  };

  render() {
    return (
      <View>
      <Text style={{alignSelf:'center', fontSize:25, fontWeight:500,marginTop:10}}>Add Recipe</Text>
        <View style={{backgroundColor:"white", width:'90%',alignSelf:'center', marginTop:20,borderRadius:8}}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: this.state.previewImage }}
        />
        <TextInput
          style={{ borderWidth: 1, marginTop: 10,width:'75%', alignSelf:'center' }}
          placeholder={'Image Link'}
          value={this.state.previewImage}
          onChangeText={(text) => {
            this.setState({ previewImage: text });
          }}
        />
        <TextInput
          style={{ borderWidth: 1, marginTop: 10,width:'75%', alignSelf:'center' }}
          placeholder={'Food Name'}
          value={this.state.foodName}
          onChangeText={(text) => {
            this.setState({ foodName: text });
          }}
        />
        <TextInput
          style={{ borderWidth: 1, marginTop: 10,width:'75%', alignSelf:'center' }}
          placeholder={'Food Ingredients'}
          value={this.state.ingredients}
          onChangeText={(text) => {
            this.setState({ ingredients: text });
          }}
        />
        <TextInput
          style={{ borderWidth: 1, marginTop: 10,width:'75%', alignSelf:'center' }}
          placeholder={'Food Price'}
          value={this.state.price}
          onChangeText={(text) => {
            this.setState({ price: text });
          }}
        />
        <TouchableOpacity
          style={{
            marginTop: 10,
            alignSelf: 'center',
            backgroundColor: 'grey',
            marginBottom:10,
            backgroundColor:'#ffc520',
            paddingTop:2,
            paddingBottom:2,
            paddingHorizontal:4,
            borderRadius:3
          }}
          onPress={this.addFood}>
          <Text>ADD FOOD</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}
