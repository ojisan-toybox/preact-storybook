import { setup } from "goober";
import { h, render } from "preact";
import { Button } from "./button";

setup(h);

const App = () => {
  return (
    <div>
      <Button></Button>
    </div>
  );
};

render(<App></App>, document.body);
