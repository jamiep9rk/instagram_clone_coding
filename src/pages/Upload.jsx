import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  FlatList,
  Alert,
  Modal,
  Pressable,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native';
import {API} from '../apis/apis';

const Upload = ({navigation, route}) => {
  const {width, height} = useWindowDimensions();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{}}>
        <Text>Upload</Text>
      </View>
    </SafeAreaView>
  );
};

export default Upload;
