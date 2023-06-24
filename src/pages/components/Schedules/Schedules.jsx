import styles from './Schedules.module.css'
import dropdown from '../../../assets/dropdown.svg'


export const Schedules = () => {
    return (
        <>
            <div className={styles.schedules}>
                <div className={styles.scheduleHead}>
                    <h3>Today&apos;s schedule</h3>
                    <p className={styles.scheduleTitle}>See All <img src={dropdown} alt="dropdown" /> </p>
                </div>
                <div className={styles.scheduleDesc}>
                    <div className={styles.singleSchedule}>
                        <h4>Check with operational cheif at chad 2</h4>
                        <p>04.00-06.00</p>
                        <p>at Giga Chad</p>
                    </div>
                    <div className={styles.singleSchedule}>
                        <h4>Meeting with suppliers from Kuta Bali</h4>
                        <p>14.00-15.00</p>
                        <p>at Sunset Road, Kuta, Bali</p>
                    </div>
                    <div className={styles.singleSchedule}>
                        <h4>Check operation at Giga Factory 1</h4>
                        <p>18.00-20.00</p>
                        <p>at Central Jakarta</p>
                    </div>
                </div>
            </div></>
    )
}
