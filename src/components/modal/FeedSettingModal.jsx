import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';
import Modal from 'react-native-modal';

const FeedSettingModal = ({isVisible, setIsVisible}) => {
  return (
    <Modal
      useNativeDriver
      hideModalContentWhileAnimating
      animationType={'slide'}
      animationIn="zoomIn"
      animationInTiming={200}
      animationOut="fadeOut"
      animationOutTiming={200}
      isVisible={isVisible}
      backdropOpacity={0.6}
      onBackdropPress={() => setIsVisible(false)}
      style={{
        width: '100%',
        margin: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
      <Animated.View style={{width: '100%'}}>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            padding: 15,
            borderRadius: 10,
            backgroundColor: '#fff',
            paddingBottom: 50,
          }}>
          <View
            style={{
              width: 40,
              height: 5,
              justifyContent: 'center',
              backgroundColor: '#eaeaea',
              borderRadius: 10,
              marginBottom: 20,
            }}
          />
          <View
            style={{
              width: '100%',
              backgroundColor: '#eaeaea',
              borderRadius: 10,
            }}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setIsVisible(false)}>
              <View
                style={{
                  height: 50,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 15,
                }}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 50,
                    backgroundColor: '#6a6a6a',
                    marginRight: 10,
                  }}
                />
                <Text>이 계정 정보</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setIsVisible(false)}>
              <View
                style={{
                  height: 50,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 15,
                }}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 50,
                    backgroundColor: '#6a6a6a',
                    marginRight: 10,
                  }}
                />
                <Text>이 게시물이 표시되는 이유</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setIsVisible(false)}>
              <View
                style={{
                  height: 50,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 15,
                }}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 50,
                    backgroundColor: '#6a6a6a',
                    marginRight: 10,
                  }}
                />
                <Text>숨기기</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setIsVisible(false)}>
              <View
                style={{
                  height: 50,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 15,
                }}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 50,
                    backgroundColor: '#6a6a6a',
                    marginRight: 10,
                  }}
                />
                <Text>신고</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </Modal>
  );
};

export default FeedSettingModal;
