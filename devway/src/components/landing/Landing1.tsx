// import React, { useState, useEffect } from "react";
// import styled, { keyframes, css } from "styled-components";
// import Header from "@/components/Common/Header";
// import LeftChat1 from "@/assets/img/landing/Left_chat_bubble.svg";
// import LeftChat2 from "@/assets/img/landing/Left_chat_bubble1.svg";
// import RightChat1 from "@/assets/img/landing/Right_chat_bubble.svg";
// import RightChat2 from "@/assets/img/landing/Right_chat_bubble1.svg";
// import Helix1 from "@/assets/img/landing/Helix1.png";
// import Helix2 from "@/assets/img/landing/Helix2.png";

// interface Landing1Props {
//   isActive: boolean;
// }

// const fadeInUp = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(50px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100vh;
//   position: relative;
// `;

// const FixedHeader = styled.div`
//   margin-top: 50px;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   /* background-color: #fff; Header 배경색, 필요에 따라 변경 */
// `;

// const Section = styled.section`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 100vw;
//   position: relative;
// `;

// const ChatContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: stretch;
//   width: 50vw;
//   margin-top: 20px; /* h1과의 간격 조정 */
//   position: relative;
//   z-index: 1; /* ChatContainer의 z-index 설정 */
// `;

// const ChatBubble = styled.div<{
//   isLeft: boolean;
//   marginOffset: string;
//   isActive: boolean;
//   delay: number;
// }>`
//   display: flex;
//   justify-content: ${(props) => (props.isLeft ? "flex-start" : "flex-end")};
//   margin-left: ${(props) => (props.isLeft ? props.marginOffset : "0")};
//   margin-right: ${(props) => (props.isLeft ? "0" : props.marginOffset)};
//   position: relative;
//   opacity: 0;
//   ${(props) =>
//     props.isActive &&
//     css`
//       animation: ${fadeInUp} 0.5s ease-out ${props.delay}s forwards;
//     `}
// `;

// const Image = styled.img`
//   height: 77px;
//   margin: 5px;
// `;

// const HelixImage = styled.img<{ isLeft: boolean; isActive: boolean }>`
//   position: absolute;
//   top: 20%;
//   ${(props) => (props.isLeft ? "left: -150px;" : "right: -150px;")}
//   transform: translateY(-50%);
//   z-index: 2; /* Helix 이미지를 더 높은 z-index로 설정 */
//   opacity: 0;
//   ${(props) =>
//     props.isActive &&
//     css`
//       animation: ${fadeInUp} 0.5s ease-out forwards;
//     `}
// `;

// const Landing1: React.FC<Landing1Props> = ({ isActive }) => {
//   const [isHelix1Active, setIsHelix1Active] = useState(false);
//   const [isHelix2Active, setIsHelix2Active] = useState(false);

//   useEffect(() => {
//     if (isActive) {
//       const totalDelay = 0.5 + 0.2 * 3; // ChatBubble 애니메이션 총 시간 계산
//       const helix1Timer = setTimeout(() => {
//         setIsHelix1Active(true);
//       }, totalDelay * 1000); // Helix1 애니메이션 시작 시간 설정

//       const helix2Timer = setTimeout(() => {
//         setIsHelix2Active(true);
//       }, (totalDelay + 0.5) * 1000); // Helix2 애니메이션 시작 시간 설정 (Helix1 애니메이션 종료 후)

//       return () => {
//         clearTimeout(helix1Timer); // 타이머 클린업
//         clearTimeout(helix2Timer); // 타이머 클린업
//       };
//     } else {
//       setIsHelix1Active(false);
//       setIsHelix2Active(false);
//     }
//   }, [isActive]);

//   const images = [
//     { src: LeftChat1, alt: "채팅1", marginOffset: "50px", delay: 0 },
//     { src: RightChat1, alt: "채팅2", marginOffset: "30px", delay: 0.2 },
//     { src: LeftChat2, alt: "채팅3", marginOffset: "0px", delay: 0.4 },
//     { src: RightChat2, alt: "채팅4", marginOffset: "10px", delay: 0.6 },
//   ];

//   return (
//     <Container>
//       <FixedHeader>
//         <Header name="DEVWAY" />
//       </FixedHeader>
//       <Section>
//         <ChatContainer>
//           <HelixImage
//             src={Helix1}
//             alt="Helix1"
//             isLeft={true}
//             isActive={isHelix1Active}
//           />
//           <HelixImage
//             src={Helix2}
//             alt="Helix2"
//             isLeft={false}
//             isActive={isHelix2Active}
//           />
//           {images.map((image, index) => (
//             <ChatBubble
//               key={index}
//               isLeft={index % 2 === 0}
//               marginOffset={image.marginOffset}
//               isActive={isActive}
//               delay={image.delay}
//             >
//               <Image src={image.src} alt={image.alt} />
//             </ChatBubble>
//           ))}
//         </ChatContainer>
//       </Section>
//     </Container>
//   );
// };

// export default Landing1;
export {};
