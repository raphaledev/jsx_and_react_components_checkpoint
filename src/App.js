import PhotoProfile from './Component/Profile/PhotoProfile';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';

function App() {
  
  return (
  <div className="Container">
    <div className="Photoprofile">
      <PhotoProfile/>
    </div>
    <div className='Info'>
      <div className="FullName">
        <FullName/>
      </div>
      <div className="Address">
        <Address/>
      </div>
    </div>
  </div>
  );
}

export default App;
