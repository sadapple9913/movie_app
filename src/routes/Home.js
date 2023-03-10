import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Movie from '../components/Movie';
import '../styles/Home.css';

// constructor 가 실행되고 render가 실행
function Home() {
  // state = {
  //   isLodading: true,
  //   movies: [],
  // }

  const [isLodading, setIsLoading] = useState(true);
  const [movies, setMoives] = useState([]);

  // componentDidMount(){
  //   // setTimeout(() =>{
  //   //   this.setState({isLodading:false}); //구조분해할당
  //   // },6000)
  //   this.getMovies();
  // }

  useEffect(() => {
    getMovies();
  }, []); //함수형 comtponent에서는 this를 안붙여도된다

  const getMovies = async () =>{ //async는 비동기식이라는 뜻
  const{
    data : {
      data : {
        movies
      }
    }
  } =
  await axios.get('https://yts.mx/api/v2/list_movies.json?genre=Romance&sort_by=like_count') // ?를 붙이면 조건을 붙일수있다 조건에 맞는 데이터를 가져올수있다
  console.log(movies);
  // this.setState({
  //   isLodading:false,
  //   movies,    //movies : movies, //키:키값 이름이 동일하면 하나만 써준다
  // })
  // }
  setIsLoading(false);
  setMoives(movies);

}
    // const {isLodading,movies} = this.state //구조분해할당
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


export default Home; 

