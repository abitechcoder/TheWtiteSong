import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';

import CommunityScreen from '../screens/CommunityScreen';

const Stack = createStackNavigator();

const CommunityStack = ({navigation}) => (
  <Stack.Navigator
    initialRouteName="CommunityPage"
    screenOptions={{
      headerTitle: 'COMMUNITY CONNECTIONS',

      headerStyle: {
        backgroundColor: '#AE1F1F',
        height: 70,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
      },

      headerLeft: () => (
        <Ionicons
          name="ios-menu"
          color={'#fff'}
          style={{margin: 10}}
          size={25}
          color={'#FFF'}
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),

      headerRight: () => (
        <Ionicons
          name="ellipsis-vertical-outline"
          color={'#fff'}
          style={{margin: 10}}
          size={25}
          color={'#FFF'}
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
    }}>
    <Stack.Screen name="CommunityPage" component={CommunityScreen} />
  </Stack.Navigator>
);

export default CommunityStack;
