import React from "react";
import { View, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import My_page from "./nestedpage";

export default class C1 extends React.Component {
  state = {
    searchQuery: "",
  };

  _onChangeSearch = (query) => this.setState({ searchQuery: query });
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <Searchbar
          placeholder="Search"
          onChangeText={this._onChangeSearch}
          value={this.state.searchQuery}
        />

        <My_page />
      </View>
    );
  }
}
