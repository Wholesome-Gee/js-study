🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸
### ✅ ***About Node JS***  
#### ➡️ Node js는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript런타임.
#### ➡️ 패스트캠퍼스 '한 번에 끝내는 프론트엔드 개발 초격차 패키지 Online.'의 'Part3'의 'Ch1. Node.js' 강의에 대한 내용임.
🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸
  0️⃣ 설치방법
  - <a href="https://github.com/coreybulter/nvm-windows" title="Github로 이동" target="_blank"> github.com/coreybulter/nvm-windows</a>  링크로 접속
  - Download 버튼이 보일때 까지 스크롤 후 Downlod 클릭!
  - 'nvm-setup.zip' 다운로드 후 압축 해제 및 설치 진행
  - 'Visual Studio Code'를 실행하고 터미널 On
  - 터미널에 **'nvm --version'** 를 입력 (nvm version 체크)
  - 터미널에 **'nvm install 12.14.1'** 를 입력 (nvm 최신버전 확인 후 최신 짝수 LTS 버전의 넘버를 입력)
  - 터미널에 **'nvm use 12.14.1'** 를 입력 (nvm 12.14.1 버전을 사용하겠다는 선언)
  - 터미널에 **'nvm ls'** 를 입력 (nvm version list 확인 및 내 version 확인)
  - 터미널에 **'node --version'** 를 입력 (이때 'nvm --version'과 같은 version이 나와야함)  
  = _**'nvm uninstall 12.14.1' = 리스트에서 버전 삭제**_
  - 터미널에 **'npm init -y'** 를 입력 (package.json 파일 생성)
  - 터미널에 **'npm i parcel-bundler -D'** 를 입력 (node_modules 폴더와 package-lock.json 파일 생성)  
  = _**'parcel-bundler'는 개발서버를 열어주는 기능**_  
  = _**'npm i 모듈명@버전'는 모듈(package)의 구버전을 설치 할 수 있음**_  
  = _**'npm info 모듈명'는 모듈(package)의 최신버전을 확인 할 수 있음**_  
  = _**'npm update 모듈명'는 모듈(package)의 최신버전으로 업데이트 할 수 있음**_  
      ***(단, package.json파일에 해당 모듈의 버전에 Caret(^)이 표기 되어 있을 경우만 해당함)***
  - **'package.json'**의 **"script"** 객체 내부를 비우고 **"dev": "parcel index.html",** 추가
  - **'package.json'**의 **"script"** 객체 내부에 **"build": "parcel build index.html"** 추가  
  = _**'build'는 우리 브라우저가 우리의 프로젝트를 해석할 수 있도록 코드난독화를 함**_
  - 터미널에 **'npm run dev'** 를 입력함으로써 개발용 서버 실행 가능
  - 터미널에 **'npm run build'** 를 입력함으로써 브라우저가 프로젝트를 해석할 수 있도록 빌드드
  - **'.gitignore'** 파일 생성 후 **'.cache/'**, **'dist/'**, **'node_modules/'** 등을 입력

  1️⃣ Version의 유의적 의미
  - 12.14.1 (Major.Minor.Patch)  
  = Major는 기존버전과 호환되지 않는 새로운 버전  
  = Minor는 기존버전과 호환되는 새로운 기능이 추가된 버전  
  = Patch는 기존버전과 호환되는 버그 및 오타 등이 수정된 버전  
  - ^12.14.1 (Caret 기호)  
  = Major 버전 안에서 가장 최신 버전으로 업데이트 가능

  2️⃣ NPM 프로젝트(예제)의 패키지 버전 일치시키기  
  - 현시점 모듈 버전과 강의 촬영 시점 모듈 버전이 다름으로 인한 모듈 구현에 오류가 생길 수 있음.  
    해당 오류를 예방하기 위해서 아래와 같은 절차를 진행해야함.  
    - <a href="https://github.com/ParkYoungWoong?tab=repositories" title="Github로 이동" target="_blank">https://github.com/ParkYoungWoong?tab=repositories</a> 로 이동해서 해당 강의 repository 클릭
    - repository에서 **'package.json'** 을 클릭
    - 본문 우측 상단 **'Raw'** 버튼을 ctrl + 클릭
    - 새창을 우클릭 → 강의 폴더에 다른이름으로 저장
    - **'package-lock.json'** 도 동일한 방식으로 진행
    - Visual Studio Code 터미널에서 **'npm i'** 입력

---
🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹
🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹