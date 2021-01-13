var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car1,car1I,car2,car2I,car3,car3I,car4,car4I
var trackI
var cars
var carsAtEnd = 0

function preload(){
  car1I=loadImage("images/car1.png")
  car2I=loadImage("images/car2.png")
  car3I=loadImage("images/car3.png")
  car4I=loadImage("images/car4.png")
  trackI=loadImage("images/track.jpg")
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  console.log("GameState"+gameState)
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
