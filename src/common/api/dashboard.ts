import axios from "axios";

interface IPoolBalanceResponse {
  id: string;
  symbol: string;
  name: string;
  market_cap: string;
}

const fetchBalance: () => Promise<IPoolBalanceResponse[]> = async () => {
  // used sample api with filters (  https://www.coingecko.com/en/api )
  // filter data only specific coins which are present in the figma
  const res = await axios.get(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum%2Cusd%2Ctether%2C1inch%2Cbinance-usd%2Cdai&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );

  return res.data;
};

export default fetchBalance;
