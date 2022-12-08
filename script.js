alert("Funciona?");
const pokemon = ["charmander", "bulbasaur", "squirtle"];
console.log("El array");
console.log(pokemon);
let i = 2;
let len = pokemon.length;
let text = "";
for (; i < len; i++) {
    alert(i);
    console(pokemon[i]);
    console(i);
  text += pokemon[i] + "<br>";
}
