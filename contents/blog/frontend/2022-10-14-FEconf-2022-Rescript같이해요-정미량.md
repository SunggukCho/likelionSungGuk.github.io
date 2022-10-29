---
title: "FEconf 2022 Rescript같이해요"
date: "2022.10.14"
tags:
- feconf
- rescript
- 그린랩스
---



# 2022 FEconf Track A - Rescript같이해요

2022년부터 코로나 규제가 서서히 풀리면서 컨퍼런스들이 오프라인으로 진행이 되고 있습니다. 올해 처음 시작한 인프콘도 있었고 Feconf도 10월에 열렸습니다.

FEconf는 그 인기가 대단해서 마치 무슨 BTS 콘서트 티켓팅 하듯이 순식간에 마무리가 되었더라구요. 올해 꼭 오프라인 컨퍼런스를 참여해보고 싶었는데 올해는 쉽지 않을 것 같아 아쉽네요. 내년에는 꼭 참석하고 싶습니다. 집구석에서 온라인으로 컨퍼런스 내용을 정리해보며 스스로 마음을 달래봅니다.



Track A 목차

1. **Rescript같이해요**

2. @webtoon/psd 라이브러리 개발기

3. 프론트엔드 DDD를 만나다 

4. 텍스트 에디터? 그게 뭘 만드는건데? 

5. Edge 컴퓨팅으로 프론트엔드 포텐셜 끌어올리기 



## Rescript같이해요

- 발표자: 그린랩스 정미량

- 예상 청자: 프론트엔드 비기너, 타입언어 사용해보고 싶은분, 함수형 프로그래밍에 관심있으신 분 등
- 발표 내용 요약: Rescript라는 순수함수를 지향하는 함수형 프로그래밍 정적 타입언어를 소개하는 세션이었으며 그린랩스에서 왜 Rescript를 쓰고 있고 그 장점이 무엇인지 알려주셨습니다.



## Rescript의 특징

- 불변성을 유지하기 위해 변수값을 변경할 수 없다.
- let만 있다 (재할당이 안되서 const와 오히려 유사)
- return 이 없다. (마지막 라인이 암묵적 반환됨)
- import export가 없다. (모든 모듈은 내보내진다.)
- TS처럼 JS의 superset인가? NO
  - JS의 기능 중 특별히 선정된 기능만을 다루고 있는 새로운 언어



## Rescirpt의 소소한 장점

- 모든 JS 라이브러리를 Rescript와 함께 사용 가능하다. (npm, yarn, package.json 모두 사용 가능)

- 파이프 연산자를 통해 한 방향으로 코드를 읽기 편하게 도와준다 (좌 -> 우, 위 -> 아래) 

  - JS문법이 달라졌다기 보다 문법적 설탕(Syntactic Sugar)으로 보면 된다.

  - ```javascript
    // 기존 js
    A(B(C(...args)))
    
    // rescript
    A -> B -> C
    ```

- 모든 모듈이 내보내지기 때문에 import, export문이 길어지지 않는다.



## Rescript의 큰 장점

### 타입추론

- 타입어노테이션 없이 모든 표현식의 타입을 힌들리-밀너 타입으로 추론 가능하다

- ```javascript
  let add (a, b) => a+b     --- (int, int) => int
  let add2 (a, b) => a++b  --- (str, str) => str
  let add3 (a, b) => a+.b  --- (float, float) => float
  ```

- 이게 가능한 이유는 각 타입별로 연산자를 다르게 사용하는 Rescript의 특징때문이다.

- 이 뿐만 아니고 실제로 타입을 선언한 뒤 비슷한 객체를 새롭게 생성하면 Rescript는 스스로 가장 적합해 보이는 타입을 추론한다.

- variant 타입

  - ```javascript
    type result = Pending | Success({ data: string }) | Fail
    ```

  - 위와 같이 Variant 생성자는 타입에 추가 값을 가질 수가 있다.

- 패턴매칭

  - 위 variant 타입을 활용하면 패턴 매칭에 유리하다

  - ```javascript
    let data = (true, false) // 튜플
    let component = switch data {
        | (true, true) => "tt"
        | (true, false) => "tf"
        | (false, true) => "ft"
    }
    ```

  - 위와 같이 코드를 짜면 Rescript compile 당시 "ff" 쌍이 없다는 것을 찾아준다.

- option 타입

  - Rescript에는 nulll, undefined 개념이 없다. 이런 경우 option타입을 이용해서 값이 있는지 없는지를 체크할 수 있다.



## Rescript를 쓰면서 아쉬웠던 점

### 1. 바인딩

Rescript에서는 javascript함수를 사용하기 위해 바인딩을 해야 한다. 이것이 어렵고 귀찮다.

> 바인딩이란?
>
> 현재 언어에서 다른 언어로 쓰인 코드를 호출하기 위한 인터페이스

그린랩스에서는 next, nock, jest, react-hook-form, react-linkify 등 다양한 rescript-bindings 라이브러리를 제공합니다.

NEXT 예시 링크: https://www.npmjs.com/package/@greenlabs/rescript-next



### 2. 작은 커뮤니티

Stackoverflow에서 검색해도 나오는 것이 거의 없음 ㅠㅠ

[rescript] 태그로 조회해보면 22년 10월 현재 69개 정도밖에 나오지 않을 정도로 글로벌 레벨에서도 사용빈도가 확실히 낮은 편에 속한다.



## 느낀점

Rescript란 것을 처음 본 느낌은 뭔가 JS와 TS가 합쳐져서 하나의 언어로 다시 태어난 것 같다는 생각이 드네요.

근데 현 프로젝트에 도입한다고 하면 좀 꺼려지는 생각이 우선 듭니다. 뭔가 벌써부터 꼰대가 된 느낌인데... 연사분께서 말씀하신 것처럼 러닝커브가 좀 있기도 하고 기존 JS/TS 조합으로 사용해도 어느 정도 만족하기 때문이 아닐까 싶기도하고 아직 스스로 느끼기에 'JS/TS도 완벽하게 못쓰는 놈이 한 눈 파나' 라는 생각이 들기도 합니다.

그래도 Feconf에서 새로운 언어를 살펴보는 재미가 있었습니다.

막상 써보면 또 다를 수도 있을 것 같아요.



---

출처: https://www.youtube.com/watch?v=jZNk-Ncez6E
