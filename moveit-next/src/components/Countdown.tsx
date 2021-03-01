import { useState, useEffect, useContext } from 'react';
import { ChallangesContext } from '../contexts/ChallangesContext';
import styles from '../styles/components/Countdown.module.css';

let countdownTimout: NodeJS.Timeout;

export function Countdown(){

    const { startNewChallange } = useContext(ChallangesContext);

    const [time, setTime] = useState(0.05*60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time/60);
    const seconds = time%60;

    const [minLeft, minRight] = String(minutes).padStart(2,'0').split('');
    const [secLeft, secRight] = String(seconds).padStart(2,'0').split('');

    function startCount(){
        setIsActive(true);
    }

    function resetCount(){
        clearTimeout(countdownTimout);
        setIsActive(false);
        setTime(0.05*60);
    }

    useEffect(() => {
        if(isActive && time > 0){
            countdownTimout = setTimeout(()=>{
                setTime(time-1);
            }, 1000);
        }else if (isActive && time === 0){
            setHasFinished(true);
            setIsActive(false);
            startNewChallange();
        }
    }, [isActive, time])

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

            {hasFinished ? (
                <button
                    disabled
                    className={styles.countdownButton}
                >
                    Ciclo Encerrado
                </button>
            ) : (
                <>
                    {isActive ? (
                        <button 
                            type="button" 
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            onClick={resetCount}
                        >
                            Abandonar Clico
                        </button>
                    ) : (
                        <button 
                            type="button" 
                            className={styles.countdownButton}
                            onClick={startCount}
                        >
                            Iniciar Ciclo
                        </button>
                    )}
                </>
            )}
        </div>
    );
}