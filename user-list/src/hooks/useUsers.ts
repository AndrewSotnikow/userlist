import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { User } from '../types/user'
import { fetchUsers } from '../api'
import { userStore } from '../store/UserStore'
import { TIME_FIVE_MIN } from '../constants'

export const useUsers = () => {
    const [errorShown, setErrorShown] = useState(false)

    const {
        data: apiUsers = [],
        isLoading,
        error,
        refetch,
    } = useQuery<User[], Error>({
        queryKey: ['users'],
        queryFn: fetchUsers,
        staleTime: TIME_FIVE_MIN,
        gcTime: TIME_FIVE_MIN,
        retry: (failureCount, error) => {
            if (error.message.includes('404')) return false
            return failureCount < 3
        },
    })

    useEffect(() => {
        if (error && !errorShown) {
            setErrorShown(true)
        }
    }, [error, errorShown])

    const allUsers = [...apiUsers, ...userStore.localUsers]

    return { allUsers, isLoading, error, errorShown, setErrorShown, refetch }
}
