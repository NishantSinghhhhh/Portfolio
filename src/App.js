import './App.css';
import RandomColor from './Components/Random_color';
import StarRating from './Components/Star_Rating';
import Accordian from './Components/accordian';
function App() {
  return (
    <div className="App">
     {/* Accordian component */}
     <Accordian/>

     {/* Random Color Component */}
     <RandomColor/>

     {/* star rating component */}
     <StarRating noOfStars = {10}/>
    </div>
  );
}

export default App;
