import './App.css';
import MobileHeader from './Components/MobileHeader';
import BrowserHeader from './Components/BrowserHeader';
import Card from './Components/Card';
import Pagination from './Components/Pagination';
import ExchangeCoinsTable from './Tables/ExchangeCoinsTable';
import ExchangesTable from './Tables/ExchangesTable';
import Footer from './Components/Footer';
import MobileSidebar from './Components/MobileSidebar';
import { useState,useRef,useEffect } from 'react';
import api from './api';
import { useParams } from 'react-router-dom';

const Exchanges = ({sttc}) => { 

  const [isSidebarVisible,setIsSideBarVisible] = useState(false);
  const sidebarRef = useRef(null);
  const { exchange } = useParams();
  const [page , setPage] = useState(1);
  const [data, setData] = useState(null); 
  const [exchanges, setExchanges] = useState(null); 
  const [pagination, setPagination] = useState(null); 
  const [isExchange,setIsExchange] = useState(false);

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

  const fetchExchangeCoins = async () => {
    const params = { exchange: exchange, page: page };
    console.log(params);
    try {
      const response = await api.get(`/api/exchange/coins`,{params:params});
      const data = response.data;
      setData(data.coins);
      setPagination(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchExchanges = async () => {
    const params = {page: page };
    console.log(params);
    try {
      const response = await api.get(`/api/exchanges`,{params:params});
      const data = response.data;
      setExchanges(data.exchanges);
      setPagination(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  } 
  
  const loadPagination = (page) => {
    setPage(page); 
  }

  useEffect(() => {
    if(exchange){
        setIsExchange(true);
        fetchExchangeCoins();
    }else{
      fetchExchanges();
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [exchange,page]);


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
                    { !isExchange ? <ExchangesTable exchanges={exchanges}/>  : <ExchangeCoinsTable data={data} /> }
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

export default Exchanges;
