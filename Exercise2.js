import React from 'react';
import {Button} from 'react-native';

import React from "react";
import { View, Button } from "react-native";

export default () => {
  return (
    <View>
      <Button title="Button 1" onPress={() => alert("hello!")} />
    </View>
  );
};
