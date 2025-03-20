import seriesData from "../src/apis/seriesData.json";
import './netflix.css';

export const Netflix = () => {
    return (
        <div className="NetflixPage">
            <div className="Container">
                {seriesData.map((series, index) => (
                    <div className="item" key={index}>
                        <img className="thumbnail" src={series.thumbnail} alt={series.name} />
                        <h2>Title: {series.name}</h2>
                        <h3>IMDB rating: {series.IMDB}</h3>
                        <h3>Type: {series.type}</h3>
                        {/* <h4>Description: {series.summary}</h4> */}
                        <a href={series.watch_url} target="_blank" rel="noopener noreferrer">
                            <button style={{ padding: "10px", background: "red", color: "white", border: "none", cursor: "pointer" }}>
                                Watch Now!!
                            </button>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};
