import React, { useState, useEffect } from "react";
import * as Api from "../../api";
import { Chart, registerables } from "chart.js";
import { Pie } from 'react-chartjs-2';
Chart.register(...registerables)

const PersonalityChart = () => {
  const [dataList, setDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  async function getDataList() {
    try {
      const { data } = await Api.get('stats', '?groupName=personality');
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
    <Pie className="graphBack"
      data={{
        labels: dataList[1],
          datasets: [
          {
            data: dataList[2],
            backgroundColor: [
              'rgba(242, 34, 110, 0.3)',
              'rgba(5, 151, 242, 0.3)',
              'rgba(134, 5, 240, 0.15)',
              'rgba(242, 226, 5, 0.3)',
              'rgba(242, 135, 5, 0.3)',
              'rgba(3, 166, 60, 0.3)',
              'rgba(255, 0, 0, 0.3)',
              'rgba(186, 231, 255, 0.5)',
            ],
            borderColor: [
              'rgba(242, 34, 110, 0.7)',
              'rgba(5, 151, 242, 0.7)',
              'rgba(134, 5, 240, 0.7)',
              'rgba(242, 226, 5, 0.7)',
              'rgba(242, 135, 5, 0.7)',
              'rgba(3, 166, 60, 0.7)',
              'rgba(255, 0, 0, 0.7)',
              'rgba(5, 151, 242, 0.7)',
            ],
            borderWidth: 1,
            }
          ]
      }}
      height={500}
      width={500}
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

export default PersonalityChart;