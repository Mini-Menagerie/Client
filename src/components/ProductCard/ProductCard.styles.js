
import { css } from '@emotion/core';

export const product_name = css`
font-weight: 600;
min-height: 50px;
`

export const card_img = css`
width: 100%;
height: 10vw;
object-fit: cover;
`
export const loading_css = css`
display: flex;
flex-direction: center;
justify-content: center; 
align-items: center;
text-align: center; 
min-height: 50vh;
`
export const product_list = css`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

export const button = css `
text-align: center;
button {
    font-size: 1em;
    margin: 1em;
    padding: 0.5em 0.5em;
    border: 2px solid #22891A;
    background-color: #22891A;
    color: #FEFAE0;
    &:hover {
        background-color: #FEFAE0;
        color: #22891A;
        box-shadow: none;
    }
}
`