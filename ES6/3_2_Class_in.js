// 클래스와 상속

// ES6가 생긴 후 class 가 생겼다. 아래와 같이 사용 가능

class Person {
  // 생성자를 만듬
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  print() {
    console.log(this.name + ", " + this.age);
  }
}

const tom = new Person("Tom", 10);
tom.print();

// 상속 받는것도 가능
class Developer extends Person {
  // pseson을 상속받아  developer를 만들겠다.
  constructor(name, age, field) {
    super(name, age); //부모 함수 호출함
    this.field = field;
  }
  print() {
    super.print();
    console.log(`field : ${this.field}`);
  }
}

const hun = new Developer("HUN", 10, "Incheon");
hun.print();
