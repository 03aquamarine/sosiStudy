import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import styles from "../routes/Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState({});
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading((current) => !current);
    setMovie(json.data.movie);
    setGenres(json.data.movie.genres);
  }, [id]);
  useEffect(() => {
    if (id !== "" && id.length > 1) {
      getMovie();
    }
  }, [getMovie, id]);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movie}>
          <img
            src={movie.background_image_original}
            alt={movie.background_image_original}
            className={styles.movie__bg_img}
          />
          <div className={styles.movie__header}>
            <div className={styles.movie__big__title}>
              <img
                src={movie.medium_cover_image}
                alt={movie.medium_cover_image}
                className={styles.movie__img}
              />
              <div className={styles.movie__title_text}>
                <div>
                  <h1 className={styles.movie__title}>{movie.title}</h1>
                </div>
                <div className={styles.movie__details}>
                  <div className={styles.movie__year}>
                    <span>{movie.year} • </span>
                    <span>{movie.runtime}mins</span>
                  </div>

                  <div className={styles.movie__rate__row}>
                    <span className={styles.movie__rate}>
                      rate: {movie.rating}
                    </span>
                    <span className={styles.movie__rate}>
                      download: {movie.download_count}
                    </span>
                    <span className={styles.movie__rate}>
                      like: {movie.like_count}{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.movie__genres}>
              {genres.map((g) => (
                <span key={g}>{g} </span>
              ))}
            </div>
            <div className={styles.movie__content}>
              <div>{movie.description_full}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Detail;
