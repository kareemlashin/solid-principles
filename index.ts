// S — Single responsibility principle

// O — Open closed principle

// L — Liskov substitution principle
interface ShapeInterface {
    calculateArea();
    calculateVolume();
}
class Squares implements ShapeInterface {
    calculateArea(){
        //...
    }
    calculateVolume(){
        //...
    }  
}

class Cuboid implements ShapeInterface {
    calculateArea(){
        //...
    }
    calculateVolume(){
        //...
    }    
}

class Rectangles implements ShapeInterface {
    calculateArea(){
        //...
    }
    calculateVolume(){
        //...
    }   
}
// I — Interface segregation principle

// D — Dependency Inversion principle
