import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

function Addmovie({addmovie}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [url, setUrl] = useState('')
    const [rate, setRate] = useState(0)
  return (
    <div>
        <Button style={{width:'200px'}}variant="primary" onClick={handleShow}>Add Movie</Button>

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title>Add Movie</Modal.Title>
</Modal.Header>
<label>Title</label>
<input  type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
<label>posterUrl</label>
<input  type="text" value={url} onChange={(e)=>setUrl(e.target.value)}/>
<label>Description</label>
<input  type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
<label>Rating</label>
<input  type="text" value={rate} onChange={(e)=>setRate(e.target.value)}/>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Button variant="primary" onClick={()=>{addmovie({id:Math.random(),title,url,description,rate});handleClose()}}>
    Confirm
  </Button>
</Modal.Footer>
</Modal>
    </div>
  )
}

export default Addmovie