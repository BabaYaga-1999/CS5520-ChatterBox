import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import ChatsScreen from '../screens/ChatsScreen';
import FriendsScreen from '../screens/FriendsScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';
import ChatScreen from '../screens/ChatScreen';
import { TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Styles from '../styles/Styles';

const Tab = createBottomTabNavigator();
const FriendStack = createStackNavigator();

const FriendStackNavigator = () => {
  return (
    <FriendStack.Navigator>
      <FriendStack.Screen 
        name="Friends List" 
        component={FriendsScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Search Friend')}>
              <View style={{ marginRight: 15 }}>
                <Entypo name="plus" size={24} color="black" />
              </View>
            </TouchableOpacity>
          ),
        })}
      />
      <FriendStack.Screen name="Search Friend" component={SearchScreen} />
      <FriendStack.Screen name="Chat" component={ChatScreen} />
    </FriendStack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
              case 'Chats':
                return <Ionicons name="chatbubble-ellipses" size={size} color={color} />;
              case 'Friends':
                return <Ionicons name="people" size={size} color={color} />;
              case 'Discover':
                return <Ionicons name="compass" size={size} color={color} />;
              case 'Profile':
                return <Ionicons name="person-circle" size={size} color={color} />;
              default:
                return;
          }
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: Styles.tabBarLabel,
        headerTitleAlign: 'center',
        headerShown: route.name === 'Friends' ? false : true,
        // headerRight: () => (
        //   <TouchableOpacity onPress={() => navigation.navigate('Add Entry')}>
        //     <View style={{ marginRight: 15 }}>
        //       <Entypo name="plus" size={24} color="black" />
        //     </View>
        //   </TouchableOpacity>
        // ),
      })}
    >
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Friends" component={FriendStackNavigator} />
      <Tab.Screen name="Discover" component={DiscoverScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
