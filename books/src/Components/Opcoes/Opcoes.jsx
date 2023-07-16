import styled from 'styled-components';
import { Link } from 'react-router-dom'
const Opcao = styled.li `

    min-width: 120px;
    font-size: 17px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;

`

const Opcoes = styled.ul `

    display: flex;

`

function OpcoesHeader(){

    const OpcoesDeTexto = ['CATEGORIAS','FAVORITOS','ESTANTE']

    return (
        <Opcoes>
            {OpcoesDeTexto.map((texto) => (
              <Link to={`/${texto}`}><Opcao><p>{texto}</p></Opcao></Link>  
            ))}
      </Opcoes>
    )
}

export default OpcoesHeader;