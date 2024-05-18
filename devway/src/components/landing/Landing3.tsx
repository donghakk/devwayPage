// import React from "react";
// import styled, { keyframes, css } from "styled-components";
// import IndicationImg from "@/assets/img/landing/indication.svg";

// interface LandingProps {
//   isActive: boolean;
// }

// const profiles = [
//   {
//     image: "https://via.placeholder.com/150",
//     name: "28세 프론트엔드 개발자",
//     review:
//       "오픈 API가 가끔 사용하기 어렵게 되어있는데, 데브웨이를 통해서 편하게 쓸 수 있었어요! 데브웨이 감사합니다.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "35세 백엔드 개발자",
//     review:
//       "데브웨이를 통해 복잡한 백엔드 설정을 쉽게 할 수 있었습니다. 강력 추천합니다!",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "30세 풀스택 개발자",
//     review:
//       "풀스택 개발자로서 데브웨이는 정말 유용한 도구입니다. 개발 생산성이 크게 향상되었습니다.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "25세 주니어 개발자",
//     review:
//       "초보자도 쉽게 따라 할 수 있는 가이드가 많아 정말 도움이 많이 됐습니다. 감사합니다!",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "28세 프론트엔드 개발자",
//     review:
//       "오픈 API가 가끔 사용하기 어렵게 되어있는데, 데브웨이를 통해서 편하게 쓸 수 있었어요! 데브웨이 감사합니다.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "35세 백엔드 개발자",
//     review:
//       "데브웨이를 통해 복잡한 백엔드 설정을 쉽게 할 수 있었습니다. 강력 추천합니다!",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "30세 풀스택 개발자",
//     review:
//       "풀스택 개발자로서 데브웨이는 정말 유용한 도구입니다. 개발 생산성이 크게 향상되었습니다.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "25세 주니어 개발자",
//     review:
//       "초보자도 쉽게 따라 할 수 있는 가이드가 많아 정말 도움이 많이 됐습니다. 감사합니다!",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "28세 프론트엔드 개발자",
//     review:
//       "오픈 API가 가끔 사용하기 어렵게 되어있는데, 데브웨이를 통해서 편하게 쓸 수 있었어요! 데브웨이 감사합니다.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "35세 백엔드 개발자",
//     review:
//       "데브웨이를 통해 복잡한 백엔드 설정을 쉽게 할 수 있었습니다. 강력 추천합니다!",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "30세 풀스택 개발자",
//     review:
//       "풀스택 개발자로서 데브웨이는 정말 유용한 도구입니다. 개발 생산성이 크게 향상되었습니다.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "25세 주니어 개발자",
//     review:
//       "초보자도 쉽게 따라 할 수 있는 가이드가 많아 정말 도움이 많이 됐습니다. 감사합니다!",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "28세 프론트엔드 개발자",
//     review:
//       "오픈 API가 가끔 사용하기 어렵게 되어있는데, 데브웨이를 통해서 편하게 쓸 수 있었어요! 데브웨이 감사합니다.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "35세 백엔드 개발자",
//     review:
//       "데브웨이를 통해 복잡한 백엔드 설정을 쉽게 할 수 있었습니다. 강력 추천합니다!",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "30세 풀스택 개발자",
//     review:
//       "풀스택 개발자로서 데브웨이는 정말 유용한 도구입니다. 개발 생산성이 크게 향상되었습니다.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "25세 주니어 개발자",
//     review:
//       "초보자도 쉽게 따라 할 수 있는 가이드가 많아 정말 도움이 많이 됐습니다. 감사합니다!",
//   },
//   // 더 많은 더미 데이터 추가 가능
// ];

// const moveLeft = keyframes`
//   0% {
//     transform: translateX(100%);
//   }
//   100% {
//     transform: translateX(-100%);
//   }
// `;

// const Section = styled.section`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
// `;

// const ScrollingContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   overflow: hidden;
//   width: 100%;
//   position: relative;
// `;

// const Row = styled.div`
//   display: flex;
//   animation: ${moveLeft} 20s linear infinite;
// `;

// const ProfileContainer = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 20px;
//   background: #f5f5f5;
//   margin: 10px;
//   border-radius: 10px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// `;

// const ProfileImage = styled.img`
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   margin-right: 20px;
// `;

// const ProfileInfo = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const ProfileName = styled.div`
//   font-weight: bold;
//   margin-bottom: 5px;
// `;

// const ProfileReview = styled.div`
//   color: #555;
// `;

// const ProfileComponent: React.FC<{
//   image: string;
//   name: string;
//   review: string;
// }> = ({ image, name, review }) => {
//   return (
//     <ProfileContainer>
//       <ProfileImage src={image} alt={name} />
//       <ProfileInfo>
//         <ProfileName>{name}</ProfileName>
//         <ProfileReview>{review}</ProfileReview>
//       </ProfileInfo>
//     </ProfileContainer>
//   );
// };

// const scrollAnimation = keyframes`
//   from {
//     transform: translateX(0%);
//   }
//   to {
//     transform: translateX(-100%);
//   }
// `;

// const BannerContainer = styled.div`
//   width: 100%;
//   overflow: hidden;
//   height: auto;
//   display: flex;
//   align-items: center;
//   margin-bottom: 200px; /* IndicationImage와 겹치지 않도록 아래쪽 마진 추가 */
// `;

// const Banner = styled.div`
//   display: flex;
//   animation: ${scrollAnimation} 100s linear infinite;
//   > div {
//     flex-shrink: 0;
//     margin-right: 50px;
//     white-space: nowrap;
//   }
// `;

// const ProfileList: React.FC = () => {
//   return (
//     <BannerContainer>
//       <Banner>
//         {profiles.map((profile, index) => (
//           <ProfileComponent
//             key={index}
//             image={profile.image}
//             name={profile.name}
//             review={profile.review}
//           />
//         ))}
//       </Banner>
//     </BannerContainer>
//   );
// };

// const IndicationImage = styled.img`
//   position: absolute;
//   bottom: 100px;
//   left: 50%;
//   transform: translateX(-50%);
//   width: 50%; /* 이미지 크기를 원본의 70%로 조정 */
// `;

// const Landing3: React.FC<LandingProps> = ({ isActive }) => {
//   return (
//     <Section>
//       <ProfileList />
//       <IndicationImage src={IndicationImg} alt="Indication" />
//     </Section>
//   );
// };

// export default Landing3;
export {};
