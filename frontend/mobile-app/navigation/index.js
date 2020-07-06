import React from "react";

import { StyleSheet, View, StatusBar, Dimensions } from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
  AntDesign,
} from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import EmergencyHotlinesScreen from "../screens/EmergencyHotline";
import ChatScreen from "../screens/ChatScreen";
import Events from "../screens/EventsDummy";
import Posts from "../screens/PostsDummy";
import Media from "../screens/MediaDummy";
import Feels from "../screens/Feels";
import Disclaimer from "../screens/Disclaimer";
import BlogFeed from "../screens/BlogFeed";
import BlogNav from "../navigation/BlogNav"
import Res from "../screens/ResourcesDummy"

import HomeScreen from "../screens/ResourceParts/Home";
import GeneralResources from "../screens/ResourceParts/generalResources";
import LGBTQIA from "../screens/ResourceParts/LGBTQIA";
import KidsAndTeens from "../screens/ResourceParts/kidsAndTeens";
import SubstanceRelatedDisorders from "../screens/ResourceParts/substanceRelatedDisorders";
import MoodRelatedDisorders from "../screens/ResourceParts/moodRelatedDisorders";
import AnxietyAndTraumaRelatedDisorders from "../screens/ResourceParts/anxietyAndTraumaRelatedDisorders";
import PsychoticDisorders from "../screens/ResourceParts/psychoticDisorders";
import DeliberateSelfHarm from "../screens/ResourceParts/deliberateSelfHarm";
import EatingDisorders from "../screens/ResourceParts/eatingDisorders";
import DomesticAndSexualViolence from "../screens/ResourceParts/domesticAndSexualViolence";
import Browser from "../screens/ResourceParts/Browser";

const BottomTabNavigation = createBottomTabNavigator();
const HomeTab = createMaterialTopTabNavigator();
const HomeStack = createStackNavigator();
const ChatStack = createStackNavigator();
const HotlineStack = createStackNavigator();

const BottomTab = ({ navigation }) => {
  return (
    <BottomTabNavigation.Navigator
      
      tabBarOptions={{
        showLabel: false,
        inactiveTintColor:"#ACDAFF",
        activeTintColor:"#2E5F85",
        style:{
          backgroundColor: "white",
          height:60,
          borderTopColor: "#ACDAFF",
        }
      }}
      
    >
      <BottomTabNavigation.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={33}
            />
          ),
        }}
      />
      <BottomTabNavigation.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarVisible: false,
          tabBarLabel: "Chat",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="chat-bubble-outline" color={color} size={28} />
          ),
        }}
      />
      <BottomTabNavigation.Screen
        name="Resources"
        component={HomeScreen}
        options={{
          tabBarLabel: "Resources",
          tabBarIcon: ({ color }) => (
            <Feather name="book-open" color={color} size={28} />
          ),
        }}
      />
      <BottomTabNavigation.Screen
        name="Events"
        component={Events}
        options={{
          tabBarLabel: "Events",
          tabBarIcon: ({ color }) => (
            <Feather name="calendar" color={color} size={28} />
          ),
        }}
      />
    </BottomTabNavigation.Navigator>
  );
};

const Chat = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" translucent={true} />
      <ChatStack.Navigator initialRouteName="Disclaimer">
        <ChatStack.Screen
          name="Disclaimer"
          component={Disclaimer}
          options={{ headerShown: false }}
        />
        <ChatStack.Screen
          name="Feels"
          component={Feels}
          options={{
            headerTitle: "How are you feeling?",
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: "#2E5F85",
            },
            headerLeft: () => (
              <HeaderBackButton
                labelVisible={false}
                onPress={() => {
                  navigation.navigate("Feed");
                }}
              />
            ),
          }}
        />

        <ChatStack.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            title: "Chat",
            headerTitleStyle: styles.headerTitleStyle,
            headerStyle: styles.headerStyle,
          }}
        />
        <ChatStack.Screen
          name="Resources"
          component={EmergencyHotlinesScreen}
          options={{
            title: "Emergency Resources",
            headerTitleStyle: styles.headerTitleStyle,
            headerStyle: styles.headerStyle,
          }}
        />
        {/* <ChatStack.Screen
          name="Home"
          component={HomeTabScreen}
          options={{
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 30,
              color: "#2E5F85",
            },
            headerLeft: (props) => (
              <MaterialIcons
                onPress={() => {}}
                name="face"
                color="#ACDAFF"
                size={25}
              />
            ),
          }}
        /> */}
      </ChatStack.Navigator>
    </>
  );
};

const FeedScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Feed"
        component={HomeTabScreen}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle:styles.headerTitleStyle,
          headerStyle: styles.headerStyle,

          headerRight: () => (
            <AntDesign
              style={{ paddingRight: 25 }}
              onPress={() => navigation.navigate("Resources")}
              name="exclamationcircleo"
              size={30}
              color="#FF9EDA"
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};
const HomeTabScreen = () => {
  return (
    <HomeTab.Navigator  tabBarOptions={{
      indicatorStyle:{backgroundColor:"#ACDAFF"},
      labelStyle:{color:"#2E5F85"}
      }}>
      <HomeTab.Screen
        name="Posts"
        component={BlogNav}
        options={{
          title: "Posts",
        }}
      />
      <HomeTab.Screen
        name="Media"
        component={Media}
        options={{
          title: "Media",
        }}
      />
    </HomeTab.Navigator>
  );
};
export default function myStack() {
  return (
    <>
      <NavigationContainer>
        <HotlineStack.Navigator>
          <HotlineStack.Screen
            name="Home"
            component={BottomTab}
            options={{
              headerShown: false,
            }}
          />
          <HotlineStack.Screen
            name="Resources"
            component={EmergencyHotlinesScreen}
            options={{
              title: "Emergency Resources",
              headerTitleStyle: styles.headerTitleStyle,
              headerStyle: styles.headerStyle,
            }}
          />
        </HotlineStack.Navigator>
      </NavigationContainer>
      {/* <View style={styles.homeIndicator}></View> */}
    </>
  );
}

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

const styles = StyleSheet.create({
  homeIndicator: {
    backgroundColor: "#FF9EDA",
    position: "absolute",
    height: 5,
    top: windowH - 13,
    left: windowW / 2 - 67.5,
    width: 135,
    borderRadius: 2.5,
  },
  profile: {
    position: "absolute",
    left: 15,
    top: 25,
    width: 32,
    height: 32,
  },
  headerTitleStyle: {
    fontFamily: "System",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: windowW*0.08,
    lineHeight: 30,
    color: "#2E5F85",
  },
  headerStyle: {
    borderBottomWidth: 0,
    shadowColor: "transparent",
    backgroundColor: "#fff",
    height:windowH/10,
  },
  profilePic: {
    borderLeftWidth: 10,
  },
  profileTitle: {
    color: "#ACDAFF",
    fontSize: 20,
  },
});

// const Profile = () => {
//   return (
//     <ProfileTab.Navigator>
//       <ProfileTab.Screen name="Events" component={ProfileEvents} />
//       <ProfileTab.Screen name="Likes" component={ProfileLikes} />
//     </ProfileTab.Navigator>
//   );
// };
