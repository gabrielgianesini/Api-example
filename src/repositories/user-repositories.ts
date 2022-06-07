export interface UserData {
  username: string;
  password: string;
}

export interface UserRepository {
  create: (data: UserData) => Promise<void>;
  verifyExist: (data: UserData) => Promise<boolean>;
}
