/* eslint-disable array-callback-return */
import React from 'react'
import { Nav, Form, FormControl } from 'react-bootstrap'
import StarRatings from 'react-star-ratings'
const Navb = ({ handleSearch, handleRate }) => {
  return (
    <div>
      <Nav className='justify-content-center' activeKey='/home'>
        <Nav.Item>
          <Nav.Link eventKey='link-1'> </Nav.Link>
        </Nav.Item>

        <StarRatings
          className='star-ratings'
          changeRating={handleRate}
          numberOfStars={5}
          name='rating'
          starDimension='15px'
          starHoverColor='#6A515E'
        />

        <Nav.Item>
          <Form className='d-flex navsearch'>
            <FormControl
              type='search'
              placeholder='Search'
              className='me-2 '
              aria-label='Search'
              onChange={(e) => handleSearch(e)}
            />
          </Form>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default Navb
