import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid2';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel, OutlinedInput } from '@mui/material';




const FormVideo = ({ onSubmit, initialData = null }) => {
    const [formData, setFormData] = useState(initialData || {
        titulo: '',
        categoria: '',
        video: '',
        imagen: '',
        descripcion: ''
    });

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        },
    },
    };

    const categories = [
    'BeatMaking',
    'Mixing',
    'Mastering',
    'Theory'
    ];



    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setOpenSnackbar(true);
        setFormData({
            titulo: '',
            categoria: '',
            video: '',
            imagen: '',
            descripcion: ''
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name || e.target.id]: value
        }));
    };

    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };    

    return (
        <>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2} >
                <Grid size={6}>
                    <TextField 
                        required 
                        label="Título" 
                        id="titulo" 
                        type="text"  
                        value={formData.titulo}
                        onChange={handleChange}
                        placeholder="Título del Video" 
                        margin="normal"
                        fullWidth
                        />
                </Grid>
                <Grid size={6}>
                <FormControl required fullWidth margin="normal">
                    <InputLabel id="categoria-label">Categoría</InputLabel>
                    <Select
                        labelId="categoria-label"
                        id="categoria"
                        name="categoria"
                        value={formData.categoria}
                        onChange={handleChange}
                        input={<OutlinedInput label="Categoría" />}
                        MenuProps={MenuProps}
                    >
                        {categories.map((category) => (
                            <MenuItem
                                key={category}
                                value={category}
                            >
                                {category}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                </Grid> 
                <Grid size={6}>
                    <TextField 
                        required 
                        label="URL Video" 
                        id="video" 
                        type="text"  
                        value={formData.video}
                        onChange={handleChange}
                        placeholder="URL del video de YouTube" 
                        margin="normal"
                        fullWidth
                        />
                </Grid>
                <Grid size={6}>
                    <TextField 
                        required 
                        label="URL Imagen" 
                        id="imagen" 
                        type="text"  
                        value={formData.imagen}
                        onChange={handleChange}
                        placeholder="URL de la imagen de preview" 
                        margin="normal"
                        fullWidth
                        />
                </Grid>
                <Grid size={12}>
                    <TextField 
                        required 
                        label="Descripción" 
                        id="descripcion" 
                        type="text"  
                        value={formData.descripcion}
                        onChange={handleChange}
                        placeholder="Descripción del video" 
                        margin="normal"
                        fullWidth
                        multiline
                        rows={4}
                        />
                </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="primary">
                Agregar Video
            </Button>
        </form>
        <Snackbar 
                open={openSnackbar} 
                autoHideDuration={3000} 
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert 
                    onClose={handleCloseSnackbar} 
                    severity="success" 
                    variant="filled"
                >
                    ¡Video agregado exitosamente!
                </Alert>
            </Snackbar>

        </>
    );
};

export default FormVideo;