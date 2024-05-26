import styled from "styled-components";
import Swal from "sweetalert2";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

interface FAQModalProps {
    onClose: () => void;
}

const submit = () => {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "이메일 전송 완료",
        showConfirmButton: false,
        timer: 800,
    });
};

function FAQModal({ onClose }: FAQModalProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const form = useRef(null);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (form.current) {
            emailjs.sendForm('devway', 'template_o3kgxdd', form.current, {publicKey: 'uA3G8kH87Ge2ShlGE'})
                .then((result) => {
                    console.log(result.text);
                    submit();
                    onClose();
                }, (error) => {
                    console.log(error.text);
                });
        }
    };

    const isFormValid = name.trim() !== "" && email.trim() !== "" && message.trim() !== "";

    return (
        <ModalOverlay>
            <ModalContent>
                <CloseButton onClick={onClose}>x</CloseButton>
                <h1>Contact us</h1>
                <Content>
                    <form ref={form} onSubmit={handleSubmit}>
                        <FormField>
                            <Label>Name</Label>
                            <Input type="text" name="user_name" value={name} onChange={(e) => setName(e.target.value)} />
                        </FormField>
                        <FormField>
                            <Label>Email</Label>
                            <Input type="email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </FormField>
                        <Message>
                            Message
                            <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                        </Message>
                        <Btn>
                            <SubmitButton type="submit" disabled={!isFormValid}>
                                Submit
                            </SubmitButton>
                        </Btn>
                    </form>
                </Content>
            </ModalContent>
        </ModalOverlay>
    );
}

export default FAQModal;

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
    position: relative;
    background: white;
    width: 350px;
    padding-top: 30px;
    padding-bottom: 50px;
    padding-left: 50px;
    padding-right: 50px;
    border-radius: 8px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SubmitButton = styled.button<{ disabled: boolean }>`
    margin-top: 20px;
    padding: 10px 20px;
    background-color: ${({ disabled }) => (disabled ? 'lightgray' : '#ffc30d')};
    color: white;
    border: none;
    border-radius: 15px;
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    font-weight: bold;
    &:hover {
        background: ${({ disabled }) => (disabled ? 'lightgray' : '#FBB500')};
        transition: 0.3s;
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    padding: 10px 20px;
    border: none;
    background-color: white;
    border-radius: 15px;
    cursor: pointer;
    font-weight: bold;
    font-size: 15px;
`;

const Btn = styled.div`
    display: flex;
    gap: 16px;
    justify-content: center;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`;

const FormField = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 10px 0;
    border-bottom: 1px solid lightgray;
    padding-bottom: 5px;
`;

const Label = styled.label`
    width: 50px;
    padding-left: 10px;
`;

const Input = styled.input`
    flex: 1;
    border: none;
    outline: none;
    padding-left: 20px;
    padding-right: 20px;
`;

const Message = styled.div`
    width: 300px;
    padding-bottom: 5px;
    border-bottom: 1px solid lightgray;
    margin: 10px;

    textarea {
        margin-top: 10px;
        width: 280px;
        height: 150px;
        border: none;
        outline: none;
        resize: none;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 5px;
        box-sizing: border-box;
        line-height: 1.5;
    }
`;
