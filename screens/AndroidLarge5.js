import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const AndroidLarge5 = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.androidLarge5}
      resizeMode="cover"
      source={require("../assets/androidlarge5.png")}
    >
      <View style={[styles.iosstatusBarblack, styles.batteryIconPosition]}>
        <Image
          style={styles.bgIcon}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        <View style={[styles.rightSide, styles.sidePosition]}>
          <Image
            style={[styles.batteryIcon, styles.batteryIconPosition]}
            contentFit="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={styles.mobileSignalIcon}
            contentFit="cover"
            source={require("../assets/mobile-signal.png")}
          />
        </View>
        <Image
          style={[styles.leftSideIcon, styles.sidePosition]}
          contentFit="cover"
          source={require("../assets/left-side3.png")}
        />
      </View>
      <Image
        style={[
          styles.bf842adB0c2136846f444ea1Icon,
          styles.createAnAccountPosition,
        ]}
        contentFit="cover"
        source={require("../assets/223045685bf842adb0c2136846f444ea-11.png")}
      />
      <Text style={[styles.getStarted, styles.joinUsNowFlexBox]}>
        Get Started!
      </Text>
      <Text style={[styles.joinUsNow, styles.joinUsNowFlexBox]}>
        Join us now and start Your Journey.
      </Text>
      <Pressable
        style={[styles.cta, styles.ctaLayout]}
        onPress={() => navigation.navigate("AndroidLarge7")}
      />
      <View style={[styles.cta1, styles.ctaLayout]}>
        <Text style={[styles.signInTo, styles.signInToTypo]}>
          Sign in to your account
        </Text>
      </View>
      <View style={styles.createAnAccountWrapper}>
        <Text style={[styles.createAnAccount, styles.signInToTypo]}>
          Create an account
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  batteryIconPosition: {
    right: 0,
    top: 0,
    position: "absolute",
  },
  sidePosition: {
    top: 17,
    height: 11,
    position: "absolute",
  },
  createAnAccountPosition: {
    top: 0,
    position: "absolute",
  },
  joinUsNowFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBeige_100,
    fontFamily: FontFamily.rosarivoRegular,
    position: "absolute",
  },
  ctaLayout: {
    justifyContent: "center",
    height: 45,
    width: 302,
    borderRadius: Border.br_3xs,
    left: 29,
    alignItems: "center",
    position: "absolute",
  },
  signInToTypo: {
    textAlign: "center",
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  bgIcon: {
    top: -2,
    right: 70,
    bottom: 16,
    left: 69,
    maxWidth: "100%",
    maxHeight: "100%",
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  batteryIcon: {
    width: 24,
    height: 11,
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  rightSide: {
    right: 15,
    width: 67,
    height: 11,
  },
  leftSideIcon: {
    left: 34,
    width: 28,
    height: 11,
  },
  iosstatusBarblack: {
    left: 2,
    height: 44,
    overflow: "hidden",
  },
  bf842adB0c2136846f444ea1Icon: {
    left: -27,
    width: 183,
    height: 183,
  },
  getStarted: {
    top: 294,
    left: 35,
    fontSize: FontSize.size_29xl,
    lineHeight: 50,
    width: 264,
    height: 106,
  },
  joinUsNow: {
    top: 400,
    left: 40,
    fontSize: 26,
    width: 309,
    height: 60,
  },
  cta: {
    top: 571,
    backgroundColor: Color.colorBlanchedalmond_100,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
  },
  signInTo: {
    color: Color.colorBlanchedalmond_100,
  },
  cta1: {
    top: 630,
    borderStyle: "solid",
    borderColor: Color.colorBlanchedalmond_100,
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 50,
    paddingTop: 15,
    paddingBottom: Padding.p_smi,
  },
  createAnAccount: {
    left: 0,
    color: Color.colorGray_100,
    top: 0,
    position: "absolute",
  },
  createAnAccountWrapper: {
    top: 581,
    left: 110,
    width: 141,
    height: 22,
    position: "absolute",
  },
  androidLarge5: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge5;
