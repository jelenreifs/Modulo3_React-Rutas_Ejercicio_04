import { BrowserRouter, Route, Link } from "react-router-dom";
import React, { useState } from 'react';

function Pelicula(props) {
  return (
    <div>
      <h4>{ props.titulo}</h4>
      <p>{ props.director}</p>
      <p>{ props.clasificacion}</p>
      <p>{props.sinopsis}</p>
    </div>
  )

  }


function App() {
    const [peliculas, setPeliculas] = useState([
        {
          "id": 1,
          "titulo": "El sexto sentido",
        "director": "M. Night Shyamalan",
            "cartel": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ8cqibPp3XYq9TBV07zzClp64xHde3etHP0d432XM917HEbra1",
            "clasificacion": "Drama", 
            "sinopsis": "Malcolm Crowe es un psicólogo infantil que vive obsesionado por el recuerdo de un joven al que fue incapaz de ayudar. Cuando conoce a Cole, un aterrorizado y confuso niño de ocho años, se le presenta la oportunidad de redimirse haciendo todo lo posible por ayudarlo. Sin embargo, el doctor no está preparado para descubrir la terrible verdad sobre el chico: recibe visitas de espíritus atormentados que lo asustan.", 
        },
        {
          "id": 2,
          "titulo": "Pulp Fiction",
            "director": "Tarantino",
                  "cartel": "https://r1.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic4.abc.es%2Fmedia%2Fpeliculas%2F000%2F000%2F344%2Fpulp-fiction-1.jpg&nuevoancho=690&medio=abc",

            "clasificacion": "Acción",
                  "sinopsis": "La vida de un boxeador, dos sicarios, la esposa de un gánster y dos bandidos se entrelaza en una historia de violencia y redención."

        },
        {
          "id": 3,
          "titulo": "Todo Sobre Mi Madre",
            "director": "Almodobar",
            "cartel": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQ-JpM4u-s1uu1_fE6Worg8SAl1YzkTUNv-i2u4GHxTE_9nKDn",
            "clasificacion": "Drama",
          "sinopsis": "Una madre soltera reaviva viejas relaciones y hace nuevas a su regreso a Barcelona buscando al padre de su hijo muerto."
        },
        {
          "id": 4,
          "titulo": "300",
            "director": "Zack Snyder",
            "cartel": "https://pics.filmaffinity.com/300-676981574-large.jpg",
            "clasificacion": "Acción",
          "sinopsis": "En el año 480 antes de Cristo, existe un estado de guerra entre Persia, dirigida por el rey Jerjes, y Grecia. En la batalla de la Termópilas, Leonidas, rey de la ciudad griega de Esparta, encabeza a sus 300 bravos soldados en contra del numeroso ejército persa. A pesar de que la muerte aguarda a los espartanos, su sacrificio inspira a toda Grecia para unirla en contra de su enemigo común."
        },
        {
          "id": 5,
          "titulo": "El silencio de los corderos",
            "director": "Jonathan Demme",
          "cartel": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR8Ip5a9fd0mbgJ3-BY5S03SBw9TPY-K4XHTIyA_jpsYBsBmd4g",
            "clasificacion": "Drama",
                "sinopsis": "Una agente en entrenamiento del FBI busca la ayuda y consejo de un brillante asesino para poder capturar a otro asesino, el doctor Hannibal Lecter, un psiquiatra que también es un psicópata violento y antropófago."

        },
        {
          "id": 6,
          "titulo": "Forrest Gump",
            "director": "Robert Zemeckis",
            "cartel": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSgJaxEFJxdwh2SP1sAI92IQgaThjvJM6XSd1G2YEEqVwjqNnVF",
            "clasificacion": "Comedia", 
                      "sinopsis": "Al tener el coeficiente intelectual de un niño, Forrest Gump siempre ha sido considerado el “tonto” de clase. Bajo las faldas de su madre se siente protegido y junto a su amiga Jenny es feliz, aunque en su propio mundo. Un problema en su columna vertebral no le impide convertirse en un ágil corredor. Ya más mayor, Forrest luchará en la guerra de Vietnam y conocerá al mismísimo presidente de los Estados Unidos. Llegará a ser muy rico, pero para Forrest hay algo que no cambia: el amor de su vida es y será Jenny."
        }
      ]);

  const mostrarPeliculas = peliculas.map(pelicula => { 
    return (
      <>
        <Link to = {"/" + pelicula.titulo}>
          <h4>{pelicula.titulo}</h4>
        </Link>
        <img src={pelicula.cartel} alt="" width="200"/>
         </>
    )
  })
  
      return (
        
      <BrowserRouter>
            <header>
                <ul>
                  <li>
                    <Link to="/">Inicio</Link>
                  </li>                            
           </ul>
            </header>
        
          <Route exact path="/">
              { mostrarPeliculas}
          </Route>
            
          <Route exact path="/El sexto sentido">
              <Pelicula
              titulo={peliculas[0].titulo}
               director={peliculas[0].director}
                clasificacion={peliculas[0].clasificacion}
                sinopsis={peliculas[0].sinopsis} />
          </Route>

          <Route exact path="Pulp Fiction">
              <Pelicula
              titulo={peliculas[1].titulo}
              director={peliculas[1].director}
                clasificacion={peliculas[1].clasificacion}
                sinopsis={peliculas[1].sinopsis} />
            </Route>
            
          <Route exact path="Todo Sobre Mi Madre">
              <Pelicula
              titulo={peliculas[2].titulo}
              director={peliculas[2].director}
                clasificacion={peliculas[2].clasificacion}
                sinopsis={peliculas[2].sinopsis} />
            </Route>
            
          <Route exact path="300">
              <Pelicula
              titulo={peliculas[3].titulo}
              director={peliculas[3].director}
                 clasificacion={peliculas[3].clasificacion}
                sinopsis={peliculas[3].sinopsis} />
            </Route>
            
          <Route exact path="El silencio de los corderos">
              <Pelicula
              titulo={peliculas[4].titulo}
              director={peliculas[4].director}
                clasificacion={peliculas[4].clasificacion}
                sinopsis={peliculas[4].sinopsis} />
            </Route>
            
          <Route exact path="Forrest Gump">
              <Pelicula
              titulo={peliculas[5].titulo}
              director={peliculas[5].director}
                 clasificacion={peliculas[5].clasificacion}
              sinopsis={peliculas[5].sinopsis} />
           </Route>
        
      </BrowserRouter>
        
      );
    }

export default App;
