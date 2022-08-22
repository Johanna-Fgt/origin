import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PhotoDeProfil from '../../assets/img/profile.jpeg'
import CV from "../../assets/doc/CV_Johanna_Faget.pdf"

const StyledIntro = styled.div`
    width : 90%;
    margin: auto;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    div{
        width: 50%;
        padding: 1rem;
        height: fit-content;
        overflow: hidden;
    }
    img{
        width: 300px;
        border-radius: 50%;
        margin: 2rem;
    }
    h1{
        color: #6C847E;
        margin-bottom: 2rem;
    }
    h3{
        color: #BC533B;
    }
    p{
        line-height: 3rem;
        margin: 2rem 0;
    }
    .btn{
        font-size: 1rem;
        padding: 1rem 2rem;
    }
    @media all and (max-width: 900px){
        flex-direction: column;
        height: fit-content;
        margin: 4rem auto;
        div{
            width: 90%;
        }
        img{
            width: 40%;
            margin: 2rem;
        }
    }  
`
const Parallax = styled.div`
    background-image: url("https://images.unsplash.com/photo-1551151637-0bf8caebadfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80");
    height: fit-content;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: #6C847E;
    padding: 5rem;
    text-align: center;
    a{
        color: #BC533B;
        margin: 0 .5rem;
    }
    p{
        display: none;
    }
    h1{
        color: #BC533B;
    }
    @media all and (min-width: 768px){
        h1 {
            width: 50%;
            margin-left: 45%;
            text-align: right;
            color: #6C847E;
        }
        p{
            display: block;
            line-height: 2rem;
            width: 50%;
            margin-left: 45%;
            text-align: right;
        }
    }  
`
const StyledP = styled.div`
    p{
        display: none;
        height: 0vh;
        @media all and (max-width: 768px){
            display: block;
            width: 70%;
            margin: 2rem auto;
            height: fit-content;
            color: #6C847E;
            text-align: center;
            line-height: 2rem;
            a{
                color: #BC533B;
                margin: 0 .5rem;
            }
        }
    } 
`

function Home(){
    return(
        <div>
            <StyledIntro>
                <img src={PhotoDeProfil} alt='Identité Johanna'/>
                <div>
                    <h1>HI, I'M JOHANNA !</h1>
                    <h3>FUTURE DEVELOPPEUSE WEB ET MOBILE</h3>
                    <p>J'adore apprendre et relever des défis, autant dire <br/>
                     < strong >" j'adore coder " !</ strong ><br/>
                    Alors je me lance dans une reconversion professionnelle audacieuse.<br/>
                    Je recherche une entreprise bienveillante pour m'accueillir en stage d'observation et/ou en contrat de professionnalisation.</p>
                    <a href={CV} target="blanck" className='btn'>CV</a>
                </div>
            </StyledIntro>
            <Parallax>
                <h1>Projet</h1>
                <p>Je suis demandeuse d'emploi en reconversion professionnelle et intégrerai la formation de développeuse web et mobile avec la Webforce3 en septembre prochain. Je souhaite poursuivre ma montée en compétences avec une formation de "Conceptrice Développeuse d’Application" en alternance.<br/><br/>
                Je recherche l'entreprise qui m'accueillera pour valider un court <Link to="/education">stage d'observation</Link> (PMSMP - gratuit et conventionné pôle emploi) avant la rentrée, et/ou un contrat de professionnalisation. <br/><br/>
                Apprendre avec des développeurs professionnels serait pour moi une super occasion de progresser, et de débuter ma nouvelle carrière dans les meilleures conditions. Relever de nouveaux défis dans la bonne humeur avec une équipe bienveillante est au coeur de ma motivation.<br/><br/>
                Je vous invite à consulter le détail des <Link to="/skills">compétences</Link> que je vais acquérir et quelques unes de mes <Link to="/work">réalisations</Link>.
                </p>
            </Parallax>
            <StyledP>
            <p>Je suis demandeuse d'emploi en reconversion professionnelle et intégrerai la formation de développeuse web et mobile à la Webforce3 en septembre prochain. Je souhaite poursuivre ma montée en compétences avec une formation de "Conceptrice Développeuse d’Application" en alternance.<br/><br/>
            Je recherche l'entreprise qui m'accueillera pour valider un court <Link to="/education">stage d'observation</Link> (PMSMP - gratuit et conventionné pôle emploi) avant la rentrée, et/ou un contrat de professionnalisation. <br/><br/>
                Apprendre avec des développeurs professionnels serait pour moi une super occasion de progresser, et de débuter ma nouvelle carrière dans les meilleures conditions. Relever de nouveaux défis dans la bonne humeur avec une équipe bienveillante est au coeur de ma motivation.<br/><br/>
                Je vous invite à consulter le détail des <Link to="/skills">compétences</Link> que je vais acquérir et quelques unes de mes <Link to="/work">réalisations</Link>.
            </p>
            </StyledP>
            
         </div> 
    )
}
export default Home 