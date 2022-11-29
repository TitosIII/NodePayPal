Dependencias que se deben de instalar:

npm init -y

npm i express morgan cors axios

npm i @babel/core @babel/cli @babel/present-env @babel/node -D

npm nodemon -D




Modificaciones en el package json:

en el package json lo unico que hice fu modificar en la parte de scripts lo siguiente

"scripts": {
    "dev": "nodemon src/index.js --exec babel-node"
  },




Funcionamiento del codigo:

Das click en el link checkbox y te redirige al sandbox de paypal donde te debes de loger con una cuenta sandbox
si procedes a pagar este te manda a una pagina llamada payed.html si no pagas te manda a la pagina del inicio la cual
nombre index.html


-cuentas de negocio(importante ya que sería por así desirlo nuestro sitio)

cuenta: GESTICK@business.gestick.com 
contraseña: 8H^evi*D 

-cuenta de usuario que paga(esta es la que se debe de logear)

cuenta: sb-climj22325060@personal.example.com
contraseña: Nj3>s3A!


posdata --No copien los espacios al momento de hacer login en sandbox :)
 

PARA CORRER EL PROGRAMA EN LA TERMINAL PONEN   npm run dev