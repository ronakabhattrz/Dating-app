import React, { useCallback, useState, useRef } from "react";
import { TextInputProps  } from "react-native";
import { Container } from "./styles";
import PhoneInput from "react-native-phone-number-input";

const PhoneInput2: React.FC<TextInputProps> = (props) => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const phoneInput = useRef<PhoneInput>(null);
  return (
        <Container>
          <PhoneInput
              ref={phoneInput}
              defaultCode="US"
              layout="first"
              withDarkTheme
              value={value}
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
                setValue(text);
              }}
              onChangeFormattedText={(text) => {
                setFormattedValue(text);
              }}
              {...(props as any)}
            />
        </Container>

  );
};

export default PhoneInput2;