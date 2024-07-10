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

const me = new Person('madison',18,'jellyfish')
const joyce = new Person('joyce', 19, 'whale shark')
console.log(me.reverseName())
console.log(me.retirementAge())
console.log(me.isAnimalCool())

console.log(Person.listsPeople())
console.log(Person.findByFavoriteAnimal('fish'))