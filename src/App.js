import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

// const movies = [
//   {
//     title: "퍼스트 어벤져",
//     poster: "https://search.pstatic.net/common?type=o&size=120x171&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20111223_44%2F1324635585945KDOJ5_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
//   },
//   {
//     title: "캡틴마블",
//     poster: "https://search.pstatic.net/common?type=o&size=120x171&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20190225_72%2F1551069530582h2huX_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
//   },
//   {
//     title: "아이언맨1",
//     poster: "https://search.pstatic.net/common?type=o&size=120x171&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20111222_37%2F1324501632182vbSoY_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
//   },
//   {
//     title: "아이언맨2",
//     poster: "https://search.pstatic.net/common?type=o&size=120x171&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20111223_163%2F1324610044306xOc34_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
//   },

//   {
//     title: "인크레더블 헐크",
//     poster: "https://search.pstatic.net/common?type=o&size=120x171&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20111222_21%2F1324529563793t6TEo_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
//   },
//   {
//     title: "토르: 천둥의 신",
//     poster: "https://search.pstatic.net/common?type=o&size=120x171&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20111223_276%2F1324635844036eo9sS_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
//   },
//   {
//     title: "어벤져스",
//     poster: "https://search.pstatic.net/common?type=o&size=120x171&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20120426_172%2F1335428116411i030K_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
//   },
//   {
//     title: "아이언맨3",
//     poster: "https://search.pstatic.net/common?type=o&size=120x171&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20130311_165%2F13629835475487aDfz_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
//   },

//   {
//     title: "토르: 다크월드",
//     poster: "https://search.pstatic.net/common?type=o&size=120x171&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20130930_95%2F1380517012698Dpvj5_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
//   },
//   {
//     title: "캡틴 아메리카: 윈터 솔져",
//     poster: "https://search.pstatic.net/common?type=o&size=120x171&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20140320_56%2F1395301906218FkBsV_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
//   },
//   {
//     title: "가디언 오브 갤럭시",
//     poster: "https://search.pstatic.net/common?type=o&size=120x171&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20170811_107%2F1502432301446njv93_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
//   },
//   {
//     title: "가디언 오브 갤럭시 VOL.2",
//     poster: "https://search.pstatic.net/common?type=o&size=120x171&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20170329_6%2F1490752948552vH5G8_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
//   },

//   {
//     title: "어벤져스: 에이지 오브 울트론",
//     poster: "https://search.pstatic.net/common?type=o&size=120x171&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20150324_33%2F1427159150181p9uQM_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
//   },
//   {
//     title: "앤트맨",
//     poster: "https://search.pstatic.net/common?type=o&size=120x171&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20150723_140%2F1437613988558Y8rfz_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
//   },
//   {
//     title: "캡틴 아메리카: 시빌 워",
//     poster: "https://search.pstatic.net/common?type=o&size=120x171&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20160427_273%2F1461725031863moaJw_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
//   },
//   {
//     title: "스파이더맨: 홈커밍",
//     poster: "https://search.pstatic.net/common?type=o&size=120x171&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20170524_188%2F1495610958516Vt5jr_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
//   },

//   {
//     title: "닥터 스트레인지",
//     poster: "https://search.pstatic.net/common?type=o&size=120x171&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20161014_50%2F147640824152266AVn_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
//   },
//   {
//     title: "블랙 팬서",
//     poster: "https://search.pstatic.net/common?type=o&size=120x171&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20180103_128%2F1514946690065uYxwW_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
//   },
//   {
//     title: "토르: 라그나로크",
//     poster: "https://search.pstatic.net/common?type=o&size=120x171&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20170928_85%2F1506564710105ua5fS_PNG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
//   },
//   {
//     title: "어벤져스: 인피니티 워",
//     poster: "https://search.pstatic.net/common?type=o&size=120x171&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20180322_242%2F15216962441485x5Om_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
//   },

//   {
//     title: "앤트맨과 와스프",
//     poster: "https://search.pstatic.net/common?type=o&size=120x171&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20180530_170%2F1527645793223uhWgz_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
//   },
//   {
//     title: "어벤져스: 엔드게임",
//     poster: "https://search.pstatic.net/common?type=o&size=120x171&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20190417_250%2F1555465284425i6WQE_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
//   },
// ];

class App extends Component{

  state = {
  }

  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentWillReceiveProps() -> shouldComponentUpdate() -> cocmponentWillUpdate() -> render() -> componentDidUpdate();
  // 업데이트는 setState 가 동작할 때 발생한다.
    
  componentWillMount() {
      console.log('WillMount');
  }

  componentDidMount() {
      console.log('DidMount');
      this._getMovies();
  }
  
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      console.log(movie);
      return (<Movie
                title={movie.title} 
                poster={movie.medium_cover_image} 
                genres={movie.genres} 
                synopsis={movie.synopsis} 
                key={index}
              ></Movie>);
    });
    return movies;
  }

 _getMovies = async () => {
    const _movies = await this._callApi();
    this.setState({
      movies: _movies
    });
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(res => res.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err));
  }

  render() {
    console.log('render');
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : 'Loading..' }
      </div>
    );
  }
}

export default App;
