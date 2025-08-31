import { useState } from "react";

export function AddCat({onAddCat}) {
    const [name, setName] = useState('');
    const [latinName, setLatinName] = useState('');
    const [source, setSource] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCat = {name, latinName, source}
        onAddCat(newCat);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    New Cat Name: 
                    <input 
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>

                <label>
                    New Cat's Latin Name: 
                    <input 
                        name='latin name'
                        value={latinName}
                        onChange={(e) => setLatinName(e.target.value)}
                    />
                </label>

                <label>
                    New Cat's Image: 
                    <input 
                        name='source'
                        value={source}
                        onChange={(e) => setSource(e.target.value)}
                    />
                </label>
                <button>submit</button>
            </form>
        </div>
    )
}