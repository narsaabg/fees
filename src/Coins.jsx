import './App.css';
import MobileHeader from './Components/MobileHeader';
import BrowserHeader from './Components/BrowserHeader';
import Card from './Components/Card';
import Pagination from './Components/Pagination';
import CoinExchangesTable from './Tables/CoinExchangesTable';
import CoinsTable from './Tables/CoinsTable';
import Footer from './Components/Footer';
import MobileSidebar from './Components/MobileSidebar';
import { useState,useRef,useEffect } from 'react';
import api from './api';
import { useParams } from 'react-router-dom';

const Coins = ({sttc}) => { 

  const [isSidebarVisible,setIsSideBarVisible] = useState(false);
  const sidebarRef = useRef(null);
  const { coin } = useParams();
  const [isCoin,setIsCoin] = useState(false);
  const [page , setPage] = useState(1);
  const [data, setData] = useState(null); 
  const [coins, setCoins] = useState(null); 
  const [pagination, setPagination] = useState(null); 

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

  const fetchCoinExchanges = async () => {
    const params = { coin: coin, page: page };
    console.log(params);
    try {
      const response = await api.get(`/api/coin/exchanges`,{params:params});
      const data = response.data;
      setData(data.exchanges);
      setPagination(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchCoins = async () => {
    const params = {page: page };
    try {
      const response = await api.get(`/api/coins`,{params:params});
      const data = response.data;
      setCoins(data.coins);
      setPagination(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  useEffect(() => {
    if(coin){
      console.log('ff');
      console.log(coin)
      setIsCoin(true);
      fetchCoinExchanges();
    }else{
      fetchCoins();
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [coin,page]);

  const loadPagination = (page) => {
    setPage(page); 
  }

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
              <Card sttc={sttc}/>
              </div>

              <div className="css-10klw3m" style={{height: '100%'}}>
						    <div className="css-1ei1k4u"> </div>
                <div className="chakra-tabs css-1h73gvd" style={{display: 'block', position: 'relative'}}>
                  <div className="chakra-tabs__tab-panels css-8atqhb" style={{width: '100%'}}> 
                    { !isCoin ? <CoinsTable coins={coins}/> : <CoinExchangesTable data={data}/> }
                    <Pagination pagination={pagination} loadPagination={loadPagination}/>
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
