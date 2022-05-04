import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  span {
  	max-width: 130px;
  	line-height: 30px;
  	font-size: 21px;
  	transition: .5s;
  	
  	@media (max-width: 600px) {
  	  font-size: 16px;
  	  max-width: 100px;
  	  line-height: 25px;
  	}

    @media (max-width: 400px) {
      margin-top: 20px;
    }
`