# light-lawliet
Sistema de e-commerce Light Lawliet.

DOCUMENTAÇÂO: https://ramonalves.gitbooks.io/light-lawliet-api-documentation/content/

/server

API Restful para consulta, insersão, atualização e remoção de recursos referentes ao ecommerce L.

Os seguintes passos são necessários para executar o projeto:

1. npm install
2. npm start
3. registro/auth para obter o token de acesso
4. adicionar header bearer + [token] na requisição


/admin

Vue Single page application para administração do sistema ecommerce.

Os seguintes passos são necessários para executar o projeto:

1. npm install + npm install vue-cli -g
2. npm run dev
3. Autenticar com login e senha no sistema.


/client

Página web desenvolvida com NodeJs + Express + Mongoose + EJS.

Esse site será disponibilizado para que os clientes (usuários finais) possam fazer compras online.

Para executar a aplicação em modo de desenvolvimento:

1. npm install
2. bower install
3. execute o comando gulp para gerar o build e iniciar o aplicativo.
*Necessário ter o gulp instalado globalmente.

