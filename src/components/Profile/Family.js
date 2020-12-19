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

export default function Family({ profile }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} style={{ marginTop: "20px" }}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Relation</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">DOB</StyledTableCell>
            <StyledTableCell align="right">Number</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Dad
            </StyledTableCell>
            <StyledTableCell align="right">{profile.dadname}</StyledTableCell>
            <StyledTableCell align="right">{profile.daddob}</StyledTableCell>
            <StyledTableCell align="right">{profile.dadno}</StyledTableCell>
          </StyledTableRow>
        </TableBody>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Mom
            </StyledTableCell>

            <StyledTableCell align="right">{profile.momname}</StyledTableCell>
            <StyledTableCell align="right">{profile.momdob}</StyledTableCell>
            <StyledTableCell align="right">{profile.momno}</StyledTableCell>
          </StyledTableRow>
        </TableBody>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Spouse
            </StyledTableCell>
            <StyledTableCell align="right">
              {profile.spousename}
            </StyledTableCell>
            <StyledTableCell align="right">{profile.spousedob}</StyledTableCell>
            <StyledTableCell align="right">{profile.spouseno}</StyledTableCell>
          </StyledTableRow>
        </TableBody>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Child
            </StyledTableCell>
            <StyledTableCell align="right">{profile.childname}</StyledTableCell>
            <StyledTableCell align="right">{profile.childdob}</StyledTableCell>
            <StyledTableCell align="right">{profile.childno}</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
