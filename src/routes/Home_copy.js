import axios from 'axios';
import React, {Component} from 'react';
import Movie from '../components/Movie';
import '../styles/Home.css';

// constructor 가 실행되고 render가 실행
export class Home extends Component {
  state = {
    isLodading: true,
    movies: [],
  }
  componentDidMount(){
    // setTimeout(() =>{
    //   this.setState({isLodading:false}); //구조분해할당
    // },6000)
    this.getMovies();
  }

  getMovies = async () =>{ //async는 비동기식이라는 뜻
  const{
    data : {
      data : {
        movies
      }
    }
  } =
  await axios.get('https://yts.mx/api/v2/list_movies.json?genre=Romance&sort_by=like_count') // ?를 붙이면 조건을 붙일수있다 조건에 맞는 데이터를 가져올수있다
  console.log(movies);
  this.setState({
    isLodading:false,
    movies,    //movies : movies, //키:키값 이름이 동일하면 하나만 써준다
  })
  }

  render() {
    const {isLodading,movies} = this.state //구조분해할당
;    return (
      <section className='container'>
        {isLodading ? 
        <div className='loader'>
            <span className='loader_text'>'Loading...'</span>
        </div>
        :
        <div className='movies'>
          {movies.map((movie,index) => <Movie
                                          key={index}
                                          id={movie.id}
                                          year={movie.year}
                                          title={movie.title}
                                          summary={movie.summary}
                                          poster={movie.medium_cover_image}
                                          genres={movie.genres}      
                                      />
                      )
          }
        </div>
        }
      </section>
    );
  }
}

export default Home; 

/* <div>
<h1>현재 숫자는 입니다.{count}</h1>
<button onClick={this.add}>더하기</button>
<button onClick={this.minus}>빼기</button>
</div>
<Cake/> */
 
