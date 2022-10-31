---
title: "input 정수만 입력받기"
date: "2022.07.08"
tags:
  - javascript
---

# javascript input 정수만 입력받기

## 문제 상황

<video src="/assets/data/소수점오류.mp4" width="100%" autoplay controls loop></video>

- input의 비율을 소수점으로 입력했을 때 분명 입력한 대로는 총 합계가 100이 나와서 딱 맞아 떨어지는데, 미선택에 0.0000000001 과 같은 숫자가 남아있거나 100이 다 맞을 때 7.1023981203와 같은 엉뚱한 숫자가 나오는 오류가 있습니다.



## 문제 원인

![image.png](/assets/img/javascriptinput정수만입력받기1.png)

문제 원인은 자바스크립트 소수의 특징입니다.

자바스크립트의 숫자는 ****64 비트 부동 소수점****입니다.

우리가 쓰는 10진법을 자바스크립트 엔진은 2진법으로 바꿔서 계산을 하는데, 이때 특정 소수의 경우 무한소수가 되어버립니다. (예: const 소수 = 10/3)

이런 경우 자바스크립트는 무한수를 정해진 자원 안에서 표현하기 위해 유한하게 변경 하려다 보니 미세한 값들이 초과되거나 손실발생하게 됩니다.

때문에 경우에 따라 대략 소수점 아래 15 ~ 17자리에서 그 무한소수를 끊고 근사값으로 저장하여 연산을 수행합니다.



## 문제해결 방식 결정

### toFixed, round를 사용하지 않는 이유

가장 많이 쓰이는 것이 toFixed, round 같이 소수점을 특정 자릿수에서 끊고서 해당 수치들을 합계하거나 다 연산이 된 후에 동일한 처리를 할 수 있습니다.

하지만 세대타입은 총합이 100이 되어야 하고 이 합계를 진행하는 로직이 생각보다 여러 곳에서 빈번하게 일어나고 있습니다.

이 합계로직들을 모두 찾아다니면서 수정하는 것은 비효율적인 방법이라 판단했습니다.

### 세대타입 비율 입력 시 정수값만 받도록 수정한 이유

소수문제를 가장 쉽게 해결할 수 있는 것은 입력을 정수로만 받도록 하는 것입니다.

하지만 UX관점에서 사용자가 세대타입의 비율을 꼭 소수점으로 표현해야만 한다면 또 다른 얘기입니다. 이 때 실제로 자주 사용하는 사용성을 체크해본 결과 세대타입 비율은 대략적인 수치이기 때문에 반드시 소수점까지 표기할 필요가 없다는 것을 확인하였습니다. 따라서 정수로 수정해도 큰 무리가 없다는 판단을 할 수 있었습니다.



## 문제해결 과정

javascript에서는 타언어와 다르게 숫자 타입이 딱 하나밖에 없습니다. 따라서 integer로 설정을 바꾸는 방법을 사용하지 못하므로 정수값만 입력을 받도록 하기 위해서는 약간의 트릭이 필요합니다.

- 일단 정수만 입력이 가능하도록 하는pattern을 props으로 내려줘서 pattern에 맞는 입력만 입력이 가능하도록 해줘야 합니다.
- input에 pattern을 줄 수 있는 것은 text타입입니다. (number는 X)
- 따라서 input type=”number” 가 아닌 input type=”text”로 설정해줘야 합니다.

### 1. ProjectFormHousing > ProjectFieldInput 수정

```jsx
// 기존
<ProjectFieldInput
	...
  type="number"
  unit="%"
  ...
/>
```

```jsx
// 수정 후
<ProjectFieldInput
	...
  type="text"
  pattern={"[0-9]*"}
  unit="%"
  ...
/>
```

1차로 이렇게 작업을 진행한 뒤 projectFielnInput에서 pattern을 props받아서 사용해보면 정수만 입력이 가능하도록 잘 동작합니다.

하지만, 숫자입력값이 아닌 다른 입력값이 들어오는 경우 `NaN` 을 띄워주는 의도하지 않은 동작이 일어납니다.

![숫자가 아닌 입력을 하면 NaN을 띄워주는 의도치 않은 동작을 하게 됩니다.](/assets/img/javascriptinput정수만입력받기2.png)

숫자가 아닌 입력을 하면 NaN을 띄워주는 의도치 않은 동작을 하게 됩니다.

### 2. onchange 에서 숫자가 아닌 값 처리해주기

현재 활용하고 있는 projectFieldInput은 onChange 이벤트 발생시에 `updateValue` 함수를 통해 state값을 관리하고 있습니다.

이 함수에서 숫자가 아닌 입력값을 받은 경우 return 을 막아주면, 위 오류 사항을 해결할 수 있을 거라 판단했습니다.

```jsx
updateValue = (type: 'HOUSING' | 'MY_TYPE', index: number, area?: number, bay?: number, proportion?: number, userdef?: boolean) => {
    if (proportion !== undefined && !isFinite(proportion)) {
      return
    }
...
}
```

위와 같이 updateValue 함수의 최상단에 proportion이 숫자가 아닌경우 return을 비어두어 처리하였습니다. `isFinite()` 은 숫자인지 아닌지 체크하는 함수입니다. 최상위 함수로 어떤 객체와도 연결되지 않았습니다. Nan, -infinite, +infinite → false, 나머지는 true를 반환합니다.

### 3. CSS 맞추기

BuilditInput은 크게 type이 text인지 number인지에 따라 CSS가 다르게 설정됩니다.

Text의 경우 input창의 왼쪽에 정렬이 되고 unit 설정은 따로 없습니다.

Number의 경우 input창의 오른쪽에 정렬이 되고 unit은 props를 받습니다.

![TEXT](/assets/img/javascriptinput정수만입력받기3.png)

TEXT

![Number](/assets/img/javascriptinput정수만입력받기4.png)

Number

세대타입의 경우 원래대로라면 우측정렬이 되고 단위인 %까지 unit으로 표현되는 것이 올바릅니다. 하지만 이번 정수만 입력가능하다는 특성이 추가되면서 이 부분에 대한 UI통일성이 깨져버리게 되었으므로 이를 다시 맞춰주는 작업이 필요합니다.

이미 컴포넌트 자체에 align이라는 프로퍼티를 정의해 두었기 때문에 간단하게 left, right, center를 선택할 수 있습니다.

따라서 ProjectFieldInput component에서 align=”right”을 props해주면 우측정렬을 할 수 있습니다.

![Untitled](/assets/img/javascriptinput정수만입력받기5.png)

—끝—