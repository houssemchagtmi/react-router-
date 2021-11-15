import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

const AjouteCard = ({ addCard }) => {
  const [regarde, setRegarde] = useState(false)

  const [title, setTitle] = useState('')
  const handleTitle = (e) => {
    setTitle(e.target.value)
  }
  const [description, setDescription] = useState('')
  const handleDes = (e) => {
    setDescription(e.target.value)
  }
  const [rate, setRate] = useState('')
  const handleRate = (e) => {
    setRate(e.target.value)
  }
  const [posterUrl, setPosteURl] = useState('')
  const handlePoster = (e) => {
    setPosteURl(e.target.value)
  }

  const add = () => {
    let newCard = {
      title,
      description,
      rate,
      posterUrl
    }
    addCard(newCard)
  }

  const toggle = () => {
    setRegarde(!regarde)
  }
  return (
    <>
      <Button variant='primary' onClick={toggle}>
        Ajouter un nouveau Film
      </Button>

      <Modal show={regarde} onHide={toggle}>
        <Modal.Header closeButton>
          <Modal.Title>New Movie To Add</Modal.Title>
        </Modal.Header>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label> Movie Title</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter movie title'
              value={title}
              onChange={(e) => handleTitle(e)}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleFormControlTextarea1'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='text'
              as='textarea'
              rows={3}
              value={description}
              onChange={(e) => handleDes(e)}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicRate'>
            <Form.Label>Rate</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter rate'
              value={rate}
              onChange={(e) => handleRate(e)}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPosterUrl'>
            <Form.Label>PosterUrl</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter image'
              value={posterUrl}
              onChange={(e) => handlePoster(e)}
            />
          </Form.Group>
        </Form>
        <Modal.Footer>
          <Button variant='secondary' onClick={toggle}>
            Close
          </Button>
          <Button variant='primary' onClick= { () => { add()
          toggle()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AjouteCard
