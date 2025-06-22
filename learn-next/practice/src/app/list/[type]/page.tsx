import Image from "next/image";
import Link from "next/link";
import home from "../../../../public/icons/home.png";
import live from "../../../../public/icons/live.png";
import video from "../../../../public/icons/video.png";
import search from "../../../../public/icons/search.png";
import popular from "../../../../public/icons/popluar.png";

export default function page() {
  return (
    <>
      <header className="header">
        <h1 className="header__logo">Wave</h1>
        <ul className="header__navi">
          <li>
            <Link href="#">홈</Link>
          </li>
          <li>
            <Link href="#">마테고리</Link>
          </li>
          <li>
            <Link href="#">Movie</Link>
          </li>
          <li>
            <Link href="#">Tv</Link>
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
            <Image src={home} alt="" className="navigator-list__icon" />
            <strong className="navigator-list__txt">홈</strong>
          </li>
          <li className="navigator-list__item">
            <Image src={live} alt="" className="navigator-list__icon" />
            <strong className="navigator-list__txt">상영중</strong>
          </li>
          <li className="navigator-list__item">
            <Image src={video} alt="" className="navigator-list__icon" />
            <strong className="navigator-list__txt">개봉예정</strong>
          </li>
          <li className="navigator-list__item">
            <Image src={search} alt="" className="navigator-list__icon" />
            <strong className="navigator-list__txt">검색</strong>
          </li>
          <li className="navigator-list__item">
            <Image src={popular} alt="" className="navigator-list__icon" />
            <strong className="navigator-list__txt">인기콘텐츠</strong>
          </li>
        </ul>
      </nav>
      <section className="movie list">
        <h4 className="movie-subtext">현재 상영중인 영화</h4>
        <div className="movie-list">
          <div className="movie-list__item">
            <a href="#" className="skeleton-list-item ui0"></a>
          </div>
          <div className="movie-list__item">
            <a href="#">
              <figure>
                <Image
                  src="https://image.tmdb.org/t/p/w300/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg"
                  alt=""
                  width="300"
                  height="300"
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
                <p className="movie-list__desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus dolore alias quas porro voluptas debitis
                  repudiandae similique odio corporis magnam ipsam ex fugit
                  eligendi autem, officiis, culpa dolorem laborum adipisci.
                </p>
                <span className="movie-list__release">
                  2023.11.21 / 평점 7.3
                </span>
              </div>
            </a>
          </div>
          <div className="movie-list__item">
            <a href="#">
              <figure>
                <img
                  src="https://image.tmdb.org/t/p/w300/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg"
                  alt=""
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
                <span className="movie-list__release">
                  2023.11.21 / 평점 7.3
                </span>
              </div>
            </a>
          </div>
          <div className="movie-list__item">
            <a href="#">
              <figure>
                <img
                  src="https://image.tmdb.org/t/p/w300/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg"
                  alt=""
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
                <p className="movie-list__desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus dolore alias quas porro voluptas debitis
                  repudiandae similique odio corporis magnam ipsam ex fugit
                  eligendi autem, officiis, culpa dolorem laborum adipisci.
                </p>
                <span className="movie-list__release">
                  2023.11.21 / 평점 7.3
                </span>
              </div>
            </a>
          </div>
          <div className="movie-list__item">
            <a href="#">
              <figure>
                <img
                  src="https://image.tmdb.org/t/p/w300/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg"
                  alt=""
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
                <p className="movie-list__desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus dolore alias quas porro voluptas debitis
                  repudiandae similique odio corporis magnam ipsam ex fugit
                  eligendi autem, officiis, culpa dolorem laborum adipisci.
                </p>
                <span className="movie-list__release">
                  2023.11.21 / 평점 7.3
                </span>
              </div>
            </a>
          </div>
          <div className="movie-list__item">
            <a href="#">
              <figure>
                <img
                  src="https://image.tmdb.org/t/p/w300/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg"
                  alt=""
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
                <p className="movie-list__desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus dolore alias quas porro voluptas debitis
                  repudiandae similique odio corporis magnam ipsam ex fugit
                  eligendi autem, officiis, culpa dolorem laborum adipisci.
                </p>
                <span className="movie-list__release">
                  2023.11.21 / 평점 7.3
                </span>
              </div>
            </a>
          </div>
          <div className="movie-list__item">
            <a href="#">
              <figure>
                <img
                  src="https://image.tmdb.org/t/p/w300/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg"
                  alt=""
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
                <p className="movie-list__desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus dolore alias quas porro voluptas debitis
                  repudiandae similique odio corporis magnam ipsam ex fugit
                  eligendi autem, officiis, culpa dolorem laborum adipisci.
                </p>
                <span className="movie-list__release">
                  2023.11.21 / 평점 7.3
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
