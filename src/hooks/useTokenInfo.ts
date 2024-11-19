import { useState, useEffect } from "react";
import { CandlestickData, UTCTimestamp } from "lightweight-charts";
import api from "../config/api";

interface IProps {
  symbol: string;
  interval: string;
}

export const useTokenInfo = ({ symbol, interval }: IProps) => {
  const [data, setData] = useState<CandlestickData[]>([]);

  const getHistoricalTokenInfo = async (symbol: string, interval: string) => {
    const response = await api.get(`https://api.binance.com/api/v3/klines?symbol=${symbol}USDT&interval=${interval}`);
    return await response.data.map((item: any) => ({
      time: (item[0] / 1000) as UTCTimestamp,
      open: parseFloat(item[1]),
      high: parseFloat(item[2]),
      low: parseFloat(item[3]),
      close: parseFloat(item[4]),
    }))
  }

  useEffect(() => {
    if (symbol && interval) {
      const fetchHistoricalTokenInfo = async () => {
        try {
          const result = await getHistoricalTokenInfo(symbol, interval);
          setData(result);
        } catch (error) {
          console.error(error);
        }
      }

      fetchHistoricalTokenInfo();
    }
  }, [symbol, interval])

  useEffect(() => {
    if (symbol && interval) {
      const token = symbol.toLowerCase();
      const socket = new WebSocket(`wss://stream.binance.com:9443/ws/${token}usdt@kline_${interval}`);

      socket.onmessage = (e) => {
        const message = JSON.parse(e.data);

        if (message.e === "kline") {
          const kline = message.k;
          const newData: CandlestickData = {
            time: (kline.t / 1000) as UTCTimestamp,
            open: parseFloat(kline.o),
            high: parseFloat(kline.h),
            low: parseFloat(kline.l),
            close: parseFloat(kline.c),
          }

          setData((prev) => {
            const last = prev[prev.length - 1];
            if (last && last.time === newData.time) {
              return [...prev.slice(0, -1), newData];
            } else {
              return [...prev, newData];
            }
          })
        }
      }

      return () => {
        socket.close();
      }
    }
  }, [symbol, interval])

  return {
    data,
  }
}