// src/stores/UserStore.js
import { makeAutoObservable } from 'mobx'
import { User } from '../types/user'

class UserStore {
    localUsers: User[] = []
    favorites: User['id'][] = []
    showOnlyFavorites = false

    constructor() {
        makeAutoObservable(this)
    }

    addUser(user: User) {
        this.localUsers.push({ ...user, id: Date.now() })
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
