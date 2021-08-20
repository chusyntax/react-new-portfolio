import { Modal } from 'react-responsive-modal';
import React, { useState } from 'react';


const Projects = () => {
   

 const [open, setOpen] = useState(false);
const [open2, setOpen2] = useState(false);


  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const onOpenModal2 = () => setOpen(true);
  const onCloseModal2 = () => setOpen(false);

  return (
    <div className='cards'>

    <div>
      <button onClick={onOpenModal}>Open modal</button>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Simple centered modal</h2>
        <p>
          Lorem ipsum dolor sit amet,   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
      </Modal>
    </div>

     <div>
      <button onClick={onOpenModal2}>Open modal</button>
      <Modal open={open2} onClose={onCloseModal2} center>
        <h2>Simple centered modal</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
      </Modal>
    </div>

    </div>
    
  );
 };

export default Projects