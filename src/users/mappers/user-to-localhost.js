export const userModelToLocalhost = (user) => {
    const {
        id, 
        avatar, 
        isActive, 
        balance, 
        firstName, 
        lastName, 
        gender
    } = user;

    return {
        id, 
        avatar, 
        isActive, 
        balance, 
        first_name: firstName, 
        last_name: lastName, 
        gender
    };
}