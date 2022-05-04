import {BsGithub, BsInstagram, BsFacebook} from 'react-icons/bs'
import {
  Container,
} from './styles'


const Contact = () => {
  return (
  	<Container>
  	  <a href="https://github.com/alk-neq-me">
  	  	<BsGithub />
  	  </a>
  	  <a href="https://instagram.com/alk.neq.me">
  	  	<BsInstagram />
  	  </a>
  	  <a href="https://facebook.com/stanley.yuuto">
  	  	<BsFacebook />
  	  </a>
  	</Container>
  )
}


export default Contact