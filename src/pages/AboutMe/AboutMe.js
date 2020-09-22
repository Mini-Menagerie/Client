/** @jsx jsx */
import { jsx } from '@emotion/core'
import Axios from 'axios';
import { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap'

import aboutMe from '../../components/AboutMe/aboutMe'


const allProfile = () => {
  const [loading, setLoading] = useState (true);
  const [error, setError] = useState (false);
  const [errorMessage, setErrorMessage] = useState ();
  const [aboutMe, setAboutMe] = useState([]);

  let {id} = useParams()


  const profile = async () => {
    const url = `http://localhost:8000/users/${id}`
    axios.get(url)
    .then(function(response) {
      console.log(response);
      setAboutMe(response.data.result)
      setLoading(false)
    })
    .catch(function(error) {
      console.log(errorMessage);
      setLoading(false)
    })
  }

  useEffect (() => {
    profile();
  },[]);

return (
    <div>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
      <Tab eventKey="home" title="About Me">
        <aboutMe />
      </Tab>
      <Tab eventKey="profile" title="Account Settings">
        <Sonnet />
      </Tab>
      <Tab eventKey="contact" title="Pet Up For Adoption">
        <Sonnet />
      </Tab>
      <Tab eventKey="contact" title="Pet List">
        <Sonnet />
      </Tab>
      <Tab eventKey="contact" title="Adoption Request">
        <Sonnet />
      </Tab>
    </Tabs>
  </div>
)
}

 //put add a pet pop up in pet up for adoption
