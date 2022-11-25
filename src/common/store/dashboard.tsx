import { ReactNode } from "react";
import CombineIcons from "../../components/shared/CombineIcons";
import BinanceIcon from "../../components/shared/Svgs/BinanceIcon";
import DaiIcon from "../../components/shared/Svgs/DaiIcon";
import EthereumIcon from "../../components/shared/Svgs/EthereumIcon";
import InchIcon from "../../components/shared/Svgs/InchIcon";
import TetherIcon from "../../components/shared/Svgs/TetherIcon";
import USDCIcon from "../../components/shared/Svgs/USDCIcon";

// put your recoil store value here

export interface ICoinsList {
  id: string;
  icon: ReactNode;
  addr?: string;
  balance?: string;
  riskStatus?: string;
}

// selected coins list
export const allCoinsList = [
  {
    id: "ethereum_usd",
    icon: (
      <CombineIcons
        leftIcon={<EthereumIcon width={24} height={24} />}
        rightIcon={<USDCIcon />}
      />
    ),
    riskStatus: "green",
  },
  {
    id: "dai_usd",
    icon: <CombineIcons leftIcon={<DaiIcon />} rightIcon={<USDCIcon />} />,
    riskStatus: "red",
  },
  {
    id: "binance-usd_tether",
    icon: (
      <CombineIcons leftIcon={<BinanceIcon />} rightIcon={<TetherIcon />} />
    ),
    riskStatus: "yellow",
  },
  {
    id: "ethereum_1inch",
    icon: (
      <CombineIcons
        leftIcon={<EthereumIcon width={24} height={24} />}
        rightIcon={<InchIcon />}
      />
    ),
    riskStatus: "green",
  },
  {
    id: "dai_ethereum",
    icon: (
      <CombineIcons
        leftIcon={<DaiIcon />}
        rightIcon={<EthereumIcon width={24} height={24} />}
      />
    ),
    riskStatus: "green",
  },
];
