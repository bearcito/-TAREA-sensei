class Ninja {
 constructor(nombre,salud)
 {
 this.nombre = nombre
 this.salud = salud;
 this.velocidad = 3 
 this.fuerza = 3 
 }
 sayName(){
    console.log(`hola mi nombre es ${this.nombre}`)
 }
 showStats(){
    console.log(`mi salud es ${this.salud} mi velocidad es ${this.velocidad} mi fuerza es ${this.fuerza}` )
 }
 drinkSake(){
    this.salud += 10;
    console.log( `he bebido sake y ahora mi salud es ${this.salud}` )
 }
}

const ninja1 = new Ninja("hyabusa",75);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

class Sensei extends Ninja {
   constructor(nombre) {
     super(nombre, 200); 
     this.velocidad = 10;
     this.fuerza = 10;
     this.sabiduria = 10;
   }
 
   speakWisdom() {
     this.drinkSake(); 
     console.log(`La sabiduría es la clave para la paz interior.`);
   }
 }
 const miSensei = new Sensei("master splinter");

miSensei.sayName();
miSensei.showStats();
miSensei.speakWisdom(); 
 
