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
  Dimensions,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native';
import {API} from '../apis/apis';

const MyPage = ({navigation, route}) => {
  const {width, height} = useWindowDimensions();
  const windowWidth = Dimensions.get('window').width;
  const numColumns = 3;
  const [myAccount, setMyAccount] = useState({
    account_name: 'judy_jhyun',
    profileImg: '',
    name: 'Jamie',
    introduction: '🔙📚 in 🇯🇵🇺🇸\n🔙✈️ in 🇧\n🇭🔛🖥 in 🇰🇷',
    highlightList: [
      {id: 1, title: 'HKG🇭🇰'},
      {id: 2, title: 'NZ🇵🇳'},
      {id: 3, title: 'AUS🇦🇺'},
      {id: 4, title: 'GF✈️'},
      {id: 5, title: 'HKG🇭🇰'},
      {id: 6, title: 'NZ🇵🇳'},
      {id: 7, title: 'AUS🇦🇺'},
      {id: 8, title: 'GF✈️'},
    ],
    postNum: 414,
    followerNum: 561,
    followedNum: 552,
    postList: [
      {id: 1, imgUrl: ''},
      {id: 2, imgUrl: ''},
      {id: 3, imgUrl: ''},
      {id: 4, imgUrl: ''},
      {id: 5, imgUrl: ''},
      {id: 6, imgUrl: ''},
      {id: 7, imgUrl: ''},
      {id: 8, imgUrl: ''},
      {id: 9, imgUrl: ''},
      {id: 10, imgUrl: ''},
    ],
  });

  const renderHighlight = (item, index) => {
    const {id, title} = item.item;
    return (
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            width: 55,
            height: 55,
            borderRadius: 30,
            backgroundColor: '#f0f0f0',
            marginRight: 15,
            marginBottom: 10,
          }}
        />
        <Text style={{width: 55, color: '#000', fontSize: 13}}>{title}</Text>
      </View>
    );
  };

  const renderPost = (item, index) => {
    const {id, imgUrl} = item.item;
    return (
      <View
        style={{
          width: '32%',
          height: (windowWidth - 60) / 3,
          backgroundColor: '#f0f0f0',
        }}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 20,
                borderBottomWidth: 1,
                borderColor: '#f0f0f0',
              }}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    width: 70,
                    height: 70,
                    backgroundColor: '#f0f0f0',
                    borderRadius: 50,
                    marginRight: 20,
                    marginBottom: 20,
                  }}
                />
                <View style={{height: 70, justifyContent: 'space-between'}}>
                  <Text style={{color: '#000', fontSize: 16}}>
                    {myAccount?.account_name}
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                      style={{
                        justifyContent: 'center',
                        backgroundColor: '#f0f0f0',
                        padding: 8,
                        borderRadius: 8,
                        marginRight: 8,
                      }}>
                      <Text>프로필 편집</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#f0f0f0',
                        padding: 8,
                        borderRadius: 8,
                      }}>
                      <Text>보관된 스토리 보기</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={{marginBottom: 20}}>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 14,
                    fontWeight: 600,
                    marginBottom: 5,
                  }}>
                  {myAccount?.name}
                </Text>
                <Text>{myAccount?.introduction}</Text>
              </View>
              <View>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={myAccount?.highlightList}
                  renderItem={renderHighlight}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 15,
                paddingHorizontal: 20,
                borderBottomWidth: 1,
                borderColor: '#f0f0f0',
              }}>
              <View style={{width: '25%', alignItems: 'center'}}>
                <Text style={{color: '#1C1E21', fontSize: 13}}>게시물</Text>
                <Text style={{fontWeight: 600, fontSize: 13}}>
                  {myAccount.postNum}
                </Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <Text style={{color: '#1C1E21', fontSize: 13}}>팔로워</Text>
                <Text style={{fontWeight: 600, fontSize: 13}}>
                  {myAccount.followerNum}
                </Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <Text style={{color: '#1C1E21', fontSize: 13}}>팔로우</Text>
                <Text style={{fontWeight: 600, fontSize: 13}}>
                  {myAccount.followedNum}
                </Text>
              </View>
            </View>
          </View>
        }
        ListFooterComponent={
          <View>
            <FlatList
              data={myAccount.postList}
              renderItem={renderPost}
              keyExtractor={(item, i) => i}
              scrollEnabled={false}
              numColumns={numColumns}
              columnWrapperStyle={{
                justifyContent: 'space-between',
                marginBottom: 8,
                // paddingHorizontal: 15,
              }}
            />
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default MyPage;
