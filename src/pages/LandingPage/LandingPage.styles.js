import { css } from '@emotion/core';
import cover from '../../assets/cover.jpg'

export const wrapperCover = css `
background-image: url(${cover});
background-size: cover;
object-fit: contain;
height: 300px;
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


::placeholder {
    color: #fff;
}

// enterLocation:after {
//     position: absolute;
//     display: block;
//     top: 0;
//     right: 100%;
//     border-left: 20px solid #22891A;
//     border-right: 20px solid #fff transparent;
//     border-top: 20px solid #fff transparent;
//     border-bottom: 20px solid #fff transparent;

// }
`

export const underCoverSearch = css `
margin-top: 30px;
color: #FFFFFF;
display: flex;
font-size: 12px;
justify-content: center;
`

export const dogCatButton = css `
color: #FFFFFF;
background-color: #22B216;
padding: 20px 40px;
border: none;`

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
`

export const dropdownMenu = css `
background-color: #22891A;
font-size: 15px;`