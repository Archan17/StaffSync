const API_URL = 'http://localhost:7777';

export const fetchData = (endpoint: string) => {
    fetch(`${API_URL}/${endpoint}`).then((res) => res.json());
};

export const createData = (endpoint: string, data: unknown) => {
    fetch(`${API_URL}/${endpoint}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
};

export const updateData = (endpoint: string, id: number, data: any) =>
    fetch(`${API_URL}/${endpoint}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    }).then(res => res.json());

export const deleteData = (endpoint: string) => {
    fetch(`${API_URL}/${endpoint}`, {
        method: 'DELETE',
    }).then((res) => res.json());
}