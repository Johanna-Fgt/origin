
import Tel from '../../assets/icons/phone.png'
import Mail from '../../assets/icons/mail.png'
import Ln from '../../assets/icons/linkedin.png'
import Git from '../../assets/icons/github-sign.png'
import Car from '../../assets/icons/car.png'
import LogoReact from '../../assets/icons/logo192.png'
import styled from 'styled-components'

const StyledFooter = styled.div`
    background-color: #FEF9EF;
    padding: 4rem; 
    display:flex;
    flex-direction: column;
    align-items: center;
`
const StyledFooterContent = styled.div`
    width: 15%;
    margin: auto;
    padding: 2rem 0;
    border-bottom: 2px #D8CEB9 solid;
    @media all and (max-width: 768px){
        width: 50%;
    }
    h2{
        color: #6C847E;
    }
    p{
        color: #BC533B;
        font-size : .8rem;
    }
    img{
        width: 8%;
        margin-right: 1rem;
    }
    a{
        display: flex;
        align-items: center;
    }
`
const StyledFooterMention = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
    p {
        text-align: center;
        margin: .5rem ;
        font-size: .5rem;
        color: #6C847E;
    }
    img{
        width: 24px;
        margin: 0;
    }
`

function Footer(){
    return(
        <StyledFooter>
            <StyledFooterContent>
                <h2>CONTACTS</h2>
                <a href='/'>
                    <img src={Tel} alt='Icone téléphone'/>
                    <p>07 81 87 71 26</p> 
                </a>
                <a href='mailto:johannafaget@gmail.com'>
                    <img src={Mail} alt='Icone email'/>
                    <p>johannafaget@gmail.com</p> 
                </a>  
                <a href='https://www.linkedin.com/in/johanna-faget'>
                    <img src={Ln} alt='Icone LinkedIn'/>
                    <p>Johanna Faget</p> 
                </a> 
                <a href='https://github.com/Johanna-Fgt'>
                    <img src={Git} alt='Icone Github'/>
                    <p>Johanna-Fgt</p> 
                </a>
                <a href='/'>
                    <img src={Car} alt='Icone Voiture'/>
                    <p style={{fontSize : ".6rem"}}>J'ai le permis et une voiture</p> 
                </a>
            </StyledFooterContent>
            <StyledFooterMention>
                <p>
                    Website made by Johanna Faget with 
                </p>
                <img src={LogoReact} alt='Logo React.js'/>
                <p> - 2022</p>
            </StyledFooterMention>
            <a href='https://github.com/Johanna-Fgt?tab=repositories' target="_blank" rel='noreferrer' className='btn'>Source Code</a>
        </StyledFooter> 
    )
}

export default Footer