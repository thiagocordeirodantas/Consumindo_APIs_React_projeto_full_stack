import styled from 'styled-components';

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

    const OpcoesDeTexto = ['CATEGORIAS','FAVORITOS','MINHA ESTANTE']

    return (
        <Opcoes>
            {OpcoesDeTexto.map((texto) => (
                 <Opcao><p>{texto}</p></Opcao>
            ))}
      </Opcoes>
    )
}

export default OpcoesHeader;