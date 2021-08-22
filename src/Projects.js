import { Modal } from 'react-responsive-modal';
import React, { useState } from 'react';


const Projects = () => {
         
const [open, setOpen] = useState(false);
const [open2, setOpen2] = useState(false);
const [open3, setOpen3] = useState(false);
const [open4, setOpen4] = useState(false);

  
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const onOpenModal2 = () => setOpen2(true);
  const onCloseModal2 = () => setOpen2(false);

  const onOpenModal3 = () => setOpen3(true);
  const onCloseModal3 = () => setOpen3(false);

  const onOpenModal4 = () => setOpen4(true);
  const onCloseModal4 = () => setOpen4(false);

  return (
    <div className='modals'>

    <div>
      <button onClick={onOpenModal}>Open 1</button>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Simple centered modal 1</h2>
        <p>
          Lorem ipsum dolor sit amet,   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
      </Modal>
    </div>

     <div>
      <button onClick={onOpenModal2}>Open 2</button>
      <Modal open={open2} onClose={onCloseModal2} center>
        <h2>Simple centered modal 2</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
      </Modal>
    </div>

     <div>
      <button onClick={onOpenModal3}>Open 3</button>
      <Modal open={open3} onClose={onCloseModal3} center>
        <h2>Simple centered modal 3</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
      </Modal>
    </div>


    <div>
      <button onClick={onOpenModal4}>Open 4</button>
      <Modal open={open4} onClose={onCloseModal4} center>
        <h2>Simple centered modal 4</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
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