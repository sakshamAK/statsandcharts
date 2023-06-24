/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"
import { AppleAuth, GoogleAuth } from "../components"
import styles from "./Landing.module.css"

export const Landing = ({setProfile}) => {
    return (
        <div className={styles.landing}>
            <div className={styles.intro}>
                <h1>Board.</h1>
            </div>
            <div className={styles.auth}>
                <div className={styles.authContent}>
                    <div className={styles["auth-labels"]}>
                        <h1>Sign In</h1>
                        <p>Sign in to your account</p>
                    </div>
                    <div className={styles["auth-container"]}>
                        <div className={styles.oauth}>
                            <GoogleAuth setProfile={setProfile} />
                            <AppleAuth />
                        </div>
                        <div className={styles["manual-auth"]}>
                            <div className={styles.inputs}>
                                <div className={styles["login-creds"]}>
                                    <label>Email address</label>
                                    <input type="text" placeholder="johndoe@gmail.com" />
                                </div>
                                <div className={styles["login-creds"]}>
                                    <label>Password</label>
                                    <input type="password" placeholder="••••••••" />
                                </div>
                            </div>
                            <Link className={styles.forgotPass} to="/">Forgot password?</Link>
                            <button className={styles.signin}>Sign In</button>
                        </div>
                    </div>
                    <div className={styles.signup}>Don&apos;t have an account? <Link className={styles.forgotPass} to="/">Register here</Link></div>
                </div>
            </div>
        </div>
    )
}
