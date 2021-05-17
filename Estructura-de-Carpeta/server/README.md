# Estructura de carpeta

Modularizar carpeta para proyectos grandes:
1. server:
- config
- controllers
- models
- routes
- server.js

2. import
```sh
const {nameFuncA, nameFuncB} = require("./path")
const variable = require("./path")
```

3. export
```sh
const name = () => {} module.exports = name
modules.exports.name = func(){}
modules.exports = { nameFunc : function(){},}
```