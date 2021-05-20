const RouterController = require('../controllers/jokes');

module.exports=app=>{
    app.post("/api/jokes/",RouterController.findAlljokes);
    app.get("/api/jokes/findOnejoke/:id",RouterController.findOnejoke);
    app.post("/api/jokes/newJoke",RouterController.CreateJoke);
    app.put("/api/jokes/updateJoke/:id",RouterController.UpdateJoke);
    app.delete("/api/jokes/delete/:id",RouterController.deleteExistingJoke);
};