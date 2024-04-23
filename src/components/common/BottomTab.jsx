import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../pages/Home';
import Search from '../../pages/Search';
import Upload from '../../pages/Upload';
import Calendar from '../../pages/Calendar';
import MyPage from '../../pages/MyPage';

import HomeIcon from '../../assets/icons/home.svg';
import MyPageIcon from '../../assets/icons/mypage.svg';
import AddCircle from '../../assets/icons/add_circle.svg';
import SearchIcon from '../../assets/icons/search.svg';
import CalendarIcon from '../../assets/icons/calender.svg';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs({navigation}) {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={{padding: 6}}>
          <HomeIcon width={28} height={28} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <View style={{padding: 6}}>
          <SearchIcon width={28} height={28} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Upload')}
        style={{
          width: 56,
          height: 56,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <AddCircle width={48} height={48} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
        <View style={{padding: 6}}>
          <CalendarIcon width={28} height={28} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MyPage')}>
        <View style={{padding: 6}}>
          <MyPageIcon width={28} height={28} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

function BottomTab({route}) {
  const renderTabs = props => <Tabs {...props} />;
  return (
    <Tab.Navigator tabBar={renderTabs} screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} initialParams={route} />
      <Tab.Screen name="Search" component={Search} />
      <Stack.Screen name="Upload" component={Upload} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="MyPage" component={MyPage} />
    </Tab.Navigator>
  );
}

export default BottomTab;

const styles = StyleSheet.create({
  tabContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 15,
    backgroundColor: '#fff',
    zIndex: 10,
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderColor: '#eaeaea',
  },
});
