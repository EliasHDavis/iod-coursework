import { useState } from "react"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const catArray = [
    { id: 1, name: 'Cheetah', latinname: 'Acinonyx jubatus', src: './cheetah.jpg' },
    { id: 2, name: 'Cougar', latinname: 'Puma concolor', src: './cougar.jpg' },
    { id: 3, name: 'Jaguar', latinname: 'Panthera onca', src: './jag.jpg' },
    { id: 4, name: 'Leopard', latinname: 'Panthera pardus', src: './leapord.jpg' },
    { id: 5, name: 'Lion', latinname: 'Panthera leo', src: './mufasa.jpg' },
    { id: 6, name: 'Snow leopard', latinname: 'Panthera uncia', src: './snow-leapord.jpg' },
    { id: 7, name: 'Tiger', latinname: 'Panthera tigris', src: './tiger.jpg' },
]

function AddCatForm({onAddCat}) {
    const [name, setName] = useState('');
    const [latinName, setLatinName] = useState('');
    const [source, setSource] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCat = { name, latinName, src: source }
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

function BigCats(props) {

    const [currentCats, setCurrentCats] = useState(catArray);

    const handleRemoveCat = (removeCat) => {
        let newCats = currentCats.filter(cat => cat.id != removeCat);
        setCurrentCats(newCats);
    }

    const handleAddCat = (newCat) => {
        newCat.id = currentCats.length + 1;
        setCurrentCats([...currentCats, newCat]);
    }

    // I could make this into a higher order function but with the functions being this small, would it benefit anything by doing so.
    const panthera = () => {
        let alteredCats = [...catArray].map((cat) => {
            if (cat.latinname.slice(0, 8) === 'Panthera') {
                return (cat);
            } else {
                return '';
            }
        });
        console.log(alteredCats);
        setCurrentCats(alteredCats);
    }

    const sortAlphabetically = () => {
        let alteredCats = [...catArray].sort((a, b) => a - b);
        console.log(alteredCats);
        setCurrentCats(alteredCats);
    }

    const reverseCats = () => {
        let alteredCats = [...catArray].reverse();
        console.log(alteredCats);
        setCurrentCats(alteredCats);
    }
    //End of HOF

    return (
        <>
            <ul>
                {currentCats.map((cat) => cat && (
                    <li
                        key={cat.id}
                        name={cat.name}
                        latinname={cat.latinname}
                        onRemoveCat={handleRemoveCat}
                    >
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="140"
                                image={cat.src}
                                alt={cat.name}
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">{cat.name}</Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{cat.latinname}</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </li>
                ))}
            </ul>

            <div>
                <button onClick={() => sortAlphabetically()}>Alphabetical</button>
                <button onClick={() => reverseCats()}>Reverse</button>
                <button onClick={() => panthera()}>Family: Panthera</button>
                <button onClick={() => setCurrentCats(catArray)}>Reset</button>
            </div>

            <AddCatForm onAddCat={handleAddCat} />

        </>
    )
}

export default BigCats