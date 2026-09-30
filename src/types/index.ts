export type Role = 'user' | 'admin'

export interface User {
    id: number
    name: string
    email: string
    role: Role
}

export interface List {
    id: number
    title: string
    position: number
    createdAt: Date
}

export interface Card {
    id: number
    title: string
    description?: string
    position: number
    createdAt: Date
    updatedAt: Date
}

export interface Credentials { email: string; password: string }
export interface RegisterPayload extends Credentials { name: string }