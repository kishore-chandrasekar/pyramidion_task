import logo from './logo.svg';
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { addJsonData } from './redux/actions';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const jsonDataArray = useSelector(state => state.jsonDataArray);
  const [open, setOpen] = useState(false)
  const [currentMovie, setCurrentMovie] = useState({
    movieName: '',
    id: '',
    cast: [],
    releaseYear: '',
    boxOffice: '',
    imdbRating: ''

  })

  const [movieList, setMovieList] = useState()

  const movieInfo = async (e) => {
    console.log(e)
    console.log('ji')
    // if(jsonDataArray.length<0){

    // }
    var check = jsonDataArray?.filter((ele) => ele._id == e)
    console.log("test,", check)
    if (check.length == 0) {
      try {
        var data = await axios.get(`http://localhost:3000/movieData/${e}`)
        console.log(data.data)
        dispatch(addJsonData(data.data));
        setCurrentMovie(data.data)
        console.log(jsonDataArray)
      } catch (error) {
        console.log(error)
      }
    } else {
      setCurrentMovie(check[0])
    }


    setOpen(true)
  }
  const movieListRender = async () => {
    try {
      let data = await axios.get('http://localhost:3000/moviesList/')
      console.log(data.data)
      setMovieList(data.data)

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    movieListRender()
  }, [])
  useEffect(() => {
    console.log('oooooooo', jsonDataArray)
  }, [jsonDataArray])

  useEffect(() => {
    console.log('oooooooo', currentMovie)
  }, [currentMovie])

  return (
    <div className="App">
      <h2>Movies Info</h2>
      <div className='row w-100'>
        <div className='col-sm-1'></div>
        {movieList?.map((e) => {
          // return <li onClick={() => movieInfo(e._id)}>{e.movieName}</li>

          return <div className='col-sm-2'>
            <div class="card" >
              <img class="card-img-top w-100" style={{ "height": "200px" }} src={e.url} alt="Card image cap" />
              <div class="card-body">
                <h4>{e.movieName}</h4>
                <button className='btn btn-info' onClick={() => movieInfo(e._id)}>Click to view Details</button>
              </div>
            </div>
          </div>

        })}

      </div>
{
  currentMovie.cast.length>0 ?

      <div className='row mt-5 w-100'>
        <div className='col-5'></div>
        <div className='col-3'>
          
          <div className='card p-4'>
            <h4>Movie Details</h4>
            <div className='d-flex justify-content-between pt-3'>
              <label><b>Movie Name : </b>&nbsp;</label>
              <span>{currentMovie?.movieName}</span>
            </div>
            <div className='d-flex justify-content-between'>
              <label><b>Released Year : </b>&nbsp;</label>
              <span>{currentMovie?.releasedYear}</span>
            </div>
            <div className='d-flex justify-content-between'>

              <label><b>Cast : </b></label>

              <ul  className='ps-0'>
                {currentMovie?.cast.map((element) => {
                  return <li>{element}</li>
                })}
              </ul>


            </div>
            <div className='d-flex justify-content-between'>
              <label><b>Box Office </b>&nbsp;</label>
              <span>{currentMovie?.boxOffice}</span>
            </div>
            <div className='d-flex justify-content-between'>
              <label><b>IMDB Rating : </b>&nbsp;</label>
              <span>{currentMovie?.imdbRating}/10</span>
            </div>

          </div>
        </div>
      </div>
      :
      null
}

    </div >
  );
}

export default App;
