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
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';
import {API} from '../apis/apis';

const Search = ({navigation, route}) => {
  // const {width, height} = useWindowDimensions();
  const numColumns = 3;
  const windowWidth = Dimensions.get('window').width;
  const [searchImages, setSearchImages] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);

  const renderSearchImages = ({item, index}) => {
    return (
      <View
        style={{
          width: '32%',
          height: (windowWidth - 40) / 3,
          backgroundColor: '#f0f0f0',
        }}>
        {}
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <FlatList
        ListHeaderComponent={
          <View
            style={{paddingHorizontal: 15, marginTop: 20, marginBottom: 20}}>
            <TextInput
              numberOfLines={1}
              placeholder="검색"
              style={{padding: 10, borderRadius: 8, backgroundColor: '#f0f0f0'}}
            />
          </View>
        }
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginBottom: 8,
          paddingHorizontal: 15,
        }}
        data={searchImages}
        keyExtractor={(item, i) => i}
        renderItem={renderSearchImages}
        numColumns={numColumns}
        // onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
        ListFooterComponent={<></>}
      />
    </SafeAreaView>
  );
};

export default Search;
