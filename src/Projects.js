import { Modal } from 'react-responsive-modal';
import  Card from './Cards.js'
import React, { useState } from 'react';
import styles from './Projects.module.css';


const Projects = () => {
         
const [open1, setOpen1] = useState(false);
const [open2, setOpen2] = useState(false);
const [open3, setOpen3] = useState(false);
const [open4, setOpen4] = useState(false);
const [open5, setOpen5] = useState(false);
const [open6, setOpen6] = useState(false);
const [open7, setOpen7] = useState(false);
const [open8, setOpen8] = useState(false);

  
  const onOpenModal1 = () => setOpen1(true);
  const onCloseModal1 = () => setOpen1(false);

  const onOpenModal2 = () => setOpen2(true);
  const onCloseModal2 = () => setOpen2(false);

  const onOpenModal3 = () => setOpen3(true);
  const onCloseModal3 = () => setOpen3(false);

  const onOpenModal4 = () => setOpen4(true);
  const onCloseModal4 = () => setOpen4(false);

  const onOpenModal5 = () => setOpen5(true);
  const onCloseModal5 = () => setOpen5(false);

  const onOpenModal6 = () => setOpen6(true);
  const onCloseModal6 = () => setOpen6(false);

  const onOpenModal7 = () => setOpen7(true);
  const onCloseModal7 = () => setOpen7(false);

  const onOpenModal8 = () => setOpen8(true);
  const onCloseModal8 = () => setOpen8(false);

  return (
<>

    <div className={styles.cardWrapper}>

    <div>
    
    <Card heading="Wassup"
   description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus perferendis ad aperiam esse, repudiandae sit nam blanditiis a alias nostrum porro itaque omnis amet suscipit facere?"
   gitHub="https://github.com/chusyntax"
   liveSite="https://github.com/chusyntax"
   onClick={onOpenModal1}
   >
  </Card>
      <Modal open={open1} onClose={onCloseModal1} center>
        <h2>Simple centered modal 1</h2>
        <p>
          Lorem ipsum dolor sit amet,   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
      </Modal> 
    </div>

     <div>
     <Card heading="Wassup"
   description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus perferendis ad aperiam esse, repudiandae sit nam blanditiis a alias nostrum porro itaque omnis amet suscipit facere?"
   gitHub="https://github.com/chusyntax"
   liveSite="https://github.com/chusyntax"
   onClick={onOpenModal2}
   >
  </Card>
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
     <Card heading="Wassup"
   description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus perferendis ad aperiam esse, repudiandae sit nam blanditiis a alias nostrum porro itaque omnis amet suscipit facere?"
   gitHub="https://github.com/chusyntax"
   liveSite="https://github.com/chusyntax"
   onClick={onOpenModal3}
   >
  </Card>
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
    <Card heading="Wassup"
   description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus perferendis ad aperiam esse, repudiandae sit nam blanditiis a alias nostrum porro itaque omnis amet suscipit facere?"
   gitHub="https://github.com/chusyntax"
   liveSite="https://github.com/chusyntax"
   onClick={onOpenModal4}
   >
  </Card>
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

<div className={styles.cardWrapper}>

<div>

<Card heading="Wassup"
description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus perferendis ad aperiam esse, repudiandae sit nam blanditiis a alias nostrum porro itaque omnis amet suscipit facere?"
gitHub="https://github.com/chusyntax"
liveSite="https://github.com/chusyntax"
onClick={onOpenModal5}
>
</Card>
  <Modal open={open5} onClose={onCloseModal5} center>
    <h2>Simple centered modal 5</h2>
    <p>
      Lorem ipsum dolor sit amet,   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
      pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
      hendrerit risus, sed porttitor quam.
    </p>
  </Modal> 
</div>

 <div>
 <Card heading="Wassup"
description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus perferendis ad aperiam esse, repudiandae sit nam blanditiis a alias nostrum porro itaque omnis amet suscipit facere?"
gitHub="https://github.com/chusyntax"
liveSite="https://github.com/chusyntax"
onClick={onOpenModal6}
>
</Card>
  <Modal open={open6} onClose={onCloseModal6} center>
    <h2>Simple centered modal 6</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
      pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
      hendrerit risus, sed porttitor quam.
    </p>
  </Modal>
</div>

 <div>
 <Card heading="Wassup"
description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus perferendis ad aperiam esse, repudiandae sit nam blanditiis a alias nostrum porro itaque omnis amet suscipit facere?"
gitHub="https://github.com/chusyntax"
liveSite="https://github.com/chusyntax"
onClick={onOpenModal7}
>
</Card>
  <Modal open={open7} onClose={onCloseModal7} center>
    <h2>Simple centered modal 7</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
      pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
      hendrerit risus, sed porttitor quam.
    </p>
  </Modal>
</div>


<div>
<Card heading="Wassup"
description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus perferendis ad aperiam esse, repudiandae sit nam blanditiis a alias nostrum porro itaque omnis amet suscipit facere?"
gitHub="https://github.com/chusyntax"
liveSite="https://github.com/chusyntax"
onClick={onOpenModal8}
>
</Card>
  <Modal open={open8} onClose={onCloseModal8} center>
    <h2>Simple centered modal 8</h2>
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

</>
    
  );
 };

export default Projects