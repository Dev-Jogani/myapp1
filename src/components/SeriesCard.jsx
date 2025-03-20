export const SeriesCard = ({series}) => {
    const {name,IMDB,type,summary,watch_url} = series;
    return (
        <div className="item">
            <img className="thumbnail" src={series.thumbnail} alt={series.name} />
            <h2>Title: {name}</h2>
            <h3>IMDB rating: {IMDB}</h3>
            <h3>Type: {type}</h3>
            <h4>Description: {summary}</h4>
            <a href={watch_url} target="_blank" rel="noopener noreferrer">
                <button style={{ padding: "10px", background: "red", color: "white", border: "none", cursor: "pointer" }}>
                    Watch Now!!
                </button>
            </a>
        </div>
    );
};