import { Link } from "react-router-dom"
import styled from 'styled-components'
import ErrorImage from "../../assets/img/error404.jpg"

const StyledError = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img{
        width: 60%;
    }
    @media all and (max-width: 768px){
        flex-direction: column;
    }
`
const StyledErrorContent = styled.div`
        height: fit-content;
        overflow: hidden;
        padding: 2rem;
        text-align: center;
        p{
            margin: 2rem 0;
        }
        .btn{
            font-size: 1rem;
            
        }
`

function Error(){
    return(
        <StyledError>
            <img src={ErrorImage} alt='404 erreure' />
            <StyledErrorContent>
                <h1>Page non trouvée</h1>
                <p>Oooops ! La page que vous cherchez n'est pas disponible.</p>
                <Link to='/' className="btn">Retourner à l'accueil</Link>
            </StyledErrorContent>
        </StyledError>
    )
}

export default Error 