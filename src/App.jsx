import React, { useEffect, useState } from "react";

import MovieRow from "./components/MovieRow/MovieRow";
import "./App.css";
import Featured from "./components/FeaturedMovies/FeaturedMovies";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import GetHomeList from "./components/GetHomeList";
import GetMovieInfo from "./Tmbd";

{
  /* <Routes>
    <Route path={ROUTES.HOME} element={<Home />} exact />
    <Route path={ROUTES.PROFILE} element={<Profile />} />
    <Route path={ROUTES.SETTINGS} element={<Settings />} />
    

    <Route path="*" element={<NotFound />} />

    {/* <Route path='*' element={<NotFound />}  
    </Routes>*/
}

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  useEffect(() => {
    const loadAll = async () => {
      // заг список
      const list = await GetHomeList();
      console.log(list);
      setMovieList(list);

      const originals = list.filter((i) => i.slug === "sci-fi");
      const randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      const chosen = originals[0].items.results[randomChosen];
      const chosenInfo = await GetMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo);

      console.log(chosenInfo);
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
    <div className="page">
      <Header black={blackHeader} />
      {featuredData && <Featured item={featuredData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      {movieList.length <= 0 && (
        <div className="loading">
          <img
            src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"
            alt="Loading"
            size={13}
          ></img>
        </div>
      )}
      <Footer />
    </div>
  );
};
export default App;
