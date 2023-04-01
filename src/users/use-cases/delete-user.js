export const deleteUser = async(id) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;
    const resp = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const deleteResult = await resp.json();
    console.log({deleteResult});
    return true;
}