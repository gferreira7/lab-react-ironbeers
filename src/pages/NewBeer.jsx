import axios from 'axios'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router'

const NewBeer = () => {
  const navigate = useNavigate()
  const [newBeer, setNewBeer] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: undefined,
    contributed_by: '',
  })

  const handleChanges = (e) => {
    const { name, value } = e.target
    setNewBeer((prevValue) => ({ ...prevValue, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post(`https://ih-beers-api2.herokuapp.com/beers/new`, newBeer)
      .then((res) => navigate('/beers'))
  }
  return (
    <div className='text-start p-5'>
      <h1 className='mb-5'>Add a new Beer</h1>
      <Form onSubmit={handleSubmit} className='fs-5' >
        <Form.Group className='mb-3'>
          <Form.Label>Name</Form.Label>
          <Form.Control
          className='rounded'
            type='text'
            name='name'
            value={newBeer.name}
            onChange={handleChanges}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Tagline</Form.Label>
          <Form.Control
            type='text'
            name='tagline'
            value={newBeer.tagline}
            onChange={handleChanges}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as='textarea'
            name='description'
            value={newBeer.description}
            onChange={handleChanges}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>First Brewed</Form.Label>
          <Form.Control
            type='text'
            name='first_brewed'
            value={newBeer.first_brewed}
            onChange={handleChanges}
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Brewers Tips</Form.Label>
          <Form.Control
            type='text'
            name='brewers_tips'
            value={newBeer.brewers_tips}
            onChange={handleChanges}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Attenuation Level</Form.Label>
          <Form.Control
            type='number'
            name='attenuation_level'
            value={newBeer.attenuation_level}
            onChange={handleChanges}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Contributed By</Form.Label>
          <Form.Control
            type='text'
            name='contributed_by'
            value={newBeer.contributed_by}
            onChange={handleChanges}
          />
        </Form.Group>

        <Button
          variant='primary'
          type='submit'
        >
          ADD NEW
        </Button>
      </Form>
    </div>
  )
}

export default NewBeer
