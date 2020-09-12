/** @jsx jsx */
import { jsx } from '@emotion/core';

import { Button } from 'react-bootstrap';
import {
  buttonTest
} from './LandingPage.styles';

const LandingPage = () => {
  return (
    <div>
      PAGE CONTENT
      <Button css={buttonTest}>Test</Button>
    </div>
  );
}

export default LandingPage;