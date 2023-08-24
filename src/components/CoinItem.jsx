/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { TableBody, TableRow, TableCell, Text, Badge } from "@tremor/react";
import { StatusOnlineIcon } from "@heroicons/react/outline";

const CoinItem = (props) => {
  console.log(props.coins);
  return (
    <div className="coin-row grid grid-cols-6 gap-2 py-2 border-b border-gray-300">
      {/*  */}

      {/*  */}

      <p className="col-span-1">{props.coins.market_cap_rank}</p>
      <div className="col-span-2 img-symbol flex items-center">
        <img src={props.coins.image} alt="" className="w-6 h-6 mr-2" />
        <p>{props.coins.symbol.toUpperCase()}</p>
      </div>
      <p className="col-span-1">
        ${props.coins.current_price.toLocaleString()}
      </p>
      <p className="col-span-1">
        {props.coins.price_change_percentage_24h.toFixed(2)}%
      </p>
      <p className="col-span-1 ">
        ${props.coins.total_volume.toLocaleString()}
      </p>
      <p className="col-span-1 ">${props.coins.market_cap.toLocaleString()}</p>
    </div>
  );
};

export default CoinItem;
