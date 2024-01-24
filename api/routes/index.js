var express = require('express');
var router = express.Router();

const fs = require("fs");

let routes = fs.readdirSync(__dirname);

for (let route of routes) {
  if (route.includes(".js") && route != "index.js") {
    const middlewareFunction = require("./" + route);

    // Her modül bir middleware fonksiyonu döndürdüğünden emin olun
    if (typeof middlewareFunction === 'function') {
      router.use("/" + route.replace(".js", ""), middlewareFunction);
    } else {
      console.error(`Hata: ${route} bir middleware fonksiyonu içermiyor.`);
    }
  }
}

module.exports = router;
