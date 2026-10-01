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
    createdAt: string
}

export interface Card {
    id: number
    title: string
    description?: string
    position: number
    createdAt: string
    updatedAt: string
}

export interface Credentials { email: string; password: string }
export interface RegisterPayload extends Credentials { name: string }