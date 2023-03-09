import React from "react";
import axios from "axios";
import styles from "../../styles/Home.module.css";
import Header from "@/components/header";

function CoinsHome({ coinData }) {
  return (
    <div>
      <Header title="Coins List" imageUrl={coinData.coins[0].icon} />
      <h1>Coins list</h1>
      {coinData.coins.map((coin) => {
        return (
          <div key={coin.id} className={styles.coin}>
            <h3>Name: {coin.name}</h3>
            <img src={coin.icon} height={50} />
            <p>Price: {coin.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CoinsHome;

export const getStaticProps = async () => {
  const data = await axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );

  return {
    props: {
      coinData: data.data,
    },
  };
};
