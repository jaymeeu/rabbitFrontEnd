import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import {Picker} from '@react-native-picker/picker';

const App = () => {
  const {selectedValue, data, handleChange } = useState("java");
  return (
    <View style={styles.container}>
      <Picker
            selectedValue={selectedValue}
            style={{height: 50, width: 100}}
            onValueChange={handleChange}>
                {/* (itemValue, itemIndex) =>
                setSelectedValue(itemValue) */}
            <FlatList
                data={data}
                keyExtractor={item => item.id.toString()}
                renderItem = {(item) =>(
                    <Picker.Item label={item.name} value={item.name} />
                )}
            />
        </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});

export default App;