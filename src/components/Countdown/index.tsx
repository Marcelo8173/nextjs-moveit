import style from '../../styles/components/Countdown.module.css';
import { useState, useEffect } from 'react';

let countDownTimeOut: NodeJS.Timeout

export default function Countdown() {

    const [time, setTime] = useState(25 * 60);
    const [isAtivo, setAtivo] = useState(false);
    const [hasEnd, setHasEnd] = useState(false);

    const minutes = Math.floor(time / 60);
    const second = Math.floor(time % 60);
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft,secondRight] = String(second).padStart(2, '0').split('');

    function startCount(){
        setAtivo(true);
    };

    function endCount() {
        clearTimeout(countDownTimeOut);
        setAtivo(false);
        setTime(25 * 60);
    }

    useEffect(() => {
        if (isAtivo && time > 0) {
            countDownTimeOut = setTimeout(() => {
                setTime(time - 1);
            },1000)
        } else if (isAtivo && time === 0) {
            setHasEnd(true);
            setAtivo(false);
        }
    },[isAtivo,time])
    
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

            {!isAtivo ?
                <button type="button" onClick={startCount} className={style.buttonCount}>
                    Inicionar ciclo
                </button>
                :
                <button type="button" onClick={endCount} className={`${style.buttonCount} ${style.buttonCountActive}`}>
                    Abandonar ciclo
                </button>
            }
        </>
    )
};