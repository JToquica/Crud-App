import { localhostUserToModel } from "../mappers/localhost-users.mapper";

/**
 * 
 * @param {Number} id 
 * @returns 
 */
export const getUserById = async(id) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;
    const res = await fetch(url);
    const data = await res.json();

    const user = localhostUserToModel(data);
    return user;
}