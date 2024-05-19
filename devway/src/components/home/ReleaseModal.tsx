import styled from "styled-components";

interface ReleaseModalProps {
    onClose: () => void;
    item: {
        ver: string;
        date: string;
        title: string;
        content: string;
    };
}

function ReleaseModal({ onClose, item }: ReleaseModalProps) {
    return (
        <ModalOverlay>
            <ModalContent>
                <h1>Devway {item.ver} released</h1>
                <Text>
                    Dear all Devway users, <br />
                    We are excited to announce that Devway {item.ver} was
                    released on {item.date}.
                    <br />
                    <br />
                    The new features include:
                </Text>
                <br />
                <Title>{item.title}</Title>
                <p
                    style={{ marginLeft: "30px", lineHeight: "23px" }}
                    dangerouslySetInnerHTML={{
                        __html: item.content.replace(/\n/g, "<br>"),
                    }}
                />
                <Text>
                    These new additions will enhance your Devway usage
                    experience even further.
                    <br />
                    <br />
                    Enjoy!
                </Text>
                <Btn>
                    <CloseButton onClick={onClose}>Close</CloseButton>
                </Btn>
            </ModalContent>
        </ModalOverlay>
    );
}

export default ReleaseModal;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background: white;
    width: 600px;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 50px;
    padding-right: 50px;
    border-radius: 8px;
    max-width: 100%;
`;

const CloseButton = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #00b448;
    color: white;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
        background: #006227;
        transition: 0.3s;
    }
`;

const Text = styled.div``;

const Title = styled.div`
    font-size: 20px;
    color: #00b448;
    font-weight: bold;
`;

const Content = styled.div``;

const Btn = styled.div`
display: flex;
justify-content: flex-end;
}
`;
