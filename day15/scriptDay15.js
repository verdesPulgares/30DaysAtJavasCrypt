class Animal {
    constructor(name, age, color, legs) {
        this.name =  name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    };
    locomotion() {
        return `${this.name} runs over the hills and far away`
    };
    petInfo() {
        let info = [this.name, this.age, this.color, this.legs]
        return info
    }
};
const kat = new Animal('negra', 10, 'multicolor', 4)
console.log(kat.petInfo())


//02
class Cat extends Animal {
    miauMiau() {
        return `miaaaaaumiau`
    }
};

class Dog extends Animal {
    woofWoof() {
        return `wooof woof`
    }
};
const kitty = new Cat();
const goodBoy = new Dog('goodBoi');
console.log(kitty.miauMiau());
console.log(goodBoy.woofWoof());

//Exercise Level 02:
class Fish extends Animal {
    constructor(name, age, color, legs){
    super (name, age, color, legs)
    this.locomotion = () => `${this.name} likes to swim in the deep`;
    }
}
const mojarrin = new Fish('mojarrin', 109, 'golden', '0')
console.log(goodBoy.locomotion())
console.log(mojarrin.locomotion())

//Exercises level 03:


