/** @jsx jsx */
import { jsx } from '@emotion/core';

import Button from '../../components/Button/Button';
import Logo from '../../assets/logo-mini-menagerie.png';
import {
  wrapperStyles,
  imageStyles,
} from './Header.styles';

const Header = () => {
  return (
    <div css={wrapperStyles}>
      <div>
        <img src={Logo} css={imageStyles} alt="Mini Menagerie" />
      </div>
      <div>
        <div>Breeds</div>
        <div>Shop</div>
      </div>
      <div>
        <Button>Sign Up</Button>
        <Button>Sign In</Button>
      </div>
    </div>
  );
}

export default Header;