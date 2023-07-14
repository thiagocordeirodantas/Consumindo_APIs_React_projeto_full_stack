import Header from './Components/Header/Header';
import Pesquisa from './Components/Pesquisa/Pesquisa';
import UltimosLancamentos from './Components/UltimosLancamentos/Lancamentos';
import styled from 'styled-components';

const AppContainer = styled.div `

  width: 100vw;
  height: 100vh;

 
`


function App() {
  return (
    <AppContainer>
     <Header/>
     <Pesquisa/>  
     <UltimosLancamentos/>
    </AppContainer>
    
  );
}

export default App