import styled from 'styled-components'

const StyledEducation = styled.div`
    width: 70%;
    height: fit-content;
    margin: 4rem auto;
    padding: 1rem 0;
    h1{
        color: #BC533B;
        background-color: #FEF9EF;
        padding: 1rem 8rem 1rem 2rem;
        width: fit-content;
        margin: 2rem 0;
    }
    ul{
        list-style: none;
        margin-bottom: 2rem;
    }
    p{
        margin-left: 2rem;
        line-height: 2rem;
        strong{
            color: #6C847E;
        }
    }
    .btn{
        font-size: .8rem;
        margin-left: 2.5rem;
    }
    @media all and (max-width: 768px){
        h1{
            font-size: 1.5rem;
        }
        li, p{
            font-size: .8rem;
        }
    }
`
const StyledTitle = styled.span`
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 2.5rem;
    color: #6C847E;
    @media all and (max-width: 768px){
        font-size: 1rem;
    }
`

function Education(){
    return(
        <div>
          <StyledEducation>
            <h1>FORMATIONS</h1>
            <ul>
                <li>
                    <StyledTitle>Développeur.se web et mobile</StyledTitle> - WEBFORCE3 <strong>- Septembre 2022</strong>
                </li>
                <li>
                    <StyledTitle>Création de site web avec HTML5 et CSS3</StyledTitle> - OPENCLASSROOMS - 2022
                </li>
                <li>
                    <StyledTitle>Accueil Par Excellence</StyledTitle> - Mission des offices de tourisme Nouvelle-Aquitaine - 2016
                </li>
                <li>
                    <StyledTitle>Stage technique : La Dégustation des Bordeaux de A à Z</StyledTitle> - Ecole du vin de Bordeaux CIVB - 2014
                </li>
                <li>
                    <StyledTitle>Technicien d'accueil touristique | Animation et CQP activités de loisirs sportifs spécialité activité de randonnée de proximité et d'orientation</StyledTitle> - INFA Aquitaine - 2013
                </li>
                <li>
                    <StyledTitle>Licence L.E.A. anglais / espagnol | Tourisme international</StyledTitle> - Université Bordeaux Montaigne - 2011
                </li>
                <li>
                    <StyledTitle>Baccalauréat Scientifique</StyledTitle> - Lycée Sud Médoc La Boétie
                </li>
            </ul>
          </StyledEducation>
          <StyledEducation>
            <h1>PMSMP</h1>
            <p>Quésaco ?<br/>
            La période de mise en situation en milieu professionnel est un court stage d'observation gratuit et conventionné par Pôle emploi. <strong>Simple</strong> et <strong>rapide</strong> à mettre en place, il suffit d'une signature et le tour est joué !</p>
          </StyledEducation>
          <StyledEducation>
            <h1>CONTRAT DE PROFESSIONNALISATION</h1>
            <ul>
                <li>
                    <StyledTitle>Développeuse web et mobile</StyledTitle> - WEBFORCE3 / RNCP (équivalent bac + 2)
                </li>
                <li>
                    <StyledTitle>12 mois | 2022</StyledTitle>
                </li>
                <li>3,5 mois en centre et 8 mois en alternance 6 semaines en entreprise et 1 semaine en centre</li>
            </ul> 
            <ul>
                <li>
                    <StyledTitle>Conceptrice Développeuse d’Application</StyledTitle> - WILD CODE SCHOOL / RNCP (équivalent bac + 4)
                </li>
                <li>
                    <StyledTitle>12 mois | 2023</StyledTitle>
                </li>
                <li>1 semaine en centre et 3 semaines en entreprise / 3 derniers mois consécutifs 100% en entreprise</li>
            </ul>
            <a href='https://www.wildcodeschool.com/fr-FR/formations/formation-developpeur-web-alternance' className='btn' target="_blank" rel="noreferrer">En savoir plus</a>
          </StyledEducation>
        </div>
    )
}

export default Education 