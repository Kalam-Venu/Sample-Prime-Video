import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  let actionMoviesList = []
  let comedyMoviesList = []
  actionMoviesList = moviesList.filter(each => each.categoryId === 'ACTION')
  comedyMoviesList = moviesList.filter(each => each.categoryId === 'COMEDY')
  return (
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="bg-image"
      />
      <div className="videos-container">
        <h1 className="action-movies-heading">Action Movies</h1>
        <MoviesSlider data={actionMoviesList} />
        <h1 className="action-movies-heading">Comedy Movies</h1>
        <MoviesSlider data={comedyMoviesList} />
      </div>
    </div>
  )
}
export default PrimeVideo
