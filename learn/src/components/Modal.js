function Modal(props) {
function closeBtn() {
props.close()
}
function confirmBtn() {
props.confirm()
}
    return(
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn btn--alt" onClick={closeBtn}>Cancle</button>
            <button className="btn" onClick={confirmBtn}>Confirm</button>
        </div>
    );
}

export default Modal;
