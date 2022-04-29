import React, { useState, useEffect } from "react";
import * as Api from "../../api";
import { Chart, registerables } from "chart.js";
import { Bar } from 'react-chartjs-2';
Chart.register(...registerables)

const SpeciesChart = () => {
  const [dataList, setDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  async function getDataList() {
    try {
      const { data } = await Api.get('stats', '?groupName=species');
      setDataList([...Object.values(data.payload)]);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getDataList();
  }, []);

  return (
    <Bar className="graphBack"
      data={{
        labels: dataList[1],
          datasets: [
          {
            label: dataList[1],
            data: dataList[2],
            backgroundColor: [
              'rgba(242, 214, 74, 0.5)',
              'rgba(54, 162, 235, 0.3)'
            ],
            borderColor: [
              'rgba(205, 173, 14, 1)',
              'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
            }
          ]
      }}
      height={500}
      width={1000}
      options= {{
          responsive: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
      }}
    />
  );
}

export default SpeciesChart;