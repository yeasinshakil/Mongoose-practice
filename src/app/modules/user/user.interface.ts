export interface IUser {
    id: string;
    role: string;
    name: {
        firstName: string;
        middleName?: string;
        lastName: string;
    };
    dateOfBirth: string;
    email: string;
    password: string;
    gender: "male" | "female";
    phone: string;
    emergencyContact: string;
    presentAddress: string;
    permanentAddress: string;
}

export interface IUserMethods {
    fullName(): string;
}