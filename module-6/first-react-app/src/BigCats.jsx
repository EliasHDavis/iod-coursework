import { useState } from "react"
import { AddCat } from "./BIgCatsForm"

const catArray = [
        { id: 1, name: 'Cheetah', latinname: 'Acinonyx jubatus', src: './cheetah.jpg' },
        { id: 2, name: 'Cougar', latinname: 'Puma concolor', src: './cougar.jpg' },
        { id: 3, name: 'Jaguar', latinname: 'Panthera onca', src: './jag.jpg' },
        { id: 4, name: 'Leopard', latinname: 'Panthera pardus', src: './leapord.jpg' },
        { id: 5, name: 'Lion', latinname: 'Panthera leo', src: './mufasa.jpg' },
        { id: 6, name: 'Snow leopard', latinname: 'Panthera uncia', src: './snow-leapord.jpg' },
        { id: 7, name: 'Tiger', latinname: 'Panthera tigris', src: './tiger.jpg' },
    ]

export function BigCats(props) {

    const [currentCats, setCurrentCats] = useState(catArray);


    const onAddCat = (newCat) => {
        newCat.id = currentCats.length + 1;
        setCurrentCats([...currentCats, newCat]);
    }

    const handleRemoveCat = (removeCat) => {
        let newCats = currentCats.filter(cat => cat.id != removeCat);
        setCurrentCats(newCats);
    }


    // I could make this into a higher order function but with the functions being this small, would it benefit anything by doing so.
    const panthera = () => {
        let alteredCats = [...catArray].map((cat) => {
            if (cat.latinname.slice(0, 8) === 'Panthera'){
                return(cat);
            } else {
                return '';
            }});
        console.log(alteredCats);
        setCurrentCats(alteredCats);
    }

    const sortAlphabetically = () => { 
        let alteredCats = [...catArray].sort((a, b) => a- b);
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
                    >{cat.name}
                    <br/>
                    <img src={cat.src} style={{maxWidth: 150}}/>
                    </li>
                ))}
            </ul>
            <div>
                <button onClick={() => sortAlphabetically()}>Alphabetical</button>
                <button onClick={() => reverseCats()}>Reverse</button>
                <button onClick={() => panthera()}>Family: Panthera</button>
                <button onClick={() => setCurrentCats(catArray)}>Reset</button>
                <AddCat></AddCat>
            </div>
        </>
    )
}