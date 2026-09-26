import MovieItem from '../MovieItem'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {data} = props
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      {data.map(each => (
        <MovieItem key={each.id} details={each} />
      ))}
    </Slider>
  )
}
export default MoviesSlider
