import "./Chart.css";
import { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';
import { useStore } from "../../hooks/useStore";
import { useTokenInfo } from "../../hooks/useTokenInfo";

const Chart = () => {
  const { state } = useStore();
  const { data } = useTokenInfo({symbol: state.symbol, interval: state.interval});
  const chartContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      const chart = createChart(chartContainerRef.current, {
        layout: { 
          textColor: 'black', 
          background: { 
            color: 'white' 
          } 
        }
      })
      const candlestickSeries = chart.addCandlestickSeries({ upColor: '#26a69a', downColor: '#ef5350', borderVisible: false, wickUpColor: '#26a69a', wickDownColor: '#ef5350' });
      candlestickSeries.setData(data);
      chart.timeScale().fitContent();

      return () => {
        chart.remove();
      }
    }
  }, [data])

  return (
    <div className="chart">
      <div ref={chartContainerRef} className="graph"/>
    </div>
  )
}

export default Chart;
