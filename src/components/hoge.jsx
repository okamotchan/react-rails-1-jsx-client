import React from 'react';
import { Fab } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteDialog from './DeleteDialog';

function TaskRow(props) {

  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
  );
}

DeleteDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};


