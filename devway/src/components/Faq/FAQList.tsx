import { createGlobalStyle, keyframes } from "styled-components";
import Swal from "sweetalert2";
import { useState } from "react";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  .swal2-popup {
    font-size: 18px;
  }
  .swal2-title {
    font-size: 20px;
  }
  .swal2-icon {
    font-size: 15px;
  }
`;

interface QA {
  que: string;
  ans: string;
}

interface FAQListProps {
  openModal: () => void;
}

const list: QA[] = [
  {
    que: "기여하거나 코드를 수정 한다면 승인 여부는 어디서 확인하나요?",
    ans: "승인 내역은 Devway 릴리즈 노트 혹은 Devway Repository 의 Merge Request 내역에서 확인 가능합니다.",
  },
  {
    que: "기여를 위해 MR 요청 시 평균적으로 승인 기간이 얼마나 소요되나요?",
    ans: "추가 혹은 변경된 사항에 대해 Merge Request를 양식에 맞게 올려주시면 7일 이내로 승인 혹은 거절이 완료 됩니다.",
  },
  {
    que: "데브웨이를 활용해서 서비스나 새로운 오픈소스를 개발할 경우 준수해야 할 사항이 있나요?",
    ans: "데브웨이는 MIT 라이선스를 준수하기에 사용과 수정 배포가 거의 제한이 없습니다.",
  },
  {
    que: "기여를 위해 MR 요청 시 가이드도 같이 작성해서 기여 요청을 해야 하나요?",
    ans: "Merge Request 요청 시, 템플릿 기타 작성 란에 가이드 양식에 맞추어 기여 요청해주시면 됩니다.",
  },
  {
    que: "가이드 다운로드가 안됩니다.",
    ans: "저희 repository 에 방문하시어 다운받으시거나 개발자 이메일로 문의 주시면 가이드 파일 보내드리겠습니다.",
  },
  {
    que: "데브웨이가 무엇인가요?",
    ans: "데브웨이는 다양한 오픈 API를 손쉽게 활용할 수 있도록 메소드화 한 오픈소스입니다. 개발의 효율성을 높이고 더 빠르고 간편하게 프로젝트를 완성할 수 있습니다.\n자세한 사항은 DEVWAY 소개 페이지에서 확인 가능합니다.\n\n다른 문의사항이 있다면 아래 Contact us 버튼을 통해 개발자 이메일로 문의 주시기 바랍니다. 데브웨이는 더 많은 컨트리뷰터들을 기다리고 있습니다.",
  },
];

function FAQList({ openModal }: FAQListProps) {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  const toggleVisibility = (index: number) => {
    setVisibleIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "이메일이 복사되었습니다.",
          showConfirmButton: false,
          timer: 800,
        });
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <Name>자주 묻는 질문</Name>
      {list.map((item, index) => (
        <Feed key={index}>
          <NonClick index={index} onClick={() => toggleVisibility(index)}>
            <p style={{ marginLeft: "30px", fontWeight: "bold" }}>Q</p>
            <p style={{ marginLeft: "30px" }}>{item.que}</p>
          </NonClick>
          {visibleIndexes.includes(index) && (
            <Answer isVisible={visibleIndexes.includes(index)} index={index}>
              <p
                style={{
                  marginLeft: "30px",
                  fontWeight: "bold",
                }}
              >
                A
              </p>
              <p
                style={{ marginLeft: "30px", lineHeight: "23px" }}
                dangerouslySetInnerHTML={{
                  __html: item.ans.replace(/\n/g, "<br>"),
                }}
              />
            </Answer>
          )}
        </Feed>
      ))}
      <Btn onClick={openModal}>
        Contact us
      </Btn>
    </Wrapper>
  );
}

export default FAQList;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 30px;
`;

const Feed = styled.div`
  width: 48vw;
  background-color: white;
  border-bottom: 1px solid lightgrey;
`;

interface Props {
  index: number;
}

const NonClick = styled.div<Props>`
  cursor: pointer;
  display: flex;
  padding-top: 5px;
  padding-bottom: 5px;
  transition: transform 0.3s, background-color 0.3s;

  &:hover {
    transform: scale(1);
    background-color: ${({ index }) =>
      index % 2 === 0 ? "#FDF9E3" : "#EAFFEA"};
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 500px; /* 충분히 큰 값으로 설정 */
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    max-height: 500px; /* 충분히 큰 값으로 설정 */
  }
  to {
    opacity: 0;
    max-height: 0;
  }
`;

const Answer = styled.div<{ isVisible: boolean; index: number }>`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 30px;
  background-color: ${({ index }) => (index % 2 === 0 ? "#FDF9E3" : "#EAFFEA")};
  animation: ${({ isVisible }) => (isVisible ? fadeIn : fadeOut)} 0.5s ease-out
    forwards;
`;

const Btn = styled.div`
  margin: 30px;
  padding: 15px;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: #ffc30d;
    color: #ffffff;
    transition: 0.3s;
  }
`;
