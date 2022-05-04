import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`


export const AddTaskBtn = styled.a`
  background: ${props => props.theme.colors.themeBtn};
  border: 0px;
  padding: 15px;
  margin-top: 15px;
  color: ${props => props.theme.colors.text};
  font-family: monospace;
  font-size: 15px;
  border-radius: 10px;
  transition: .5s;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 400px) {
    padding: 13px;
    font-size: 13px;
    margin-bottom: 12px;
  }

  &:hover {
    box-shadow: 1px 1px 10px 1px ${props => props.theme.colors.themeBtn};
  }
`


export const Task = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-top: 16px;
  width: 750px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  padding: 20px;
  border-radius: 10px;
  transition: .5s all;


  &:first-child {
    margin-top: 0;
  }

  @media (max-width: 810px) {
    width: 650px;
  }

  @media (max-width: 600px) {
    width: 380px;
  }

  @media (max-width: 400px) {
    width: 300px;
    h4 {
      font-size: 10px;
    }    
  }

  .desc {
    position: fixed;
    background: ${props => props.theme.colors.themeBtn};
    color: ${props => props.theme.colors.text};
    padding: 30px;
    width: 60%;
    border-radius: 10px;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    visibility: hidden;
    cursor: default;
    opacity: 0;
    transition: .5s;

    &:target {
      visibility: visible;
      opacity: 1;
    }

    &:hover {
      box-shadow: 1px 1px 10px 1px ${props => props.theme.colors.themeBtn};
    }

    .descTitle {
      margin-bottom: 20px;
    }

    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      border-radius: 100%;
      background: ${props => props.theme.colors.secoundry};
      color: ${props => props.theme.colors.primary};
      text-decoration: none;
      width: 17px;
      text-align: center;
    }
  }
`

export const PopupW = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0,0,0,0.8);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;

  &:target {
    visibility: visible;
    opacity: 1;
  }
`

export const PopWrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: ${props => props.theme.colors.secoundry};
  width: 50%;
  border-radius: 5px;
  position: relative;
  transition: all 1s ease-in-out;

  h2 {
    margin-top: 0;
    color: ${props => props.theme.colors.primary};
  }

  .close {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 20px;
    background: ${props => props.theme.colors.text};
    border-radius: 100%;
    padding: 1px;
    width: 26px;
    text-decoration: none;
    text-align: center;
  }

  .content {
    max-height: 50%;
    overflow: auto;
  }

  .content .container {
    border-radius: 5px;
    padding: 20px 0;
  }

  input, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
    background: #ccc;
  }

  button {
    background: ${props => props.theme.colors.primary};
    border: 0;
    border-radius: 10px;
    padding: 10px;
    color: ${props => props.theme.colors.text};
    cursor: pointer;
    margin-left: 10px;
    transition: .5s;

    &:hover {
      box-shadow: 1px 1px 10px -1px ${props => props.theme.colors.primary};
    }
  }
`
