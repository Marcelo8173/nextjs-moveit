import React, { useContext } from 'react';
import styles from '../../styles/components/ExperiencieBar.module.css';
import { ChangelleContext } from '../../context/changelleContext';

const ExperiencieBar: React.FC = () => {
    const { currentExp, expeNextLevel } = useContext(ChangelleContext);
    
    const percentToNext = Math.round((currentExp * 100)) / expeNextLevel; 
    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
                <div>
                    <div style={{ width: `${percentToNext}%` }} />
                    <span style={{ left: `${percentToNext}0%` }} className={styles.currentExperience}>{currentExp} xp</span>
                </div>
            <span>{expeNextLevel} px</span>
        </header>
    );
}

export default ExperiencieBar;