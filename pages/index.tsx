import styled from 'styled-components'

function Home() {
  return (
  <Container>
    <h1>Criando algo novo...</h1>
  </Container>
  )  
}

const Container = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  display: grid;
  height: 95vh;
  width: 100%;
  place-content: center;
 
  h1 {
    color: #222;
    font-size: 2rem;
    font-family: "Space Mono", monospace;
  }
`

export default Home;
