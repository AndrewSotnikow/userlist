import { Box, Button, Container, Typography } from '@mui/material'
import './App.css'
import { UserList } from './components/UserList.tsx'
import { AddUserForm } from './components/AddUserForm/AddUserForm.tsx'
import { observer } from 'mobx-react-lite'
import { FavoriteFilter } from './components/FavoriteFilter.tsx'
import { useUsers } from './hooks/useUsers.ts'
import { ErrorBoundary } from './components/ErrorBoundary.tsx'
import { ErrorNotification } from './components/ErrorNotification.tsx'

function App() {
    const { allUsers, isLoading, error, errorShown, setErrorShown, refetch } =
        useUsers()

    return (
        <Container>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="flex-start"
                padding="40px 20px">
                <Typography variant="h4" component="h1" gutterBottom>
                    User List
                </Typography>

                {error && errorShown && (
                    <ErrorNotification
                        message={`Failed to load users: ${error.message}`}
                        onClose={() => setErrorShown(false)}
                    />
                )}

                <Box>
                    <ErrorBoundary>
                        <AddUserForm />
                        <FavoriteFilter />
                        <UserList users={allUsers} isLoading={isLoading} />

                        {error && errorShown && (
                            <Box mt={2} textAlign="center">
                                <Button
                                    variant="outlined"
                                    color="error"
                                    onClick={() => {
                                        refetch()
                                        setErrorShown(false)
                                    }}
                                    sx={{ borderRadius: 8 }}>
                                    Retry Loading Users
                                </Button>
                            </Box>
                        )}
                    </ErrorBoundary>
                </Box>
                <Box></Box>
            </Box>
        </Container>
    )
}

export default observer(App)
