
## Skill Assessment

## Run
- npm install --verbose 
- npm start

## What's added/ modified
- /server/app.js
- /server/controller/noteController.js
- /server/routes/noteRoute.js

## In-memory data structure used
``` 
// In-memory storage
let notes = [];
let nextId = 1;
```

## RESTFul API added
- POST   /api/v1/notes
- GET    /api/v1/notes
- GET    /api/v1/notes/1
- PUT    /api/v1/notes/1
- DELETE /api/v1/notes/1
