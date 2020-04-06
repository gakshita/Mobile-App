import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { Button } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";

export default class Add_picture extends React.Component {
  state = {
    uri: "",

    upload: false,
    icon: "camera",
  };

  delete = () => {
    console.log("delete ===========================")
    this.setState({
      upload: false,
      uri: "",
      icon: "camera",
    });
  };

  openImagePickerAsync = async () => {
    console.log("hiiii===========================")
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    this.setState({
      upload: true,
      uri: pickerResult.uri,
      icon: "delete-empty",
    });
  };
  render() {
    return (
      <View
        style={{
          backgroundColor: "#a4e1ea",
          width: "80%",
          height: "20%",
          margin: 10,
          position: "relative",
        }}
      >
        <Image
          source={{ uri: `${this.state.uri}` }}
          style={{ width: "80%", height: "100%" }}
        ></Image>
        <TouchableOpacity
          style={{
            backgroundColor: "#ffffff69",
            width: "15%",
            height: "100%",
            position: "absolute",
            alignSelf: "flex-end",
          }}
          // onPress={this.openImagePickerAsync}
          onPress={
           ( this.state.upload ?this.delete  : this.openImagePickerAsync)
          }
        >
          <Button icon={this.state.icon} color="black"></Button>
        </TouchableOpacity>
      </View>
    );
  }
}
