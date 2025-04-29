import { Box, Skeleton } from '@mui/material'

export const UsersListSkeleton = () => {
    const containerStyles = {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        pt: '20px',
    }
    const skeletonStylesFirstRow = {
        bgcolor: 'grey.800',
        maxWidth: '540px',
        maxHeight: '100px',
        width: '100vw',
        height: '100vh',
        mb: '20px',
    }

    return (
        <Box sx={containerStyles}>
            {[...Array(6).keys()].map((index) => (
                <Skeleton
                    sx={skeletonStylesFirstRow}
                    key={index}
                    animation="wave"
                    variant="rectangular"
                />
            ))}
        </Box>
    )
}
