'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import styles from '../styles/home.module.css';

interface Recipe {
  id: string;
  name: string;
  tags: string[];
  image: string;
  difficulty: string;
}



const HomePage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/recipes')
      .then((response) => {
        if (Array.isArray(response.data.recipes)) {
          setRecipes(response.data.recipes);
        } else {
          console.error('API response does not contain an array of recipes:', response.data);
        }
      })
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className={styles.container}>
      <h1>Recetas Semana </h1>
      <ul className={styles.postList}>
        {recipes.map((recipe) => (
          <li key={recipe.id} className={styles.postItem}>
            <Link className={styles.recipeItem} href={`/recipes/${recipe.id}`}>
              <div className={styles.imgContainer}>
                <img src={recipe.image} alt="" />
              </div>
              <p className={styles.name}>{recipe.name}</p>
              <div className={styles.tags}>
                {recipe.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className={styles.dificultad}>Dificultad: {recipe.difficulty}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;