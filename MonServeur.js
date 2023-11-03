const http = require("http");
const serveur = http.createServer((requete, reponse) => {
  // creation de l'entete
  reponse.setHeader("content-type", "text/plain");

  reponse.end("<h1>Hello Node!!!!</h1>\n");
});

// listen nous permet de lire le serveur ave comme parametre le port l'url par defaut localhost et une fonction callback
serveur.listen(3000, "localhost", () => {
  console.log("pret");
});
