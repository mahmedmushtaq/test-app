import { useCallback, useEffect, useState } from "react";
import fetchBalance from "../../../common/api/dashboard";
import { allCoinsList, ICoinsList } from "../../../common/store";

const coinSymbol = (symbol: string) => {
  if (symbol === "eth") return "WETH";
  else if (symbol === "usd+") return "USDC";
  return symbol.toUpperCase();
};

const useToFetchCoinsList = () => {
  const [coinsList, setCoinsList] = useState<ICoinsList[]>(allCoinsList);

  const loadPoolBalance = useCallback(async () => {
    try {
      const data = await fetchBalance();

      const coinsBalance: { [key: string]: string } = {};

      data.map((item) => {
        coinsBalance[item.id] = `${Number(
          Number(item.market_cap) * 0.000835
        ).toFixed(2)} ${coinSymbol(item.symbol)}`;
      });

      const allCoinsList = [...coinsList];
      const finalCoinsList = allCoinsList.map((item) => {
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

  return { coinsList };
};

export default useToFetchCoinsList;
