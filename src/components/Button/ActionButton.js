/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Button } from 'react-bootstrap'

import { button } from './ActionButton.styles'

<<<<<<< HEAD
export const ActionButton = (props) => {
=======
const ActionButton = () => {
>>>>>>> b8a8fc493e1c2af831255cd1cdb6fbf578b71fe5
    return (
        <div css={button}>
            <Button{...props}>Add to Cart</Button>
        </div>
    )
}

export default ActionButton;
