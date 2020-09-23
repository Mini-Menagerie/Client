import { css } from "@emotion/core";

export const wrapperCover = css`
    background-image: url(https://images.unsplash.com/photo-1442291928580-fb5d0856a8f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80);
    background-size: cover;
    background-position: right;
    height: 500px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const search = css`
    background-color: #a885ff;
    width: 100%;
    height: 200px;
    display: flex;
    align-items: space-between;
    justify-content: center;
`;

export const sortby = css`
    background-color: #209516;
    color: #ffffff;
    margin: 20px;
    padding: 5px;
    font-weight: 700;
    font-size: 40px;
    border: none !important;
`;

export const result = css`
    border: none !important;
`;
export const margin = css`
    margin: 30px;
`;
export const whitecolor = css`
    color: #6c757d;

    @media (max-width: 768px) {
        color: #fff;
    }
`;
export const card = css`
    padding: 30px;
`;
export const buttoncard = css`
    display: flex;
    justify-content: space-around;
    margin-top: 9px;
`;
export const widthButton = css`
    margin-top: 100px;
    font-weight: 700;
    font-size: 20px;
    border-radius: 15%;
    padding: 10px;
`;
export const title = css`
    font-weight: 600;
`;
export const petsAvailable = css`
    display: flex;
    justify-content: center;
    justify-content: space-between;
`;
export const img = css`
    width: 100%;
    height: 15vw;
    object-fit: cover;
`;
export const marginbutton = css`
    width: 100%;
    margin-right: 5px;
`;
export const displaying = css`
    font-weight: 700;
    font-size: 30px;
    margin: 25px 20px;
`;
export const centertext = css`
    text-align: center;
`;
export const filter = css`
    padding: 80px 25px;
    background: rgb(2, 0, 36);
    background: linear-gradient(
        180deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(9, 9, 121, 1) 0%,
        rgba(215, 212, 212, 1) 0%,
        rgba(250, 250, 250, 1) 0%,
        rgba(255, 255, 255, 1) 0%,
        rgba(62, 231, 133, 1) 63%,
        rgba(0, 255, 182, 1) 100%
    );
`;
export const buttonGroup = css`
    justify-content: center;
    margin: 30px 0px;
`;
