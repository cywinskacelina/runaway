import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  SectionList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import TeamCard from "../components/MemberInfo";
// about us page
export default function AboutUs() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.about}>
          <Text style={styles.title}>About Us</Text>
          <Text style={styles.text}>
            Runaway is a social entrepreneurial venture that aims to spread
            mental health awareness and make the world happier. Currently we're
            working on 3 modules:
          </Text>
          <Text style={styles.text}>
            1. Hosting events and workshops focused around mental health.{" "}
          </Text>
          <Text style={styles.text}>
            2. Our mobile app that will allow users to anonymously talk to our
            highly skilled and monitored set of volunteers from across the
            world.{" "}
          </Text>
          <Text style={styles.text}>
            3. A carefully and passionately curated positivity zone that
            provides users with happy art, quotes, music, inspiring stories,
            etc.{" "}
          </Text>
          <TouchableOpacity activeOpacity={0.9} style={styles.button}>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
              Visit Our Site
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.team} activeOpacity={0.9}>
          <Text style={styles.subtitle}>Team</Text>
          <Text style={{ fontSize: 18, color: "#2E5F85", paddingBottom: 20 }}>
            Meet the team behind Runaway.
          </Text>
          <View style={{ alignItems: "center", width: "100%" }}>
            <Text style={styles.teamTitle}>Founder</Text>
            <TeamCard
              name="Satvik Sethi"
              role="Chief Executive Officer"
            ></TeamCard>
            <Text style={styles.teamTitle}>Marketing Team</Text>
            <TeamCard name="Danika Jensen" role="Marketing Advisor"></TeamCard>
            <TeamCard
              name="Megan Reilly"
              role="Director of Marketing"
            ></TeamCard>

            <Text style={styles.teamTitle}>Content & Media Team</Text>
            <TeamCard
              name="Rebecca Gorman"
              role="Director of Content & Media"
            ></TeamCard>
            <TeamCard name="Jacob West" role="Blogger"></TeamCard>
            <TeamCard name="Willis Tang" role="Blogger"></TeamCard>
            <TeamCard name="Jayant Singhal" role="Blogger"></TeamCard>
            <TeamCard name="Maggie Dunsford" role="Blogger"></TeamCard>
            <Text style={styles.teamTitle}>Practicum Team</Text>
            <TeamCard name="Will Hunter" role="Practicum Advisor"></TeamCard>
            <TeamCard
              name="Rithwik Nichenametla"
              role="Project Manager"
            ></TeamCard>
            <TeamCard name="Pranaya Jajoo" role="Project Manager"></TeamCard>
            <TeamCard
              name="Dybe Fredy Mwaisyange"
              role="Project Manager"
            ></TeamCard>
            <TeamCard name="Sandy Lee" role="Product Designer"></TeamCard>
            <TeamCard name="Cody Um" role="Lead Engineer"></TeamCard>
            <TeamCard name="Yasir Azizi" role="Front-end Developer"></TeamCard>
            <TeamCard name="Alex Chao" role="Front-end Developer"></TeamCard>
            <TeamCard name="William Maue" role="Front-end Developer"></TeamCard>
            <TeamCard name="Ethan Ma" role="Front-end Developer"></TeamCard>
            <TeamCard name="Rohan Sidhu" role="Back-end Developer"></TeamCard>
            <TeamCard name="Cedric Blaise" role="Back-end Developer"></TeamCard>
            <TeamCard name="Dongjoo Lee" role="Back-end Developer"></TeamCard>
          </View>
        </View>
        <TouchableOpacity style={styles.partners} activeOpacity={0.9}>
          <Text style={styles.pSubtitle}>Our Partners</Text>
          <Ionicons
            name="ios-arrow-forward"
            size={30}
            color="#2E5F85"
            style={{ position: "absolute", right: 20 }}
          />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontFamily: "System",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: windowW * 0.08,
    lineHeight: 30,
    color: "#fff",
    paddingBottom: 10,
    textDecorationLine: "underline",
  },
  subtitle: {
    fontFamily: "System",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: windowW * 0.08,
    lineHeight: 30,
    color: "#2E5F85",
    paddingBottom: 10,
    textDecorationLine: "underline",
  },
  pSubtitle: {
    fontFamily: "System",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: windowW * 0.07,
    lineHeight: 40,
    color: "#2E5F85",
  },
  about: {
    padding: 20,
    backgroundColor: "#2E5F85",
  },
  text: {
    color: "#fff",
    paddingBottom: 10,
    fontSize: 18,
  },
  team: {
    backgroundColor: "#E3F1FC",
    width: "100%",
    padding: 20,
    flexDirection: "column",
    alignItems: "baseline",
  },
  button: {
    backgroundColor: "#FF9EDA",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  partners: {
    padding: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
  },
  teamTitle: {
    fontSize: 24,
    color: "#2E5F85",
    paddingVertical: 10,
  },
});