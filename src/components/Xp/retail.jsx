import styled from 'styled-components'
import { useState } from 'react';
import { BiMinus, BiPlus, BiCaretDown, BiCaretUp } from "react-icons/bi";

const StyledPositionTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #FEF9EF;
    .toggle{
        transform: scale(1.2);
        background-color: #FEF9EF;
        border-radius: 50%;
        padding: .5rem;
        margin: 0 1rem;
        cursor: pointer;
        &_top{
            color: #6C847E;
            transform: scale(1.5);
            background-color: transparent;
        }
    }
`

function Retail(){
    const[expanded, setExpanded] = useState(false);
    const[expandedDetailsA, setExpandedDetailsA] = useState(false);
    const[expandedDetailsB, setExpandedDetailsB] = useState(false);


    return(
        <div>
            <StyledPositionTitle>
                <h3 onClick={()=>setExpanded(!expanded)}>Vente et grande distribution</h3>
                <div className='toggle toggle_top' onClick={()=>setExpanded(!expanded)}>
                    { expanded ? <BiCaretUp/> : <BiCaretDown/> }
                </div>
            </StyledPositionTitle>

                {expanded &&
                    <ul>
                    {/* B */}
                    <li>
                        <StyledPositionTitle>
                        <h4>Hôtesse de caisse<span> - 3,5 mois</span></h4>
                            <div className='toggle' onClick={()=>setExpandedDetailsB(!expandedDetailsB)}>
                                { expandedDetailsB ? <BiMinus/> : <BiPlus/> }
                            </div>
                        </StyledPositionTitle>
                        { expandedDetailsB &&
                            <p><em>Intermarché | juin - mi-sept. 2020</em><br/>
                            Accueillir les personnes, enregistrer la vente d'un article, désactiver les antivols, encaisser le montant d'une vente, proposer un service complémentaire à la vente, recueillir l'avis et les remarques d'un client, réaliser le comptage des fonds de caisses, disposer des produits sur le lieu de vente.</p>
                        }
                    </li>
                    {/* A */}
                    <li>
                        <StyledPositionTitle>
                        <h4>Buraliste<span> - 1 an</span></h4>
                            <div className='toggle' onClick={()=>setExpandedDetailsA(!expandedDetailsA)}>
                                { expandedDetailsA ? <BiMinus/> : <BiPlus/> }
                            </div>
                        </StyledPositionTitle>
                        { expandedDetailsA &&
                           <p><em>Le Voltigeur | entre 2016 et 2021</em><br/>
                           Accueil client, ventes, encaissements, loterie, jeux, pmu, mise en rayon, entretien des locaux, ouverture et fermeture.</p>
                        }
                    </li>
                </ul>
                }
        </div>
    )
}

export default Retail 