import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import darkImg from '../assets/Dark.png'; // Use actual filenames
import lightImg from '../assets/Light.png';

const Header = ({ isDarkMode, toggleMode }) => {
  const [image, setImage] = useState(lightImg);
  const [modeName , setModeName] = useState('Light Mode');

  useEffect(() => {
    setImage(isDarkMode ? lightImg : darkImg);
    if(isDarkMode){
      setModeName('Dark Mode')
    }else{
      setModeName('Light Mode');
    }
    }, [isDarkMode]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand fs-1" to="/">TextUtils</Link>
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
        </div> */}
        
        <div className="d-flex align-items-center">
          <img
            src={image}
            alt="mode toggle"
            onClick={toggleMode}
            style={{ width: '50px', height: '50px', cursor: 'pointer' }}
          />
          <h5 className='mx-3' style={{color:'#FFA116'}}>{modeName}</h5>
        </div>
      </div>
    </nav>
  );
};

export default Header;
