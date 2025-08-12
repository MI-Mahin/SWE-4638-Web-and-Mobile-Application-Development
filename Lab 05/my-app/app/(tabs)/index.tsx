import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const posts = [
  {
    id: "1",
    name: "Hasin Mahtab",
    date: "12/08/2025",
    text: "Just finished building an amazing React Native app! The development experience was incredible.",
    likes: 47,
    dislikes: 2,
    comments: 1,
    avatar: { uri: "https://i.pravatar.cc/150?img=3" },
  },
  {
    id: "2",
    name: "Sadika Tabassum",
    date: "12/08/2025",
    text: "Beautiful sunset from my morning hike. Nature never fails to inspire!",
    likes: 74,
    dislikes: 1,
    comments: 2,
    avatar: { uri: "https://i.pravatar.cc/150?img=5" },
  },
];


export default function HomeScreen() {
  const renderPost = ({ item }: { item: typeof posts[0] }) => (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.cardHeader}>
        <LinearGradient
          colors={["#d16ba5", "#c777b9", "#ba83ca"]}
          style={styles.avatarContainer}
        >
          <Image source={item.avatar} style={styles.avatar} />
        </LinearGradient>
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
        <TouchableOpacity style={styles.closeBtn}>
          <Ionicons name="close" size={18} color="#888" />
        </TouchableOpacity>
      </View>

      {/* Post text */}
      <Text style={styles.text}>{item.text}</Text>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconRow}>
          <Ionicons name="heart-outline" size={20} color="#555" />
          <Text style={styles.iconText}>{item.likes}</Text>
        </View>
        <View style={styles.iconRow}>
          <Ionicons name="thumbs-down-outline" size={20} color="#555" />
          <Text style={styles.iconText}>{item.dislikes}</Text>
        </View>
        <View style={styles.iconRow}>
          <Ionicons name="chatbubble-outline" size={20} color="#555" />
          <Text style={styles.iconText}>{item.comments}</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="share-outline" size={20} color="#555" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.wrapper}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Feed</Text>
        <TouchableOpacity>
          <Ionicons name="refresh" size={22} color="#555" />
        </TouchableOpacity>
      </View>

      {/* Feed */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderPost}
        contentContainerStyle={{ paddingBottom: 70 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#eee",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    padding: 2,
    marginRight: 8,
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  name: {
    fontWeight: "bold",
    fontSize: 15,
  },
  date: {
    fontSize: 12,
    color: "#777",
  },
  closeBtn: {
    marginLeft: "auto",
  },
  text: {
    fontSize: 14,
    marginBottom: 8,
    color: "#333",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  iconText: {
    marginLeft: 4,
    fontSize: 14,
    color: "#333",
  },
  bottomTabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingVertical: 8,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  tab: {
    alignItems: "center",
  },
  tabText: {
    fontSize: 12,
    marginTop: 2,
    color: "#555",
  },
});
