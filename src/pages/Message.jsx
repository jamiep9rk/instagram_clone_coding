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
import Video from 'react-native-video';

const dummy_video_list = [
  {
    id: 1,
    user: 'judy_jamie',
    like: 100,
    comment: 200,
    description:
      "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    subtitle: 'By Blender Foundation',
    thumb: 'images/BigBuckBunny.jpg',
    title: 'Big Buck Bunny',
  },
  {
    id: 2,
    user: 'asdf_0000',
    like: 100,
    comment: 200,
    description: 'The first Blender Open Movie from 2006',
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    subtitle: 'By Blender Foundation',
    thumb: 'images/ElephantsDream.jpg',
    title: 'Elephant Dream',
  },
  {
    id: 3,
    user: 'judy_jamie',
    like: 100,
    comment: 200,
    description:
      'HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.',
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    subtitle: 'By Google',
    thumb: 'images/ForBiggerBlazes.jpg',
    title: 'For Bigger Blazes',
  },
  {
    id: 4,
    user: 'judy_jamie',
    like: 100,
    comment: 200,
    description:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    subtitle: 'By Google',
    thumb: 'images/ForBiggerEscapes.jpg',
    title: 'For Bigger Escape',
  },
  {
    id: 5,
    user: 'judy_jamie',
    like: 100,
    comment: 200,
    description:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.',
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    subtitle: 'By Google',
    thumb: 'images/ForBiggerFun.jpg',
    title: 'For Bigger Fun',
  },
];

const Message = ({navigation, route}) => {
  const {width, height} = useWindowDimensions();
  const [videoList, setVideoList] = useState(dummy_video_list);

  const renderVideo = (item, index) => {
    const {id, user, like, comment, description, url, subtitle, thumb, title} =
      item.item;
    return (
      <View>
        <Video
          source={{
            uri: url,
          }}
          resizeMode="cover"
          playInBackground={false}
          playWhenInactive={false}
          repeat={true}
          rate={1}
          muted={true}
          style={{width: width, height: height - 145}}
        />
        <View style={{position: 'absolute', bottom: 30}}>
          <View>
            <TouchableOpacity
              style={{flexDirection: 'row', paddingHorizontal: 15}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={{uri: 'https://picsum.photos/130/130'}}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 50,
                    marginRight: 8,
                  }}
                />
                <Text style={{color: '#fff', fontWeight: 600}}>{user}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1}}>
        <FlatList
          data={dummy_video_list}
          renderItem={renderVideo}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          snapToInterval={height - 145}
          snapToAlignment="start"
          decelerationRate={'fast'}
        />
      </View>
    </SafeAreaView>
  );
};

export default Message;
