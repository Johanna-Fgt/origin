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

function Tourism(){
    const[expanded, setExpanded] = useState(false);
    const[expandedDetailsA, setExpandedDetailsA] = useState(false);
    const[expandedDetailsB, setExpandedDetailsB] = useState(false);
    const[expandedDetailsC, setExpandedDetailsC] = useState(false);
    const[expandedDetailsD, setExpandedDetailsD] = useState(false);
    const[expandedDetailsE, setExpandedDetailsE] = useState(false);

    return(
        <div>
            <StyledPositionTitle>
                <h3 onClick={()=>setExpanded(!expanded)}>Tourisme</h3>
                <div className='toggle toggle_top' onClick={()=>setExpanded(!expanded)}>
                    { expanded ? <BiCaretUp/> : <BiCaretDown/> }
                </div>
            </StyledPositionTitle>

                {expanded &&
                    <ul>
                    {/* E */}
                    <li>
                        <StyledPositionTitle>
                            <h4>Réceptionniste polyvalente<span> - 8 mois</span></h4>
                            <div className='toggle' onClick={()=>setExpandedDetailsE(!expandedDetailsE)}>
                                { expandedDetailsE ? <BiMinus/> : <BiPlus/> }
                            </div>
                        </StyledPositionTitle>
                        {expandedDetailsE && 
                            <div>
                                <p>
                                <em>VACANCEOLE Les Rives du Lac | avril - sept. 2021</em><br />
                                Check-in/out, réservations (Resalys), encaissements, renseignements et orientation, gestion blanchisserie, entretien de la réception / parties communes / espaces verts, ménage des appartements ...
                            </p>
                            <p>
                                <em>Stage Journey's London Bridge Hostel | fév. - mars 2013</em><br />
                                Check-in/out, réservations et planning d'occupation des dortoirs (Dormbook), encaissements, renseignements et orientation, service du petit déjeuner, entretien de la réception / parties communes.
                            </p>
                            </div>
                        }
                    </li>
                    {/* D */}
                    <li>
                        <StyledPositionTitle>
                            <h4>Agent d'accueil touristique<span> - 3,5 ans</span></h4>
                            <div className='toggle' onClick={()=>setExpandedDetailsD(!expandedDetailsD)}>
                                { expandedDetailsD ? <BiMinus/> : <BiPlus/> }
                            </div>
                        </StyledPositionTitle>
                        {expandedDetailsD &&
                            <div>
                                <p><em>Maison du Tourisme et du Vin de Pauillac - Responsable oenotourisme et service croisière | 2013 - 2016</em><br/>
                                Accueil physique et télèphonique, conseil en séjour,
                                réservation / vente boutique et vinothèque,
                                conception d'activités touristiques avec les
                                prestataires locaux, recrutement et gestion
                                planning des guides / transports / visites /budget,
                                création de supports d'informations, participation à
                                l'organisation d'évènements, mise à jour des
                                informations touristiques locales, etc.
                                </p>
                                <p><em>Stage Office de tourisme de La Pierre Saint Martin | déc. 2012. - janv. 2013</em><br/>
                                Accueil physique et télèphonique, conseil client, gestion documentation, réservations (Résinsoft et Tourinsoft).
                                </p>
                            </div>
                        }
                    </li>
                    {/* C */}
                    <li>
                        <StyledPositionTitle>
                            <h4>Animatrice<span> - 3 mois</span></h4>
                            <div className='toggle' onClick={()=>setExpandedDetailsC(!expandedDetailsC)}>
                                { expandedDetailsC ? <BiMinus/> : <BiPlus/> }
                            </div>
                        </StyledPositionTitle>
                        {expandedDetailsC &&
                            <div>
                                <p><em>Animatrice club enfant VTF Clair Canigou | juillet 2013</em><br/>
                            Accueil des enfants et parents, animations, spectacles, conception de programmes, entretien du matériel et des locaux.
                            </p>
                            <p><em>UCPA SPORT VACANCES Bombannes | mars - avril 2013</em><br/>
                            Organiser et encadrer des activités de loisirs, sports et nature pour des adolescents.
                            </p>
                            </div>
                        }
                    </li>
                    {/* B */}
                    <li>
                        <StyledPositionTitle>
                            <h4>Guide / accompagnatrice d'excursions<span> - 4 mois</span></h4>
                            <div className='toggle' onClick={()=>setExpandedDetailsB(!expandedDetailsB)}>
                                { expandedDetailsB ? <BiMinus/> : <BiPlus/> }
                            </div>
                        </StyledPositionTitle>
                        { expandedDetailsB &&
                            <div>
                                <p><em>Accompagnatrice d'excursions - AZUREVA Lacanau | sept. 2013</em><br/>
                                Accueillir, informer et guider les clients, mise en place des itinéraires, présentation de la région.</p>
                                <p><em>Guide chargée d'accueil stagiaire - Association La Tour du Viala du Pas de Jaux Aveyron | juil. - août 2011</em><br/>
                                Accueil physique et télèphonique, visites guidées du monument, participation aux animation, évènements et expositions, ventes, encaissements et réapprovisionnement de la boutique, réservations du gîte d'étape, entretien des locaux.
                                </p>
                            </div>
                        }
                    </li>
                    {/* A */}
                    <li>
                        <StyledPositionTitle>
                            <h4>Femme de ménage en hôtellerie<span> - 6 mois</span></h4>
                            <div className='toggle' onClick={()=>setExpandedDetailsA(!expandedDetailsA)}>
                                { expandedDetailsA ? <BiMinus/> : <BiPlus/> }
                            </div>
                        </StyledPositionTitle>
                        { expandedDetailsA &&
                            <p><em>Vitalparc APLUS Lacanau, Azureva, Vacancéole | entre 2009 et 2021</em>Remise en état des chambres / villas / appartements à blanc et en recouche, réapprovisionnement des chambres / villas / appartements en produits d’accueil et en linge, contrôle de l’état des équipements, du linge, du mobilier, trespect ses règles d’hygiène et de sécurité, optimisation de l’utilisation des produits et matériels mis à disposition.</p>
                        }
                    </li>
                </ul>
                }
        </div>
    )
}

export default Tourism