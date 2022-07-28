import styled from 'styled-components'
import Tourism from '../../components/Xp/tourism';
import Retail from '../../components/Xp/retail';
import WHVisa from '../../components/Xp/whv';

const StyledXp = styled.div`
    width: 90%;
    margin:4rem auto;
    h1{
        color: #BC533B;
        background-color: #FEF9EF;
        padding: 1rem 8rem 1rem 2rem;
        width: fit-content;
        margin: 2rem 0;
        font-size: 1.5rem;
    }
    h3{
        color: #6C847E;
        width: 100%;
        cursor: pointer;
        padding: .5rem;
    }
    span{
        font-weight: lighter;
    }
    ul{
        p {
            overflow: hidden;
            font-size: .8rem;
            em{
                color: #BC533B;
            }
        }
    }
    @media all and (min-width: 768px){
        width: 70%;
        h1{
            font-size: 2rem;
        }
        ul{
            p{
                font-size: 1rem;
            }
        }
    }
`

function Experience(){

    return(
        <StyledXp>
            <h1>EXPERIENCES PROFESSIONNELLES</h1>
            <Tourism/>
            <Retail/>
            <WHVisa/>
        </StyledXp>
    )
}

export default Experience