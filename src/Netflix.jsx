import seriesData from "../src/apis/seriesData.json";
import moviesData from "../src/apis/MoviesData.json";
import { SeriesCard } from "./components/SeriesCard";
import styles from "../src/components/Netflix.module.css";
export const Netflix = () => {
    return (
        <div className={styles.NetflixPage}>
            <img src="netflix.png" alt="" className={styles.logo}/>
                <h2 className={styles.type}>Top Series</h2>
            <div className={styles.SeriesContainer}>
                {seriesData.map((series, index) => (
                   <SeriesCard key={index} series={series}/>
                ))}
            </div>
            <h2 className={styles.type}>Top Movies</h2>
            <div className={styles.MoviesContainer}>
                {moviesData.map((series, index) => (
                   <SeriesCard key={index} series={series}/>
                ))}
            </div>
        </div>
    );
};
