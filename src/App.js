import './App.css';
import React,{useEffect,useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Coins from './Coins';
import Exchanges from './Exchanges';
import CoinDetail from './Admin/CoinDetail'
import api from './api';
import  './jQuery';

function App() {
  const [sttc,setSttc] = useState(null);
  const statistics = async() => {
    try{
        const data = await api.get(`/api/statistics`);
        setSttc(data.data);
    }catch(error){
      console.error('Error fetching data:', error);
    }
  }

  useEffect(()=>{
    statistics();
  },[]);

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home sttc={sttc}/>} /> */}
        <Route path="/coins" element={<Coins sttc={sttc}/>} />
        <Route path="/coins/:slug" element={<Coins sttc={sttc}/>} />
        <Route path="/exchanges" element={<Exchanges sttc={sttc}/>} />
        <Route path="/exchanges/:exchange" element={<Exchanges sttc={sttc}/>} />

        // admin routes
        <Route path="/admin/coin-detail/create" element={<CoinDetail />} />

        <Route path="/*" element={<Coins sttc={sttc}/>} />

      </Routes>
    </Router>
  );
}

export default App;
