import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 200px;

  @media (max-width: 400px) {
    font-size: 12px;
  }
`