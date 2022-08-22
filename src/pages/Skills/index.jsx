import styled from 'styled-components'
import { Link } from 'react-router-dom'
import AssessFirst from '../../assets/icons/favicon-unicorn-new.png'

const StyledStack = styled.div`
    width: 70%;
    height: fit-content;
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
    p{
        text-align: center;
    }
    .exposant{
        font-size: .6rem;
        text-align: left;
        margin-top: -1.5rem;
        margin-left: 2rem;
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
    margin-bottom: 2rem;
    div{
        width: 50%;
        margin-left: 2rem;
    }
    .btn{
        font-size: 1rem;
        padding: 1rem;
        margin-top: 4rem;
    }
    li{
        line-height: 2rem;
    }
    @media all and (max-width: 768px){
        flex-direction: column;
        margin-bottom: 1rem;
        div{
            width: 80%;
        }
        li{
            font-size: .8rem;
        }
        .btn{
            margin-top: 1rem;
        }
 
    }
`
const StyledSoftSkills = styled.div`
    background-color: #FEF9EF;
    height: fit-content;
    div{
        width: 70%;
        height: fit-content;
        margin: auto;
    }
    h1{
        color: #6C847E;
        padding: 2rem 8rem 2rem 2rem;
        width: fit-content;
        font-size: 1.5rem;
    }
    ul{
        list-style: none;
        margin-bottom: 4rem;
        margin-left: -30%;
    }
    img{
        width: 60px;
    }
    a{
        text-align: center;
        :hover{
            transform: scale(.8);
        }
    }
    @media all and (min-width: 768px){
        div{
            width: 70%;
        }
        a{
            margin
        }
        h1{
            font-size: 2rem;
        }
        ul{
            margin-left: -10%;
        }
    }
`

function Skills(){
    return(
      <div>
        <StyledStack>
            <h1>STACK TECHNIQUE</h1>
            <p className='exposant'>Niveau débutante en autodidacte - * à venir</p>
           <StyledContainer>
                <div>
                    <h3>Intégration front-end</h3>
                    <ul>
                        <li>
                            HTML / CSS / SASS / BOOTSTRAP / JAVASCRIPT
                        </li>
                        <li>
                            SEO
                        </li>
                        <li>
                            UX ET UI DESIGN, RESPONSIVE DESIGN
                        </li>
                        <li>
                            FRAMEWORKS FRONT-END 
                        </li>
                        <li>
                            WORDPRESS ET PRESTASHOP*
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Développement back-end*</h3>
                    <ul>
                        <li>
                            POO ET ALGORITHME 
                        </li>
                        <li>
                            PHP/ SYMFONY
                        </li>
                        <li>
                            NODE.JS
                        </li>
                        <li>
                            MODÈLE CONCEPTUEL DE DONNÉES
                        </li>
                        <li>
                            BASE DE DONNÉES / SQL
                        </li>
                    </ul>
                </div>
           </StyledContainer>
            <p>+ GESTION DE PROJET ET MÉTHODE AGILE *</p>
            <StyledContainer>          
                <a href="https://www.wf3.fr/formation/formation-developpeur-web-et-web-mobile/" target="blanck" className='btn'>Programme complet</a>
                <Link to='/work' className='btn'>Portfolio</Link>  
                <a href="https://github.com/Johanna-Fgt" target="blanck" className='btn'>GitHub</a>
            </StyledContainer>

        </StyledStack>
        <StyledSoftSkills>
            <div>
                <h1>SOFT SKILLS</h1>
                <StyledContainer>
                    <ul>
                        <li style={{marginLeft: "2rem"}}>
                            Anglais : B2
                        </li>
                        <li style={{marginLeft: "5rem"}}>
                            Curiosité
                        </li>
                        <li style={{marginLeft: "8rem"}}>
                            Empathie
                        </li>
                        <li style={{marginLeft: "11rem"}}>
                            Créativité
                        </li>
                        <li style={{marginLeft: "11rem"}}>
                            Patience
                        </li>
                        <li style={{marginLeft: "8rem"}}>
                            Rigueur
                        </li>
                        <li style={{marginLeft: "5rem"}}>
                            Flexibilité
                        </li>
                        <li style={{marginLeft: "2rem"}}>
                            Esprit d'équipe
                        </li>
                    </ul>
                    <a href="https://app.assessfirst.com/_/profile/wblqo18z-johanna-faget" target='blanck'><img src={AssessFirst} alt="Logo test AssessFirst"/><br></br><span style={{color: "#6C847E"}}>onClick</span>="<span style={{color: "#BC533B"}}>openProfile()</span>"</a>
                </StyledContainer>
            </div>            
        </StyledSoftSkills>
      </div>
    )
}

export default Skills