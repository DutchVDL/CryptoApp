/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import CoinItem from "./CoinItem";
import Coin from "../routes/Coin";
import { Link, useNavigate } from "react-router-dom";
import { StatusOnlineIcon } from "@heroicons/react/outline";
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge,
} from "@tremor/react";

const Coins = (props) => {
  const navigator = useNavigate();
  const handleClick = (e) => {
    console.log(e);
    navigator(`/coin/${e.id}`);
  };
  return (
    <div className="container mx-auto p-4">
      <div>
        <Card>
          <Title>List of Crypto Currency</Title>
          <Table className="mt-5">
            <TableHead>
              <TableRow>
                <TableHeaderCell>#</TableHeaderCell>
                <TableHeaderCell>Coin</TableHeaderCell>
                <TableHeaderCell>Price</TableHeaderCell>
                <TableHeaderCell>24h</TableHeaderCell>
                <TableHeaderCell>Volume</TableHeaderCell>
                <TableHeaderCell>Mkt Cap</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.coins.map((item) => (
                <TableRow key={item.market_cap_rank}>
                  <Link to={`/coin/${item.id}`} element={<Coin />}>
                    <TableCell>{item.market_cap_rank}</TableCell>
                  </Link>

                  <TableCell>
                    <Link to={`/coin/${item.id}`} element={<Coin />}>
                      <img src={item.image} alt="" className="w-6 h-6 mr-2" />
                      <Text>{item.symbol.toUpperCase()}</Text>
                    </Link>
                  </TableCell>

                  <TableCell>
                    <Link to={`/coin/${item.id}`} element={<Coin />}>
                      <Text>${item.current_price.toLocaleString()}</Text>
                    </Link>
                  </TableCell>

                  <TableCell>
                    <Link to={`/coin/${item.id}`} element={<Coin />}>
                      <Text>
                        {item.price_change_percentage_24h.toFixed(2)}%
                      </Text>
                    </Link>
                  </TableCell>

                  <TableCell>
                    <Link to={`/coin/${item.id}`} element={<Coin />}>
                      <Text>${item.total_volume.toLocaleString()}</Text>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link to={`/coin/${item.id}`} element={<Coin />}>
                      <Text>${item.market_cap.toLocaleString()}</Text>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default Coins;
