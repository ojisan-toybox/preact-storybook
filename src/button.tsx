import { h } from "preact";
import { styled } from "goober";

const _Button = styled("button")`
  background-color: red;
`;

export const Button = () => {
  return <_Button>ok</_Button>;
};
