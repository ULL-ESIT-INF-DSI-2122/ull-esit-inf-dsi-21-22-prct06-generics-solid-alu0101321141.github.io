# Practica 6: Clases e interfaces genéricas. Principios SOLID
## Autor: Vlatko Jesús Marchán Sekulic.

---
El repositorio se encuentra en seguimiento por coveralls.

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101321141.github.io/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101321141.github.io?branch=main)

---

### Ejercicio 1. El combate definitivo.

Para la realización del ejercicio se ha diseñado la siguiente jerarquía de clases con los atributos y métodos:

![imagen1](img/imagen1.png)

La logica seguida para esta estructura de clases es la siguiente. 

1. La clase Figther tiene que ser la más alta dentro de la jerarquía dentro de los unviersos para tomar los atributos comunes para realizar peleas entre los personajes.
    * Dentro de esta clase abstracta se definen dos métodos:
      * UniverseDamage() que se encargará de calcular el daño que se realizan los personajes de un mismo universo, siguiendo sus reglas propias.
      * generalDamage() que se encargará de calcular el daño entre universos diferentes. Para ello tomamos la siguiente lógica, los universos de OnePiece y de Dragon Ball se encuentran en escalas de poder igualados (Por ello los ataques entre los personajes de ese universo siempre serán efectivos). Y su ataque será un 10 % más fuertes. Por otro lado Avatar se encuentra en una escala de poder promedia y por ello no recibe ninguna mejora en su ataque, y por ultimo el universo pokemon será el más debil de todos y su ataque será un 10% menos efectivo.
2. Las clases de cada universo. Estas clases que heredan de la clase abstracta se encargarán de recopilar la información particular de cada universo y controlar las reglas de lucha de personajes de su mismo universo.
    * El daño dentro del universo Pokemon se seguirán las reglas definidas en las prácticas anteriores.
    * El daño dentro del universo Avatar viene dado por los tipo de elementos que utiliza cada personaje y el arma que porta.
    * En daño dentro de la clase Dragon ball viene dado por la tecnica que utiliza cada personaje para luchar.
    * El unverso One Piece por su parte el daño se lo otorgan las furtas del diablo y el arma que porta
3. La clase Combate se encargará de pautar los turnos de cada personaje e ir calculando los daños realizados en cada turno.
4. Pokedex guardará la información de su propietario y los personajes que ha registrado en el.

Las pruebas implementadas en los universos son:

```typescript

```
