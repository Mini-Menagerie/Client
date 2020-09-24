import { css } from '@emotion/core';
import cover from '../../assets/category.jpg';


export const wrapperCover = css `
    background-image: url(${cover});
    background-size: cover;
    object-fit: contain;
    height: 600px;
    width: 100%;
`
export const search = css `
    background-color: #a885ff;
    width: 100%;
    height: 200px;
    display: flex;
    align-items: space-between;
    justify-content:center;
    
`
export const sortby = css `
    background-color:  #209516;
    color: #ffffff;
    text-align: center;
    font-wight: 700;
    font-size: 40px;
    border: none !important;
    weight: 100%;
    height: 200px;
      
`
export const result =css `
    margin: 100px;
    border: none !important;
`
export const centerText = css `
  padding-left: 40px;
  padding-top: 70px;
  font-weight: 700;
  color: #ffffff;
`
export const whitecolor = css `
  padding-left: 40px;
  font-weight: 700;
  color: #ffffff;
`
export const tagline = css `
    padding-top:350px;
    
`
export const margin = css`
    margin-bottom: 25px;
`
export const category = css`
  display: flex;
  justify-content: space-around;
  margin: 100px;
`



export const center = css`
  text-align: center;
  font-weight: 500;
  font-size: 15px;
`
export const petImage = css`
    & > img {
        width: 100%;
        height: 500px;
        object-fit: cover;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
    }
    border-radius: 20px;
`