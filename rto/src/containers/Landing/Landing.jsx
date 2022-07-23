import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./Landing.css"
import landingPic from './landing.png'

const Landing = () => {
  return (
    <div>
      <Container>
        <div className="centered">
          <div className="row">
            <div className="column">
              <img src={landingPic} class="img-fluid" alt="Responsive image">
              </img>
            </div>

            <div className="column">
              <div className="landing-text">
                <h1 > Pawfect Finder</h1>
                <h2>Find your perfect pet</h2>
              </div>
            </div>
          </div>

        </div>

      </Container>
    </div >
  )
}

export default Landing;