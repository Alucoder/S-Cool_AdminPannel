import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import IconButton from "@material-ui/core/IconButton";
import Modal from "@material-ui/core/Modal";
import UpdatePersonDetail from "../components/UpdatePersonDetail";

export default function PersonDetail({ users }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return users.map((row, i) => (
    <TableRow key={i}>
      <TableCell component="th" scope="row">
        {row.fname}
      </TableCell>
      <TableCell align="right">{row.userid}</TableCell>
      <TableCell align="right">
        {row.classroom.classroom} "{row.classroom.section}"
      </TableCell>
      <TableCell align="right">{row.email}</TableCell>
      <TableCell align="right">{row.phone}</TableCell>
      <TableCell align="right">
        <IconButton aria-label="edit" onClick={handleOpen}>
          <EditIcon />
        </IconButton>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <UpdatePersonDetail initialValues={row} close={handleClose} />
        </Modal>
      </TableCell>
    </TableRow>
  ));
}
