import { css } from '@emotion/core';

export const h1 = css`
text-align:center;
`

export const h5 = css`
text-align:center;
`

export const detail_section_col = css`
// border-style: dashed;
padding: 40px;
border: solid 2px #e3e3e3;
border-radius: .35rem;
margin-right: 47px;

h1, h5 {
    text-align: center;
}
`
export const detail_section_col_left_first_row = css`
display: flex;
justify-content: space-between;
`

export const detail_section_col_left_second_row = css`
display: flex;
// align-items: center;
p, h5 {
    padding-right: 10px;
}
`

export const row_line = css`
margin-top: -20px;
`

export const detail_section_col_right = css`
display: flex;
align-items: center;
justify-content: space-around;
margin-top: 1.25rem;
input {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid #000000;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-radius: 0;
}
`
export const detail_section_col_right_button = css`
margin-top:  1.25rem;
text-align: center;
`

export const location = css `
margin-top: 30px;
`

export const rowMargin3 = css `
padding-bottom: 20px;
align-content: center;
`