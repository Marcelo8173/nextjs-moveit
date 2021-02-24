import styles from '../../styles/components/Profile.module.css';

export default function profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/50594445?s=460&u=16dac43ef18932d9fe3d30b7e19f76bb9c0d170c&v=4" alt="" />
            <div>
                <strong>Marcelo andre</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                Level 1</p>
            </div>
        </div>
    );
}