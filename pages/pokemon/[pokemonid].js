
import Image from 'next/image'
import styles from '@/styles/Pokemon.module.css'
import {useRouter} from 'next/router'


export async function getStaticProps(context) {
  
    
    const { params } = context
  
    const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${params.pokemonid}`,
    )
    
    const data = await res.json()

  
    return{
        props: { 
          pokemon: data
         },
    }
  }

export async function getStaticPaths() {

    const maxPokemons = 151;

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${maxPokemons}&offset=0`)

    const data = await response.json()

    data.results.forEach((item, index) => {
        item.id = index + 1
      });

    const paths = data.results.map((pokemon) => {
        return {
            params: {
                pokemonid: `${pokemon.id}`
            }
        }
    })

    return {paths, fallback: true}
}


export default function Pokemon({ pokemon }) {
    const router = useRouter()

    if(router.isFallback) {
        return <div>Carregando...</div>
    }

    return (
            <div className={styles.pokemon_container}>
            <h1 className={styles.title}>{pokemon.name}</h1>
            <Image
              src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              width="200"
              height="200"
              alt={pokemon.name}
            />
            <div>
              <h3>Numero:</h3>
              <p>#{pokemon.id}</p>
            </div>
            <div>
              <h3>Tipo:</h3>
              <div className={styles.types_container}>
                {pokemon.types.map((item, index) => (
                  <span
                    key={index}
                    className={`${styles.type} ${styles['type_' + item.type.name]}`}
                  >
                    {item.type.name}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.data_container}>
              <div className={styles.data_height}>
                <h4>Altura:</h4>
                <p>{pokemon.height * 10} cm</p>
              </div>
              <div className={styles.data_weight}>
                <h4>Peso:</h4>
                <p>{pokemon.weight / 10} kg</p>
              </div>
            </div>
          </div>
    )
}