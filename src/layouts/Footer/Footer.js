/** @jsx jsx */
import { jsx } from '@emotion/core';

import PrimaryButton from '../../components/Button/Button'
import logo from '../../assets/logo2.png'
import {
  imageLogo,
  footer,
  footerTitle,
  subsLogo,
  subscription,
  wrapperStyles2,
  wrapperStyles,
  mini,
  icons,
  icon,
  subsText
} 
from './Footer.styles'
import subLogo from '../../assets/signUp.png'

const Footer = () => {
  return (
    <div>
    <div css={wrapperStyles}>
      <div css={imageLogo}>
        <img src={logo}></img>
      </div>
      <div>
        <p css={footerTitle}>ABOUT MINI MENAGERIE</p>
        <p css={footer}>FAQS</p>
        <p css={footer}>PartnerShips</p>
        <p css={footer}>Terms of Service</p>
        <p css={footer}>Mobile Sites & Apps</p>
        <p css={footer}>Mini Menagerie Foundation</p>
        <p css={footer}>For Developers</p>
        <p css={footer}>Contact Us</p>
      </div>
      <div>
      <p css={footerTitle}>PET ADOPTION</p>
        <p css={footer}>Dog Adoption</p>
        <p css={footer}>Cat Adoption</p>
        <p css={footer}>Other Pets Adoption</p>
        <p css={footer}>Search Other Adoption Organization</p>
        <p css={footer}>Read Happy Adoption Story</p>
        <p css={footer}>Local Adoption Events</p>
        <p css={footer}>Shelters & Rescues</p>
      </div>
      <div>
      <p css={footerTitle}>PET CARE TOPICS</p>
        <p css={footer}>Dog Care</p>
        <p css={footer}>Cat Care</p>
        <p css={footer}>All Pet Care</p>
        <p css={footer}>Dog Breeds</p>
        <p css={footer}>Cat Breeds</p>
        <p css={footer}>Pet Care Videos</p>
        <p css={footer}>Helping Pets</p>
      </div>
      <div css={subscription}>
        <img src={subLogo} css={subsLogo}></img>
        <p css={subsText}>
        Sign up for our newsletter<br></br>
        to get the latest update on pet<br></br>
        adoption & rescues!
        </p>
        <PrimaryButton>Sign Up</PrimaryButton>
      </div>
    </div>
    <div css={wrapperStyles2}>
      <div css={mini}>
        <p>@2020 MiniMenagerie.com</p>
     </div> 
     <div>
       <p>All trademarks are owned by Société des Produits Nestlé S.A., or used with permission.</p>
     </div>
     <div css={icons}>
       <div css={icon}>
        <i class="fab fa-facebook-square fa-2x"></i>
      </div>
      <div css={icon}>
        <i class="fab fa-twitter-square fa-2x"></i>
      </div>
      <div css={icon}>
        <i class="fab fa-instagram-square fa-2x"></i>
      </div>
      <div css={icon}>
       <i class="fab fa-linkedin fa-2x"></i>
      </div>
      <div css={icon}>
      <i class="fab fa-pinterest-square fa-2x"></i>
      </div>
     </div>
    </div>
  </div>
  );
}

export default Footer;