// ReactNode: quando o children de um componente tambpém é um componente, pode se usar
// essa metodo para importar

import {createContext, useState, ReactNode} from 'react';
import challenges from '../../chellenges.json';

interface Challenge{
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallangesContextData{
    level: number;
    currentExperience: number;
    challangesCompleted: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    startNewChallange: () => void;
}

interface ChallangesProviderProps{
    children: ReactNode;
}

export const ChallangesContext = createContext({} as ChallangesContextData);

export function ChallangesProvider({children}: ChallangesProviderProps){

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challangesCompleted, setChallangesCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null);

    function levelUp(){
        setLevel(level+1);
    }

    function startNewChallange(){
        const randomChallengesIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengesIndex];

        setActiveChallenge(challenge);
    }

    return (
        <ChallangesContext.Provider
            value={{
                level, 
                currentExperience, 
                challangesCompleted, 
                levelUp,
                startNewChallange,
                activeChallenge
            }}
        >
            {children}
        </ChallangesContext.Provider>
    )

}