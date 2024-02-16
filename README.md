<img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" width="100%"/>

# Get Started Project

```bash
git clone <repo>
```

```bash
docker-compose up -d
```

```bash
yarn install or npm install
```

```bash
npx prisma db push
```

```bash
yarn start or npm start
```

## Endpoint:

**POST:** http://localhost:3333/auth/signup

```json
"BODY":{
    "username": "maria",
    "password": "123"
} 

"RESPONSE":{
  "status": 200,
  "message": "ok",
  "data": {
    "id": "e78f45b5-32e7-485e-b00c-285aec893363",
    "username": "maria",
    "password": "$2b$10$thMn4hWhTPoLOviWFNJIcOOcY.ZsIGnTnAuR4juhYs4dF0eX/j2j2"
  }
} 
```

**POST:** http://localhost:3333/auth/signin

```json
"BODY":{
    "username": "maria",
    "password": "123"
} 

"RESPONSE":{
  "status": 200,
  "message": "ok",
  "data": {
    "id": "e78f45b5-32e7-485e-b00c-285aec893363",
    "username": "maria"
  }
} 
```

**GET:** http://localhost:3333/auth/

```json
"RESPONSE":{
  "status": 200,
  "message": "ok",
  "data": [
    {
      "id": "c8478b31-2bd5-466e-b5f2-b89262299821",
      "username": "username-01",
      "password": "$2b$10$XrmI9tRvaN5m4MXpMrTQX.Ii6M1Qt2yOkAUwMApxIM39WKQ3/fDp2"
    },
    {
      "id": "asdadasd-2bd5-466e-21asd-aasdasdasdq",
      "username": "username-02",
      "password": "$2b$10$XrmI9tRvaN5m4MXpMrTQX.Ii6M1Qt2yOkAUwMApxIM39WKQ3/fDp2"
    },
    {
      "id": "dasddads-2bd5-dadas-b5f2-asdasddadsa",
      "username": "username-03",
      "password": "$2b$10$XrmI9tRvaN5m4MXpMrTQX.Ii6M1Qt2yOkAUwMApxIM39WKQ3/fDp2"
    },
    {
      "id": "c8478b31-2bd5-466e-b5f2-asddassadsad",
      "username": "username-04",
      "password": "$2b$10$XrmI9tRvaN5m4MXpMrTQX.Ii6M1Qt2yOkAUwMApxIM39WKQ3/fDp2"
    },
    {
      "id": "hghvbch3-2bd5-466e-b5f2-b89262299821",
      "username": "username-05",
      "password": "$2b$10$XrmI9tRvaN5m4MXpMrTQX.Ii6M1Qt2yOkAUwMApxIM39WKQ3/fDp2"
    },
    ...
  ]
} 
```

**Projeto voltado exclusivamente para fins educacionais e de aprendizado.**