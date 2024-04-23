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

const Calendar = ({navigation, route}) => {
  const {width, height} = useWindowDimensions();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{}}>
        <Text>Calendar</Text>
      </View>
    </SafeAreaView>
  );
};

export default Calendar;
