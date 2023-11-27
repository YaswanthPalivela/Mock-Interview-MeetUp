import {NotFoundContainer, Img, NotFoundHeading, NotFoundPara} from './style'

const NotFound = () => (
  <NotFoundContainer>
    <Img
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotFoundHeading>Page Not Found</NotFoundHeading>
    <NotFoundPara>
      We are sorry, the page you requested could not be found
    </NotFoundPara>
  </NotFoundContainer>
)
export default NotFound
