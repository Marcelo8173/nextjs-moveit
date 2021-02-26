import { createContext, ReactNode, useState } from 'react';


interface Iprops{
    children: ReactNode;
}

interface Idata{
    changellesComplete: number;
    level: number;
    currentExp: number;
    startNew: () => void;
}
export const ChangelleContext = createContext({} as Idata);

export function ChangelleProvider({ children }: Iprops) {
    
    const [level, setLevel] = useState(1);
    const [currentExp, setCurrentExp] = useState(0);
    const [changellesComplete, setChangellesComplete] = useState(0);

    function startNew() {
        
    }
    return (
        <ChangelleContext.Provider value={{
            changellesComplete,
            level,
            currentExp,
            startNew
        }}>
            {children}
        </ChangelleContext.Provider>
    )
}