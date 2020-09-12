/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Dropdown } from 'react-bootstrap';

import Logo from '../../assets/logo-mini-menagerie.png';
import {
  wrapperStyles,
  imageStyles,
  breedsShop,
  shopButton,
  navbar1,
  breedsButton,
  formSearch,
  searchText,
  searchButton
} from './Header.styles';
import { Button } from 'react-bootstrap'


const Header = () => {
  return (
    <div css={wrapperStyles}>
      <div css={navbar1}>
        <img src={Logo} css={imageStyles} alt="Mini Menagerie" />
        <div css={breedsShop}>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" css={breedsButton}>
            Breeds
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Dog Breeds</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Cat Breeds</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div css={shopButton}>Shop</div>
      </div>
      <div>
        <form css={formSearch}>
          <input type="text" css={searchText} placeholder="Search your future best friend"></input>
          <button type="submit" css={searchButton}><i class="fas fa-search"></i></button>
       </form>
      </div>
      </div>
      <div>
        <Button variant="light">Sign Up</Button>
        <Button variant="light">Log In</Button>
      </div>
    </div>
  );
}

export default Header;