# pokemon-guess-who
MERN app that takes the essentials from guess who and adds an exciting pokemon twist

1. Run yarn install in main folder and in client folder to grab necessary packages.
2. create local instance of mongo database called pokemonguesswhodb (command line: mongo -> use pokemonguesswhodb)
3. Run mongod on separate command line to ensure mongo is listening.
4. Running yarn start in main folder should launch the app.

To populate your local db, use the following command in the main folder.

`mongoimport --jsonArray --db pokemonguesswhodb --collection pokedex --file ./FinalPokedex.json`
