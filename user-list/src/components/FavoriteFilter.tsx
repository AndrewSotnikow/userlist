import { FormControlLabel, Switch } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { userStore } from '../store/UserStore.ts'

export const FavoriteFilter = observer(() => {
    return (
        <FormControlLabel
            control={
                <Switch
                    checked={userStore.showOnlyFavorites}
                    onChange={() => userStore.toggleShowOnlyFavorites()}
                />
            }
            label="Show only favorites"
        />
    )
})
