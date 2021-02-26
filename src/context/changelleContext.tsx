import { createContext, ReactNode, useState } from 'react';
import changelles from '../../challenges.json';

interface Iprops{
    children: ReactNode;
}

interface ChangelleProp{
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface Idata{
    acChan: ChangelleProp;
    changellesComplete: number;
    level: number;
    currentExp: number;
    startNew: () => void;
    reset: () => void;
    expeNextLevel: number;
}
export const ChangelleContext = createContext({} as Idata);

export function ChangelleProvider({ children }: Iprops) {
    
    const [level, setLevel] = useState(1);
    const [currentExp, setCurrentExp] = useState(0);
    const [changellesComplete, setChangellesComplete] = useState(0);
    const [acChan, setAcChan] = useState(null);

    const expeNextLevel = Math.pow((level +1 ) *4 ,2)
        
    function startNew() {
        const randoCh = Math.floor(Math.random() * changelles.length)
        const changelle = changelles[randoCh];
        setAcChan(changelle)
    }

    function reset() {
        setAcChan(null);
    }
    return (
        <ChangelleContext.Provider value={{
            changellesComplete,
            level,
            currentExp,
            startNew,
            acChan,
            reset,
            expeNextLevel
        }}>
            {children}
        </ChangelleContext.Provider>
    )
}