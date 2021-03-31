import React from 'react';
import ModalStructure from './ModalStructure';

const createModal = ({
  message,
  closeModal,
  primBtnLabel,
  primBtnAction,
  secBtnAction = null,
  secBtnLabel = null,
  children = null,
  open = true
}) => (
  <ModalStructure
    open={open}
    message={message}
    secBtnLabel={secBtnLabel}
    primBtnLabel={primBtnLabel}
    secBtnAction={secBtnAction}
    primBtnAction={primBtnAction}
    closeModal={closeModal}
  >
    {children}
  </ModalStructure>
);

// const createModel = ({
//   message,
//   closeModal,
//   primBtnLabel,
//   primBtnAction,
//   secBtnAction = null,
//   secBtnLabel = null,
//   children = null,
//   open = true
// }) => (

// )

export default createModal;
