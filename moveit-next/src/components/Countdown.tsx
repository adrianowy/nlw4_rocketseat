import { TIMEOUT } from 'dns';
import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css'

export function Countdown(){

    const [time, setTime] = useState(23*60);
    const [active, setActive] = useState(false);

    const minutes = Math.floor(time/60);
    const seconds = time%60;

    const [minLeft, minRight] = String(minutes).padStart(2,'0').split('');
    const [secLeft, secRight] = String(seconds).padStart(2,'0').split('');

    function startCount(){
        setActive(!active);
    }

    useEffect(() => {
        if(active && time > 0){
            setTimeout(()=>{
                setTime(time-1);
            }, 1000);
        }
    }, [active, time])

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minLeft}</span>
                    <span>{minRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secLeft}</span>
                    <span>{secRight}</span>
                </div>
            </div>

            <button 
                type="button" 
                className={styles.countdownButton}
                onClick={startCount}
            >
                Iniciar Ciclo
            </button>
        </div>
    );
}