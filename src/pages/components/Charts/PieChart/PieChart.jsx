import {
  Chart,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";
import { Pie } from "react-chartjs-2";
import styles from "./PieChart.module.css";
import dropdown from "../../../../assets/dropdown.svg"
import { useEffect, useState } from "react";
import axios from "axios"



export const PieChart = () => {
  const [chartDetails, setChartDetails] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("./api/pie")
        setChartDetails(data.pieGraph);
      }
      catch (e) {
        console.log(e);
      }
    })();
  }, [])
  Chart.register(ArcElement, CategoryScale, LinearScale, Tooltip, Legend);
  const data = {
    labels: chartDetails?.labels,
    datasets: [
      {
        label: "name",
        data: chartDetails?.data,
        backgroundColor: chartDetails?.backgroundColor,
        borderWidth: 0
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      }
    }
  };
  return (
    <>
      <div className={styles.chartDetails}>
        <div className={styles.chartHeader}>
          <h3>Top products</h3>
          <p className={styles.chartTitle}>May - June 2021 <img src={dropdown} alt="dropdown" /> </p>
        </div>
        <div className={styles.pieChartLabels}>
          <div>
            <Pie data={data} options={options} className={styles.lineChart}></Pie>
          </div>
          <div className={styles.chartLabelContainer}>
            {chartDetails?.labels?.map((_, idx) => (
              <div key={chartDetails?.labels[idx]}>
                <h4 className={`${styles.chartLabels} ${styles[chartDetails?.colorLabel[idx]]}`}>{chartDetails?.labels[idx]}</h4>
                <p>{chartDetails?.data[idx]}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
