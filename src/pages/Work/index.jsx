import styled from 'styled-components'
import Git from '../../assets/icons/github-sign.png'
import Converter from '../../assets/img/converter.jpg'
import House from '../../assets/img/Happy-tiny-house.jpg'
import StarCommand from '../../assets/img/star-command.jpg'
import MoonSurfSchool from '../../assets/img/moon-surf-school-profs.jpg'
import Colchis from '../../assets/img/colchis.jpg'
import Argo from '../../assets/img/Argo.jpg'

const StyledStack = styled.div`
    width: 70%;
    margin: 2rem auto;
    h1{
        color: #BC533B;
        background-color: #FEF9EF;
        padding: 1rem 8rem 1rem 2rem;
        width: fit-content;
        margin: 2rem 0;
    }
    h3{
        color: #6C847E;
    }
    @media all and (max-width: 768px){
        p{
            font-size: .8rem;
        }
        h1{
            font-size: 1.5rem;
        }
    }
`
const StyledContainer = styled.div`
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 4rem;
    p{
        width: 80%;
    }
    .logo{
        width: 32px;
    }
    @media all and (max-width: 768px){
        flex-direction: column;
        margin-bottom: 0;
        li{
            font-size: .8rem;
        }
        p{
            width: 100%;
        }
        .logo{
            margin-bottom: 4rem;
        }
    }
`
const StyledCard = styled.div`
    height: fit-content;
    margin-bottom: 4rem;
    width: 40%;
    .content{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    img{
        width: 100%;
        height: 200px;
    }
    @media all and (max-width: 768px){
        flex-direction: column;
        width: 100%;
        li{
            font-size: .8rem;
        }
    }
`

function Work(){
    return(
        <StyledStack>
            <h1>PORTFOLIO</h1>
            <StyledContainer>
                <p>Voici un échantillon de minis projets réalisés au cours de mon apprentissage en autodidacte. Si vous souhaitez m'aider à progresser, faîtes-moi un petit feedback !<br/>
                </p>  
                <a href='https://github.com/Johanna-Fgt'>
                    <img src={Git} alt='Icone Github' className='logo'/>
                </a>
            </StyledContainer>

            <StyledContainer>
                <StyledCard>
                    <a href='https://johanna-fgt.github.io/CookingConverter/' target="_blank" rel='noreferrer'>
                        <img src={Converter} alt='Convertisseur unités de mesure cuisine'/>
                        <h3>Cooking converter for travelers</h3>
                    </a>
                    <div className="content">
                        <p>HTML5 / Sass / Javascript</p>
                        <a href='https://github.com/Johanna-Fgt/CookingConverter' target="_blank" rel='noreferrer' className='btn'>
                            Source code
                        </a>
                    </div>
                </StyledCard>

                <StyledCard>
                    <a href='https://johanna-fgt.github.io/Happy_Tiny_House/' target="_blank" rel='noreferrer'>
                        <img src={House} alt='Site de vente de petites maisons'/>
                        <h3>Happy Tiny House</h3>
                    </a>
                    <div className="content">
                        <p>HTML5 / Bootstrap</p>
                        <a href='https://github.com/Johanna-Fgt/Happy_Tiny_House' target="_blank" rel='noreferrer' className='btn'>
                            Source code
                        </a>
                    </div>
                </StyledCard>
            </StyledContainer>

            <StyledContainer>
                <StyledCard>
                    <a href='https://johanna-fgt.github.io/Lightyear/' target="_blank" rel='noreferrer'>
                        <img src={StarCommand} alt='Site de Star Command'/>
                        <h3>Star Command</h3>
                    </a>
                    <div className="content">
                        <p>HTML5 / Sass / Javascript</p>
                        <a href='https://github.com/Johanna-Fgt/Lightyear' target="_blank" rel='noreferrer' className='btn'>
                            Source code
                        </a>
                    </div>
                </StyledCard>

                <StyledCard>
                    <a href='https://johanna-fgt.github.io/surfschool/' target="_blank" rel='noreferrer'>
                        <img src={MoonSurfSchool} alt='Site de vente de petites maisons'/>
                        <h3>Moon Surf School</h3>
                    </a>
                    <div className="content">
                        <p>HTML5 / Sass</p>
                        <a href='https://github.com/Johanna-Fgt/Surfschool' target="_blank" rel='noreferrer' className='btn'>
                            Source code
                        </a>
                    </div>
                </StyledCard>
            </StyledContainer>

            <StyledContainer>
                <StyledCard>
                    <a href='https://johanna-fgt.github.io/techchallenge-web-dev/' target="_blank" rel='noreferrer'>
                        <img src={Colchis} alt='Site du Royaume de Colchis'/>
                        <h3>The Kingdom of Colchis</h3>
                    </a>
                    <div className="content">
                        <p>HTML5 / Sass / Javascript</p>
                        <a href='https://github.com/Johanna-Fgt/techchallenge-web-dev' target="_blank" rel='noreferrer' className='btn'>
                            Source code
                        </a>
                    </div>
                </StyledCard>

                <StyledCard>
                    <a href='https://johanna-fgt.github.io/Prep-course-web-dev/' target="_blank" rel='noreferrer'>
                        <img src={Argo} alt='Site de The Argo '/>
                        <h3>The Argo</h3>
                    </a>
                    <div className="content">
                        <p>HTML5 / Sass / Javascript</p>
                        <a href='https://github.com/Johanna-Fgt/Prep-course-web-dev' target="_blank" rel='noreferrer' className='btn'>
                            Source code
                        </a>
                    </div>
                </StyledCard>
            </StyledContainer>

        </StyledStack>
    )
}

export default Work 