import './App.css';
import BillToUnit from "./BillToUnit";
import UnitToBill from "./UnitToBill";

function App() {
  return(
    <div className='col-12'>
      <div className="row">
        <div className="col-6">
          <BillToUnit /></div>
        <div className="col-6"><UnitToBill /></div>
        
        
      </div>
      
    </div>
  )
  
}

export default App;
