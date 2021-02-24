import style from '../../styles/components/Countdown.module.css';
import { useState, useEffect } from 'react';

export default function Countdown() {

    const [time, setTime] = useState(25 * 60);
    const [ativo, setAtivo] = useState(false);

    const minutes = Math.floor(time / 60);
    const second = Math.floor(time % 60);
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft,secondRight] = String(second).padStart(2, '0').split('');

    function startCount(){
        setAtivo(true);
    };

    useEffect(() => {
        if (ativo && time > 0) {
            setTimeout(() => {
                setTime(time - 1);
            },1000)
        }
    },[ativo,time])
    
    return (
        <> 
        <div className={style.container}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
            </div>

            <button type="button" onClick={startCount} className={style.buttonCount}>Iniciar um ciclo</button>
        </>
    )
};