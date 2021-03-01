import { useContext } from 'react';
import { ChallangesContext } from '../contexts/ChallangesContext';
import styles from '../styles/components/ChallangeBox.module.css'

export function ChallangeBox(){
    const { activeChallenge } = useContext(ChallangesContext);

    return (
        <div className={styles.challangeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challangeBoxActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description} </p>
                    </main>

                    <footer>
                        <button 
                            type="button"
                            className={styles.challangeFailButton}
                        >Falhei</button>
                        <button 
                            type="button"
                            className={styles.challangeSucceededButton}
                        >Completei</button>
                    </footer>
                    
                </div>
            ) : (
                <div className={styles.challangeBoxNotActive}>
                    <strong>Finalize um ciclo para receber um desafio. </strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Avance de level completando desadios.
                    </p>
                </div>
            )}
            
        </div>
    )
}