import {useState}from 'react';
import Modal from  './Modal';
import Backdrop from  './Backdrop';

 
function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true)
  }
  function removeModal() {
    setModalIsOpen(false)
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
     {modalIsOpen &&  <Modal close={removeModal} confirm={removeModal}/>}
      {modalIsOpen && <Backdrop onClick={removeModal}/>}

    </div>
  );
}

export default Todo;
