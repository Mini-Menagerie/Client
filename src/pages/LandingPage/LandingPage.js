/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Dropdown } from 'react-bootstrap';

import PrimaryButton from '../../components/Button/Button'
import {
  wrapperCover,
  h2,
  p,
  linkTo,
  enterLocation,
  underCoverSearch,
  dogCatButton,
  otherPets,
  dropdownMenu
} from './LandingPage.styles'


import { Link } from 'react-router-dom'


const LandingPage = () => {

  return (
    <div>
      <div css={wrapperCover}>
        <h2 css={h2}>Provide For Those Who Needs It.</h2>
        <p css = {p}>Save A Live Today</p>
        <Link to="/" css={linkTo}><PrimaryButton type="submit">Start Searching</PrimaryButton></Link>
      </div>
        <div css={underCoverSearch}>
            <input type="text" css={enterLocation} placeholder="Enter Province or State"></input>
            <button css={dogCatButton}><i class="fas fa-bone"></i>&nbsp;&nbsp;&nbsp;Find Dog Breed</button>
            <button css={dogCatButton}><i class="fas fa-paw"></i>&nbsp;&nbsp;&nbsp;Find Cat Breed</button>
            <Dropdown>
              <Dropdown.Toggle css={otherPets}>
                Find Other Pets
              </Dropdown.Toggle>
              <Dropdown.Menu css={dropdownMenu}>
                <Dropdown.Item href="#/action-1">
                  <img src="https://img.icons8.com/metro/26/000000/running-rabbit.png" alt="rabbit"/>
                  rabbit
              </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Cat Breeds</Dropdown.Item>
              </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default LandingPage;