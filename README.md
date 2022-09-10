# Projeto19-drivenpass
<p align="center">
  <img  width=300px src="https://user-images.githubusercontent.com/97575616/179577739-c479c3da-e41d-444f-9b35-6d19ee08db20.png"
</p>
<h1 align="center">
  DrivenPass
</h1>
<div align="center">

  <h3>Built With</h3>

  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" height="30px"/>
  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

<br/>

# Description
<p align="justify">
Browsing the internet can be a very fun activity, but at the same time, very dangerous. Numerous studies and surveys (national and international) show that the number of virtual scams continues to grow. Which raises the question: how to protect ourselves?
There are several different ways to protect yourself. It all starts with using different and secure passwords. For a password to be security, it must contain several characters and numbers mixed in, not to mention that the longer it ii, etc.
But how are we going to memorize giant passwords with no semantic meaning? It is to solve this pain that password managers were created! With them, 
we only create one “master” password and all other passwords kept secret! So when we need it, just remember the “master” password! <b>DrivenPass</b> is your newest password manager, where you can save data such as: credentials, networks, notes and cards

</p>

</br>


### Routas de autenticação
```yml
POST /signup
    - Rota para cadastrar um novo usuário
    - headers: {}
    - body: {
        "email": "lorem@gmail.com",
        "password": "loremipsum"
    }
```
    
```yml 
POST /signin
    - Rota para fazer login
    - headers: {}
    - body: {
        "email": "lorem@gmail.com",
        "password": "loremipsum"
    }
```
***   

### Rotas de credenciais
```yml
POST /credentials
    - Rota para cadastrar uma nova credencial
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "title": "lorem ipsum",
        "url": "https://lorem.ipsum.com",
        "username": "lorem",
        "password": "loremipsum"
    }
```
    
```yml 
GET /credentials
    - Rota para pegar todas as credenciais de um usuário
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml 
GET /credentials/:ID
    - Rota para pegar uma credencial do usuário pelo id da credencial
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml 
DELETE /credentials/:ID
    - Rota para deletar uma credencial do usuário pelo id da credencial
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
***   

### Rotas de notas seguras
```yml
POST /notes
    - Rota para cadastrar uma nova nota segura
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "title": "lorem ipsum",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Sed iaculis mauris a lectus euismod interdum. Interdum et
             malesuada fames ac ante ipsum primis in faucibus."
    }
```
    
```yml 
GET /notes
    - Rota para pegar todas as notas de um usuário
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml 
GET /notes/:ID
    - Rota para pegar uma nota do usuário pelo id da nota
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml 
DELETE /notes/:ID
    - Rota para deletar uma nota do usuário pelo id da nota
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
***   

### Rotas de cartões
```yml
POST /cards
    - Rota para cadastrar um novo cartão
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "title": "lorem ipsum",
        "number": "5555 5555 5555 5555",
        "holder": "LOREM I DOLOR",
        "expiry": "MM/YY"
        "cvv": "CVV",
        "password": "PASS",
        "isVirtual": true | false
        "type": "CREDIT" | "DEBIT" | "HYBRID",
    }
```
    
```yml 
GET /cards
    - Rota para pegar todas os cartões de um usuário
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml 
GET /cards/:ID
    - Rota para pegar um cartão do usuário pelo id do cartão
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml 
DELETE /cards/:ID
    - Rota para deletar um cartão do usuário pelo id do cartão
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
***   

### Rotas de senhas de wifi
```yml
POST /wifi
    - Rota para cadastrar um novo registro de wifi
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "title": "lorem ipsum",
        "name": "LoremIpsum",
        "password": "loremipsum"
    }
```
    
```yml 
GET /wifi
    - Rota para pegar todas as senhas de wifis de um usuário
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml 
GET /wifi/:ID
    - Rota para pegar um wifi do usuário pelo id do wifi
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml 
DELETE /wifi/:ID
    - Rota para deletar um wifi do usuário pelo id do wifi
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
***   
### Rotas de documentos
```yml
POST /documents
    - Rota para cadastrar um novo documento
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "fullname": "Lorem Ipsum Dolor",
        "dateEmitted": "DD/MM/YYYY",
        "dateExpires": "DD/MM/YYYY",
        "numberRef": "123.456.78",
        "institution": "Republica Federativa do Brasil",
        "type": "NATIONAL_ID" | "DRIVING_LICENSE"
    }
```
    
```yml 
GET /documents
    - Rota para pegar todas os documentos de um usuário
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml 
GET /documents/:ID
    - Rota para pegar um documento do usuário pelo id do documento
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml 
DELETE /documents/:ID
    - Rota para deletar uma nota do usuário pelo id do documento
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
***   
