export interface CreateUserDTO {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface LoginUserDTO {
  email: string;
  password: string;
}
