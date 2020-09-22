/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Button } from 'react-bootstrap'

import { button } from './ActionButton.styles'

export const ActionButton = () => {
    return (
        <div css={button}>
            <Button>Add to Cart</Button>
        </div>
    )
}