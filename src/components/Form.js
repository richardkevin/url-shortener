import React from "react";
import TextField from "@material-ui/core/TextField";

export default function Form({ handleInputChange }) {
  return (
    <form autoComplete="off">
      <TextField
        id="url"
        label="url"
        variant="outlined"
        onChange={handleInputChange}
      />
    </form>
  );
}
