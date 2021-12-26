import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Image, View } from 'react-native';
import Home from './src/components/screens/Home';
import Search from './src/components/screens/Search';
import Reels from './src/components/screens/Reels';
import Market from './src/components/screens/Market';
import Profile from './src/components/screens/Profile';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const IconBottom = (props) => {
    const { color, focused } = props.data
    let colorSelected = focused ? color : 'grey'
    return (
      <View>
        <Image source={props.image} style={{ width: 25, height: 25, tintColor: colorSelected }} />
      </View>
    )
  }

  const bottomTabScreen = () => {
    return (
      <Tab.Navigator tabBarOptions={{
        activeTintColor: '#000000',
      }}
      screenOptions={{ headerShown: false }}
      >
        <Tab.Screen name="Home" component={Home}
          options={{
            title: "",
            tabBarIcon: (props) => (
              <IconBottom data={props} image={require('./src/storage/images/home.png')} />
            )
          }}
        />
        <Tab.Screen name="Search" component={Search}
          options={{
            title: "",
            tabBarIcon: (props) => (
              <IconBottom data={props} image={require('./src/storage/images/search.png')} />
            )
          }} />
        <Tab.Screen name="Reels" component={Reels}
          options={{
            title: "",
            tabBarIcon: (props) => (
              <IconBottom data={props} image={require('./src/storage/images/video.png')} />
            )
          }} />
        <Tab.Screen name="Market" component={Market}
          options={{
            title: "",
            tabBarIcon: (props) => (
              <IconBottom data={props} image={require('./src/storage/images/shop.png')} />
            )
          }} />
        <Tab.Screen name="Profile" component={Profile}
          options={{
            title: "",
            tabBarIcon: (props) => (
              <IconBottom data={props} image={require('./src/storage/images/user.png')} />
            )
          }} />
      </Tab.Navigator>
    )
  }


  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Button" component={bottomTabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
