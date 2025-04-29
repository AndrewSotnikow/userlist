import { FormEvent, useState } from 'react'
import { userStore } from '../../store/UserStore.ts'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const nameRegex = /^[A-Za-z\s'-]{2,}$/

export const useAddUserForm = () => {
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState({ name: '', email: '' })

    const validate = () => {
        setErrors({ name: '', email: '' })

        const newErrors = { name: '', email: '' }
        let isValid = true

        if (!firstName.trim()) {
            newErrors.name = 'Name is required'
            isValid = false
        } else if (!nameRegex.test(firstName.trim())) {
            newErrors.name = 'Name format is invalid'
            isValid = false
        }

        if (!email.trim()) {
            newErrors.email = 'Email is required'
            isValid = false
        } else if (!emailRegex.test(email.trim())) {
            newErrors.email = 'Email format is invalid'
            isValid = false
        }

        setErrors(newErrors)
        return isValid
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!validate()) return

        userStore.addUser({
            name: firstName.trim(),
            email: email.trim(),
            username: '',
            address: null,
            phone: '',
            website: '',
            company: null,
        })

        setFirstName('')
        setEmail('')
        setErrors({ name: '', email: '' })
    }

    return {
        firstName,
        setFirstName,
        email,
        setEmail,
        errors,
        handleSubmit,
    }
}
