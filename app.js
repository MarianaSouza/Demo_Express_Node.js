var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there! Welcome to my assigment.");
});

//Rout params with :

app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "Oink!",
        dog: "Woof, Woof!",
        cat: "Meow!",
        cow: "Moo...",
        bee: "Zzzzz"
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send("The " +  animal + " says '" + sound + "'");
});

app.get("/repeat/:message/:times", function(req, res){
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = " ";
    for(var i = 0; i < times; i++){
        result += message + " ";
    }
    res.send(result);
});

//Handle exception * Star Route Matcher
app.get("*", function(req, res){
    res.send("Handling all exceptions!");
});

app.listen(3000, function(){
    console.log("Server has started");
});