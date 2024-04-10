import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { SelectInputProps } from "@mui/material/Select/SelectInput";

interface CustomSelectProps<T extends { name: string; value: string }>
  extends Partial<SelectInputProps> {
  options: T[];
  label: string;
}

export const CustomSelect = <T extends { name: string; value: string }>({
  label,
  onChange,
  options,
  value,
  disabled,
  name,
  autoWidth = false,
  multiple = false,
  native = false,
}: CustomSelectProps<T>) => {
  return (
    <FormControl fullWidth>
      <InputLabel
        id="demo-simple-select-label"
        sx={{
          color: "#fff",
          "&.Mui-focused": {
            color: "#FF472F",
          },
        }}
      >
        {label}
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        name={name}
        label={label}
        disabled={disabled}
        onChange={onChange}
        sx={{
          width: "100%",
          color: disabled ? "#fff" : "#fff",
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "#FF472F",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FF472F",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FF472F",
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FF472F",
          },
          "& .MuiSvgIcon-root": {
            color: disabled ? "#FF472F" : "#FF472F",
          },
          "& .MuiPaper-root": {
            backgroundColor: "#FF472F",
            color: "#fff",
            "&& .MuiMenuItem-root": {
              "&:hover": {
                backgroundColor: disabled ? "#FF472F" : "#FF574F",
              },
              "&.Mui-selected, &.Mui-selected:hover": {
                backgroundColor: "#FF574F",
                border: "1px solid #FF574F",
                color: "#fff",
              },
            },
          },
          // opacity: disabled ? 0.7 : 1,
        }}
        multiple={multiple}
        native={native}
      >
        {options.map((opt) => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
