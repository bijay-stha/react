import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Educations({ education, auth }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} style={{ marginTop: "20px" }}>
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
  );
}
