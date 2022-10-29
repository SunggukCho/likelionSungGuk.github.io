---
title: "react-rewired 사용해서 eject없이 CRA에babel설정 추가하기"
date: "2022.03.23"
tags:
	- babel
	- cra
	- react-rewired
---



# react-rewired 사용해서 eject없이 CRA에babel설정 추가하기



## 1️⃣. 이 작업을 진행한 목적

React로 작업한 회사의 프로젝트 코드에서 Object 데이터의 값이 존재하는지 아닌지 알아 보기 위해서는 `&&` 연산자를 활용하거나 `if else` 구문을 활용해야 하는 등 코드가 다소 불필요하게 길어지는 문제가 있었습니다.

해당 데이터가 존재하는 경우와 아닌 경우에 따라 rendering되는 것이 달라지기 때문에 react에서 이 component를 렌더링 하기 전에 데이터의 존재 여부를 특정 지을 수 있는 코드가 필요한 것이죠.

예를 들면 다음과 같습니다.

```jsx
const language = {
	name: "javascript",
	best_friend: {
		name: "Typescript",
	}
}

{
	language && language.best_friend && language.best_friend.name === "Typescript" && 
	<h1>Hello {language.best_friend.name}</h1>
}
```

language라는 객체의 best_friend의 name값이 있는 경우에 Hello 뒤에 해당 데이터를 렌더링 하려는 경우 기존에는 위와 같은 방식으로 language안에 best_friend가 있는지를 보장하는 경우에만 렌더링 할 수 있도록 해야 했습니다.

중요한 건 이 경우에 문제가 되는 것은 `name`값이 아니라 `best_friend`입니다. best_friend의 name값이 비어있더라도 react에서 렌더링하는데 문제가 없습니다. 그저 undefined를 할당하고 빈 값을 띄워주면 되니까요. 하지만 best_friend자체가 없으면 그것은 문제가 됩니다. undefiend의 “name”을 찾아오라는 잘못된 코드를 작성했기 때문이죠.

### optional chaining (?)

옵셔널 체이닝이라는 것은 2020년 javascript에 추가된 새로운 문법입니다. 바로 위의 language 객체와 같이 객체내부에 또다른 객체를 체이닝으로 연결할 때 발생하는 위와 같은 문제를 간편한 문법으로 해결하기 위한 기능이라 볼 수 있습니다. `?` 앞의 평가대상이 `undefined`이거나 `null`일 경우 평가를 멈추고 그 두 가지가 아닌 경우 뒤의 평가를  이어나갑니다. 옵셔널 체이닝을 활용하면 다소 지저분한 방어로직이나 외부 라이브러리를 사용할 필요없이 깔끔한 코드를 짤 수 있습니다. 아래와 같이 사용됩니다.

```jsx
{
	language.best_friend?.name && 
	<h1>Hello {language.best_friend.name} </h1>
}
```

훨씬 깔끔해졌죠?

주의할 점은 **옵셔널 체이닝을 남용하지 않는 것**입니다**.**

`?.`는 존재하지 않아도 괜찮은 대상에만 사용해야 합니다.

사용자 주소를 다루는 위 예시에서 논리상 `language`는 반드시 있어야 하는데 `best_friend`필수값이 아닙니다. 그러니 `language.best_friend?.name` 를 사용하는 것이 바람직합니다.

실수로 인해 `language`값을 할당하지 않았다면 바로 알아낼 수 있도록 해야 합니다. 그렇지 않으면 에러를 조기에 발견하지 못하고 디버깅이 어려워집니다.

결과적으로 이 작업을 진행하는 것은 빌드잇 프로젝트에서 이 최신 문법인 optional chaining을 활용할 수 있도록 하기 위해 설정값을 변경하는 것이 목적이었습니다.

## 2️⃣. react-rewired

회사의 project는 CRA(npm create-react-app buildit-co-kr-react) 명령어로 설치된 프로젝트입니다. 즉 기본적인 설정들을 직접 설정하기 보다는 자동적으로 세팅해주는 값으로 초기 프로젝트를 세팅했습니다. 

CRA는 빠른 프로젝트 설정을 도와준다는 장점(babel, webpack 등 사실상의 프로젝트 필수 설정)이 있지만 이러한 세팅값들을 프로젝트 디렉토리에서 쉽게 찾을 수 없게 되어 원하는대로 바꿀 수 없다는 단점이 있습니다. 이 CRA 설정을 깨고 다시 설정하는 것을 `eject`라 표현하는데 이렇게 하면 CRA의 장점인 (**one Build Dependency**)가 깨지게 됩니다. 따라서 eject하면 서로간의 dependency가 어떻게 꼬일 지 아는 것이 어렵다는 단점이 있습니다.

![eject는 뭔가 두렵다](/assets/img/eject.png)

(음... eject는 뭔가 두렵다)

### react-rewired의 장점

react-rewired는 `eject`를 하지 않고 CRA의 설정값을 바꾸도록 도와주는 라이브러리 입니다.

최대한 CRA 설정을 그대로 유지한채 특정 부분만 Custom하는 것을 도와줍니다.

[https://github.com/timarney/react-app-rewired](https://github.com/timarney/react-app-rewired)

### react-rewired의 단점

하지만 아무리 react-rewired를 사용한다해도 CRA가 제공하는 기능을 완전히 provide하지는 않습니다.

⚠️ **Please Note:**
```
💡 "Stuff can break" - Dan Abramov
```

> By doing this you're breaking the "guarantees" that CRA provides. That is to say you now "own" the configs. No support will be provided. Proceed with caution.

Using this library will override the default behavior and configuration of `create-react-app`
, therefore invalidating the guarantees that come with it. Use with discretion!



## 3️⃣. 작업 진행

### 1. react-rewired

#### 설치

```bash
$ npm install react-app-rewired --save-dev
```

#### 프로젝트 root 디렉토리에 ****`config-overrides.js` 설정**

```jsx
/* config-overrides.js */

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  return config;
}
```

#### `package.json` 파일에서 scripts 부분 명령어 수정

```jsx
"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test",
    "eject": "react-scripts eject"
}
```

### 2. Customize-cra

[customize-cra](https://www.npmjs.com/package/customize-cra)

#### 설치

```bash
$ npm i customize-cra
```

#### `config-overrides.js` 설정 Override

```jsx
const { override, useBabelRc } = require('customize-cra');

module.exports = override(useBabelRc());
```

- babelrc 설정을 사용하기 위해 config-overrides.js의 설정을 변경해줍니다.

### 3. babel 플러그인 “plugin-proposal-optional-chaining”

#### 설치

```bash
$ npm install --save-dev @babel/plugin-proposal-optional-chaining
```

#### .babelrc

```jsx
{
  "plugins": ["@babel/plugin-proposal-optional-chaining"]
}
```

이제 ***optional chaining***을 쓸 수 있습니다.✌️



다음에는 react-rewire를 하지 않고 직접 nodejs 버전과 react-scripts, 그리고 다른 라이브러리와의 의존성 문제를 해결한 내용을 업로드 하겠습니다.

---

참고

[https://github.com/arackaf/customize-cra](https://github.com/arackaf/customize-cra)

[Micalgenus](https://micalgenus.github.io/articles/2019-02/React-eject-%EC%97%86%EC%9D%B4-babelrc-%EC%A0%81%EC%9A%A9)

[@babel/preset-react · Babel](https://babeljs.io/docs/en/babel-preset-react)

[@babel/plugin-syntax-optional-chaining · Babel](https://webpack.js.org/contribute/writing-a-plugin/#basic-plugin-architecture)