export interface User {
    username: string
    email: string
    password: string
}

export interface UserProfile{
    username: string
    email: string
    firstName?: string
    lastName?: string
    age?: number
    phoneNumber?: number
    position?: string
}

export interface Role{
  role:string
}

export interface Blog{
  id: number
  header: string
  text: string
  imageSrc?: string
}

export interface Events{
  id: number
  title: string
  start: string
  doctorId: number
  userId: number
}

export interface Diagnosis{
  id: number
  name: string
  description: string
  startDate: string
  endDate: string
  userId: number
}