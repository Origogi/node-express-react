# Node Express, React 연동 샘플

## 설치

1. `npm init -y`
2. `npm install express`

## Express

Node 기반 웹서버를 만들기 위한 프레임워크

## my-app 폴더

React 로 만든 SPA(Single page application) 가 있는 프로젝트로 `react-scripts build` 명령어를 통해서 `index.html` 를 생성하고 
Express 서버는 해당 index.html 를 브라우저에 리턴을 한다.

브라우저는 해당 index.html 를 가지고 렌더링을 한다.