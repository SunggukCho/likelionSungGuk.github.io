import Waves from "./waves";

import Style from "./index.style";

export default function Welcome() {
  return (
    <Style.Wrapper>
      <Style.Title>{`Daily improving \n Frontend 개발자 조성국입니다.`}</Style.Title>
      {/* <Waves /> */}
    </Style.Wrapper>
  );
}
