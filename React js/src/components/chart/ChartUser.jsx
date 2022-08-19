import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import axios from "axios";

const email1=localStorage.getItem("email")
console.log(email1)

const ChartUser = ({ aspect, title }) => {
  const [data,setData]=useState({});
  const Data=async()=>{
    const response=await axios.get(`http://localhost:5000/api/totalUserUsage/${email1}`)
    console.log("RESPONSE:",response.data.data)
    setData(response.data.data)
    console.log("DATA:",data)
// console.log(data.sort(byDate))
  }

  function byDate(a, b){
    return new Date(a.month).valueOf()-new Date(b.month).valueOf();
  }
  useEffect(()=>{
    Data().then();
  },[]);
  
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="units"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartUser;
