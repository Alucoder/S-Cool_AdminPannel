// import React, { useEffect, useState } from "react";
// import { withStyles, makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import Layout from "../components/Layout";
// import Axios from "axios";
// import PersonDetail from '../components/PersonDetail'

// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     "&:nth-of-type(odd)": {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);

// const withStudentStyle = makeStyles({
//   table: {
//     minWidth: 700,
//   },
// });

// export default function Teacherinfo() {
//   const classes = withStudentStyle();
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     const userData = async () => {
//       try {
//         const { data } = await Axios.get(
//           "http://localhost:30022/users/userteacher",
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           }
//         );
//         setUsers(data);
//         console.log("users :", data);
//       } catch (e) {
//         throw e;
//       }
//     };
//     userData();
//   }, []);
//   return (
//     <Layout>
//       <TableContainer component={Paper}>
//         <Table className={classes.table} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell>Teacher</StyledTableCell>
//               <StyledTableCell align="right">User Id</StyledTableCell>
//               <StyledTableCell align="right">Classroom</StyledTableCell>
//               <StyledTableCell align="right">Email</StyledTableCell>
//               <StyledTableCell align="right">Phone</StyledTableCell>
//               <StyledTableCell align="right">Actions</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {users.map((row, index) => (
//               <PersonDetail key={index} row StyledTableCell StyledTableRow/>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Layout>
//   );
// }

import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

 import Layout from "../components/Layout";
import Axios from "axios";
import PersonDetail from '../components/PersonDetail'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Teacherinfo() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const userData = async () => {
      try {
        const { data } = await Axios.get(
          "http://localhost:30022/users/userteacher",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setUsers(data);
        console.log("users :", data);
      } catch (e) {
        throw e;
      }
    };
    userData();
  }, []);
  return (
    <Layout>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
              <TableCell>Teachers</TableCell>
            <TableCell align="right">User Id</TableCell>
            <TableCell align="right">Classroom</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <PersonDetail users={users}/>
        </TableBody>
      </Table>
    </TableContainer>
    </Layout>
  );
}
