/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Button } from 'react-bootstrap'

import { button } from './ActionButton.styles'

export const ActionButton = (props) => {
    return (
        <div css={button}>
            <Button{...props}>Add to Cart</Button>
        </div>
    )
}