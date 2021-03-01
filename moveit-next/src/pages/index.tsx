import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallanges } from "../components/CompletedChallanges";
import { Countdown } from "../components/Countdown";
import { ChallangeBox } from "../components/ChallangeBox";

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar/>
      <section>
        <div>
          <Profile/>
          <CompletedChallanges/>
          <Countdown/>
        </div>
        <div>
          <ChallangeBox/>
        </div>
      </section>
    </div>
  )
}
