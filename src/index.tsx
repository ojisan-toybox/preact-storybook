import { h, render } from "preact";
import { Button } from "./button";

const App = () => {
  return (
    <div>
      <Button></Button>
    </div>
  );
};

render(<App></App>, document.body);
