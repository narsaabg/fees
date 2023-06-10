import React from "react";

const Table = () => {
    return (
        <div tabIndex={0} role="tabpanel" aria-labelledby="tabs-:r6q:--tab-0" id="tabs-:r6q:--tabpanel-0" className="chakra-tabs__tab-panel css-1qbr3jw">
        <div className="css-1xdhyk6" style={{overflowX: 'auto'}}>
          <table className="chakra-table css-r9zub0">
            <thead className="css-19tbwnd">
              <tr className="css-0">
                <th className="css-1wpjpgn" />
                <th className="css-1kcukf7">Coin</th>
                <th className="css-fdqha2">Network</th>
                <th className="css-1dlal87">24Hr</th>
                <th className="css-1u00tmx">Min - Max</th>
                <th data-is-numeric="true" className="css-1dlal87"> <a className="chakra-link css-1cvy0v">Price</a> </th>
                <th data-is-numeric="true" className="css-1nvtsnb"> <a className="chakra-link css-1cvy0v">Exchanges</a> </th>
              </tr>
            </thead>
            <tbody className="css-0">
              <tr className="css-11ri2jo" style={{opacity: 1, transform: 'none'}}>
                <td className="css-18hygz9">
                  <button type="button" className="chakra-button css-1nxg7cz"> 1 </button>
                  <div className="chakra-popover__popper css-iy22zq" style={{visibility: 'hidden', position: 'absolute', minWidth: 'max-content', inset: '0px auto auto 0px'}}>
                    <section id="popover-content-:r72:" tabIndex={-1} role="dialog" className="chakra-popover__content css-1qj38v6" style={{transformOrigin: 'var(--popper-transform-origin)', opacity: 0, visibility: 'hidden', transform: 'scale(0.95) translateZ(0px)'}} />
                  </div>
                </td>
                <td className="css-ex33ci">
                  <div className="chakra-stack css-1a1xprz"> <img src="https://storage.googleapis.com/conduit-public-dls/CoreZorb.svg" style={{width: '25px'}} />
                    <div className="css-z2fbxz" style={{marginTop: '0px'}}><a target="_self" className="chakra-link css-emf8ld" href="/tx/0xada3f53267a95b38932aada8c64a73572c7649f530564765fb15fcd53a54666e"><span>BTC</span></a></div>
                  </div>
                </td>
                <td className="css-pr32fc">
                  <select name="network"  className="css-13u33h9">
                    <option value>Bitcoin</option>
                    <option value>Ethereum</option>
                    <option value>BEP-20</option>
                  </select>
                </td>
                <td className="css-pr32fc"><span>5%</span></td>
                <td className="css-e30lz9"><a className="chakra-link css-5kc5f2" href="/block/257591">25-91</a></td>
                <td data-is-numeric="true" className="css-e30lz9"><span className="css-75zybh"><p className="chakra-text css-1gdcvrl">0.00021905</p></span></td>
                <td data-is-numeric="true" className="css-e30lz9"><span className="css-75zybh"><p className="chakra-text css-1gdcvrl">43</p></span></td>
              </tr>
            </tbody>
          </table>
        </div> 
      </div>
    )
}

export default Table;