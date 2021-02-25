import ExperiencieBar from "../components/ExperiencieBar";
import Profile from '../components/Profile';
import style from '../styles/pages/Home.module.css'
import CompletedChangelles from "../components/CompletedChangelles";
import Countdown from "../components/Countdown";
import ChangelleBox from "../components/changelleBox";

export default function Home() {
  return (
    <div className={style.container}>
      <ExperiencieBar />

      <section>
        <div className="">
          <Profile />
          <CompletedChangelles />
          <Countdown />
        </div>
        <div>
          <ChangelleBox />
        </div>
      </section>
    </div>
  )
}
