import styled from 'styled-components'
import { useState } from 'react';
import { BiCaretDown, BiCaretUp } from "react-icons/bi";

const StyledPositionTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #FEF9EF;
    .toggle{
        padding: .5rem;
        margin: 0 1rem;
        cursor: pointer;
        &_top{
            color: #6C847E;
            transform: scale(1.5);
        }
    }
`

function WHVisa(){
    const[expanded, setExpanded] = useState(false);

    return(
        <div>
            <StyledPositionTitle>
                <h3 onClick={()=>setExpanded(!expanded)}>Working Holiday Visa - Australie</h3>
                <div className='toggle toggle_top' onClick={()=>setExpanded(!expanded)}>
                    { expanded ? <BiCaretUp/> : <BiCaretDown/> }
                </div>
            </StyledPositionTitle>

                {expanded &&
                    <h4>Ouvriére agricole polyvalente<span> - 2 ans (+ saisons en France)</span></h4>
                }
        </div>
    )
}

export default WHVisa