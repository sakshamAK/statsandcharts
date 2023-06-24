/* eslint-disable react/prop-types */
import styles from './DataCard.module.css'

export const DataCard = ({bgColor, icon, title, value}) => {
  return (
    <div className={styles.datacard}  style = {{backgroundColor: bgColor}}>
        <img className={styles["datacard-icon"]} src={icon} />
        <p>{title}</p>
        <h1>{value}</h1>
    </div>
  )
}
