import React, { useState,useRef,useEffect } from 'react';
import 'select2/dist/css/select2.min.css';
import $ from 'jquery';
import 'select2';
import '../admin.css'

const CoinDetailForm = ({exchangesList,coinList}) => {
    const [exchangeSelect, setExchangesSelect] = useState([]);
    const [coinSelect, setCoinsSelect] = useState([]);


    const exchangeSelectRef = useRef(null);
    const coinSelectRef = useRef(null);
    const networkSelectRef = useRef(null);

    useEffect(() => {
        console.log(exchangesList);
        if (typeof exchangesList === 'undefined') return;
        setExchangesSelect(exchangesList);
        setCoinsSelect(coinList);

        $(exchangeSelectRef.current).select2();
        $(coinSelectRef.current).select2();
        $(networkSelectRef.current).select2();
    }, [exchangesList]);

    const formData = () =>{

    }

    return (
        <form className="coin-detail-form" method="get">
            <div>
                <label htmlFor="exchange">Exchange</label>
                <select
                    id="exchange"
                    style={{ padding: '10px' }}
                    onChange={(e) => formData(e)}
                    ref={exchangeSelectRef}
                >
                    {
                        exchangeSelect?.length > 0 && exchangeSelect.map(({ value, label }) => (
                        <option key={value} value={value}>{label}</option>
                        ))
                    }
                </select>
            </div>
            <div>
                <label htmlFor="coin">Coin</label>
                <select
                    id="coin"
                    style={{padding:'10px'}}
                    onChange={(e) => formData(e)}
                    ref={coinSelectRef}
                >
                    {
                        coinList?.length > 0 && coinList.map(({ value, label }) => (
                        <option key={value} value={value}>{label}</option>
                        ))
                    }
                </select>
            </div>
            <div>
                <label htmlFor="network">Network</label>
                <input
                    type="text"
                    id="minWithdrawal"
                    onChange={(e) => formData(e)}
                />
            </div>
            <div style={{display:'block'}}>
                <label htmlFor="withdrawalFee">Fee</label>
                <input
                    type="text"
                    id="withdrawalFee"
                    className="form-control"
                    onChange={(e) => formData(e)}
                />
            </div>
            <div>
                <label htmlFor="minWithdrawal">Minimum</label>
                <input
                    type="text"
                    id="minWithdrawal"
                    onChange={(e) => formData(e)}
                />
            </div>
            <button>Submit</button>
        </form>
    );
};

export default CoinDetailForm;
