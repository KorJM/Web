let circle = {};

circle.PI = 3.1415;
circle.radius = 10;
circle.getarea = function() {return this.radius * this.radius * this.PI};

console.log(circle.getarea());