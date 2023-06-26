import React from "react";

// Exchanges Table
const TR = ({data}) => {

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
                <div className="css-z2fbxz" style={{marginTop: '0px'}}><a target="_self" className="chakra-link css-emf8ld" href={'/exchanges/'+data.id}><span>{data.name}</span></a></div>
                </div>
            </td>
            <td className="css-pr32fc"><span>{data.coin_listed}</span></td>
            <td className="css-e30lz9"><a className="chakra-link css-5kc5f2" href="/block/257591">{data.trust_score}</a></td>
            <td data-is-numeric="true" className="css-e30lz9"><span className="css-75zybh"><p className="chakra-text css-1gdcvrl">{data.country}</p></span></td>
            <td data-is-numeric="true" className="css-e30lz9"><span className="css-75zybh"><p className="chakra-text css-1gdcvrl">{parseFloat(data.trade_volume_24h_btc).toFixed(2)}</p></span></td>
        </tr>
    )
}

export default TR;