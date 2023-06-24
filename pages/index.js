import styles from '@/styles/Home.module.css'
import Image from 'next/image'

import Card from '@/pages/components/Card'

export async function getStaticProps() {
  
  const maxPokemons = 251;
  

  const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${maxPokemons}&offset=0`,
  )
  
  const data = await res.json()
  
  data.results.forEach((item, index) => {
    item.id = index + 1
  });

  return{
      props: { 
        pokemons: data.results
       },
  }
}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>Next</span></h1>
        <Image src='/images/pokeball2.png'width={'60'} height={'60'}/>
      </div>
      <div className={styles.pokemon_container}>
        {
          pokemons.map(
            (pokemon) => (
              <Card key={pokemon.id} pokemon={pokemon}/>
            )
          )
        }
      </div>
    </>
  )
}
