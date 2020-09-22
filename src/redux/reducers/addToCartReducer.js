export const product = {}

export const cart = {
    cart: 0
}

export const addToCartReducer = (state = product, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            let products = JSON.parse(localStorage.getItem('products'))
            console.log(products, 'products');
            const productById = products.find(item => { return action.id == item._id})
            let cart = []
            cart.push(productById)
            return {
                ...state,
                product: {stock: productById.stock - 1, ...productById.stock},
                cart: cart
            }
        default:
            return state;
    }
}

