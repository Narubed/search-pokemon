import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function FreeSolo(props: any) {
  const { isData, setSearchData } = props;
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Autocomplete
        onChange={(event: any, newValue: string | null) => {
          const filterValue = isData.filter((item: any) => item.name === newValue)
          setSearchData(newValue !== null ? filterValue : isData)
        }}
        id="controllable-states-demo"
        options={isData.map((option: any) => option.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Pokemon : "
            InputProps={{
              ...params.InputProps,
            }}
          />
        )}
      />
    </Stack>
  );
}
