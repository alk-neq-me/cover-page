import React from 'react'
import { Container } from './styles'


interface Props {
  title: string
}

const Quotes: React.FC<Props> = (props) => {
  return (
  	<Container>
  	  <span>
  	  	{props.title}
  	  </span>
  	</Container>
  )
}


export default Quotes