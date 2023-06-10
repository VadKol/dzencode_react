import { FC } from "react";
import { TextField } from '@mui/material';

export const SearchFrom: FC = () => {
  return (
    <TextField
      label="Search..."
      variant="outlined"
      size="small"
      // value={searchTerm}
      // onChange={handleSearch}
    />
  );
}