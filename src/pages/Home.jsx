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
// import {renderStory, renderFeed} from '../components/home';
import FeedSettingModal from '../components/modal/FeedSettingModal';
import {API} from '../apis/apis';

import MoreIcon from '../assets/icons/more.svg';
import Heart from '../assets/icons/heart.png';
import Comment from '../assets/icons/chat.png';
import Send from '../assets/icons/send.png';
import Bookmark from '../assets/icons/bookmark.png';

const renderStory = ({item, index}) => {
  return (
    <View style={{alignItems: 'center', marginRight: 10}}>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: '#9a9a9a',
          borderRadius: 30,
          marginBottom: 5,
        }}
      />
      <Text
        numberOfLines={1}
        style={{
          width: 45,
          fontSize: 12,
        }}>
        {item.account_name}
      </Text>
    </View>
  );
};

const Home = ({navigation, route}) => {
  const {width, height} = useWindowDimensions();
  const [isSetting, setIsSetting] = useState(false);

  const renderFeed = ({item, index}) => {
    return (
      <View style={{marginBottom: 30}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 15,
          }}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: 35,
                height: 35,
                backgroundColor: '#9a9a9a',
                borderRadius: 30,
                marginRight: 5,
              }}
            />
            <Text
              numberOfLines={1}
              style={{
                fontSize: 14,
                fontWeight: 600,
              }}>
              {item.account_name}
            </Text>
          </View>
          <TouchableOpacity onPress={() => setIsSetting(true)}>
            <MoreIcon width={20} height={20} />
          </TouchableOpacity>
        </View>
        <View
          style={{height: 350, backgroundColor: '#eaeaea', marginBottom: 8}}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 5,
          }}>
          <View
            style={{
              width: 100,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Image source={Heart} style={{width: 24, height: 24}} />
            <Image source={Comment} style={{width: 28, height: 28}} />
            <Image source={Send} style={{width: 22, height: 22}} />
          </View>
          <Image source={Bookmark} style={{width: 24, height: 24}} />
        </View>
        <Text style={{fontSize: 14, fontWeight: 600, marginBottom: 5}}>
          좋아요 2,150개
        </Text>
        <Text style={{marginBottom: 5}}>
          <Text style={{fontSize: 14, fontWeight: 600, marginRight: 5}}>
            fashionandstyle.official{'  '}
          </Text>
          춘식러버는 바로 맥날로 달려가세요. 새로 출시된 고구마프라이 춘식러버는
          바로 맥날로 달려가세요. 새로 출시된 고구마프라이춘식러버는 바로 맥날로
          달려가세요. 새로 출시된 고구마프라이
        </Text>
        <View style={{marginBottom: 5}}>
          <Text style={{fontSize: 14, color: '#7a7a7a'}}>
            댓글 {item.comments.length}개 모두 보기
          </Text>
        </View>
        {/* <View style={{marginBottom: 5}}>
          {item?.comments.map(el => (
            <View
              key={el.id}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View></View>
              <Image source={Heart} style={{width: 18, height: 18}} />
            </View>
          ))}
        </View> */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 50,
              backgroundColor: '#6a6a6a',
              marginRight: 5,
            }}
          />
          <View>
            <Text style={{fontSize: 13, color: '#7a7a7a'}}>댓글 달기...</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 16,
          paddingVertical: 12,
          backgroundColor: '#fff',
        }}>
        <View style={{alignItems: 'center', marginRight: 'auto'}}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#000'}}>
            Instagram
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            flexDirection: 'row',
            marginLeft: 'auto',
            gap: 8,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ChatList')}
            style={{
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              // borderRadius: 40,
              // backgroundColor: '#5755FE',
            }}>
            <Image source={Send} style={{width: 26, height: 26}} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flex: 1}}>
        <FlatList
          ListHeaderComponent={
            <View>
              <View style={{paddingLeft: 16, paddingVertical: 12}}>
                <FlatList
                  data={dummy_story_data}
                  renderItem={renderStory}
                  keyExtractor={item => item.id.toString()}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </View>
          }
          data={[]}
          renderItem={<></>}
          ListFooterComponent={
            <View
              style={{
                justifyContent: 'space-between',
                paddingHorizontal: 16,
                paddingTop: 30,
              }}>
              <FlatList
                data={dummy_feed_data}
                renderItem={renderFeed}
                keyExtractor={item => item.id.toString()}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          }
        />
        {/* <ScrollView>
          <View>
            <View style={{paddingLeft: 16, paddingVertical: 12}}>
              <FlatList
                data={dummy_story_data}
                renderItem={renderStory}
                keyExtractor={item => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              paddingHorizontal: 16,
              paddingTop: 30,
            }}>
            <FlatList
              data={dummy_feed_data}
              renderItem={renderFeed}
              keyExtractor={item => item.id.toString()}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ScrollView> */}
      </View>
      <FeedSettingModal isVisible={isSetting} setIsVisible={setIsSetting} />
    </SafeAreaView>
  );
};

const dummy_story_data = [
  {id: 1, account_name: 'judy_jhyun', img: ''},
  {id: 2, account_name: 'judy_jhyun', img: ''},
  {id: 3, account_name: 'judy_jhyun', img: ''},
  {id: 4, account_name: 'judy_jhyun', img: ''},
  {id: 5, account_name: 'judy_jhyun', img: ''},
  {id: 6, account_name: 'judy_jhyun', img: ''},
  {id: 7, account_name: 'judy_jhyun', img: ''},
  {id: 8, account_name: 'judy_jhyun', img: ''},
];

const dummy_feed_data = [
  {
    id: 1,
    account_name: 'judy_jhyun',
    img: '',
    createdTime: '2024-04-01 15:00',
    comments: [
      {
        id: 1,
        account_name: 'jamie_is_here',
        comment: '고구마후라이 완죠니 내취향',
      },
      {
        id: 2,
        account_name: 'iwantto_quit',
        comment: '고콜라컵 존귀이...소장하구 싶은 귀여움',
      },
    ],
  },
  {
    id: 2,
    account_name: 'judy_jhyun',
    img: '',
    createdTime: '2024-04-01 15:00',
    comments: [],
  },
  {
    id: 3,
    account_name: 'judy_jhyun',
    img: '',
    createdTime: '2024-04-01 15:00',
    comments: [],
  },
  {
    id: 4,
    account_name: 'judy_jhyun',
    img: '',
    createdTime: '2024-04-01 15:00',
    comments: [],
  },
  {
    id: 5,
    account_name: 'judy_jhyun',
    img: '',
    createdTime: '2024-04-01 15:00',
    comments: [],
  },
  {
    id: 6,
    account_name: 'judy_jhyun',
    img: '',
    createdTime: '2024-04-01 15:00',
    comments: [],
  },
];
export default Home;
