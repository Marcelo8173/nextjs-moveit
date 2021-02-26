import style from '../../styles/components/changelleBox.module.css';
import { useContext } from 'react';
import { ChangelleContext } from '../../context/changelleContext';

export default function changelleBox() {
    const {acChan,reset } = useContext(ChangelleContext);

    return (
        <div className={style.container}>
            {acChan ? 
                <div className={style.active}>
                    <header>Ganhe {acChan.amount}xp</header>
                    <main>
                        <img src={`icons/${acChan.type}.svg`} alt=""/>
                        <strong>Novo desafio</strong>
                        <p>{acChan.description}</p>
                    </main>

                    <footer>
                        <button onClick={reset} className={style.failbutton}>Falhei</button>
                        <button className={style.failsucess}>Completei</button>
                    </footer>
                </div>
            :
                <div className={style.noactive}>
                    <strong>Inicie um ciclo
                    para receber desafios a
                    serem completados</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="" />
                        Complete-os e ganhe
                        experiência e avance de leve.
                    </p>
                </div>
            }
        </div>
    )
}