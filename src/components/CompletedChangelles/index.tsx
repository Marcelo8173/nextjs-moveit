import style from '../../styles/components/CompletedChangelles.module.css';
import { useContext } from 'react';
import { ChangelleContext } from '../../context/changelleContext';

export default function completedChangelles() {
    const { changellesComplete } = useContext(ChangelleContext);
    
    return (
        <div className={style.container}>
            <span>Desafios completos</span>
            <span>{changellesComplete}</span>
        </div>
    )
}