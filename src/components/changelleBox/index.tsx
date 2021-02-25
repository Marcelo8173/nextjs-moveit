import style from '../../styles/components/changelleBox.module.css';

export default function changelleBox() {

    const hasAc = true;

    return (
        <div className={style.container}>
            {hasAc ? 
                <div className={style.active}>
                    <header>Ganhe 400xp</header>
                    <main>
                        <img src="icons/body.svg" alt=""/>
                        <strong>Novo desafio</strong>
                        <p>Levante e faça uma caminhada de 3 minutos</p>
                    </main>

                    <footer>
                        <button className={style.failbutton}>Falhei</button>
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