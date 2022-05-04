import React, {useContext} from 'react'
import {
  Container,
  Logo,
  Nav,
  Toggle,
  Link,
} from './styles'
import {BsGithub, BsSunFill, BsFillMoonStarsFill} from 'react-icons/bs'
import {GiSpiderMask} from 'react-icons/gi'
import { ThemeContext } from 'styled-components'


interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({toggleTheme}) => {
  const { title } = useContext(ThemeContext)

  const goLink = (go: string) => {
    if (go === "portfolio") {
      alert("Not available right now!")
    } else if (go === "source") {
      window.location.href = 'https://github.com/alk-neq-me/cover-page'
    } else if (go === "home") {
      window.location.href = "https://coverxyz.herokuapp.com"
    }
  }

  return (
  	<Container>
  		<Logo onClick={() => goLink('home')}>ToDo List</Logo>
      <Nav>
        <Link onClick={() => goLink('portfolio')}>
          <GiSpiderMask size={20} />
          Portfolio
        </Link>

        <Link onClick={() => goLink("source")}>
          <BsGithub size={20} />
          Source
        </Link>

        <Toggle>
          {
            title === "light"
            ? <BsSunFill size={20} onClick={toggleTheme} />
            : <BsFillMoonStarsFill size={20} onClick={toggleTheme} />
          }
        </Toggle>
      </Nav>
  	</Container>
  )
}


export default Header