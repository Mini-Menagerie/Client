import { css } from '@emotion/core';
import cover from '../../assets/cover.jpg'

export const wrapperCover = css `
background-image: url(${cover});
background-size: cover;
object-fit: contain;
height: 400px;
width: 100%;
`

export const h2 = css `
padding-top: 100px;
padding-left: 40px;
font-weight: 700;
color: #FFFFFF; `

export const p = css `
color: #FFFFFF;
padding-left: 40px;
font-weight: 500;
font-size: 20px;`

export const linkTo = css `
color: #3E3E3E;
padding-left: 40px;;
text-decoration: underline; `

export const enterLocation = css `
color: #FFFFFF;
background-color: #22891A;
padding: 20px 40px;
width: 270px;
border: none;
border-radius: 10px 0px 0px 10px;
outline: none;

::placeholder {
    color: #fff;
}
`

export const underCoverSearch = css `
margin-top: 30px;
color: #FFFFFF;
font-size: 12px;
`

export const dogCatButton = css `
color: #FFF;
background-color: #22B216;
padding: 20px 40px;
border: none;
    &:hover {
        outline: none;
        background-color: #22891A;
        box-shadow: none;
    }
`

export const otherPets = css `
color: #FFFFFF;
background-color: #22B216;
padding: 20px 40px;
border: none;
border-radius: 0px 10px 10px 0px;
font-size: 12px;
box-shadow: none;
outline: none;
&:hover {
    outline: none;
    background-color: #22891A;
    box-shadow: none;
}
`;

export const dropdownMenu = css `
background-color: #22891A;
font-size: 15px;`

export const breedsLogo = css `
width: 30px;
filter: brightness(0) invert(1);
font-size: 12px;`

export const petsAvailableText = css `
text-align: center;
margin-top: 100px;
margin-bottom: 80px;
color: #464646;
`

export const petsAvailable = css `
margin: 110px;
`

export const howToAdopt = css `
color: white;
background-color: #22891A;
padding: 15px 30px;
margin-top: 100px;
text-align: center;
margin-left: 300px;
margin-right: 300px;
border-radius: 50px;
`

export const letterIcon = css `
width: 70px;
filter: brightness(0) invert(1);
`

export const informationIcons = css `
filter: invert(43%) sepia(13%) saturate(2731%) hue-rotate(68deg) brightness(95%) contrast(98%);
height: 200px;
width: auto;
margin-top: 50px;
margin-left: 100px;
margin-right: 100px;
text-align: center;
display: flex;
`

export const jumbotron = css `
background-color: transparent;
color: #464646;
`

export const iconText = css `
color:#22B216;
padding-top: 80px;
color: #464646;
`

export const iconContainer = css `
border: solid 2px #22891A;
border-radius: 70px;
display: flex;
justify-content: center;
align-content: center;
text-align: center;
margin-top: -60px;
`

export const howToAdoptContainer = css `
margin-left: 200px;
margin-right: 200px;
`

export const arrowIcon = css `
filter: invert(48%) sepia(61%) saturate(2034%) hue-rotate(81deg) brightness(97%) contrast(86%);
width: 50px;
height: 50px;
margin-top: 220px;
`

export const shop = css `
display: flex;
justify-content: space-between;
margin-top: 100px;
margin-left: 200px;
margin-right: 200px;

`

export const shopText = css `
text-align: center;
margin-top: 200px;
color: #464646;
margin-left: 100px;
margin-right: 100px;
`

export const dogfood1 = css `
transform: rotate(-20deg);
width: 80px;
filter: brightness(0) invert(1);
`

export const dogfood2 = css `
transform: rotate(20deg);
width: 80px;
filter: brightness(0) invert(1);
;`

export const buyNecessities = css `
background-color: #2E8116;
padding-top: 30px;
padding-bottom: 30px;
color: #FFF;
border-radius: 20px;
`

export const profits = css `
margin-top: 20px;
font-weight:600;
`

export const title = css `
font-weight: 600;
`

export const choices = css `
font-size: 12px;
`

export const goToShop = css `
text-align: right;
margin-right: 110px;
`;

export const colStyles = css`
  padding: 0;
`;
