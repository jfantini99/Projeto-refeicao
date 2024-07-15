import classes from './page.module.css';
import Link from 'next/link';

export default function MealsPage() {
    return (
        <>
        <header className={classes.header}>
         <h1>refeições deliciosas, criadas{''}
         <span className={classes.highlight}> para você </span>
         </h1>
         <p> como escolher sua comida favorita e fazer você mesmo. É facil e divertido!  </p>
         <p className={classes.cta}>
            <Link href='/meals/share'>
            Compartilhe sua receita
            </Link>
         </p>
        </header>

        <main className={classes.main}> 
          

    

        </main>
        
        
        
        </>
    );
    }