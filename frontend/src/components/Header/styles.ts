import styled from 'styled-components';


export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.p`
  font-size: 20px;
  font-family: monospace;
  color: ${props => props.theme.colors.text};
  cursor: pointer;

  @media (max-width: 600px) {
    font-size: 15px;
  }

  @media (max-width: 400px) {
    font-size: 12px;
  } 
`

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-direction: column;
  margin: 15px;
  transition: .5s;
  color: ${props => props.theme.colors.text};

  &:hover {
    color: #818CF8;
  }

  &:active {
    color: ${props => props.theme.colors.text};
  }

  @media (max-width: 600px) {
    font-size: 10px;
  }

  @media (max-width: 400px) {
    font-size: 8px;
  }
`

export const Toggle = styled.div`
  display: inline-block;
  background: ${props => props.theme.colors.themeBtn};
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s;
`