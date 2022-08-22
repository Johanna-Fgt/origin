import { NavLink, Link } from 'react-router-dom'
import styled from 'styled-components'
import { BiMenuAltRight} from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import CV from "../../assets/doc/CV_Johanna_Faget.pdf"


const StyledNav = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media all and (min-width: 900px){
        flex-direction: row;
        justify-content: space-around;
    }
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: fit-content;
        padding: 2rem;
        background-color: #FEF9EF;
        .logo{
            h1{
                color: #6C847E;
                margin: 0;
                @media all and (max-width: 900px){
                    font-size: 1.5rem;
                }
            }
            p{
                color: #BC533B;
                font-size : .8rem;
            }
        }
        .toggle{
            width: fit-content;
            height: fit-content;
            cursor: pointer;
            @media all and (min-width: 900px){
                display: none;
            }
        }
    }
    .btn{
        color: #BC533B;
        margin: 0 .5rem;
        font-size: 1rem;
        color: #FEF9EF;
    }
    nav{
        position: absolute;
        top: 15vh;
        width: 100%;
        height: 80vh;
        background-color: #FEF9EF;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transform: ${ (props)=> (props.menuOpen ? "translate(100%)" :  "translate(0)")};
        transition: .7s transform ease-out;
        z-index: 10;
        @media all and (min-width: 900px){
            height: 15vh;
            flex-direction: row;
            transform: ${ (props)=> (props.menuOpen ? "translate(0)" :  "translate(0)")};
            transition: 0s transform ease-out;
            top: 0;
            right: 0;
            width: 60%;
            padding-right: 2rem;
            justify-content: flex-end;
        }
    }
`
const StyledLink = styled(NavLink)`
    text-decoration: none;
    margin: 10px;
    color: #6C847E;
    &:hover{
        font-weight: bold;
        color: #BC533B;
    } 
`

function Header(){
    const[menuOpen, setMenuOpen] = useState(false);

    return(
        <StyledNav menuOpen = {menuOpen}>
            <div>
                <Link to="/" className='logo'>
                    <h1>Johanna Faget</h1>
                    <p>Future développeuse web et mobile</p>
                </Link>
                <div className='toggle' onClick={()=>{
                    setMenuOpen((currentValue) => !currentValue)
                }}>
                    { menuOpen ? <BiMenuAltRight style={{color: "#6C847E", fontSize: "1.5rem"}}/> : <AiOutlineClose style={{color: "#BC533B", fontSize: "1.5rem"}}/> }
                </div>
            </div>
            <nav>
                <StyledLink  to="/" onClick={()=>{
                    setMenuOpen((currentValue) => !currentValue)
                }}>Accueil</StyledLink>
                <StyledLink  to="/skills" onClick={()=>{
                    setMenuOpen((currentValue) => !currentValue)
                }}>Compétences</StyledLink >
                <StyledLink  to="/education" onClick={()=>{
                    setMenuOpen((currentValue) => !currentValue)
                }}>Formations</StyledLink >
                <StyledLink  to="/experience" onClick={()=>{
                    setMenuOpen((currentValue) => !currentValue)
                }}>Expériences</StyledLink >
                <StyledLink  to="/work" onClick={()=>{
                    setMenuOpen((currentValue) => !currentValue)
                }}>Portfolio</StyledLink >
                <a href={CV} target="blanck" className='btn'>CV</a>
            </nav>            
        </StyledNav>
    )
}

export default Header 