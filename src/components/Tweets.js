import React from "react";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";

const Tabs = ({children}) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        padding: 8,
      }}>
      {children}
    </View>
  );
};

const Tab = ({title}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        Alert.alert("You pressed " + title);
      }}
      style={{
        padding: 8,
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.5)",
        flex: 1,
      }}>
      <Text
        style={{
          textAlign: "center",
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const Tweet = ({user, tweetText, tweetDate}) => {
  return (
    <Pressable
      style={{
        display: "flex",
        flexDirection: "row",
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0,0,0,0.3)",
      }}>
      <Image
        style={{
          width: 64,
          height: 64,
          borderRadius: 32,
          backgroundColor: "rgba(0,0,0,0.3)",
          marginRight: 8,
        }}
        source={{
          uri: user.imageUrl,
        }}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}>
        <View style={{display: "flex", flexDirection: "row", marginBottom: 8}}>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 16,
            }}>{`${user.firstName} ${user.lastName}`}</Text>
          <Text style={{marginLeft: 4}}>{user.username}</Text>
          <Text style={{marginLeft: 16}}>{tweetDate}</Text>
        </View>
        <View>
          <Text>{tweetText}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const Tweets = () => {
  return (
    <View>
      <Tabs>
        <Tab title="Tweet" />
        <Tab title="Replys" />
        <Tab title="Likes" />
      </Tabs>
      <Tweet
        user={{
          firstName: "Enes",
          lastName: "Ozturk",
          username: "@enesozt_",
          imageUrl: "https://picsum.photos/200/200",
        }}
        tweetDate="1 hour ago"
        tweetText="Kodluyoruz React Native Bootcamp :)"
      />
      <Tweet
        user={{
          firstName: "Enes",
          lastName: "Ozturk",
          username: "@enesozt_",
          imageUrl: "https://picsum.photos/200/200",
        }}
        tweetDate="1 hour ago"
        tweetText="Hello!! :p :)"
      />
    </View>
  );
};

export default Tweets;
