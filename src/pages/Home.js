import React from 'react'
import { Container } from 'react-bootstrap'
import Input from '../components/InputComponent'

const Home = () => {
  return (
    <Container>
        <div className='row home-comp'>
            <div className='col-md-3 home'>Home</div>
            <div className='col-md-5 home'>Home</div>
            <div className='col-md-3 home'>Home</div>
        </div>
    </Container>
  )
}

export default Home