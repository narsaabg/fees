import React, { useState } from "react";

// ExchangeCoins Table
const TR = ({data}) => {
    const [withdrawalFee,setWithdrawalFee] = useState(data.withdrawal_fee[0]);
    const [minWithdrawal,setMinWithdrawal] = useState(data.min_withdrawal[0]);
    
    const onNetworkChange = (e) => {
        const selectedOption = e.target.value;
        const withdrawalFee = e.target.options[e.target.selectedIndex].getAttribute('data-withdrawal_fee');
        const minWithdrawal = e.target.options[e.target.selectedIndex].getAttribute('data-min_withdrawal');

        setWithdrawalFee(withdrawalFee);
        setMinWithdrawal(minWithdrawal);

    }

    return (
        <tr className="css-11ri2jo" style={{opacity: 1, transform: 'none'}}>
            <td className="css-18hygz9">
                <button type="button" className="chakra-button css-1nxg7cz"> 1 </button>
                <div className="chakra-popover__popper css-iy22zq" style={{visibility: 'hidden', position: 'absolute', minWidth: 'max-content', inset: '0px auto auto 0px'}}>
                <section id="popover-content-:r72:" tabIndex={-1} role="dialog" className="chakra-popover__content css-1qj38v6" style={{transformOrigin: 'var(--popper-transform-origin)', opacity: 0, visibility: 'hidden', transform: 'scale(0.95) translateZ(0px)'}} />
                </div>
            </td>
            <td className="css-ex33ci" style={{backgroundColor:'#fff'}}>
                <div className="chakra-stack css-1a1xprz"> <img src={data.image} style={{width: '25px'}} />
                <div className="css-z2fbxz" style={{marginTop: '0px'}}><a target="_self" className="chakra-link css-emf8ld" href="#"><span>{data.symbol}</span></a></div>
                </div>
            </td>
            <td className="css-pr32fc">
                <select name="network"  className="css-13u33h9" onChange={(e)=>onNetworkChange(e)}>
                    {
                        data.network.map(function(m,n){
                            return (
                                <option data-withdrawal_fee={data.withdrawal_fee[n]} data-min_withdrawal={data.min_withdrawal[n]}>{m}</option>
                            )
                        })
                    
                    }
                </select>
            </td>
            <td data-is-numeric="true" className="css-e30lz9">
                <span className="css-75zybh">
                    <p className="chakra-text css-1gdcvrl">{minWithdrawal}</p>
                </span>
            </td>
            <td data-is-numeric="true" className="css-e30lz9">
                <span className="css-75zybh">
                    <p className="chakra-text css-1gdcvrl">{withdrawalFee}</p>
                </span>
            </td>
            <td data-is-numeric="true" className="css-e30lz9">
                <span className="css-75zybh">
                    <p className="chakra-text css-1gdcvrl">43</p>
                </span>
            </td>
        </tr>
    )
}

export default TR;