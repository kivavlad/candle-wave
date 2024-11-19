import "./Chart.css";
import { useEffect, useRef } from 'react';
import { createChart, IChartApi, ISeriesApi } from 'lightweight-charts';
import { useStore } from "../../hooks/useStore";
import { useTokenInfo } from "../../hooks/useTokenInfo";

const Chart = () => {
  const { state } = useStore();
  const { data } = useTokenInfo({ symbol: state.symbol, interval: state.interval });
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const candlestickSeriesRef = useRef<ISeriesApi<'Candlestick'> | null>(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      chartRef.current = createChart(chartContainerRef.current, {
        layout: {
          textColor: 'black',
          background: {
            color: 'white'
          }
        }
      })

      candlestickSeriesRef.current = chartRef.current.addCandlestickSeries({
        upColor: '#26a69a',
        downColor: '#ef5350',
        borderVisible: false,
        wickUpColor: '#26a69a',
        wickDownColor: '#ef5350'
      })
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.remove();
      }
    }
  }, [])

  useEffect(() => {
    if (candlestickSeriesRef.current) {
      candlestickSeriesRef.current.setData(data);
    }
  }, [data])

  return (
    <div className="chart">
      <div ref={chartContainerRef} className="graph" />
    </div>
  )
}

export default Chart;