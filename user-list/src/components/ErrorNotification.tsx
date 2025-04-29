import { Alert, Snackbar, Slide, SlideProps } from '@mui/material'
import { SyntheticEvent, useState } from 'react'

interface ErrorNotificationProps {
    message: string
    onClose: () => void
}

const Transition = (props: SlideProps) => {
    return <Slide {...props} direction="down" />
}

export const ErrorNotification = ({
    message,
    onClose,
}: ErrorNotificationProps) => {
    const [open, setOpen] = useState(true)

    const handleClose = (_event: SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') return
        setOpen(false)
        onClose()
    }

    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            slots={{ transition: Transition }}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <Alert
                severity="error"
                variant="filled"
                onClose={handleClose}
                sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    )
}
