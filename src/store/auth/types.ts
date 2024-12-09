export type CurrentUser = {
   id: number;
   username: string | null;
   auth_key: string;
   phone: string;
   verified: 0 | 1;
   role: 'client' | 'admin' | 'driver';
};

export interface UsersState {
   currentUser: CurrentUser | null;
   loading: boolean;
}

export interface SignInPayload {
   phone: string;
   password: string;
}

export interface SignInResponse {
   data: CurrentUser;
}
