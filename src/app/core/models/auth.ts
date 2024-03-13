import { Role } from "./role";

export class Auth {
  message: string;
  token: string;
  roles: Role[]; // Use Role enum instead of string
  entity: {
    id: number;
    email: string;
    role: Role; // Use Role enum instead of string
    access_token: string;
    tokenType: string;
  };
  statusCode: number;
}
