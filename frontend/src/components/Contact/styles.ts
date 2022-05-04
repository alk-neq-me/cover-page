import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-size: 25px;
  transition: .5s;

  &::after {
  	content: "";
  	border-top: 1px solid #515151;
  	width: 100px;
  	margin-bottom: 5px;
  	margin-left: 30px
  }

  a {
  	color: ${props => props.theme.colors.text};
  	margin-left: 30px;
    transition: .5s;

    &:hover {
      color: #818CF8;
    }

    &:active {
      color: ${props => props.theme.colors.text};
    }
  }
`