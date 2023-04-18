import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Beer = ({ beer: { name, image_url, tagline, contributed_by, _id } }) => {
  return (
    <Card className='px-5'>
      <Link to={`/beers/${_id}`}>
        <div className='d-flex justify-content-center text-start align-items-center p-5'>
          <Card.Img
            className='me-5'
            style={{width: '6rem'}}
            variant='top'
            src={image_url}
            alt='beer'
          />
          <Card.Body className='m-2 w-75'>
            <Card.Title className='fs-1'>{name}</Card.Title>
            <Card.Text className='fs-3 text-secondary'>{tagline}</Card.Text>
            <p>
              <span className='fs-bold'>Created By: </span>
              {contributed_by}
            </p>
          </Card.Body>
        </div>
      </Link>
    </Card>
  )
}

export default Beer
