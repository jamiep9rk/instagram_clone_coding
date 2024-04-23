import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import Splash from '../pages/Splash';
// import Login from '../pages/Login';
import Home from '../pages/Home';
// import SignUp from '../pages/SignUp';
// import ChatList from '../pages/ChatList';
// import Chat from '../pages/Chat';
// import Upload from '../pages/Upload';
// import Search from '../pages/Search';
// import MyPage from '../pages/MyPage';
import BottomTab from '../components/common/BottomTab';
// import DatePicker from '../pages/DatePicker';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Router() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTab" component={BottomTab} />
      {/* <Stack.Screen name='Splash' component={Splash} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='SignUp' component={SignUp} />

                <Stack.Screen name='ChatList' component={ChatList} />
                <Stack.Screen name='Chat' component={Chat} /> */}
    </Stack.Navigator>
  );
}

export default Router;
