import { useState, useEffect } from "react";

function Hello() {
  const byFn = () => {
    console.log("bye :(");
  };
  const hiFn = () => {
    console.log("created :)");
    return byFn;
  };
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}
const App = () => {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
};

export default App;
