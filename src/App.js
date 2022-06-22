import "./App.css";
import Profile from "./Profile/Profile";

function App() {
  const handleName = (fullName) => {
    alert(fullName);
  };
  return (
    <div className="App">
      <Profile
        fullName="BENKANOUN Sarah"
        bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae quam ut sem tempor vestibulum sed eget enim. Duis nisi ante, consectetur vitae malesuada auctor, vehicula quis dui."
        profession="web developper"
        handleName={handleName}
      >
        {" "}
        <img src="/photo.jpg" alt="me" />{" "}
      </Profile>
    </div>
  );
}

export default App;
