import { useState, useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import imgUrl from '../../../assets/google-icon 1.svg'
import styles from "./GoogleAuth.module.css"
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export const GoogleAuth = ({ setProfile }) => {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });


    useEffect(
        () => {
            (async () => {
                try {

                    if (user) {
                        localStorage.setItem("token", user.access_token);
                        await axios.get("/api/google")
                        if (JSON.parse(localStorage.getItem("user")).id) {
                            navigate("/dashboard")
                            console.log(JSON.parse(localStorage.getItem("user")));
                            setProfile(JSON.parse(localStorage.getItem("user")));
                        }
                    }
                }
                catch (err) {
                    console.log(err)
                }
            }
            )();
        },
        [user, navigate, setProfile]
    );

    return (
        <div>
            <button className={styles.gAuth} onClick={() => login()}><img src={imgUrl} />Sign in with Google</button>
        </div>
    );
}