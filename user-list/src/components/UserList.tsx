import { List, ListItem, ListItemText, IconButton } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { userStore } from '../store/UserStore.ts'
import { User } from '../types/user.ts'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { UsersListSkeleton } from './UsersListSkeleton.tsx'

type UserListProps = {
    users: User[]
    isLoading: boolean
}

export const UserList = observer(({ users, isLoading }: UserListProps) => {
    if (isLoading) return <UsersListSkeleton />

    const filteredUsers = userStore.showOnlyFavorites
        ? users.filter((user: User) => userStore.favorites.includes(user.id))
        : users

    return (
        <List>
            {filteredUsers.map((user: User) => (
                <ListItem
                    key={user.id}
                    secondaryAction={
                        <IconButton
                            onClick={() => userStore.toggleFavorite(user.id)}>
                            {userStore.favorites.includes(user.id) ? (
                                <FavoriteIcon color="error" />
                            ) : (
                                <FavoriteBorderIcon />
                            )}
                        </IconButton>
                    }>
                    <ListItemText primary={user.name} secondary={user.email} />
                </ListItem>
            ))}
        </List>
    )
})
