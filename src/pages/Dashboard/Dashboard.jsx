/* eslint-disable react/prop-types */
import styles from "./Dashboard.module.css"
import dashboard from "../../assets/dashboard_icon.svg"
import transaction from "../../assets/transaction_icon.svg"
import user from "../../assets/user_icon.svg"
import setting from "../../assets/setting_icon.svg"
import schedule from "../../assets/schedule_icon.svg"
import search from "../../assets/Search_icon.svg"
import bell from "../../assets/bell.svg"
import { NavLink, useNavigate } from "react-router-dom"
import { DataCard, LineChart } from "../components"
import { PieChart } from "../components/Charts/PieChart/PieChart"
import { Schedules } from "../components/Schedules/Schedules"
import { useEffect, useState } from "react"
import axios from "axios"
import { googleLogout } from "@react-oauth/google"



export const Dashboard = ({ profile, setProfile }) => {
    const [headers, setHeaders] = useState([]);
    const [left, setLeft] = useState("-20rem");
    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            try {
                setProfile(JSON.parse(localStorage.getItem("user")))
                const { data } = await axios.get("./api/data")
                setHeaders(data.headerData);
            }
            catch (e) {
                console.log(e);
            }
        })();
    }, [])

    const logOut = () => {
        googleLogout();
        setProfile({});
        navigate("/");
    };


    return (
        <div className={styles.dashboard}>
            <div className={styles["side-menu"]} style = {{left}}>
                <h1 onClick={() => setLeft("-20rem")} style={{cursor: "pointer"}}>Board.</h1>
                <div className={styles["menu-options"]}>
                    <NavLink className={({ isActive }) => isActive ? styles.active : styles.regular} to="/dashboard"><img src={dashboard} alt="dashboard" />Dashboard</NavLink>
                    <NavLink className={({ isActive }) => isActive ? styles.active : styles.regular} to="/"><img src={transaction} alt="transaction" />Transactions</NavLink>
                    <NavLink className={({ isActive }) => isActive ? styles.active : styles.regular} to="/"><img src={schedule} alt="schedule" />Schedules</NavLink>
                    <NavLink className={({ isActive }) => isActive ? styles.active : styles.regular} to="/"><img src={user} alt="user" />Users</NavLink>
                    <NavLink className={({ isActive }) => isActive ? styles.active : styles.regular} to="/"><img src={setting} alt="setting" />Settings</NavLink>
                </div>
                <div className={styles["menu-footer"]}>
                    <NavLink className={({ isActive }) => isActive ? styles.active : styles.regular} to="/">Help</NavLink>
                    <NavLink className={({ isActive }) => isActive ? styles.active : styles.regular} to="/">Contact Us</NavLink>
                </div>
            </div>
            <div className={styles["main-body"]}>
                <div className={styles["header"]}>
                    <h1 onClick={() => setLeft(p => p === "2rem" ? "-20rem": "2rem")}>Dashboard</h1>
                    <div className={styles["profile-settings"]}>
                        <div className={styles["search-container"]}>
                            <input type="text" className={styles.searchbar} placeholder="Search..." /><img src={search} alt="search" />
                        </div>
                        <img src={bell} alt="bell" />
                        <img className={styles["profile-picture"]} onClick = {() => logOut()} src={profile?.picture} alt="profile.img" />
                    </div>
                </div>
                <div className={styles.stats}>
                    {headers && headers?.map(({ id, title, value, icon, bgColor }) => (<DataCard key={id} bgColor={bgColor} icon={icon} title={title} value={value} />))}
                </div>
                <LineChart />
                <div className={styles.piestats}>
                    <PieChart />
                    <Schedules />
                </div>
            </div>
        </div>
    )
}
