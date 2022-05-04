import React from 'react'
import {Container} from './styles'


interface Props {
  developer: string
  date: number
}

const Footer: React.FC<Props> = ({developer, date}) => {
  return (
  	<Container>
  	  Copyright &copy; {date} {developer}. All Rights Reserved.
  	</Container>
  )
}


export default Footer