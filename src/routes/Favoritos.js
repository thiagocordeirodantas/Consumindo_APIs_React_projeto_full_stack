import Header from '../components/Header/index'
import Pesquisa from '../components/Pesquisa'
import UltimosLancamentos from '../components/UltimosLancamentos'
import styled from 'styled-components'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

function Favoritos() {
  return (
    <AppContainer>
      <Pesquisa />
    </AppContainer>
  );
}

export default Favoritos
