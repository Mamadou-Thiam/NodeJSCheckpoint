const fs = require("fs");
// creation d'un fichier avec write file qui prend en argument le nom du fichier à creer son contenu et une fonction callback
fs.writeFile("welcome.txt", "Hello Node", () => {
  //   message de creation avec succes
  console.log("fichier creer avec succes");
});
// methode de lecture d'un fichier avec la methode readfile qui prend en argument le nom du fichier et une fonction callback qui contient les donnnees
fs.readFile("welcome.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

