import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    color: theme.palette.text.secondary,
  },
  title: {
    marginTop: "10px",
    marginLeft: "10px",
    fontSize: 25,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  button: {
    marginLeft: 150,
  },
}));

export default function EditExperiance({ experiance, auth }) {
  const classes = useStyles();
  return (
    <Card className={classes.paper}>
      <CardHeader
        action={
          <IconButton aria-label="settings" className={classes.button}>
            <Link to="/addexperiance">
              <AddIcon />
            </Link>
          </IconButton>
        }
        title="Experiance Details"
      />
      <Divider />
      <CardContent>
        <TableContainer>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Company</StyledTableCell>
                <StyledTableCell align="right">Post</StyledTableCell>
                <StyledTableCell align="right">Role</StyledTableCell>
                <StyledTableCell align="right">Start Date</StyledTableCell>
                <StyledTableCell align="right">End Date</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {experiance &&
                experiance.map((experiances) => {
                  if (experiances.userid === auth.uid) {
                    return (
                      <StyledTableRow key={experiances.userid}>
                        <StyledTableCell component="th" scope="row">
                          {experiances.company}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {experiances.post}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {experiances.role}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {experiances.startyear}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {experiances.endyear}
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  } else {
                    return null;
                  }
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
