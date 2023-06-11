import React from "react";
import { useState,useEffect } from "react";
import api from "../api";
import TR from "../TR/TR4";

const ExchangeCoinsTable = () => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await api.get(`/api/coin-detail`);
      const data = response.data;
      setData(response.data);
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (isLoading) {
      fetchData();
    }
  }, []);

    return (
        <div tabIndex={0} role="tabpanel" aria-labelledby="tabs-:r6q:--tab-0" id="tabs-:r6q:--tabpanel-0" className="chakra-tabs__tab-panel css-1qbr3jw">
        <div className="css-1xdhyk6" style={{overflowX: 'auto'}}>
          <table className="chakra-table css-r9zub0">
            <thead className="css-19tbwnd">
              <tr className="css-0">
                <th className="css-1wpjpgn" />
                <th className="css-1kcukf7">Coin</th>
                <th className="css-fdqha2">Network</th>
                <th className="css-fdqha2">Min Withdrawal</th>
                <th className="css-fdqha2">Withdrawal Fee</th>
                <th data-is-numeric="true" className="css-1dlal87"> <a className="chakra-link css-1cvy0v">Price</a> </th>
              </tr>
            </thead>
            <tbody className="css-0">
            {
              data && data.length > 0 && data.map(function (m, n) {
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

export default ExchangeCoinsTable;