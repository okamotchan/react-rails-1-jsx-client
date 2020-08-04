import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';
import { Fab, DialogActions } from '@material-ui/core';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function DeleteDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;
  const [id, setId] = useState();

  const handleClose = () => {
    onClose(selectedValue);
  };

  const deleteTask = (id) => {
    let request = new Request(`/api/v1/tasks/${props.id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    });

    fetch(request).then(function (response) {
      return response;
    }).then(() => {
      this.props.getTasks();
    }).catch(function (error) {
      console.error(error);
    });
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">削除してもよろしいですか?</DialogTitle>
        <DialogActions>
          <Button color='primary'>No</Button>
          <Button color='primary'
                  onClick={deleteTask}
          >
            Yes
          </Button>
        </DialogActions>
    </Dialog>
  );
}

DeleteDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function DeleteDialogDemo() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <br>
      </br>
      <Fab 
        color="secondary"
        aria-label="edit"
        size="small"
      >
        <DeleteIcon onClick={handleClickOpen} />
      </Fab>

      <DeleteDialog open={open} onClose={handleClose} />
    </div>
  );
}
