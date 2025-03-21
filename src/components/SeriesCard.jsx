import styles from "./Netflix.module.css";
import styled from "styled-components";
const Lh3 = styled.h3({
    fontWeight:"450",
    padding: "0px 10px 0px 10px"
});
export const SeriesCard = ({ series }) => {
    const { name, IMDB, type, summary, watch_url } = series;
    const light={
        fontWeight:"450"
    }
    return (
        <div className={styles.item}>
            <img className={styles.thumbnail} src={series.thumbnail} alt={series.name} />
            <h2 style={{ fontWeight: "bolder" }}>{name}</h2>
            <Lh3>IMDB rating: <span className={(IMDB >= 8.5) ? styles.superhit : styles.average}>{IMDB}</span></Lh3>
            <h3 style={light}>Type: {type}</h3>
            <h4 style={light}>Description: {summary}</h4>
            <a href={watch_url} target="_blank" rel="noopener noreferrer">
                <button style={{ padding: "10px", margin: "0px 10px", background: "red", color: "white", border: "none", cursor: "pointer" }}>
                    Watch Now!!
                </button>
            </a>
        </div>
    );
};
