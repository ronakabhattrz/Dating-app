import { Logs } from 'expo'

Logs.enableExpoCliLogging()
import React, { useCallback, useState, useRef } from "react";
import { TextInputProps  } from "react-native";
import { Container } from "./styles";
import PhoneInput from "react-native-phone-number-input";

const PhoneInput2: React.FC<TextInputProps> = (props) => {
  const phoneInput = useRef<PhoneInput>(null);

  const [phoneNumber, setPhoneNumber] = useState("");
  console.log('No:'+phoneNumber);
  return (
        <Container>
          <PhoneInput
              ref={phoneInput}
              defaultCode="US"
              layout="first"
              withDarkTheme
              value={phoneNumber}
              keyboardType="phone-pad"
              textInputProps={{ maxLength: 10 }}
              textContainerStyle={{
                backgroundColor: '#fff',
                fontSize: 18
              }}
              textInputStyle={{
                fontSize: 18,
                fontFamily: "Gilroy-Bold",
                color: "#070F26",
                backgroundColor: '#fff'
              }}
              onChangeText={(text) => {
                setPhoneNumber(text);
              }}
              {...(props as any)}
            />
        </Container>

  );
};

export default PhoneInput2;