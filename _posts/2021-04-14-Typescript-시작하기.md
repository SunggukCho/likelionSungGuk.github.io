---
title: Typescript 시작하기
date: 2021-04-14 23:18:01
permalink: /:short_year-:month-:day/:title
categories: [web/network, frontend]
tags: [typescript, ts, 타입스크립트]
---



# 타입스크립트 fundamentals - 타입, 함수, 인터페이스, enum, 클래스


## 1. 기본타입

변수선언방식 변수명 : 타입 = 값;

```tsx
let str: string = 'hi'
let num: number = 10;
let isLoggedIn: boolean = false;
```

### Array

요소의 집합

```tsx
let arr: number[] = [1, 2, 3];
arr[2] = 100;

// 타입이 다르므로 에러
arr[2] = 'hi';
```

### Tuple

**길이가 고정**되고 요소 **타입이 지정**된 배열

```tsx
let tuple: [string, number] = ['hi', 10];

//길이가 고정되기때문에 에러뜸
tuple[5] = 'hello';
// number타입에 string 할당 x 에러
tuple[1] = 'hi';

```

### Enum

**상수**들의 집합이다.

```tsx
enum Avengers { Capt, IronMan, Thor }
let hero: Avengers = Avengers.Capt;

console.log(hero); // 0

//읽기전용이라서 할당불가 에러
Avengers.Capt = 3;
```

### Any

자바스크립트의 변수랑 똑같다. 뭐든 할당 가능

```tsx
let str: any = 'hi';
let num: any = 10;
let arr: any = ['a', 2, true];

//any라서 num에 'hi' 할당 가능
num = 'hi';
```

### Void

undefined와 null만 할당가능하다. 일반적으로 반환하지 않는 **함수**에서 사용

```tsx
let unuseful: void = undefined;
function notuse(): void {
  console.log('sth');
}
```

### never

에러를 throw 하거나 절대 반환하지 않는 함수(무한루프일때 쓰이네요)

```tsx
function neverEnd(): never {
  while (true) {

  }
}

function error(message: string): never {
    throw new Error(message);
}
```

## 2. 함수

### 함수의 기본적인 타입 선언

자바스크립트와의 차이점은 **매개 변수**와 **반환 값**에 타입 부여

```tsx
function sum(a: number, b: number): number {
	return a + b;
}
```

### 함수의 인자

전달 인자의 수가 더 많거나 적거나 하면 당연히 안되겠죠? 당연히 타입도 다르면 안되요

```tsx
function sum(a: number, b: number): number {
  return a + b;
}
sum(10, 20); // 30
sum(10, 20, 30); // error, too many parameters
sum(10); // error, too few parameters
```

### 선택적 매개변수

하지만 매개변수에 ?를 달아주면 그 전달인자를 넘기지 않아도 됩니다.

```tsx
function sum(a: number, b?: number): number {
  return a + b;
}
sum(10, 20); // 30
sum(10, 20, 30); // error, too many parameters
sum(10); // 10
```

```tsx
// error 필수 매개변수가 선택적 매개변수 
// 선택적 매개변수가 앞에 있으면 안됩니다.
function sum(a?: number, b: number): number {
  return a + b;
}
```

기본값도 설정해 줄 수 있습니다.

```tsx
function sum(a: number, b = 100): number {
  return a + b;
}
sum(10, undefined); // 110
sum(10, 20, 30); // error, too many parameters
sum(10); // 110
```

### 인터페이스

인터페이스는 상호간의 정의한 약속이나 규칙을 의미한다.

객체의 속성과 속성타입

함수의 매개변수나 반환타입

배열과 객체를 접근하는 방식

클래스

logAge 메소드는 age라는 속성을 갖고 number타입을 갖는 객체를 받는것을 약속했다.

```tsx
let person = { name: 'Capt', age: 28 };

function logAge(obj: { age: number }) {
  console.log(obj.age); // 28
}
logAge(person); // 28
```

```tsx
interface personAge {
  age: number;
}

function logAge(obj: personAge) {
  console.log(obj.age);
}
let person = { name: 'Capt', age: 28 };
logAge(person);
```

### 옵션속성

아까 매개변수때와 마찬가지로 ?를 붙혀주면 그 속성을 모두 다 꼭 사용하지 않아도 됩니다.

```tsx
interface CraftBeer {
  name: string;
  hop?: number;  
}

let myBeer = {
  name: 'Saporo'
};
function brewBeer(beer: CraftBeer) {
  console.log(beer.name); // Saporo
}
brewBeer(myBeer);
```

### 읽기 전용 속성

readonly가 붙은 속성은 읽는것만 된다.

```tsx
interface CraftBeer {
  readonly brand: string;
}

let myBeer: CraftBeer = {
  brand: 'Belgian Monk'
};
myBeer.brand = 'Korean Carpenter'; // error!
```

### 읽기 전용 배열

ReadonlyArray로 선언하면 배열 내용 변경 불가ReadonlyArray로 선언하면 배열 내용 변경 불가

```tsx
let arr: ReadonlyArray<number> = [1,2,3];
arr.splice(0,1); // error
arr.push(4); // error
arr[0] = 100; // error
arr = [10, 20, 30]; // error
```

객체 선언과 관련된 타입 체킹

```tsx
interface CraftBeer {
  brand?: string;
}

function brewBeer(beer: CraftBeer) {
  // ..
}
brewBeer({ brandon: 'what' }); // 속성이 다르니 에러뜹니다.
```

이러면 타입 체크를 무시한다.

```tsx
let myBeer = { brandon: 'what' }';
brewBeer(myBeer as CraftBeer);
```

### 함수 타입

함수 매개변수와 반환타입도 인터페이스 정의가 가능하다.

```tsx
interface login {
  (username: string, password: string): boolean;
}

let loginUser: login; // 함수 저장할 변수 선언
loginUser = function(id: string, pw: string) {
  console.log('로그인 했습니다');
  return true;
}
```

클래스 타입

자바의 인터페이스와 목적이 비슷한데

어떤 인터페이스를 implements한 클래스가 있다면

인터페이스의 메소드와 변수가 있다는 것을 보장한다.

```tsx
interface CraftBeer {
  beerName: string;
  nameBeer(beer: string): void;
}

class myBeer implements CraftBeer {
  beerName: string = 'Baby Guinness';
  nameBeer(b: string) {
    this.beerName = b;
  }
  constructor() {}
}
```

인터페이스 끼리 상속도 가능합니다.

```tsx
interface Person {
  name: string;
}
interface Drinker {
  drink: string;
}
interface Developer extends Person {
  skill: string;
}
let fe = {} as Developer;
fe.name = 'josh';
fe.skill = 'TypeScript';
fe.drink = 'Beer';
```


---
References
https://joshua1988.github.io/ts/