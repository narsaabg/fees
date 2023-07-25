import '../App.css';
import MobileHeader from '../Components/MobileHeader';
import BrowserHeader from '../Components/BrowserHeader';
import Footer from '../Components/Footer';
import MobileSidebar from '../Components/MobileSidebar';
import { useState,useRef,useEffect } from 'react';
import api from '../api';
import CoinDetailForm from './Form/CoinDetailForm'
import { useParams } from 'react-router-dom';

const CoinDetail = ({sttc}) => {

    const [isSidebarVisible,setIsSideBarVisible] = useState(false);
    const sidebarRef = useRef(null);
    const [data, setData] = useState(null);
    const [exchangeSelect, setExchangeSelect] = useState([]);
    const [coinSelect, setCoinSelect] = useState([]);

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

    const fetchExchanges = async () => {
        try {
            const response = await api.get(`/api/exchanges/select-options`);
            const data = response.data;
            setExchangeSelect(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const fetchCoins = async () => {
        try {
            const response = await api.get(`/api/coins/select-options`);
            const data = response.data;
            setCoinSelect(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchExchanges();
        fetchCoins();
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

                        <div className="css-10klw3m" style={{height: '100%'}}>
                            <div className="css-1ei1k4u"> </div>
                            <div className="chakra-tabs css-1h73gvd" style={{display: 'block', position: 'relative'}}>
                                <CoinDetailForm exchangesList={exchangeSelect} coinList={coinSelect}/>
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

export default CoinDetail;
