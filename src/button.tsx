import { h } from "preact";
import { setup, styled } from "goober";

setup(h);

const _Button = styled("button")`
  background-color: red;
`;

export const Button = () => {
  return <_Button>ok</_Button>;
};
