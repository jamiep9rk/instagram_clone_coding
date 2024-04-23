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
import MoreIcon from '../../assets/icons/more.svg';
import Heart from '../../assets/icons/heart.png';
import Comment from '../../assets/icons/chat.png';
import Send from '../../assets/icons/send.png';
import Bookmark from '../../assets/icons/bookmark.png';

export const renderStory = ({item, index}) => {
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

export const renderFeed = ({item, index}) => {
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
        <MoreIcon width={20} height={20} />
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
