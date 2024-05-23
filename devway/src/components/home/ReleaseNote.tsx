import styled from "styled-components";

interface Released {
  ver: string;
  date: string;
  title: string;
  content: string;
}

interface ReleaseNoteProps {
  onClick: (item: Released) => void;
}

const list: Released[] = [
  {
    ver: "v.1.7.0",
    date: "May 24, 2024",
    title: "Utilizing FCM API",
    content:
      "1. Alarm - Provides an alarm feature utilizing FCM, available on the Galaxy Watch.",
  },
  {
    ver: "v.1.6.0",
    date: "May 18, 2024",
    title: "Utilizing Naver Search API",
    content:
      "1. Search - Provides search functionality for Blog, Encyclopedia, Image, Local, and News.\n2. Typo Correction - Automatically corrects search queries typed with the wrong language setting (Korean/English), suggesting the correct terms.\n",
  },
  {
    ver: "v.1.5.0",
    date: "May 10, 2024",
    title: "Utilizing Korea EximBank API",
    content:
      "1. Exchange Rates -  Get exchange rate information for various countries.",
  },
  {
    ver: "v.1.4.0",
    date: "May 02, 2024",
    title: "Utilizing Google Cloud API",
    content:
      "1. STT - Convert English audio recordings in .wav format to text.\n2. TTS - Get sentences entered in Korean and English as .mp3 audio files.",
  },
  {
    ver: "v.1.3.0",
    date: "April 30, 2024",
    title: "Utilizing Kakao Search API",
    content: "1. Book - Get book information based on search queries.",
  },
  {
    ver: "v.1.2.0",
    date: "April 25, 2024",
    title: "Utilizing OpenWeatherMap API",
    content:
      "1. Weather - Get today's weather and the forecast for the next five days.",
  },
  {
    ver: "v.1.1.0",
    date: "April 20, 2024",
    title: "Utilizing chatGPT API",
    content:
      "1. Language - Use chatGPT in both Korean and English.\n2. Grammar Check - Verify if the sentences entered in Korean and English are grammatically correct.",
  },
  {
    ver: "v.1.0.0",
    date: "April 10, 2024",
    title: "Basic Blocks",
    content:
      "1. Text - Provides functionalities including string length measurement, language detection, and special character checks.\n2. Image - Provides functionalities including saving images from URLs, converting URLs to images, transforming images to byte arrays, and saving images from byte arrays.\n3. Video - Provides funtionalities including saving videos from URLs, converting URLs to videos, transforming videos into byte arrays, and saving videos from byte arrays.",
  },
];

function Releasenote({ onClick }: ReleaseNoteProps) {
  return (
    <Wrapper>
      {list.map((item, index) => (
        <NoteOne key={index} index={index} onClick={() => onClick(item)}>
          Devway {item.ver} released
          <Date>{item.date}</Date>
        </NoteOne>
      ))}
    </Wrapper>
  );
}

export default Releasenote;

const Wrapper = styled.div`
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 20px;
  align-items: center;
`;

interface Props {
  index: number;
}

const NoteOne = styled.div<Props>`
  background-color: ${({ index }) => (index % 2 === 0 ? "#FFEB81" : "#6FBD72")};
  border: none;
  width: 80%;
  border-radius: 10px;
  margin: 10px;
  padding: 13px;
  padding-left: 30px;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    background-color: ${({ index }) =>
      index % 2 === 0 ? "#FFD700" : "#5DAE5D"};
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Date = styled.div`
  font-size: 14px;
  font-weight: normal;
  padding-left: 180px;
`;
