import React from "react";
import TR from "../TR/TR2";

const ExchangesTable = ({exchanges}) => {

    return (
        <div tabIndex={0} role="tabpanel" aria-labelledby="tabs-:r6q:--tab-0" id="tabs-:r6q:--tabpanel-0" className="chakra-tabs__tab-panel css-1qbr3jw">
        <div className="css-1xdhyk6" style={{overflowX: 'auto'}}>
          <table className="chakra-table css-r9zub0">
            <thead className="css-19tbwnd">
              <tr className="css-0">
                <th className="css-1wpjpgn" />
                <th className="css-1kcukf7">Exchange</th>
                <th className="css-fdqha2">Coin Listed</th>
                <th className="css-1dlal87" style={{borderTopRightRadius: '0px',textAlign:'center'}}>Trust Score</th>
                <th className="css-1u00tmx" style={{textAlign:'end'}}>Founded</th>
                <th data-is-numeric="true" className="css-1dlal87" style={{textAlign:'end'}}>Volume</th>
              </tr>
            </thead>
            <tbody className="css-0">
            {
              exchanges && exchanges.length > 0 && exchanges.map(function (m, n) {
                return (
                  <TR data={m} key={n} />
                );
              })
            }
            </tbody>
          </table>
        </div> 
      </div>
    )
}

export default ExchangesTable;