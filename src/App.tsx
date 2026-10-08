import "./App.css";
import Counter from "./Counter";
import Greeting from "./Greeting";
import UserCard from "./UserCard";

function App() {
  return (
    <>
      <Greeting />
      <Counter />
      <UserCard name="田中太郎" age={25} />
      <UserCard name="田中太郎" age={25} />
    </>
  );
}

export default App;
