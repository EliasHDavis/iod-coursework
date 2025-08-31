// import { useReducer } from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useFetch from "../useFetch";

export function PostPage() {

    // const [{}, dispatch] = useReducer(reducer, {})

    let fetchResponse = useFetch();

    if (fetchResponse.loading){
        return <p>Loading...</p>;
    }

    if (fetchResponse.error){
        console.log(fetchResponse.error.message)
    }

    return (
        <ul>
            {fetchResponse.data.map((Post) => 
            <li
                key={Post.id}
            >
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={Post.image}
                        title={Post.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">{Post.title}</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>{Post.body}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Comment</Button>
                    </CardActions>
                </Card>
            </li>)}
        </ul>
    )
}