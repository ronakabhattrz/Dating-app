import React, { useState, useContext } from "react";
import { BottomCard, Container, Description, TopCard } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Button } from "~components";
import { Title, Highlight } from "./styles";
import Logo from "~images/Logo.svg";
import HeroText from "./components/HeroText";
import PhoneInput from "./components/PhoneInput";
import PhoneInput2 from "./components/PhoneInput2";
import { KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "styled-components/native";
import { SceneName } from "~src/@types/SceneName";

export const useCustomBottomInset = () => {
  const insets = useSafeAreaInsets();
  return Math.max(20, insets.bottom + 5);
};

const Authentication = () => {
  const insets = useSafeAreaInsets();
  const bottomInset = useCustomBottomInset();
  const themeContext = useContext(ThemeContext);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  /**
   * For demo purposes, we'll just log the user in
   */
  const handleLogin = async () => {
    setLoading(true);
    setTimeout(() => {
      navigation.navigate(SceneName.OneTimeCode);
      setLoading(false);
    }, 1000);
  };

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flexGrow: 1 }}
      >
        <StatusBar style={themeContext.dark ? "light" : "dark"} />
        <TopCard
          source={
            themeContext.dark
              ? require("~images/background-dark.png")
              : require("~images/background-light.png")
          }
          style={{ paddingTop: 60 + insets.top }}
        >
          <Logo
            style={{ marginBottom: 25 }}
            width={70}
            height={70}
            fill={themeContext.colors.text}
          />
          <HeroText />
        </TopCard>
        <BottomCard style={{ paddingBottom: bottomInset }}>
          <Title>
          Enter your <Highlight>Mobile Number</Highlight>
          </Title>
          <Description>
            We will send you a 4-digit code to authorize your account. if
            don't have one yet, let's create it
          </Description>
          <PhoneInput2
            onSubmitEditing={handleLogin}
            returnKeyType="send"
            enablesReturnKeyAutomatically
            blurOnSubmit={false}
            placeholder="9999999999"
          ></PhoneInput2>
          <Button loading={loading} onPress={handleLogin}>
            Continue
          </Button>
        </BottomCard>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Authentication;
