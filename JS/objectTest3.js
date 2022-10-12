function Circle(PI, radius) {
    this.PI = PI;
    this.radius = radius;
    this.getarea = () => this.radius * this.radius * this.PI;
}
const cir = new Circle(3.1415, 10)
console.log(cir.getarea());