import { useCallback, useEffect, useState } from "react";
import fetchBalance from "../../../common/api/dashboard";
import { allCoinsList, ICoinsList } from "../../../common/store/dashboard";

const coinSymbol = (symbol: string) => {
  if (symbol === "eth") return "WETH";
  else if (symbol === "usd+") return "USDC";
  return symbol.toUpperCase();
};

const calculateValue = (value: string, symbol: string) => {
  let multiplyNumber = 1;

  if (symbol === "eth") multiplyNumber = 0.000835;
  else if (symbol === "1inch") multiplyNumber = 1 / 0.52;

  return `${Number(
    Number(value) * multiplyNumber // convert usd value to usd+
  ).toFixed(2)} ${coinSymbol(symbol)}`;
};

const useToHandleData = () => {
  const [coinsList, setCoinsList] = useState<ICoinsList[]>(allCoinsList);
  const [open, setOpen] = useState(false);

  const setClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const loadPoolBalance = useCallback(async () => {
    try {
      const data = await fetchBalance();

      const coinsBalance: { [key: string]: string } = {};

      data.map((item) => {
        coinsBalance[item.id] = calculateValue(item.market_cap, item.symbol);
      });

      const finalCoinsList = [...coinsList].map((item) => {
        // we are showing two coins  in a single row, so we need to show there value according to it also
        const coinsIdSplit = item.id.split("_");

        return {
          ...item,
          addr: "0x75f5...1666",
          balance: `${coinsBalance[coinsIdSplit[0]]} / ${
            coinsBalance[coinsIdSplit[1]]
          }`,
        };
      });
      setCoinsList(finalCoinsList);
    } catch (err: any) {
      console.error("[loadPoolBalance] error:- ", err?.message);
    }
  }, []);

  useEffect(() => {
    loadPoolBalance();
  }, [loadPoolBalance]);

  return { coinsList, open, setClose, handleOpen };
};

export default useToHandleData;
