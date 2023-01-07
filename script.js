class Ninja {
    constructor(name, health, speed = 3, strength =3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
}
sayName (){
    console.log(`El nombre del ninja es ${this.name}`)
}
showStats (){
    console.log(`El ninja posee: Velocidad: ${this.speed}, fuerza: ${this.strength}, y condición de salud: ${this.health}`)
}
drinkSake (){
    this.health += 10; //sumará 10 a la salud del ninja
    console.log(`El sake ha mejorado la condición de salud del ninja en ${this.health}`)
}
}

const ninja1 = new Ninja("Hyabusa", 4, 4, 4);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
