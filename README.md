# Skill Assessment

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

## Results

### Postman
- Post the first note
![alt text](image-1.png)
- Post the second note
![alt text](image-2.png)
- Get all notes
![alt text](image-3.png)
- Get note by id 1
![alt text](image-4.png)
- Get note by id 2
![alt text](image-5.png)
- Update the second note
![alt text](image-6.png)
- Delete note 1
![alt text](image-7.png)
- Get all note again (note 2 left)
![alt text](image-8.png)

## Console 
![alt text](image-9.png)
![alt text](image-10.png)
