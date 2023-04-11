import React from "react";

import { useEffect, useState } from "react";
import MovieRow from "../../components/MovieRow";
import Featured from "../../components/FeaturedMovies/index";
import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import getHomeList from "../../api/getHomeList";
import getMovieInfo from "../../api/getMovieInfo";
import CookieBanner from "../../components/CookieConsent";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

// setError,

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  useEffect(() => {
    const loadAll = async () => {
      const list = await getHomeList();
      setMovieList(list);

      const originals = list.filter((i) => i.slug === "sci-fi");
      const randomChosen = Math.floor(
        Math.random() * (originals[0].items?.results.length - 1)
      );
      const chosen = originals[0].items?.results[randomChosen];
      const chosenInfo = await getMovieInfo(chosen.id, "movie");
      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div>
      <Header black={blackHeader} />
      {featuredData && <Featured item={featuredData} />}

      {!movieList.length && (
        <div className="loading">
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </div>
      )}
      <section>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} movies={item.items?.results} />
        ))}
      </section>
      <Footer />
      {/* <CookieBanner /> */}
    </div>
  );
};

export default Home;
