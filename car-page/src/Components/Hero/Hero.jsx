import styles from './hero.module.css'
import arrow_btn from '../../Assets/arrow_btn.png'
import play_icon from '../../Assets/play_icon.png'
import pause_icon from '../../Assets/pause_icon.png'
export default function Hero({setplayStatus,heroData,heroCount,setheroCount,playStatus}) {
    return (
        <div className={styles.hero}>
            <div className={styles.hero_text}>
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
            <div className={styles.hero_explore}>
                <p>Explore the features</p>
                <img src={arrow_btn} alt="" />
            </div>
            <div className={styles.hero_dot_play}>
                <ul className={styles.hero_dots}>
                    <li onClick={() => setheroCount(0)} className={heroCount === 0 ? `${styles.hero_dot} ${styles.orange}` : styles.hero_dot}></li>
                    <li onClick={() => setheroCount(1)} className={heroCount === 1 ? `${styles.hero_dot} ${styles.orange}` : styles.hero_dot}></li>
                    <li onClick={() => setheroCount(2)} className={heroCount === 2 ? `${styles.hero_dot} ${styles.orange}` : styles.hero_dot}></li>
                </ul>
                <div className={styles.hero_play}>
                    <img onClick={()=>setplayStatus(!playStatus)}src={playStatus?pause_icon:play_icon} alt="" />
                    <p>See the video</p>
                </div>
            </div>
         </div>
)}