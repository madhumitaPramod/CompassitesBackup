console.log("hello oop javascript");

//object literals
// const circle={
//     radius:1,
//     location:{
//         x:1,
//         y:2
//     },
//     draw:function(){
//         console.log("draw a circle");
//     }
// };
// circle.draw();
// console.log("circle radius",circle.radius);

// console.log("circle location",circle.location.x + " " + circle.location.y );

//factory function
// function createCircle(radius){
//    return{
//     radius,
//     draw:function(){
//         console.log("draw");
//     }
// }
// }
// let circle = createCircle(10);
//     console.log(circle);

//constructor function
function CreateCircle(radius){
    this.radius = radius;
    this.draw =function(){
        console.log("draw");
    }
}

let anotherCircle = new CreateCircle(10);
console.log(anotherCircle.draw);
console.log(anotherCircle.radius);

let circle = new CreateCircle(name);
console.log(circle.radius);
console.log(circle.draw);
