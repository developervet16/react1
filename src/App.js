import './App.css';
import ProfilePhoto from './Components/profile/Photo';
import FullName from './Components/profile/FullName';
import Adress from './Components/profile/Adress';


function App() {
  return (
    <div className="App">
      <ProfilePhoto></ProfilePhoto>
      <FullName></FullName>
      <Adress></Adress>
    </div>
  );
}

export default App;
