// src/stores/UserStore.js
import { makeAutoObservable } from 'mobx'
import { User } from '../types/user'
import { v4 as uuidv4 } from 'uuid'

class UserStore {
    localUsers: User[] = []
    favorites: User['id'][] = []
    showOnlyFavorites = false

    constructor() {
        makeAutoObservable(this)
    }

    addUser(user: Partial<User>) {
        this.localUsers.push({ ...user, id: uuidv4() } as User)
    }

    toggleFavorite(userId: User['id']) {
        if (this.favorites.includes(userId)) {
            this.favorites = this.favorites.filter((id) => id !== userId)
        } else {
            this.favorites.push(userId)
        }
    }

    toggleShowOnlyFavorites() {
        this.showOnlyFavorites = !this.showOnlyFavorites
    }
}

export const userStore = new UserStore()
