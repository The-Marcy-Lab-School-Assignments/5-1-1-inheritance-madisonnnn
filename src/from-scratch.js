class Quadrilateral {
  constructor(side1,side2,side3,side4){
    this.side1 = side1
    this.side2 = side2
    this.side3 = side3
    this.side4 = side4
  }
  getPerimeter(){
    return this.side1 + this.side2 + this.side3 + this.side4
  }
}

class Rectangle extends Quadrilateral {
  constructor(side1,side2){
    super(side1, side2, side1, side2)
  }
  getArea(){
    return this.side1 * this.side2
  }
}

class Square extends Rectangle{
  constructor(side1){
    super(side1,side1)
  }
  getDiagonal(){
    return this.side1 * Math.sqrt(2);
  }
}

/* Be creative with this one! */
class Person {
  static #allPeople = []
  constructor(name,age,favoriteAnimal){
    this.name = name
    this.age = age
    this.favoriteAnimal = favoriteAnimal
    Person.#allPeople.push(this)
  }
  reverseName(){
    const spread = [...this.name]
    const backwards = spread.reverse()
    return backwards.join('')
  }
  retirementAge(){
    const randomNum = Math.floor(Math.random() * 100)
    const retirement = this.age + randomNum
    if(retirement > 50){
      return `You will work until you are ${retirement} :(`
    } else {
      return `You will work until you are only ${retirement}!!`
    }
  }
  isAnimalCool(){
    const generic = ['cat','dog','turtle','fox','fish','hamster','bird']
    if(generic.includes(this.favoriteAnimal)){
      return `${this.favoriteAnimal} as a favorite animal is generic.`
    }
    else{
      return `${this.favoriteAnimal} as a favorite animal is unique!`
    }
  }
  static listsPeople(){
    return [...Person.#allPeople]
  }
  static findByFavoriteAnimal(animal){
    const person = Person.#allPeople.find((person) => person.favoriteAnimal === animal)
    if(person) return `${person.name}'s favorite animal is a ${animal}!!`
    else return `no one's favorite animal is a ${animal} :(`
  }
}

module.exports = {
  Quadrilateral,
  Rectangle,
  Square,
  Person,
};
