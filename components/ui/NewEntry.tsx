import { Button, Box, TextField } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

interface NewEntryProps {}

const NewEntry: React.FC<NewEntryProps> = () => {
  return (
    <Box
      sx={{
        mb: 2,
        px: 2,
      }}
    >
      <Button
        startIcon={<AddCircleOutlineOutlinedIcon />}
        fullWidth
        variant="outlined"
      >
        Agregar Tarea
      </Button>

      <TextField
        fullWidth
        sx={{ mt: 2, mb: 1 }}
        placeholder="Nueva Entrada"
        autoFocus
        multiline
        label="Nueva entrada"
        helperText="Ingrese un valor"
      />

      <Box display="flex" justifyContent="space-between">
        <Button variant="text">Cancelar</Button>
        <Button
          variant="outlined"
          color="secondary"
          endIcon={<SaveOutlinedIcon />}
        >
          Guardar
        </Button>
      </Box>
    </Box>
  );
};

export default NewEntry;
