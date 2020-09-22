import { css } from "@emotion/core";

export const product_name = css`
    font-weight: 600;
    min-height: 50px;
`;
export const product_price = css`
    color: #22891a;
    font-weight: 600;
`;

export const card_img = css`
    width: 100%;
    height: 100px;
    object-fit: cover;
`;
export const loading_css = css`
    display: flex;
    flex-direction: center;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 50vh;
`;
export const product_list = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 768px) {
        justify-content: center;
    }
`;
