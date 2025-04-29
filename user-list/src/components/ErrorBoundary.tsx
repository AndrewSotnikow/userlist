// src/components/ErrorBoundary.tsx
import { Box, Button, Typography } from '@mui/material'
import { ErrorOutline } from '@mui/icons-material'
import { useState, ReactNode, ErrorInfo } from 'react'

interface ErrorBoundaryProps {
    children: ReactNode
    fallback?: ReactNode
}

interface ErrorState {
    hasError: boolean
    error?: Error
    errorInfo?: ErrorInfo
}

export const ErrorBoundary = ({ children, fallback }: ErrorBoundaryProps) => {
    const [errorState, setErrorState] = useState<ErrorState>({
        hasError: false,
    })

    const handleRetry = () => {
        setErrorState({ hasError: false })
    }

    if (errorState.hasError) {
        return (
            fallback || (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '200px',
                        gap: 2,
                        p: 4,
                        textAlign: 'center',
                    }}>
                    <ErrorOutline color="error" sx={{ fontSize: 60 }} />
                    <Typography variant="h6" color="error">
                        Something went wrong
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        {errorState.error?.message || 'Unknown error occurred'}
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleRetry}
                        sx={{ borderRadius: 8 }}>
                        Try Again
                    </Button>
                </Box>
            )
        )
    }

    return children
}
