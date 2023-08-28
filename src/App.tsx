import "./styles.css";
import react_logo from "./react.png";
import boat from "./boat.svg";

export const App = () => {
  return (
    <>
      <img src={react_logo} alt="react" />
      <h1>Weather app build on top of custom Webpack</h1>
      <img src={boat} alt="boat" width={300} />
    </>
  );
};
