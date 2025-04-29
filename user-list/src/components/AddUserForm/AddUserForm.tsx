import { TextField, Button, Box, Paper } from '@mui/material'
import { useAddUserForm } from './useAddUserForm.ts'

export const AddUserForm = () => {
    const { errors, handleSubmit, firstName, setFirstName, email, setEmail } =
        useAddUserForm()

    return (
        <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
            <Box component="form" onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    error={!!errors.name}
                    helperText={errors.name}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!errors.email}
                    helperText={errors.email}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                    Add User
                </Button>
            </Box>
        </Paper>
    )
}
