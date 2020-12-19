import React from "react";
import { Link } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
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

export default function EditEducationDetails({ education, auth }) {
  const classes = useStyles();
  return (
    <Card className={classes.paper}>
      <CardHeader
        action={
          <Link to="/addeducations">
            <IconButton aria-label="settings" className={classes.button}>
              <AddIcon />
            </IconButton>
          </Link>
        }
        title="Educations Details"
      />
      <Divider />
      <CardContent>
        <TableContainer>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Degree</StyledTableCell>
                <StyledTableCell align="right">instute</StyledTableCell>
                <StyledTableCell align="right">Year</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {education &&
                education.map((educations) => {
                  if (educations.userid === auth.uid) {
                    return (
                      <StyledTableRow key={educations.userid}>
                        <StyledTableCell component="th" scope="row">
                          {educations.Degree}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {educations.instute}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {educations.year}
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
