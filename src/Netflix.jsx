import seriesData from "../src/apis/seriesData.json";
import { SeriesCard } from "./components/SeriesCard";
import './netflix.css';

export const Netflix = () => {
    return (
        <div className="NetflixPage">
            <img src="netflix.png" alt="" className="logo"/>
                <h2 className="type">Top Series</h2>
            <div className="SeriesContainer">
                {seriesData.map((series, index) => (
                    console.log(series),
                   <SeriesCard key={index} series={series}/>
                ))}
            </div>
            <h2 className="type">Top Movies</h2>
            <div className="MoviesContainer">
                {seriesData.map((series, index) => (
                   <SeriesCard key={index} series={series}/>
                ))}
            </div>
        </div>
    );
};
