import styled from 'styled-components'

function Home() {
  return (
  <Container>
    <h1 data-text="EM CONSTRUÇÃO">EM CONSTRUÇÃO</h1>
  </Container>
  )  
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  
  h1 {
    position: relative;
    color:rgb(255, 255, 255);
    font-size: 2rem;
    font-family: "Poppins", serif;
    font-weight: 100;
    font-style: normal;
    position: relative;
    animation: glitch 5s infinite reverse;
  }

  h1:after, h1:before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    color: white;
    background: black;
    overflow: hidden;
  }

  h1::before {
    left: 3px;
    text-shadow: -3px 2px rgba(255, 0, 0, 0.65);
    animation: glitch  1.3s infinite steps(2, end);
  }

  h1::after {
    left: -3px;
    text-shadow: 3px -2px  rgba(111, 0, 255, 0.63);
    animation: glitch 3.25s infinite alternate;
    clip-path: polygon(10% 10%, 90% 40%, 30% 25%, 10% 5%);
  }

  @keyframes glitch {
    0% { 
      text-shadow: 5px 2px 0 rgba(255, 0, 0, 0.65), -50px -2px 5px rgba(111, 0, 255, 0.63);
      transform: translate(3px, 1px);
    }
    15% { 
      text-shadow: -26px -6px 0 rgba(255, 0, 0, 0.65), 6px 3px 0 rgba(111, 0, 255, 0.63);
      transform: translate(-4px, -1px);
    }
    30% { 
      text-shadow: 20px 1px 0 rgba(255, 0, 0, 0.65), -7px -1px 0 rgba(111, 0, 255, 0.63);
      transform: translate(5px, 2px);
    }
    45% {
      text-shadow: -4px -2px 0 rgba(255, 0, 0, 0.65), 4px 2px 0 rgba(111, 0, 255, 0.63);
      transform: translate(-3px, -2px);
    }
    60% {
      text-shadow: 17px 3px 0 rgba(255, 0, 0, 0.65), -8px -3px 0 rgba(111, 0, 255, 0.63);
      transform: translate(6px, 1px);
    }
    75% {
      text-shadow: -15px -2px 0 rgba(255, 0, 0, 0.65), 5px 2px 0 rgba(111, 0, 255, 0.63);
      transform: translate(-4px, -1px);
    }
    90% {
      text-shadow: 16px 1px 0 rgba(255, 0, 0, 0.65), -6px -1px 0 rgba(111, 0, 255, 0.63);
      transform: translate(3px, 2px);
    }
    100% {
      text-shadow: -15px -3px 0 rgba(255, 0, 0, 0.65), 15px 13px 0 rgba(111, 0, 255, 0.63);
      transform: translate(-2px, -1px);
    }
  }
 

`

export default Home;
