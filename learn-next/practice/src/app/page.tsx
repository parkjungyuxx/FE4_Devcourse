"use client";

import Image from "next/image";
import home_icon from "../../public/icons/home.png";
import live_icon from "../../public/icons/live.png";
import popluar_icon from "../../public/icons/popluar.png";
import video_icon from "../../public/icons/video.png";
import search_icon from "../../public/icons/search.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import {
  fetchNowPlayingMovie,
  fetchPopularMovie,
  fetchTopRatedMovie,
  fetchUpcomingMovie,
} from "@/apis/fetchMovie";

interface MovieType {
  adult: boolean;
  id: number;
  overview: string;
  title: string;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

export default function Home() {
  const [nowPlaying, setNowPlaying] = useState<MovieType[]>([]);
  const [upComing, setUpcoming] = useState<MovieType[]>([]);
  const [popular, setPopular] = useState<MovieType[]>([]);
  const [topRated, setTopRated] = useState<MovieType[]>([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      const nowplayingData = await fetchNowPlayingMovie();
      const upcomingData = await fetchUpcomingMovie();
      const popularData = await fetchPopularMovie();
      const topRatedData = await fetchTopRatedMovie();

      console.log(topRatedData);
      setNowPlaying(nowplayingData.results);
      setUpcoming(upcomingData.results);
      setPopular(popularData.results);
      setTopRated(topRatedData.results);
    };
    fetchMovieData();
  }, []);

  return (
    <>
      <header className="header">
        <a href="#">
          <h1 className="header__logo">Wave</h1>
        </a>
        <ul className="header__navi">
          <li>
            <a href="#">상영중</a>
          </li>
          <li>
            <a href="#">인기작</a>
          </li>
          <li>
            <a href="#">개봉예정</a>
          </li>
        </ul>
        <div className="header-search">
          <input
            type="text"
            className="header-search__input"
            placeholder="제목으로 찾아보세요."
          />
          <span className="material-symbols-outlined icon"> search </span>
        </div>
      </header>
      <nav className="navigator">
        <ul className="navigator-list">
          <li className="navigator-list__item">
            <Image src={home_icon} alt="" className="navigator-list__icon" />
            <strong className="navigator-list__txt">메인</strong>
          </li>
          <li className="navigator-list__item">
            <Image src={live_icon} alt="" className="navigator-list__icon" />
            <strong className="navigator-list__txt">상영중</strong>
          </li>
          <li className="navigator-list__item">
            <Image src={popluar_icon} alt="" className="navigator-list__icon" />
            <strong className="navigator-list__txt">인기작</strong>
          </li>

          <li className="navigator-list__item">
            <Image src={video_icon} alt="" className="navigator-list__icon" />
            <strong className="navigator-list__txt">개봉예정</strong>
          </li>
          <li className="navigator-list__item">
            <Image src={search_icon} alt="" className="navigator-list__icon" />
            <strong className="navigator-list__txt">검색</strong>
          </li>
        </ul>
      </nav>
      <section className="search-box">
        <div className="search-input">
          <div className="search-wrap">
            <button>x</button>
            <input
              type="text"
              placeholder="영화 제목을 입력하세요"
              autoComplete="off"
            />
            <span className="material-symbols-outlined icon"> search </span>
          </div>
        </div>
      </section>
      <section className="release">
        <div
          className="release-item"
          style={{
            backgroundImage: `url(
              "https://image.tmdb.org/t/p/w500//t5zCBSB5xMDKcDqe91qahCOUYVV.jpg"
            )`,
          }}
        >
          <div className="release__text">
            <strong className="release__category">NEW RELEASE</strong>
            <h2 className="release__title">Soviet : The Cold War</h2>
            <p className="release__desc">
              Her senses grow sharper, her thinking clearer, and for the first
              time in her life she feels herself fully in control. By the age of
              sixteen, she&apos;s competing for the U.S.
            </p>
            <button className="release__btn">자세히보기</button>
          </div>
        </div>
      </section>
      <section className="movie">
        <h3 className="movie-category">Now Movies</h3>
        <h4 className="movie-subtext">
          상영중인 영화 <a href="#">더보기</a>
        </h4>
        {/* <div className="movie-list__item">
            <Link href="#" className="skeleton-list-item ui0">
              {" "}
            </Link>
          </div> */}
        <Swiper spaceBetween={0} slidesPerView={5} className="movie-list">
          {nowPlaying.map((movie) => (
            <SwiperSlide className="movie-list__item" key={movie.id}>
              <Link href="#">
                <figure>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt=""
                    width={300}
                    height={300}
                  />
                </figure>
                <div className="movie-list__txt">
                  <div className="progress-circle p50">
                    <span>{Math.round(movie.vote_average * 10)}</span>
                    <div className="left-half-clipper">
                      <div className="first50-bar"></div>
                      <div className="value-bar"></div>
                    </div>
                  </div>
                  <strong className="movie-list__title">{movie.title}</strong>
                  <span className="release_date">{movie.release_date}</span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className="movie-list__item">
            <Link href="#">
              <figure>
                <Image
                  src="https://image.tmdb.org/t/p/w500//clJYtRBUhDtvKhPk2HNfXouviKF.jpg"
                  alt=""
                  width="500"
                  height="500"
                />
              </figure>
              <div className="movie-list__txt">
                <div className="progress-circle p50">
                  <span>10%</span>
                  <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                  </div>
                </div>
                <strong className="movie-list__title">Civil War</strong>
                <span className="release_date">2023.11.21</span>
              </div>
            </Link>
          </div>
          <div className="movie-list__item">
            <Link href="#">
              <figure>
                <Image
                  src="https://image.tmdb.org/t/p/w500//gqkJSh8pqMdiWwPfRNJGQkuivDi.jpg"
                  alt=""
                  width="500"
                  height="500"
                />
              </figure>
              <div className="movie-list__txt">
                <div className="progress-circle p50">
                  <span>10%</span>
                  <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                  </div>
                </div>
                <strong className="movie-list__title">Civil War</strong>
                <span className="release_date">2023.11.21</span>
              </div>
            </Link>
          </div>
          <div className="movie-list__item">
            <Link href="#">
              <figure>
                <Image
                  src="https://image.tmdb.org/t/p/w500//clJYtRBUhDtvKhPk2HNfXouviKF.jpg"
                  alt=""
                  width="500"
                  height="500"
                />
              </figure>
              <div className="movie-list__txt">
                <div className="progress-circle p50">
                  <span>10%</span>
                  <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                  </div>
                </div>
                <strong className="movie-list__title">Civil War</strong>
                <span className="release_date">2023.11.21</span>
              </div>
            </Link>
          </div> */}
      </section>
      <section className="movie">
        <h3 className="movie-category">Now Popular</h3>
        <h4 className="movie-subtext">
          인기있는 영화 <a href="#">더보기</a>
        </h4>
        <Swiper spaceBetween={0} slidesPerView={5} className="movie-list">
          {popular.map((movie) => (
            <SwiperSlide className="movie-list__item" key={movie.id}>
              <Link href="#">
                <figure>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt=""
                    width={300}
                    height={300}
                  />
                </figure>
                <div className="movie-list__txt">
                  <div className="progress-circle p50">
                    <span>{Math.round(movie.vote_average * 10)}</span>
                    <div className="left-half-clipper">
                      <div className="first50-bar"></div>
                      <div className="value-bar"></div>
                    </div>
                  </div>
                  <strong className="movie-list__title">{movie.title}</strong>
                  <span className="release_date">{movie.release_date}</span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="movie">
        <h3 className="movie-category">UP Comming</h3>
        <h4 className="movie-subtext">
          개봉예정 영화 <a href="#">더보기</a>
        </h4>
        <Swiper spaceBetween={0} slidesPerView={5} className="movie-list">
          {upComing.map((movie) => (
            <SwiperSlide className="movie-list__item" key={movie.id}>
              <Link href="#">
                <figure>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt=""
                    width={300}
                    height={300}
                  />
                </figure>
                <div className="movie-list__txt">
                  <div className="progress-circle p50">
                    <span>{Math.round(movie.vote_average * 10)}</span>
                    <div className="left-half-clipper">
                      <div className="first50-bar"></div>
                      <div className="value-bar"></div>
                    </div>
                  </div>
                  <strong className="movie-list__title">{movie.title}</strong>
                  <span className="release_date">{movie.release_date}</span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="movie">
        <h3 className="movie-category">TOP Rated</h3>
        <h4 className="movie-subtext">
          높은 평점을 받은 영화 <a href="#">더보기</a>
        </h4>
        <Swiper spaceBetween={0} slidesPerView={5} className="movie-list">
          {topRated.map((movie) => (
            <SwiperSlide className="movie-list__item" key={movie.id}>
              <Link href="#">
                <figure>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt=""
                    width={300}
                    height={300}
                  />
                </figure>
                <div className="movie-list__txt">
                  <div className="progress-circle p50">
                    <span>{Math.round(movie.vote_average * 10)}</span>
                    <div className="left-half-clipper">
                      <div className="first50-bar"></div>
                      <div className="value-bar"></div>
                    </div>
                  </div>
                  <strong className="movie-list__title">{movie.title}</strong>
                  <span className="release_date">{movie.release_date}</span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <footer className="footer">
        <p>copyright @ sucoding vuejs course</p>
      </footer>
    </>
  );
}
