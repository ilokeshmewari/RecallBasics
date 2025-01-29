import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/items';

function App() {
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const response = await axios.get(API_URL);
        setItems(response.data);
    };

    const addItem = async () => {
        await axios.post(API_URL, { name, description });
        fetchItems();
        setName('');
        setDescription('');
    };

    const updateItem = async (id) => {
        const newName = prompt('Enter new name:');
        const newDesc = prompt('Enter new description:');
        if (newName && newDesc) {
            await axios.put(`${API_URL}/${id}`, { name: newName, description: newDesc });
            fetchItems();
        }
    };

    const deleteItem = async (id) => {
        await axios.delete(`${API_URL}/${id}`);
        fetchItems();
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>MongoDB CRUD App</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Item Name" />
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
            <button onClick={addItem}>Add Item</button>

            <ul>
                {items.map((item) => (
                    <li key={item._id}>
                        {item.name} - {item.description} 
                        <button onClick={() => updateItem(item._id)}>Edit</button>
                        <button onClick={() => deleteItem(item._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
