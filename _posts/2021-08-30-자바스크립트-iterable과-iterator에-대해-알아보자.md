---
title: 자바스크립트 iterable과 iterator에 대해 알아보자
date: 2021-08-30 23:18:01
permalink: /:short_year-:month-:day/:title
categories: [frontend, web/network]
tags: [javascript, iterable, iterator, ES6]
---

# 자바스크립트 iterable과 iterator에 대해 알아보자
## 1. 이터러블 (iterable)이란?

> 반복 가능한 객체 (ES2015에 추가된 문법)

객체의 `Symbol.iterator` 속성에 특정 형태의 함수가 들어있다면, 이를 ***반복 가능한 객체(iterable object)*** 혹은 줄여서 **iterable**이라 부르고, <u>해당 객체는 iterable protocol을 만족한다</u>고 말합니다.



### 이터러블(iterable)이 사용되는 곳

- for... of 루프

```javascript
const iterable = [1,2,3]
for (let value of iterable) {
    console.log(value)
}
// 1, 2, 3
```



- destructuring

```javascript
// spread operator
let newIterable = [...iterable] // [1, 2, 3]

// destructuring
const [c1, c2] = 'hello';
```





## 2. 이터레이터(iterator)란?

> next메소드를 호출하면 {done: boolean, value} 를 반환하는 오브젝트

지난 Generator 포스팅에서 봤던 개념입니다.



---

Ref.

https://helloworldjavascript.net/pages/260-iteration.html
