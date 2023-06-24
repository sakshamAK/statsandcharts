import imgUrl from '../../../assets/apple.svg'
import styles from "./AppleAuth.module.css"

export const AppleAuth = () => {
    return (
        <div>
                <button className={styles.gAuth}><img src = {imgUrl} />Sign in with Apple</button>
        </div>
    );
}