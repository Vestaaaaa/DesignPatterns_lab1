export default class Triangle {
    constructor(pointA, pointB, pointC) {
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
        this.id = `${pointA.x},${pointA.y}-${pointB.x},${pointB.y}-${pointC.x},${pointC.y}`;
    }
    getArea() {
        const { x: x1, y: y1 } = this.pointA;
        const { x: x2, y: y2 } = this.pointB;
        const { x: x3, y: y3 } = this.pointC;
        return Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2);
    }
    getPerimeter() {
        const sideAB = this.getDistance(this.pointA, this.pointB);
        const sideBC = this.getDistance(this.pointB, this.pointC);
        const sideCA = this.getDistance(this.pointC, this.pointA);
        return sideAB + sideBC + sideCA;
    }
    getDistance(point1, point2) {
        return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
    }
    isCollinear() {
        return this.getArea() === 0;
    }
    isRightAngled() {
        const sides = [
            this.getDistance(this.pointA, this.pointB),
            this.getDistance(this.pointB, this.pointC),
            this.getDistance(this.pointC, this.pointA),
        ];
        sides.sort((a, b) => a - b);
        return (Math.abs(Math.pow(sides[0], 2) + Math.pow(sides[1], 2) - Math.pow(sides[2], 2)) < Number.EPSILON);
    }
    isIsosceles() {
        const sides = [
            this.getDistance(this.pointA, this.pointB),
            this.getDistance(this.pointB, this.pointC),
            this.getDistance(this.pointC, this.pointA),
        ];
        return new Set(sides).size < 3;
    }
}
//# sourceMappingURL=Triangle.js.map