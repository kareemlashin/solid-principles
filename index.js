// S — Single responsibility principle

class DisplayPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.validate = new ValidatePerson(this.name, this.age);
    }

    Display() {
        if (
            this.validate.ValidateName(this.name) &&
            this.validate.ValidateAge(this.age)
        ) {
            console.log(`Name: ${this.name} and Age: ${this.age}`);
        } else {
            console.log('Invalid');
        }
    }
}

class ValidatePerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    ValidateName(name) {
        if (name.length > 3) {
            return true;
        } else {
            return false;
        }
    }

    ValidateAge(age) {
        if (age > 18) {
            return true;
        } else {
            return false;
        }
    }

    Display() {
        if (this.ValidateName(this.name) && this.ValidateAge(this.age)) {
            console.log(`Name: ${this.name} and Age: ${this.age}`);
        } else {
            console.log('Invalid');
        }
    }
}
// O — Open closed principle
class Rectangle {
    setWidth(width) {
        this.width = width;
    }

    setHeight(height) {
        this.height = height;
    }

    setColor(color) {
        // ...
    }

    getArea() {
        return this.width * this.height;
    }
}
class Square extends Rectangle {
    setWidth(width) {
        this.width = width;
        this.height = width;
    }
    setHeight(height) {
        this.width = height;
        this.height = height;
    }
}
class Shape {
    setColor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}

class Rectangle extends Shape {
    setWidth(width) {
        this.width = width;
    }
    setHeight(height) {
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}

class Square extends Shape {
    setSide(side) {
        this.side = side;
    }
    getArea() {
        return this.side * this.side;
    }
}
// L — Liskov substitution principle

// I — Interface segregation principle

// D — Dependency Inversion principle
