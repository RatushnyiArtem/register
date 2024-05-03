import { InputAdornment, TextField } from "@mui/material";
import { Magnify } from "@/components/common/icons/Magnify";
import * as styles from "./SearchBox.styles";

const SearchBox = () => {
  return (
    <TextField
      variant="outlined"
      sx={styles.searchBox}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Magnify fill="#222" />
          </InputAdornment>
        ),
      }}
      placeholder="Search for the poll"
    />
  );
};

export default SearchBox;
