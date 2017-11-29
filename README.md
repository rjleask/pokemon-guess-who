<a href="https://imgflip.com/gif/207te9"><img src="https://i.imgflip.com/207te9.gif" title="made at imgflip.com"/></a>
<a href="https://imgflip.com/gif/207tvs"><img src="https://i.imgflip.com/207tvs.gif" title="made at imgflip.com"/></a>
<a href="https://imgflip.com/gif/207ucm"><img src="https://i.imgflip.com/207ucm.gif" title="made at imgflip.com"/></a>
<a href="https://imgflip.com/gif/207v63"><img src="https://i.imgflip.com/207v63.gif" title="made at imgflip.com"/></a>
<a href="https://imgflip.com/gif/207wvr"><img src="https://i.imgflip.com/207wvr.gif" title="made at imgflip.com"/></a>
# pokemon-guess-who
MERN app that takes the essentials from guess who and adds an exciting pokemon twist

1. Run yarn install in main folder and in client folder to grab necessary packages.
2. create local instance of mongo database called pokemonguesswhodb (command line: mongo -> use pokemonguesswhodb)
3. Run mongod on separate command line to ensure mongo is listening.
4. Running yarn start in main folder should launch the app.

To populate your local db, use the following command in the main folder. RUN THIS AFTER YOU HAVE RUN THE APP ONCES. THE COLLECTION "pokedexes" should have been added at initial run.

`mongoimport --jsonArray --db pokemonguesswhodb --collection pokedexes --file ./FinalPokedex.json`

