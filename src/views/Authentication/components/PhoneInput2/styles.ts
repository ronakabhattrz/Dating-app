import styled, { css } from "styled-components/native";

const fontStyle = css`
  font-family: ${(props) => props.theme.typography.fontFamily.bold};
  font-size: ${(props) => props.theme.typography.sizes.large.size}px;
  color: ${(props) => props.theme.colors.text};
`;

export const Container = styled.View`
  border-radius: 15px;
  border: 1px ${(props) => props.theme.colors.text};
  flex-direction: row;
  overflow: hidden;
  margin: 25px 0;
  ${fontStyle}
`;


