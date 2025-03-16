import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // let post = '강남 우동 맛집'; //서버에서 가져온 데이터
  // let [a, b] = useState('남자 코트 추천'); //state는 자동으로 html 재렌더링됨
  // let [post, setPost] = useState('강남우동맛집');
  // let [study, setStudy] = useState('파이썬독학');

  let logo = 'REACT';

  let [글제목, 글제목변경] = useState([
    '남자 코트 추천',
    '강남 우동 맛집',
    '파이썬독학',
  ]);
  let [좋아요, 좋아요변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: '', fontSize: '20px' }}>{logo}</h4>
      </div>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = '여자코트 추천';
          글제목변경(copy);
        }}
      >
        글수정
      </button>

      <div className="list">
        <h4>
          {글제목[0]}{' '}
          <span
            onClick={() => {
              좋아요변경(좋아요 + 1);
            }}
          >
            👍
          </span>{' '}
          {좋아요}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <Modal></Modal>
    </div>
  );
}

function Modal() {
  //컴포넌트
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
