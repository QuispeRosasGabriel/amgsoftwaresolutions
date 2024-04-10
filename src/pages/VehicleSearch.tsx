import { Box, Grid, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useMemo, useState } from "react";
import { IVehicle } from "../common";
import {
  ActionButtons,
  CustomInput,
  CustomSelect,
  EnhancedTable,
} from "../components";
import { BrandsList, CarsModelList } from "../mocks";

export const VehicleSearch = () => {
  const [searchForm, setSearchForm] = useState<IVehicle>({
    id: 0,
    brand: "",
    model: "",
    km: undefined,
    price: undefined,
    year: dayjs(new Date().getFullYear().toString()),
    concession: "",
  });

  const carsDataFromStorage = JSON.parse(
    localStorage.getItem("CARS_LIST") ?? "{}"
  );

  const [carsListData, setCarsListData] = useState<Array<IVehicle>>(
    carsDataFromStorage ?? []
  );

  const filteredModelsList = useMemo(
    () => CarsModelList.filter((c) => c.brand === searchForm?.brand),
    [searchForm?.brand]
  );

  const handleFilter = () => {
    const filterCars = () => {
      const filteredCars = carsListData.filter((car) => {
        if (car.id === searchForm.id) return true;

        return (
          car.brand === searchForm.brand ||
          car.model === searchForm.model ||
          car.km === searchForm.km ||
          car.year === searchForm.year ||
          ((searchForm.price === null || car.price === searchForm.price) &&
            car.year === searchForm.year &&
            car.concession === searchForm.concession)
        );
      });

      return filteredCars;
    };

    setCarsListData(filterCars());
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <>
        <Box sx={{ padding: "0px 10px" }}>
          <Typography
            variant="h5"
            textAlign="center"
            sx={{ color: "#fff" }}
            py={2}
          >
            Busqueda De Vehiculo
          </Typography>
          <Box>
            <Grid container>
              <Grid xs={12} sm={12} md={6} my={2} px={2}>
                <CustomSelect
                  options={BrandsList}
                  label="Marca"
                  value={searchForm.brand}
                  name="brand"
                  onChange={(ev) => {
                    setSearchForm({
                      ...searchForm,
                      [ev.target.name]: ev.target.value ?? "",
                    });
                  }}
                />
              </Grid>
              <Grid xs={12} sm={12} md={6} my={2} px={2}>
                <CustomSelect
                  options={filteredModelsList}
                  label="Modelo"
                  disabled={!searchForm.brand}
                  name="model"
                  value={searchForm.model}
                  onChange={(ev) => {
                    setSearchForm({
                      ...searchForm,
                      [ev.target.name]: ev.target.value ?? "",
                    });
                  }}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid xs={12} sm={12} md={6} my={2} px={2}>
                <CustomInput
                  label="Kilometraje"
                  value={searchForm?.km}
                  name="km"
                  type="number"
                  onChange={(ev) =>
                    setSearchForm({
                      ...searchForm,
                      [ev.target.name]: ev.target.value,
                    })
                  }
                />
              </Grid>
              <Grid xs={12} sm={12} md={6} my={2} px={2}>
                <DatePicker
                  views={["year"]}
                  label=""
                  name="year"
                  value={searchForm.year}
                  disableFuture
                  onChange={(newValue: any) => {
                    setSearchForm({
                      ...searchForm,
                      year: newValue,
                    });
                  }}
                  sx={{
                    width: "100%",
                    "& .MuiSvgIcon-root": {
                      color: "#FF472F",
                    },
                    "& .MuiIconButton-root": {
                      color: "#FF472F",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#FF472F",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#FF472F",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#FF472F",
                    },
                    "&.Mui-hovered .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#FF472F",
                      color: "#fff",
                    },
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: "#FF472F",
                    },
                    "& .MuiFormLabel-root.Mui-hover": {
                      color: "#FF472F",
                    },
                    "& .MuiOutlinedInput-root": {
                      color: "#fff",
                      border: "1px solid #FF472F",
                      "& fieldset": {
                        border: "1px solid #FF472F",
                      },
                      "&:hover fieldset": {
                        borderColor: "#FF472F",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#FF472F",
                      },
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid xs={12} sm={12} md={6} my={2} px={2}>
                <CustomInput label="Precio" onChange={() => {}} />
              </Grid>
              <Grid sm={12} md={6} p={1}></Grid>
            </Grid>
          </Box>
          <Box mb={2}>
            <ActionButtons
              onClean={() => setCarsListData(carsDataFromStorage)}
              mainActionText="Filtrar"
              disabledCancel
              onSave={() => handleFilter()}
            />
          </Box>
          <Box sx={{ px: 2, mt: 4 }}>
            <EnhancedTable
              carsListData={carsListData}
              setCarsListData={setCarsListData}
            />
          </Box>
        </Box>
      </>
    </LocalizationProvider>
  );
};
