/** @jsx jsx */
import { jsx } from "@emotion/core";

import { cartHolder } from "./cartItem.styles";

const CartProduct = ({ data }) => {
    console.log(data);
    return (
        <div>
            {data.map((value) => {
                return (
                    <div css={cartHolder}>
                        <div>
                            <img
                                src={value.image}
                                style={{
                                    width: "200px",
                                    height: "150px",
                                    objectFit: "cover",
                                }}
                                alt="cart_image"
                            />
                        </div>

                        <div style={{ paddingLeft: "10px" }}>
                            <h5>{value.productName}</h5>
                            <h5>{`(${value.quantity} Item)`}</h5>
                            <h5>{`Rp.${value.price}`}</h5>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
export default CartProduct;
