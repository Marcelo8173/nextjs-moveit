import React from 'react';
import styles from '../../styles/components/ExperiencieBar.module.css';

const ExperiencieBar: React.FC = () => {
    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
                <div>
                    <div style={{ width: '50%' }} />
                    <span style={{ left: '50%' }} className={styles.currentExperience}>300 xp</span>
                </div>
            <span>600 px</span>
        </header>
    );
}

export default ExperiencieBar;