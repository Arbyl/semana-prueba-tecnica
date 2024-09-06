'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './recipe.module.css';

interface Recipe {
    id: string;
    name: string;
    tags: string[];
    image: string;
    difficulty: string;
    ingredients: string[];
    instructions: string[];
}

function RecipePage({ params }: { params: { id: string } }) {

    const { id } = params;
    const [recipe, setRecipe] = useState<Recipe | null>(null);

    useEffect(() => {
        axios
            .get('https://dummyjson.com/recipes/' + id)
            .then((response) => {
                if (response.data) {
                    setRecipe(response.data);
                } else {
                    console.error('API errorr:', response.data);
                }
            })
            .catch((error) => console.error('Error fetching recipe:', error));
    }, [id]);


    if (!recipe) {
        return <div>Cargando...</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>{recipe.name}</h1>
                <div className={styles.imgContainer}>
                    <img src={recipe.image} alt={recipe.name} />
                </div>
                <p>Dificultad: {recipe.difficulty}</p>
                <div className={styles.tags}>
                    {recipe.tags.map((tag) => (
                        <span className={styles.tag} key={tag}>{tag}</span>
                    ))}
                </div>

                <section  className={styles.textContainer}>
                    <h2>Ingredientes</h2>
                    <ul>
                        {recipe.ingredients.map((ingredient) => (
                            <li key={ingredient}>{ingredient}</li>
                        ))}
                    </ul>
                </section>

                <section className={styles.textContainer}>
                    <h2>Instrucciones</h2>
                    <ol>
                        {recipe.instructions.map((instruction) => (
                            <li key={instruction}>{instruction}</li>
                        ))}
                    </ol>

                </section>
            </div>
        </div>
    );
}

export default RecipePage;