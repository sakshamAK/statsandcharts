import {
    Chart,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import styles from "./LineChart.module.css";
import dropdown from "../../../../assets/dropdown.svg"
import { useEffect, useState } from "react";
import axios from "axios"



export const LineChart = () => {
    const [chartDetails, setChartDetails] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get("./api/line")
                setChartDetails(data.lineGraph);
            }
            catch (e) {
                console.log(e);
            }
        })();
    }, [])
    Chart.register(
        PointElement,
        LineElement,
        CategoryScale,
        LinearScale,
        Tooltip,
        Legend
    );
    const data = {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
            {
                label: chartDetails?.data1?.label,
                data: chartDetails?.data1?.points,
                borderWidth: 4,
                borderColor: "#E9A0A0",
                tension: 0.4,
                pointRadius: 0,
            },
            {
                label: chartDetails?.data2?.label,
                data: chartDetails?.data2?.points,
                borderWidth: 4,
                borderColor: "#9BDD7C",
                tension: 0.4,
                pointRadius: 0,
            },
        ]
    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Custom Chart Title'
            },
            legend: {
                display: false,
            }
        },
        scales: {
            y: {
                min: 0,
                max: 500,
                ticks: {
                    padding: 0.5,
                },
            },
            x: {
                grid: {
                    display: false,
                },
            },
        },
        barPercentage: 0.1,
        ticks: {
            stepSize: 100,
            padding: 5,
        },
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <>
            <div className={styles.chartDetails}>
                <div className={styles.chartHeader}>
                    <div>
                        <h2>Activities</h2>
                        <p className={styles.chartTitle}>May - June 2021 <img src={dropdown} alt="dropdown" /> </p>
                    </div>
                    <div className={styles.chartLabelContainer}>
                        <span className={styles.chartLabels}>{chartDetails?.data1?.label}</span>
                        <span className={styles.chartLabels}>{chartDetails?.data2?.label}</span>
                    </div>
                </div>
                <div>
                    <Line data={data} options={options} className={styles.lineChart}></Line>
                </div>
            </div>
        </>
    );
}
