# MZ-ONE

![프로젝트 배너1](images/index/mainbanner_01.jpg)

<br>

## 프로젝트 소개

- 프론트엔드(html, css, JavaScript)만을 이용해서 만들어졌습니다.
- 2030세대의 1인독립을 지원하는 정보를 제공하는 사이트입니다.
- 관리자가 2030 1인 독립 가구에게 도움이 될 것이라 생각하는 정보를 취합해 가공하고 가이드를 통해 제공합니다.
- 2030 1인 독립 가구들끼리의 정보를 주고 받기 위해 커뮤니티 게시판을 이용할 수 있습니다.
- 키워드를 통해 찾는 가이드를 쉽게 찾아볼 수 있습니다.
- 마음에 드는 가이드나 게시글에 좋아요를 누를 수 있고 게시글에 댓글을 달 수 있습니다.

<br>
<div align="center">
  
![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)
![VSCode Icon](https://img.shields.io/badge/VSCode-007ACC?logo=visual-studio-code&logoColor=white)
![HTML Icon](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS Icon](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript Icon](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

![Figma Icon](https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=white)


</div>

## 팀원 구성
<div align="center">

| **김재원** | **김용** | **안준수** | **이석현** | **이제희** | **조해인** |
| :------: |  :------: | :------: | :------: | :------: | :------: |
| [<img src="https://github.com/Jaewon94.png" height=150 width=150> <br/> @Jaewon94](https://github.com/Jaewon94) | [<img src="https://github.com/kimYong91.png" height=150 width=150> <br/> @kimYong91](https://github.com/kimYong91) | [<img src="https://github.com/Derit7042.png" height=150 width=150> <br/> @Derit7042](https://github.com/Derit7042) | [<img src="https://github.com/maijjoo.png" height=150 width=150> <br/> @maijjoo](https://github.com/maijjoo) | [<img src="https://github.com/JHLEE91.png" height=150 width=150> <br/> @JHLEE91](https://github.com/JHLEE91) | [<img src="https://github.com/Haein-Jo.png" height=150 width=150> <br/> @Haein-Jo](https://github.com/Haein-Jo) |

</div>

<br>

## 1. 개발 환경

- 프론트 : HTML, CSS, JAVASCRIPT
- 데이터 : JSON
- 버전관리 : Github
- 협업툴 :<br>
  Github<br>
  (1. https://github.com/project-200OK/project-200-OK)<br>
  Figma<br>
  (1. https://www.figma.com/board/5Hs1rEnbBdbagu9XHfjP4I/200OK?node-id=0-1&t=mBgvhng4DqC4vXIV-1)<br>
  (2. https://www.figma.com/design/azzdeH6dJhrKeVkUWMFghy/200OK---1%EC%9D%B8%EA%B0%80%EA%B5%AC-%EC%82%B4%EC%95%84%EB%82%A8%EA%B8%B0?node-id=0-1&t=zpdRLx0qzZLKsJ06-1)<br>
  Google Drive<br>
  (1. https://drive.google.com/file/d/1lDdpNh3TMu_lYZqyGAtGUP7CkfTRomzl/view?usp=sharing)

<br>

## 2. 프로젝트 구조
```
.
├── README.md
├── admin
│   ├── board.html
│   ├── create.html
│   ├── css
│   ├── js
│   └── json
├── community
│   ├── board.html
│   ├── create.html
│   ├── css
│   ├── detail.html
│   ├── js
│   ├── json
│   └── update.html
├── guide
│   ├── board.html
│   ├── css
│   ├── detail.html
│   ├── js
│   └── json
├── images
│   ├── banner
│   ├── communityimg
│   ├── guide
│   ├── icons
│   └── index
├── index
│   ├── css
│   ├── images
│   ├── js
│   └── json
├── index.html
├── index2.html
├── json
│   ├── community.json
│   ├── guide.json
│   └── user.json
├── member
│   ├── calendar.html
│   ├── css
│   ├── js
│   ├── json
│   ├── like.html
│   ├── login.html
│   ├── resign.html
│   ├── signUp.html
│   └── update.html
├── search
│   ├── css
│   ├── js
│   ├── json
│   └── searchBoard.html
└── template
    ├── css
    ├── footer-only.html
    ├── header-only.html
    ├── js
    ├── json
    ├── sidebar-only.html
    └── template.html
```

<br>

## 3. 역할 분담

### 김재원

- **UI**
    - 페이지 : 커뮤니티 게시판, 게시글, 게시글 쓰기/수정
    - 공통 컴포넌트 : 헤더, 푸터, 사이드바

<br>
    
### 김용

- **UI**
    - 페이지 : 메인, 통합검색 화면 구현작업

<br>

### 안준수

- **UI**
    - 페이지 : 관리자 게시물 관리, 좋아요 화면 구현작업

<br>

### 이석현

- **UI**
    - 페이지 : 가이드 목록, 가이드 상세 화면 구현작업

<br>

### 이제희

- **UI**
    - 페이지 : 문서작업, JSON 데이터 작업

<br>

### 조해인

- **UI**
    - 페이지 : 로그인,회원가입,회원탈퇴,나의캘린더,회원정보수정 화면 구현작업

<br>

## 4. 개발 기간
- 전체 기간 : 2024-08-02 ~ 2024-08-14
- 문서 작업 : 2024-08-02 ~ 2024-08-05
- UI 구현 : 2024-08-05 ~ 2024-08-12
- 결과 보고서 작성 : 2024-08-13
- 발표 : 2024-08-14

## 5. 프로젝트 산출물
- 200OK - MZ-ONE 산출물 (https://drive.google.com/file/d/1lDdpNh3TMu_lYZqyGAtGUP7CkfTRomzl/view?usp=sharing)

## 6. 페이지별 기능

| 구분 | 내용 |
|------|------|
| ***헤더*** | - 모든 페이지에서 공통으로 사용하는 부분입니다.<br>- 홈, 가이드, 커뮤니티로 이동합니다.<br>- 검색을 통해 해당 통합검색으로 이동합니다. |
| ***푸터*** | - 모든 페이지에서 공통으로 사용하는 부분<br>- 프로젝트의 기본 설명이 있습니다. |
| ***사이드바*** | - 마이페이지에서 공통으로 사용하는 부분<br>- 마이페이지에서 원하는 페이지로 이동하는 링크가 있습니다. |
| ***메인(index)*** | - 홈페이지의 메인 정보인 가이드와 인기 키워드를 볼 수 있습니다.<br>- 가이드와 키워드를 클릭하면 해당 정보의 목록을 보여주는 페이지로 이동합니다. |
| ***가이드 목록*** | - 서비스에서 제공할 가이드 별 목록을 보여줍니다.<br>- 키워드 별로 분류해서 볼 수도 있습니다. |
| ***가이드 상세*** | - 해당 글의 내용과 출처 등을 확인할 수 있습니다.<br>- 마음에 들면 좋아요를 해서 스크랩을 할 수 있습니다. |
| ***커뮤니티 목록*** | - 유저들이 소통을 할 수 있는 공간입니다.<br>- 자유롭게 작성한 글의 목록을 볼 수 있습니다. |
| ***커뮤니티 상세*** | - 유저들이 작성한 글을 볼 수 있습니다.<br>- 마음에 들면 좋아요를 해서 스크랩을 할 수 있고, 댓글을 작성할 수 있습니다. |
| ***통합검색*** | - 홈페이지에있는 필요한 정보의 목록들을 검색하고 볼 수 있습니다.<br>- 검색한 정보를 클릭하면 해당 정보의 상세보기 페이지로 이동합니다. |
| ***로그인*** | - 가입시 작성한 정보를 기반으로 사용자의 신원확인 및 접근에 대한 권한, 로그인상태를 유지하고 사용자를 관리하기 위한 화면입니다. |
| ***회원정보수정<br>(마이페이지)*** | - 가입시 입력한 정보를 기반으로 회원정보를 관리 할 수 있는 화면입니다.<br>- 해당 화면에서는 사용자의 비밀번호, 거주지를 수정 할 수 있습니다. |
| ***좋아요<br>(마이페이지)*** | - 좋아요 하트를 표시한 가이드와 게시물을 볼 수 있습니다. |

## 7. 프로젝트 후기
### 김재원
- 처음으로 단체로 해보는 프로젝트라서 많은 부분이 어려웠던 것 같다. 프로젝트를 시작하기에 앞서 문서화를 진행해 보던가 체계적인 설계는 어떻게 할지, 어떻게 협업을 진행할지등 많은 부분에서 어려움을 겪었던것 같다. 하지만 직접 해보니
점점 어떤식으로 해야할지 다음은 어떤식으로 해볼지, 무엇을 사전에 배워서 적용해볼지등 다양한 경험을 쌓을 수 있는 좋은 기회였던것 같다. 다음 협업 프로젝트는 더 체계적이고 소통을 잘 할 수 있도록 미리 공부하고 준비해야겠다.

### 안준수
- 프로젝트에서 코드를 짜기 전에 문서화 부터 제대로 진행해봤던 프로젝트는 처음이라서 많이 어려웠던 것 같다. 작성할 문서들이 많았지만 하나씩 팀원들과 차근히 진행하니까 크게 어렵지 않게 진행할 수 있었고, 문서 작업의 중요성을 느낄 수 있는 소중한 기회였던 것 같다. 
그리고 깃허브를 다루면서 merge를 할 때 그 동안 충돌난 상황을 많이 경험해보지 않아서 충돌난 코드를 처리하는 것이 익숙하지 않았지만, 이번에 그러한 경험을 많이 쌓으면서 익숙해질 수 있게 되었다. 여러모로 부족한 경험들을 쌓을 수 있었던 좋은 기회였다.

### 이석현
- 협업 팀 프로젝트는 처음이라 깃 사용부터 소통 과정까지 어려움이 많았다. 
- 기획, 문서화 작업부터 체계적으로 시작한 프로젝트는 처음이다 보니 시작할 때는 이런 과정을 왜 진행하는지 몰랐고 마냥 지루하기만 했다. 하지만 코딩을 하면서 문서화가 왜 필요한지, 체계적인 기획 과정이 왜 필요한지 깨닫게 되었다. 
- 풀스택 교육 과정 중 프론트엔드 미니 프로젝트로 진행했기 때문에, 백엔드 없이 프론트엔드만으로 구현한 프로젝트이다. 따라서 JSON 파일만으로는 원하는 기능을 구현하기에 한계가 있어서 아쉬웠다.
- 프로젝트 기간이 짧았고, 특히 코딩 기간이 촉박했기 때문에 

### 김용
- 협업을 통하여 많은 것을 알 수 있는 시간이었다. 혼자라면 할 수 없었던 생각과 기획을 협업을 통하여 혼자 보다 더 좋은 기획과 다양한 생각을 접할 수 있었고, 문서를 작성하는 방법을 배우게 되었다. 코드를 작성할 때 누군가에게 코드를 보여줄 생각을 하지 못하여 주석에 대한 필요성을 느끼지 못했는데 같이, 그리고 도움을 받는 상황이 많아지다 보니 주석의 중요성을 알게 되었으며, 다른 사람에게 자신의 코드를 설명하는 시간을 가지다 보니 코드를 이해하는 것이 얼마나 중요한지 다시 한번 느끼게 된 시간이었다. 다음에는 기본 코딩의 실력은 물론이고 코드를 정리하고 이해하는 능력과 나의 생각을 문서화할 수 있는 연습을 해야겠다는 새삼 당연한 각오를 가지게 되었다.

### 이제희
- 프로젝트의 의미를 정확히 이해하지 못한 상태에서 "직접 몸으로 느껴볼 수 있는 첫 디딤이였다." 라고 말하고 싶습니다. 전반적인 흐름이 어떻게 되는지 파악이 안된 상태에서  기존에 알고 있는 조사 - 분석 - 기획 - 실행 이라는 기본적인 구조로 생각하고 비슷하겠지 하고 접근했지만  한 가지 간과 했던 것은  기획과 생산적 활동(개발)이 같이 진행된다는 것이였습니다.  이에 따른 기본적인  조사-분석-기획-실행 중 특히  분석 단계는 좀 더 조사 단계에서 요구사항에 대한 분석이 기획 및 실행 단계에서 개발 간에 좀 더 세부적인 제한사항(가이드라인 → 개발도구, 가이드라인, 흐름도)을 명확하게 하여야 한다는 것을 느낄 수 있었습니다. 아직 코딩 및 기술을 사용하는데 어려움이 많아서 이를 어떻게 문서에 녹여서 기획-실행을 해석 하는데 맞게 할 지 더욱 고민 한다면 좋겠습니다.   이번 프로젝트로 개발 간의 요구한 내용에 대한 전반적 코딩의 흐름을 머리로 생각 할 수 있게 되었다는 것이 좋은 점이였고. 특히  프로젝트 시작 - 종료  이 사이에 들어가는 전반적 행동을 위한 문서 작업의 틀을 초기모델로 제안 할 수 있을 거 같아서 좋았습니다.  

## 8. 프로젝트 시작 ~ 종료 단계별 실행과정( Auth. 이제희 / 주관적 생각이라 참고만 하세요)
| 구분 |    내용   |  결과물 |
|------|-----------|---------|
| ***시작*** | <br>1. 주요활동</br> <br>프로젝트 목표 정의</br><br>프로젝트 팀 구성</br><br>프로젝트 범위 설정</br><br>이해관계자 식별</br><br>예산 및 일정 초기 계획</br>| <br>1. 프로젝트 헌장 (Project Charter): 프로젝트 목표, 범위, 이해관계자, 예산, 일정 등에 대한 개요 문서.</br> <br>2. 이해관계자 분석 문서 (Stakeholder Analysis Document): 이해관계자 목록과 그들의 기대사항, 영향력 분석.</br> |
- **설명**
  <br>1. 프로젝트 헌장: 이 문서는 프로젝트의 기본 방향, 범위, 예산, 일정을 정의하며, 시장조사 및 요구사항 분석에서 어떤 데이터를 수집해야 하고, 어떤 범위 내에서 활동해야 하는지를 명확히 합니다. 또한, 프로젝트의 주요 목표를 명확히 하여 이후 단계에서 모든 결정의 기준이 됩니다.</br> <br>2. 이해관계자 분석 문서: 이해관계자들이 어떤 요구사항을 가지고 있는지 파악하고, 이들의 기대를 반영하여 시장조사와 요구사항 분석의 방향을 설정합니다.</br>
- **제한사항**
  <br>프로젝트 헌장에 정의된 범위와 예산, 일정이 이후 단계에서 크게 변경되지 않아야 하므로, 시장조사나 요구사항 분석에서 발견된 추가 요구사항이 헌장과 충돌할 수 있습니다.</br>
  
| 구분 |    내용   |  결과물 |
|------|-----------|---------|
| ***시장조사*** | <br>1. 주요활동</br> <br>시장 환경 분석</br><br>경쟁사 분석</br><br>솝비자 조사(설문조사, 인터뷰 등)</br><br>산업 트렌드 파악</br> | <br> 결과물 </br> <br>시장 조사 보고서 (Market Research Report): 시장 규모, 성장률, 주요 경쟁사, 소비자 행동 등 시장 전반에 대한 분석.</br><br>경쟁사 분석 보고서 (Competitive Analysis Report): 경쟁사의 강점, 약점, 시장 점유율, 전략 등을 분석한 문서.</br><br>소비자 조사 보고서 (Consumer Research Report): 소비자 요구사항, 선호도, 행동 패턴 등에 대한 조사 결과.</br> |
- **설명**
  <br> 1. 시장 조사 보고서: 요구사항 분석 및 분석 단계에서 프로젝트가 목표로 하는 시장의 특성을 정의하고, 타겟팅 전략을 수립하는 데 사용됩니다. 이 보고서는 특히 프로젝트의 시장 기회를 분석하고, 이후 전략 기획에 큰 영향을 미칩니다.</br>
<br>2. 경쟁사 분석 보고서: 프로젝트가 경쟁 시장에서 어떻게 차별화될 수 있는지를 분석하는 데 중요한 역할을 하며, 분석 단계에서 SWOT 분석을 수행할 때 중요한 자료로 사용됩니다. </br>
<br>3. 소비자 조사 보고서: 소비자 요구사항을 파악하여 요구사항 분석 단계에서 소비자 니즈를 반영한 기능적/비기능적 요구사항을 도출하는 데 사용됩니다.</br>
- **제한사항**
<br>시장조사에서 파악된 정보가 충분히 정확하지 않으면, 이후 요구사항 분석이나 전략 수립에 오해나 잘못된 방향을 제공할 수 있습니다. 또한, 시장조사에서 제한된 자원과 시간으로 인해 얻은 데이터의 불완전성이 이후 단계에 영향을 줄 수 있습니다.</br>

| 구분 |    내용   |  결과물 |
|------|-----------|---------|
| ***요구사항 분석*** | <br>1. 주요활동</br> <br>이해관계자 인터뷰 및 워크숍</br><br>요구사항 수집 및 분석</br><br>기능적/비기능적 요구사항 분류</br><br>우선순위 설정</br> | <br> 결과물 </br> <br>요구사항 명세서 (Requirements Specification): 기능적/비기능적 요구사항을 정리한 문서.</br><br>우선순위 목록 (Priority List): 요구사항의 우선순위에 따른 작업 우선순위 목록.</br>|
- **설명**
<br>요구사항 명세서: 기획 단계에서 WBS 작성과 프로젝트 계획 수립의 근거가 됩니다. 명세서에 정의된 기능적 요구사항은 WBS의 작업 패키지로 변환되고, 비기능적 요구사항은 리스크 관리 계획에 반영됩니다. </br>
<br>우선순위 목록: 기획 단계에서 어떤 작업이 먼저 수행되어야 하는지 결정하는 데 도움을 줍니다. 이 목록은 자원 할당과 일정 계획에도 직접적인 영향을 미칩니다..</br>
- **제한사항**
<br>요구사항이 명확하게 정의되지 않거나, 잘못된 우선순위를 설정하면 기획 단계에서 불필요한 자원 소모나 일정 지연을 초래할 수 있습니다.</br>
  
| 구분 |    내용   |  결과물 |
|------|-----------|---------|
| ***분석*** | <br>1. 주요활동</br> <br>데이터 분석 (시장조사 결과 데이터)</br><br>SWOT 분석</br><br>시장 세분화 및 타겟팅</br><br>화면 설계도 준비 (필요한 UX/UI 요소에 대한 초기 구상)</br> | <br> 결과물 </br> <br>SWOT 분석 문서 (SWOT Analysis Document): Strengths, Weaknesses, Opportunities, Threats에 대한 분석.</br><br>데이터 분석 보고서 (Data Analysis Report): 시장조사 데이터를 기반으로 한 분석 결과.</br><br>세분화 및 타겟팅 보고서 (Segmentation and Targeting Report): 시장을 세분화하고, 타겟 고객을 설정한 보고서.</br> <br>화면 설계도 초안 구상 (Initial Wireframe Concepts)</br>|
- **설명**
<br>SWOT 분석 문서: 기획 단계에서 전략 수립의 기초 자료로 사용됩니다. 기회와 위협 요소를 기반으로 리스크 관리 계획을 수립하고, 강점과 약점에 따라 자원 할당과 작업 우선순위가 결정됩니다. </br>
<br>데이터 분석 보고서: 세분화된 데이터를 기반으로 한 구체적인 전략이 기획 단계에서 수립됩니다. 이 보고서는 또한 마케팅 플랜 작성 시 시장 세그먼트를 구체화하는 데 사용됩니다.</br>
<br>세분화 및 타겟팅 보고서: 타겟 시장에 맞춘 전략 수립과 마케팅 플랜 수립에 직접적으로 활용됩니다.</br>
- **제한사항**
<br>요구사항이 명확하게 정의되지 않거나, 잘못된 우선순위를 설정하면 기획 단계에서 불필요한 자원 소모나 일정 지연을 초래할 수 있습니다.</br>

| 구분 |    내용   |  결과물 |
|------|-----------|---------|
| ***기획*** | <br>주요활동</br> <br>전략 기획</br><br>마케팅 플랜 수립</br><br>예산 및 자원 계획</br><br>리스크 관리 계획</br><br>화면 설계도 작성</br><br>실행 계획 작성</br>| <br>1. 프로젝트 계획서 (Project Plan): 전체 프로젝트의 목표, 일정, 자원, 리스크 관리 전략 등이 포함된 계획서.</br> <br>마케팅 플랜 (Marketing Plan): 마케팅 목표, 전략, 실행 방법 및 예산 계획이 포함된 문서.</br><br>리스크 관리 계획서 (Risk Management Plan): 리스크 식별, 평가, 대응 계획이 포함된 문서.</br><br>화면 설계도 (Wireframes or Mockups)</br><br>가이드라인 문서 (Guidelines Document): 프로젝트의 전반적인 운영 및 실행에 대한 가이드라인.</br> |
- **설명**
  <br>1. WBS: 실행 단계에서 프로젝트 작업을 체계적으로 관리하는 데 사용됩니다. WBS에 정의된 작업 패키지는 자원 배분과 일정 관리를 용이하게 하며, 각 작업의 책임자가 명확히 지정됩니다.</br> <br>2. 프로젝트 계획서: 실행 단계에서 프로젝트 전체의 방향을 결정하고, 일정과 자원 할당의 근거로 사용됩니다. 프로젝트의 모든 주요 활동과 일정이 이 문서에 따라 진행됩니다.</br> <br> 3. 마케팅 플랜: 실행 단계에서 마케팅 활동의 가이드라인으로 사용됩니다. 캠페인 실행, 홍보 전략, 예산 배분 등이 이 플랜에 따라 이루어집니다.</br> <br> 4. 리스크 관리 계획서: 실행 단계에서 발생할 수 있는 리스크를 관리하고 대응하는 데 사용됩니다. 리스크가 발생했을 때의 대응 전략이 이 문서에 명시됩니다.</br> <br> 5. 가이드라인 문서: 프로젝트의 일관성을 유지하고, 모든 팀원이 동일한 기준과 절차를 따르도록 하기 위한 중요한 문서입니다. 특히 개발 프로젝트에서는 코드 품질, 도구 사용, 작업 절차 등에 대한 명확한 지침을 제공하는 것이 필수적입니다. </br>
- **제한사항**
  <br>기획 단계에서 작성된 계획이 너무 이상적이거나 유연성이 부족하면, 실행 단계에서 예기치 않은 문제가 발생했을 때 대응이 어려울 수 있습니다. 또한, WBS가 과도하게 세분화되거나 과소 세분화될 경우, 실행 단계에서 혼란을 초래할 수 있습니다.</br>

| 구분 |    내용   |  결과물 |
|------|-----------|---------|
| ***실행*** | <br>주요활동</br> <br>프로젝트 실행 및 관리</br><br>마케팅 캠페인 실행</br><br>성과 모니터링</br><br>팀 및 자원 관리</br><br>화면 설계도에 따른 개발</br>| <br>1. 프로젝트 상태 보고서 (Project Status Report): 프로젝트 진행 상황, 성과, 이슈 등을 보고하는 문서.</br> <br>마케팅 실행 보고서 (Marketing Execution Report): 마케팅 캠페인의 실행 결과 및 성과 분석 보고서.</br><br>팀 회의 기록 (Team Meeting Minutes): 주요 결정사항 및 이슈, 해결 방법 등을 기록한 문서.</br><br>완성된 UI/UX (Finalized UI/UX Implementation)</br> |
- **설명**
  <br>1. 프로젝트 상태 보고서: 종료 단계에서 프로젝트의 성과 검토와 평가를 위한 근거 자료로 사용됩니다. 이 보고서는 프로젝트 진행 상황과 주요 성과를 기록하여, 종료 단계에서 프로젝트 목표 달성 여부를 판단하는 데 도움을 줍니다.</br> <br>2. 마케팅 실행 보고서: 종료 단계에서 마케팅 활동의 성과를 평가하는 자료로 사용됩니다. 마케팅 목표가 얼마나 달성되었는지, 어떤 부분에서 개선이 필요한지를 평가할 수 있습니다.</br> <br> 3. 팀 회의 기록: 종료 단계에서 프로젝트 회고 및 평가를 위한 자료로 사용됩니다. 회의 기록은 실행 중 발생한 문제와 그 해결 과정을 기록하여, 향후 프로젝트에 대한 교훈을 제공합니다.</br> |
- **제한사항**
  <br>실행 단계에서의 문서가 제대로 작성되지 않거나, 정기적으로 업데이트되지 않으면, 종료 단계에서 프로젝트 성과를 정확하게 평가하기 어렵습니다. 또한, 실행 단계에서 발생한 이슈가 제대로 기록되지 않으면, 후속 프로젝트에서 동일한 문제를 반복할 위험이 있습니다.</br>

| 구분 |    내용   |  결과물 |
|------|-----------|---------|
| ***종료*** | <br>주요활동</br> <br>최종 성과 검토</br><br>프로젝트 마무리 작업</br><br>성과 보고서 작성</br><br>프로젝트 해산 및 평가</br>| <br>1. 최종 성과 보고서 (Final Performance Report): 프로젝트 목표 달성 여부, 주요 성과, 학습된 교훈 등이 포함된 문서.</br> <br>프로젝트 종료 보고서 (Project Closure Report): 프로젝트 마감 활동 및 결과를 기록한 문서.</br><br>실행 결과 보고서 (Execution Results Report): 실행 단계에서의 주요 성과와 결과를 종합적으로 보고한 문서.</br><br>화면 설계도 평가 보고서 (Screen Design Evaluation Report)</br> |
- **설명**
  <br>1. 최종 성과 보고서: 프로젝트의 전체 성과를 종합적으로 평가하고, 이해관계자에게 프로젝트 결과를 보고하는 역할을 합니다. 이 보고서는 프로젝트 목표가 달성되었는지 여부를 확인하는 데 사용됩니다.</br> <br>2. 프로젝트 종료 보고서: 프로젝트가 공식적으로 종료되었음을 선언하고, 모든 작업이 완료되었음을 기록합니다. 이 문서는 후속 프로젝트나 연속 프로젝트에 대한 교훈을 제공하는 중요한 자료입니다.</br> <br> 3. 실행 결과 보고서: 실행 단계에서 발생한 주요 이슈와 해결 방법을 기록하여, 후속 프로젝트에 대한 지침을 제공합니다. 이 문서는 프로젝트 종료 후 회고 및 피드백 과정에서 중요한 자료로 사용됩니다.</br> |
- **제한사항**
  <br>종료 단계에서 작성된 문서가 충분히 구체적이지 않거나, 중요한 데이터를 포함하지 않으면, 후속 프로젝트에서 동일한 실수를 반복할 위험이 있습니다. 또한, 성과 보고서가 부정확하거나 이해관계자 요구에 부응하지 못하면, 프로젝트 평가에서 문제가 발생할 수 있습니다.</br>
  
## 가이드라인 예시 제안!( Auth. 이제희 / 주관적 생각이라 참고만 하세요)

1. 개요 (Introduction)
문서 목적: 가이드라인 문서의 목적과 범위를 설명.
적용 대상: 이 가이드라인이 적용되는 팀, 프로젝트, 개발 영역 등을 명시.
2. 개발 환경 (Development Environment)
개발 도구
IDE: 개발 시 사용할 통합 개발 환경(예: Visual Studio Code, IntelliJ IDEA 등).
버전 관리 도구: Git 사용 시, GitHub, GitLab 등 사용 플랫폼과 브랜치 전략(예: Git flow).
패키지 매니저: Node.js 프로젝트의 경우 npm 또는 yarn 등.
프레임워크 및 라이브러리
프론트엔드: React, Angular, Vue.js 등 선택된 프레임워크.
백엔드: Express, Spring Boot, Django 등 선택된 프레임워크.
코드 형식
코드 스타일 가이드: ESLint, Prettier 등 코드 스타일 및 형식 규칙 도구.
코딩 규칙: 변수 및 함수 이름 지정 규칙, 들여쓰기(예: 2 spaces, 4 spaces).
3. 코딩 표준 (Coding Standards)
HTML/CSS
HTML
구조적 요소: 시멘틱 태그(semantic tags) 사용 권장(예: <header>, <footer>, <article>, <section>).
레이아웃: 테이블(<table>)은 레이아웃용으로 사용하지 않고, <div>와 CSS Grid 또는 Flexbox 사용.
속성 규칙: HTML 속성은 항상 소문자로 작성하며, 속성 값에 작은따옴표(' ') 사용.
CSS
CSS 전처리기: Sass 또는 LESS 사용 지침.
클래스 네이밍 규칙: BEM(Block Element Modifier) 방법론 사용(예: block__element--modifier).
미디어 쿼리: 반응형 디자인을 위한 브레이크포인트 정의.
JavaScript
ES6+ 사용: 최신 ECMAScript 표준 준수.
함수형 프로그래밍 권장: 순수 함수, 고차 함수 사용.
비동기 처리: async/await 사용 권장.
주석 처리: 중요 로직에 대해 주석 작성 규칙 명시.
Back-end
API 설계 가이드: RESTful API 디자인 규칙, 엔드포인트 네이밍 규칙.
데이터베이스 규칙: 데이터베이스 스키마 설계 규칙, SQL 문법 사용 시 표준.
에러 핸들링: 일관된 에러 핸들링 방식(예: try-catch 문법).
4. 파일 및 폴더 구조 (File and Folder Structure)
폴더 구조: 프로젝트 폴더 구조에 대한 명시적 정의(예: src/, public/, tests/).
파일 네이밍 규칙: 파일 및 폴더 이름 규칙(예: 소문자와 하이픈(-) 사용).
모듈 및 컴포넌트 분리: 프론트엔드에서 컴포넌트별 디렉토리 구조 예시.
5. 버전 관리 규칙 (Version Control Guidelines)
브랜치 전략: 브랜치 생성 및 병합 규칙(예: main, develop, feature/, bugfix/).
커밋 메시지 규칙: 일관된 커밋 메시지 스타일(예: “feat: 사용자 로그인 기능 추가”).
Pull Request(Pull Request): PR 생성 시 검토 과정과 승인 절차 명시.
6. 테스트 가이드라인 (Testing Guidelines)
단위 테스트(Unit Testing): 각 모듈 또는 기능별 단위 테스트 작성 기준.
통합 테스트(Integration Testing): 시스템 통합 시나리오에 따른 테스트 기준.
테스트 도구: Jest, Mocha, Cypress 등 사용 도구와 관련된 설정.
테스트 커버리지 목표: 최소 테스트 커버리지 목표 설정(예: 80% 이상).
7. 배포 및 운영 가이드라인 (Deployment and Operations Guidelines)
배포 프로세스: 개발 -> 스테이징 -> 프로덕션 단계의 배포 절차.
CI/CD 파이프라인: Jenkins, GitHub Actions 등을 통한 자동화 배포 설정.
모니터링 및 로깅: 운영 중 발생하는 이슈 모니터링 및 로깅 시스템 설정(예: ELK 스택 사용).
8. 보안 가이드라인 (Security Guidelines)
인증 및 인가: OAuth2.0, JWT 등의 인증 방식 사용.
데이터 보호: 민감한 데이터(예: 사용자 비밀번호)의 암호화 규칙.
보안 업데이트: 의존성 패키지의 주기적인 보안 업데이트 절차.
9. 문서화 가이드라인 (Documentation Guidelines)
코드 문서화: JSDoc, Sphinx 등을 통한 코드 주석 및 문서화 규칙.
프로젝트 문서: README.md, API 문서 등 프로젝트 관련 문서 작성 규칙.
10. 커뮤니케이션 및 협업 가이드라인 (Communication and Collaboration Guidelines)
일일 스탠드업 미팅: 매일 진행하는 짧은 회의 규칙.
커뮤니케이션 도구: Slack, JIRA 등 팀 협업 도구 사용 지침.
이슈 관리: 이슈 생성, 관리 및 해결 절차.
11. 기타 규칙 (Miscellaneous)
코드 리뷰: 코드 리뷰의 기준과 절차.
기술 부채 관리: 기술 부채를 관리하는 절차와 우선순위 설정.
