import React from "react";
import {multiplyAndFormat} from '../Utils'

// CoinsTable
const TR = ({data,key}) => {
    return (
        <tr className="css-11ri2jo" style={{opacity: 1, transform: 'none'}}>
            <td className="css-18hygz9">
                <button type="button" className="chakra-button css-1nxg7cz">1</button>
                <div className="chakra-popover__popper css-iy22zq" style={{visibility: 'hidden', position: 'absolute', minWidth: 'max-content', inset: '0px auto auto 0px'}}>
                    <section id="popover-content-:r72:" tabIndex={-1} role="dialog" className="chakra-popover__content css-1qj38v6" style={{transformOrigin: 'var(--popper-transform-origin)', opacity: 0, visibility: 'hidden', transform: 'scale(0.95) translateZ(0px)'}} />
                </div>
            </td>
            <td className="css-ex33ci" style={{backgroundColor:'#fff'}}>
                <div className="chakra-stack css-1a1xprz"> <img src={data.image} style={{width: '25px'}} />
                    <div className="css-z2fbxz" style={{marginTop: '0px'}}>
                        <a target="_self" style={{color:'#000',lineHeight:'15px'}} className="chakra-link css-emf8ld" href={'/coins/'+data.id+'-withdrawal-fee'}>
                            <p>{data.name.toUpperCase()}</p>
                            <span style={{fontSize:'12px',color:'#8a7f7f'}}>{data.symbol.toUpperCase()}</span>
                        </a>
                    </div>
                </div>
            </td>
            <td className="css-pr32fc" style={{ color: data.price_change_percentage_24h < 0 ? 'red' : 'green' }}><span>{data.price_change_percentage_24h.toFixed(2).replace('-', '')}%</span></td>
            <td className="css-e30lz9"><a className="chakra-link css-5kc5f2" href="/block/257591">{multiplyAndFormat(data.current_price * data.lowest_fee) +' - '+ multiplyAndFormat(data.current_price * data.maximum_fee)}</a></td>
            <td data-is-numeric="true" className="css-e30lz9"><span className="css-75zybh"><p className="chakra-text css-1gdcvrl">{data.exchanges_compared}</p></span></td>
            <td data-is-numeric="true" className="css-e30lz9"><span className="css-75zybh"><p className="chakra-text css-1gdcvrl">${data.current_price}</p></span></td>
        </tr>
    )

}

export default TR;