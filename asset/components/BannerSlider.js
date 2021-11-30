import React from 'react';
import {View, Image, Text} from 'react-native';

export default function BannerSlider({data}) {
  return (
    <View>
      <Text>{data.Text} </Text>
    </View>
  );
}