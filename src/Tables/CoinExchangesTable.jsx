import React from "react";
import TR3 from "../TR/TR3";

const CoinExchangesTable = ({data}) => {

  console.log(data);

    return (
        <div tabIndex={0} role="tabpanel" aria-labelledby="tabs-:r6q:--tab-0" id="tabs-:r6q:--tabpanel-0" className="chakra-tabs__tab-panel css-1qbr3jw">
        <div className="css-1xdhyk6" style={{overflowX: 'auto'}}>
          <table className="chakra-table css-r9zub0">
            <thead className="css-19tbwnd">
              <tr className="css-0">
                <th className="css-1wpjpgn"/>
                <th className="css-1kcukf7">Exchange</th>
                <th className="css-1kcukf7">Network</th>
                <th className="css-fdqha2" style={{textAlign:'center'}}>Withdrawal Fee</th>
                <th className="css-1dlal87" style={{textAlign:'center'}}>Min Withdrawal</th>
               </tr>
            </thead>
            <tbody className="css-0">
            {
              data && data.length > 0 && data.map(function (m, n) {
                return (
                  <TR3 data={m} key={n} />
                );
              })
            }
            </tbody>
          </table>
        </div> 
      </div>
    )
}

export default CoinExchangesTable;