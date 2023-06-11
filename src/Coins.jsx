import './App.css';
import axios from 'axios';
import MobileHeader from './Components/MobileHeader';
import BrowserHeader from './Components/BrowserHeader';
import Card from './Components/Card';
import Pagination from './Components/Pagination';
import Table from './Tables/ExchangeCoinsTable';
import Footer from './Components/Footer';
import MobileSidebar from './Components/MobileSidebar';
import { useState,useRef,useEffect } from 'react';
import api from './api';

const Coins = () => { 

  const [isSidebarVisible,setIsSideBarVisible] = useState(false);
  const sidebarRef = useRef(null);

  const showSidebar = () =>{
    setIsSideBarVisible(!isSidebarVisible);
  }

  const handleClickOutside = (event) => {
    const Id = event.target.id;
    const isShow = (Id === '__showSideBar' || Id === '__showSideBar_svg') ? true : false;
    if (sidebarRef.current && !sidebarRef.current.contains(event.target) && !isShow ) {
      setIsSideBarVisible(false);
    }
  };
  
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  return (
    <div className="App">
        <div className="css-8y270w">
          <div className="css-w6sn62">
            <div className="css-1k7l0a0">
              <MobileHeader showSidebar={showSidebar} />
            </div>
            <div className="css-fezzec">
              <BrowserHeader />
            </div>
            <main className="css-fezzec css-c9c2l4" style={{display: 'block'}}>

              <div className="css-glegxw">
              <Card />
              </div>

              <div className="css-10klw3m" style={{height: '100%'}}>
						    <div className="css-1ei1k4u"> </div>
                <div className="chakra-tabs css-1h73gvd" style={{display: 'block', position: 'relative'}}>
                  <div className="chakra-tabs__tab-panels css-8atqhb" style={{width: '100%'}}> 
                    <Table />
                    <Pagination />
                  </div>
                </div>
              </div>

            </main>
            <Footer />
          </div>
        </div>
     {isSidebarVisible && <MobileSidebar  sidebarRef={sidebarRef} /> }
	</div>

  );
}

export default Coins;
