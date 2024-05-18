import { createGlobalStyle } from "styled-components";
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
        que: "데브웨이를 이용해서 서비스를 만들거나 새로운 오픈소스를 제작할 경우 준수해야 할 사항이 있나요?",
        ans: "데브웨이는 MIT 라이선스를 준수하기에 사용과 수정 배포가 거의 제한이 없습니다\n\n*반례 \nMIT 라이선스의 예외 사항 저작권 고지 포함 MIT 라이선스는 소스 코드나 바이너리를 배포할 때 저작권 고지를 포함할 것을 요구합니다. 이는 매우 간단한 조건이지만, 이를 준수하지 않으면 라이선스 위반이 됩니다. \n예: 소프트웨어를 수정하거나 배포할 때, 원본 저작권 고지를 포함하지 않으면 문제가 될 수 있습니다.\n라이선스 사본 포함 MIT 라이선스를 사용하는 소프트웨어를 배포할 때는 라이선스 사본을 포함해야 합니다. 이는 사용자에게 해당 소프트웨어가 어떤 조건 하에 사용 가능한지 명확히 알려주는 역할을 합니다. \n예: 소스 코드의 일부를 재사용하여 새로운 프로젝트를 만들 때, 원본 MIT 라이선스 사본을 포함하지 않으면 라이선스 위반이 될 수 있습니다.",
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

function FAQList() {
    const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

    const toggleVisibility = (index: number) => {
        setVisibleIndexes((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
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
                    <NonClick
                        index={index}
                        onClick={() => toggleVisibility(index)}
                    >
                        <p style={{ marginLeft: "30px", fontWeight: "bold" }}>
                            Q
                        </p>
                        <p style={{ marginLeft: "30px" }}>{item.que}</p>
                    </NonClick>
                    {visibleIndexes.includes(index) && (
                        <Click index={index}>
                            <p
                                style={{
                                    marginLeft: "30px",
                                    fontWeight: "bold",
                                }}
                            >
                                A
                            </p>
                            <p
                                style={{ marginLeft: "30px", lineHeight: "23px"}}
                                dangerouslySetInnerHTML={{
                                    __html: item.ans.replace(/\n/g, "<br>"),
                                }}
                            />
                        </Click>
                    )}
                </Feed>
            ))}
            <Btn onClick={() => copyToClipboard("devway201@gmail.com")}>
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
`;

const Click = styled.div<Props>`
    display: flex;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-right: 30px;
    background-color: ${({ index }) =>
        index % 2 === 0 ? "#FDF9E3" : "#EAFFEA"};
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