/** @jsx h */
import { h } from "preact";
import { Button } from "./button";

export default {
  title: "custom/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: { action: "onClick" },
  },
};

const Template = (args: any) => <Button {...args} />;

export const Primary = Template.bind({});
