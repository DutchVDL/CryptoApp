/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import { StatusOnlineIcon } from "@heroicons/react/outline";

import { Flex, Metric, Text } from "@tremor/react";

import { Card, Title, LineChart } from "@tremor/react";

const dataFormatter = (number) =>
  `${Intl.NumberFormat("us").format(number).toString()}%`;

const Coin = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const chartdata = [
    {
      year: "1h",
      "Price Change Percentage":
        coin.market_data?.price_change_percentage_1h_in_currency &&
        coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1),
    },
    {
      year: "24h",
      "Price Change Percentage":
        coin.market_data?.price_change_percentage_24h_in_currency &&
        coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1),
    },
    {
      year: "7d",
      "Price Change Percentage":
        coin.market_data?.price_change_percentage_7d_in_currency &&
        coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1),
    },
    {
      year: "14d",
      "Price Change Percentage":
        coin.market_data?.price_change_percentage_14d_in_currency &&
        coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1),
    },
    {
      year: "30d",
      "Price Change Percentage":
        coin.market_data?.price_change_percentage_30d_in_currency &&
        coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 max-w-[1280px] mx-auto shadow-lg">
      <div className=" p-4">
        <div className="  mx-auto bg-orange-200 shadow-lg rounded border-orange-900 w-[80%] text-center min-h-[40px]">
          <h1 className="text-3xl  text-orange-600  border-orange-900 ">
            {coin.name}
          </h1>
        </div>
        <div className="content mt-4 flex flex-col space-y-4">
          <div className="">
            <span className="px-2 py-1 border border-orange-600 shadow-md bg-orange-400 rounded">
              Rank # {coin.market_cap_rank}
            </span>
          </div>
          <div className=" grid grid-cols-2 gap-4">
            <div className="coin-heading flex items-center space-x-2">
              {coin.image && <img src={coin.image.small} alt="" />}
              <p>{coin.name}</p>
              {coin.symbol && <p>{coin.symbol.toUpperCase()}/USD</p>}
            </div>
            <div className="coin-price flex items-center justify-center">
              {coin.market_data?.current_price && (
                <h1 className="text-4xl text-orange-700">
                  ${coin.market_data.current_price.usd.toLocaleString()}
                </h1>
              )}
            </div>
          </div>
        </div>
        <div className=" mt-4">
          <Card>
            <Title>Price Change of {coin.name}</Title>
            <LineChart
              className="mt-6"
              data={chartdata}
              index="year"
              categories={["Price Change Percentage"]}
              colors={["emerald", "gray"]}
              valueFormatter={dataFormatter}
              yAxisWidth={40}
              autoMinValue={true}
            />
          </Card>
        </div>

        <div className=" mt-4">
          <div className=" mt-4">
            <div className="">
              <h3 className="text-orange-700">About</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    coin.description ? coin.description.en : ""
                  ),
                }}
                className="text-orange-500 "
              ></p>
            </div>
          </div>
        </div>
        <Card className="max-w-full mt-4 mx-auto">
          <div className="flex flex-col  max-w-full justify-between sm:flex-row ">
            <div className="mb-3">
              <Text>24 Hour Low</Text>

              {coin.market_data?.low_24h ? (
                <Metric>
                  ${coin.market_data.low_24h.usd.toLocaleString()}
                </Metric>
              ) : null}
            </div>
            <div className="mb-3">
              <Text>24 Hour High</Text>
              {coin.market_data?.high_24h ? (
                <Metric>
                  ${coin.market_data.high_24h.usd.toLocaleString()}
                </Metric>
              ) : null}
            </div>
            <div className="mb-3">
              <Text>Market Cap</Text>

              {coin.market_data?.market_cap ? (
                <Metric>
                  ${coin.market_data.market_cap.usd.toLocaleString()}
                </Metric>
              ) : null}
            </div>
            <div className="mb-3">
              <Text>Circulating Supply</Text>
              {coin.market_data ? (
                <Metric>{coin.market_data.circulating_supply}</Metric>
              ) : null}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Coin;
