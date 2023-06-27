import React from "react";
import { useState,useEffect } from "react";
import api from "../api";
import TR1 from "../TR/TR1";

const CoinsTable = ({coins}) => {


    return (
        <div tabIndex={0} role="tabpanel" aria-labelledby="tabs-:r6q:--tab-0" id="tabs-:r6q:--tabpanel-0" className="chakra-tabs__tab-panel css-1qbr3jw">
        <div className="css-1xdhyk6" style={{overflowX: 'auto'}}>
          <table className="chakra-table css-r9zub0">
            <thead className="css-19tbwnd">
              <tr className="css-0">
                <th className="css-1wpjpgn" />
                <th className="css-1kcukf7">Coin</th>
                <th className="css-1u00tmx" style={{textAlign:'center'}}>24Hr</th>
                <th className="css-1u00tmx">Min - Max</th>
                <th data-is-numeric="true" className="css-1nvtsnb" style={{textAlign:'end'}}>Exchanges</th>
                <th data-is-numeric="true" className="css-1dlal87"style={{textAlign:'end',paddingRight: 'var(--chakra-space-5)'}}>Price</th>
              </tr>
            </thead>
            <tbody className="css-0">
            {
              coins && coins.length > 0 && coins.map(function (m, n) {
                return (
                  <TR1 data={m} key={n} />
                );
              })
            }
            </tbody>
          </table>
        </div> 
      </div>
    )
}

export default CoinsTable;