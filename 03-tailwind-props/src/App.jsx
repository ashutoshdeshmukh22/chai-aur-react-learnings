import "./App.css";
import Card from "./components/Card";

function App() {
  const userObj = {
    name: "Alex Jenifer",
    about: "Frontend Developer",
  };
  const userObj2 = {
    name: "Ashutosh D",
    about: "Backend Developer",
  };

  const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <h1 className="bg-green-300 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      {/* <Card name="Ashu" userObj={userObj} arr={newArr} /> */}
      <Card userObj={userObj} btnText="View Profile" />
      <Card userObj={userObj2} btnText="View Profile 2" />
    </>
  );
}

export default App;
