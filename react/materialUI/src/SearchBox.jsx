import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({setPlace ,setError}) {
  const [value, setValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setPlace(value);
    console.log("loading..")
    setError(false)

  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        label="City name"
        size="small"
        required
      />
      <Button type="submit" variant="contained">
        Search
      </Button>
    </form>
  );
}
