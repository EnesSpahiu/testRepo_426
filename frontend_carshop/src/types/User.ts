import Principal from "./Principal";

export default interface User extends Principal {
    username: string,
    password?: string,
} 