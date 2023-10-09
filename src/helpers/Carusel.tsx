import Carousel from 'react-bootstrap/Carousel';
import chessImage from '../assets/chessImage.png';
import checkersImage from '../assets/checker800.png';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { navMenu } from '../Common/Navigate';

function CarouselComponent() {
  const navigate = useNavigate()

  return (
    <Carousel  style={{width:"600px", height:"410px"} }>
      <Carousel.Item>
        <img   className="d-block w-100" src={chessImage} alt=""  />
        <Carousel.Caption>
          <h4 className='text-info'>Узнать подробнее</h4>
          <Button variant='warning' onClick={()=>  navigate(navMenu.game.gameChess.path)
}>Играть в шахматы!</Button>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img   src={checkersImage} className="d-block w-100" alt="" style={{borderRadius:"12px"}}  />

        <Carousel.Caption>
        <h4 className='text-info'>Узнать подробнее</h4>
        <Button variant='warning' onClick={()=>  navigate(navMenu.game.gameHahska.path)}>Играть в шашки!</Button>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
  );
}

export default CarouselComponent;

