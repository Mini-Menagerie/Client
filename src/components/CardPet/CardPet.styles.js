import { css } from "@emotion/core";

export const dataPet = css`
    padding: 110px;
`;
export const margin = css`
    margin-bottom: 25px;
`;

export const petImage = css`
    & > img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
    }
    border-radius: 20px;
`;
