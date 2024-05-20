import React from "react";
import styled, { keyframes } from "styled-components";
import IndicationImg from "@/assets/img/landing/indication.svg";

import ProfileImg1 from "@/assets/img/landing/profile/29 9.svg";
import ProfileImg2 from "@/assets/img/landing/profile/Character=Angela, Skin tone=White, Posture=17 Happy Winking.svg";
import ProfileImg3 from "@/assets/img/landing/profile/Character=Ariana, Skin tone=White, Posture=23 Hugging.svg";
import ProfileImg4 from "@/assets/img/landing/profile/Character=Darlene, Skin tone=White, Posture=1 Happy.svg";
import ProfileImg5 from "@/assets/img/landing/profile/Character=Ezra, Skin tone=White, Posture=8 Star Eye.svg";
import ProfileImg6 from "@/assets/img/landing/profile/Character=Ishanvi, Skin tone=White, Posture=26 Crossing Finger.svg";
import ProfileImg7 from "@/assets/img/landing/profile/Character=Jeniffer, Skin tone=Black, Posture=11 Party.svg";
import ProfileImg8 from "@/assets/img/landing/profile/Character=Kim, Skin tone=White, Posture=2 Luaghing.svg";
import ProfileImg9 from "@/assets/img/landing/profile/Person=Donald, Skin Tone=White, Posture=8 Star Eye.svg";
import ProfileImg10 from "@/assets/img/landing/profile/Person=Ed, Skin Tone=White, Posture=1 Happy.svg";
import ProfileImg11 from "@/assets/img/landing/profile/Person=George, Skin Tone=Black, Posture=11 Party.svg";
import ProfileImg12 from "@/assets/img/landing/profile/Person=Justin, Skin Tone=White, Posture=20 Like.svg";
import ProfileImg13 from "@/assets/img/landing/profile/Person=Michael, Skin Tone=White, Posture=1 Happy.svg";
import ProfileImg14 from "@/assets/img/landing/profile/Person=Usman, Skin Tone=Black, Posture=1 Happy.svg";

interface LandingProps {
  isActive: boolean;
}

const profiles = [
  {
    image: ProfileImg1,
    name: "28세 프론트엔드 개발자",
    review:
      "오픈 API가 가끔 사용하기 어렵게 되어있는데, 데브웨이를 통해서 편하게 쓸 수 있었어요! 데브웨이 감사합니다.",
  },
  {
    image: ProfileImg2,
    name: "35세 백엔드 개발자",
    review:
      "데브웨이를 통해 복잡한 백엔드 설정을 쉽게 할 수 있었습니다. 강력 추천합니다!",
  },
  {
    image: ProfileImg3,
    name: "30세 풀스택 개발자",
    review:
      "풀스택 개발자로서 데브웨이는 정말 유용한 도구입니다. 개발 생산성이 크게 향상되었습니다.",
  },
  {
    image: ProfileImg4,
    name: "25세 주니어 개발자",
    review:
      "초보자도 쉽게 따라 할 수 있는 가이드가 많아 정말 도움이 많이 됐습니다. 감사합니다!",
  },
  {
    image: ProfileImg5,
    name: "40세 데이터 과학자",
    review: "데이터 분석 작업이 훨씬 쉬워졌습니다. 데브웨이를 적극 추천합니다.",
  },
  {
    image: ProfileImg6,
    name: "29세 모바일 앱 개발자",
    review: "모바일 앱 개발 속도가 눈에 띄게 빨라졌어요. 데브웨이 덕분입니다.",
  },
  {
    image: ProfileImg7,
    name: "32세 시스템 엔지니어",
    review: "시스템 설정이 매우 간단해졌습니다. 데브웨이, 정말 감사합니다!",
  },
  {
    image: ProfileImg8,
    name: "27세 DevOps 엔지니어",
    review:
      "지속적인 통합과 배포가 훨씬 수월해졌습니다. 데브웨이를 사용해보세요.",
  },
  {
    image: ProfileImg9,
    name: "45세 소프트웨어 아키텍트",
    review:
      "복잡한 시스템 설계가 이제는 더 쉬워졌습니다. 데브웨이를 강력 추천합니다.",
  },
  {
    image: ProfileImg10,
    name: "31세 웹 개발자",
    review:
      "프론트엔드와 백엔드 모두에서 생산성이 크게 향상되었습니다. 데브웨이를 사용해보세요!",
  },
  {
    image: ProfileImg11,
    name: "26세 주니어 백엔드 개발자",
    review:
      "초보자도 쉽게 따라 할 수 있는 가이드가 많아 정말 도움이 많이 됐습니다. 감사합니다!",
  },
  {
    image: ProfileImg12,
    name: "38세 보안 전문가",
    review: "보안 설정이 훨씬 간편해졌습니다. 데브웨이를 추천합니다.",
  },
  {
    image: ProfileImg13,
    name: "50세 CTO",
    review: "우리 팀의 생산성이 크게 향상되었습니다. 데브웨이를 사용해보세요!",
  },
  {
    image: ProfileImg14,
    name: "22세 인턴 개발자",
    review:
      "인턴으로서 데브웨이는 정말 유용한 도구입니다. 많은 것을 배웠습니다.",
  },
];

const moveLeft = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const Section = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 40px; /* 패딩을 두 배로 증가 */
  background: #f5f5f5;
  margin: 20px; /* 마진을 두 배로 증가 */
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px; /* 세로 크기를 두 배로 증가 */
  border-radius: 50%;
  margin-right: 20px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileName = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const ProfileReview = styled.div`
  color: #555;
  white-space: pre-line; /* 줄바꿈 인식 */
`;

const formatReview = (review: string, limit: number) => {
  const regex = new RegExp(`(.{1,${limit}})(\\s|$)`, "g");
  return review.match(regex)?.join("\n") ?? review;
};

const ProfileComponent: React.FC<{
  image: string;
  name: string;
  review: string;
}> = ({ image, name, review }) => {
  return (
    <ProfileContainer>
      <ProfileImage src={image} alt={name} />
      <ProfileInfo>
        <ProfileName>{name}</ProfileName>
        <ProfileReview>{formatReview(review, 25)}</ProfileReview>
      </ProfileInfo>
    </ProfileContainer>
  );
};

const scrollAnimation = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
`;

const BannerContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column; /* 세로로 나열되도록 변경 */
  margin-bottom: 200px; /* IndicationImage와 겹치지 않도록 아래쪽 마진을 줄임 */
`;

const BannerRow = styled.div<{ offset?: number }>`
  display: flex;
  animation: ${scrollAnimation} 60s linear infinite; /* 애니메이션 시간을 늘려 속도를 늦춤 */
  margin-left: ${(props) => props.offset || 0}px; /* 왼쪽 마진 추가 */
  > div {
    flex-shrink: 0;
    margin-right: 50px;
    white-space: nowrap;
  }
`;

const ProfileList: React.FC = () => {
  const secondRowProfiles = [...profiles].reverse();

  return (
    <BannerContainer>
      <BannerRow>
        {profiles
          .slice(0, Math.ceil(profiles.length / 2))
          .map((profile, index) => (
            <ProfileComponent
              key={index}
              image={profile.image}
              name={profile.name}
              review={profile.review}
            />
          ))}
      </BannerRow>
      <BannerRow offset={100}>
        {secondRowProfiles
          .slice(0, Math.ceil(profiles.length / 2))
          .map((profile, index) => (
            <ProfileComponent
              key={index}
              image={profile.image}
              name={profile.name}
              review={profile.review}
            />
          ))}
      </BannerRow>
    </BannerContainer>
  );
};

const IndicationImage = styled.img`
  position: absolute;
  bottom: 50px; /* 이미지를 더 위로 이동 */
  left: 50%;
  transform: translateX(-50%);
  width: 50%; /* 이미지 크기를 원본의 70%로 조정 */
`;

const Landing3: React.FC<LandingProps> = ({ isActive }) => {
  return (
    <Section>
      <ProfileList />
      <IndicationImage src={IndicationImg} alt="Indication" />
    </Section>
  );
};

export default Landing3;
