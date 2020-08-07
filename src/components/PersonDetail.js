import React from 'react'
import Grid from "@material-ui/core/Grid";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import EditIcon from '@material-ui/icons/Edit';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export default function PersonDetail({users}) {   
    return       users.map((row) => (
        <TableRow key={row.name}>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.calories}</TableCell>
          <TableCell align="right">{row.fat}</TableCell>
          <TableCell align="right">{row.carbs}</TableCell>
          <TableCell align="right">{row.protein}</TableCell>
        </TableRow>
      ))
    
}
