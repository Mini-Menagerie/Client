/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Button } from 'react-bootstrap'

import { button } from './ActionButton.styles'

const ActionButton = () => {
    return (
        <div css={button}>
            <Button>Add to Cart</Button>
        </div>
    )
}

export default ActionButton;
