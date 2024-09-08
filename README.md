# 🖥 코드잇 부스트 1기 프로젝트 - 조각집

## 📽프로젝트 소개
코드잇 부스트 1기 프로젝트 조각집 - 백엔드입니다!

조각집이라는 이름으로 기억(추억) 저장 및 공유 서비스를 위한 웹 프로젝트입니다.

**[[코드잇 부스트 프로젝트 조각집 - 프론트엔드 깃허브]](https://github.com/saebxxk/ZOGAKZIP-FE)**

## ⏲개발 기간
**2024.08.08 ~ 2024.09.07**

## 😊멤버 구성 (개발)
* 정유찬(백엔드) : 그룹 API 내용 구현 , 배지 API 내용 구현, 이미지 URL 변경 로직 담당
* 오세리(백엔드) : 게시글 API 내용 구현 담당, 댓글 API 내용 구현
* 곽서하(프론트엔드) : 그룹 / 게시글 / 댓글 / 배지 등 전반적인 프론트엔드 담당

## 😉역할 분담
* 정유찬 : 자료 조사, Notion 팀 페이지 개설 
* 오세리 : 발표
* 곽서하 : PPT

## 🚀  Stacks
![전체](https://github.com/user-attachments/assets/a2fd3550-4a6e-44eb-b07f-b10ebe37a780)

**백엔드**
* Node.js
* Express.js

**프론트엔드**
* HTML + CSS + JavaScript
* React

**데이터베이스**
* postgreSQL

**협업용 Tools**
* Notion
* GitHub
* Discord


## 👍 주요 내용은 발표 자료내에 있습니다!

**[[조각집 프로젝트 2팀 발표 자료]](https://github.com/user-attachments/files/16923083/2.ppt.pdf)**


---

## 🛠구현 내용 
### 그룹

**그룹 등록**

- 그룹명, 대표 이미지, 그룹 소개, 그룹 공개 여부, 비밀번호를 입력하여 그룹을 등록합니다.

**그룹 수정**

- 비밀번호를 입력하여 그룹 등록 시 입력했던 비밀번호와 일치할 경우 그룹 정보 수정이 가능합니다.

**그룹 삭제**

- 비밀번호를 입력하여 그룹 등록 시 입력했던 비밀번호와 일치할 경우 그룹 삭제가 가능합니다.

**그룹 목록 조회**

- 등록된 그룹 목록을 조회할 수 있습니다.
- 각 그룹의 이미지(한 장), 그룹명, 그룹 소개, 그룹 공개 여부, 디데이(생성 후 지난 일수), 획득 배지수, 추억수, 그룹 공감수가 표시됩니다.
- 공개 그룹 목록과 비공개 그룹 목록을 구분하여 조회합니다.
- 최신순, 게시글 많은순, 공감순, 획득 배지순으로 정렬 가능합니다.
- 그룹명으로 검색 가능합니다.

**그룹 상세 조회**

- 그룹 목록 페이지에서 그룹을 클릭할 경우 그룹 상세 조회가 가능합니다.
- 비공개 그룹의 경우 비밀번호를 입력하여 그룹 등록시 입력한 비밀번호와 일치할 경우 조회 가능합니다.
- 각 그룹의 대표 이미지, 그룹명, 그룹 소개, 그룹 공개 여부, 디데이(생성 후 지난 일수), 획득 배지 목록, 추억수, 그룹 공감수가 표시됩니다.
- 공감 보내기 버튼을 클릭할 경우 그룹의 공감수를 높일 수 있으며, 공감은 클릭할 때마다 중복해서 보낼 수 있습니다.
- 해당 그룹의 추억 목록이 표시됩니다.

---

### 게시글(추억)

**게시글 등록**

- 닉네임, 제목, 이미지(한 장), 본문, 태그, 장소, 추억의 순간, 추억 공개 여부, 비밀번호를 입력하여 추억 등록이 가능합니다.

**게시글 수정**

- 비밀번호를 입력하여 추억 등록 시 입력했던 비밀번호와 일치할 경우 추억 수정이 가능합니다.

**게시글 삭제**

- 비밀번호를 입력하여 추억 등록 시 입력했던 비밀번호와 일치할 경우 추억 삭제가 가능합니다.

**게시글 목록 조회**

- 그룹 상세 조회를 할 경우 그 그룹에 해당되는 추억 목록이 같이 조회됩니다.
- 각 추억의 닉네임, 추억 공개 여부, 제목, 이미지, 태그, 장소, 추억의 순간, 추억 공감수, 댓글수가 표시됩니다.
- 공개 추억 목록과 비공개 추억 목록을 구분하여 조회합니다.
- 최신순, 댓글순, 공감순으로 정렬 가능합니다.
- 제목, 태그로 검색 가능합니다.

**게시글 상세 조회**
- 추억 목록에서 추억을 클릭할 경우 추억 상세 조회가 가능합니다.
- 닉네임, 제목, 이미지(한 장), 본문, 태그, 장소, 추억의 순간, 추억 공개 여부, 추억 공감수, 댓글수가 표시됩니다.
- 공감 보내기 버튼을 클릭할 경우 그룹의 공감수를 높일 수 있으며, 공감은 클릭할 때마다 중복해서 보낼 수 있습니다.
- 해당 추억의 댓글 목록이 조회됩니다.
---

### 댓글

**댓글 등록**

- 닉네임, 댓글 내용, 비밀번호를 입력하여 댓글 등록이 가능합니다.

**댓글 수정**

- 비밀번호를 입력하여 댓글 등록 시 입력했던 비밀번호와 일치할 경우 댓글 수정이 가능합니다.

**댓글 삭제**

- 비밀번호를 입력하여 댓글 등록 시 입력했던 비밀번호와 일치할 경우 댓글 삭제가 가능합니다.

**댓글 목록 조회**

- 추억을 조회할 경우 그 추억에 해당되는 댓글 목록이 조회됩니다.
- 닉네임, 댓글 생성 날짜, 댓글 내용이 표시됩니다.

---
### 배지

- 그룹은 일정 조건을 달성하면 자동으로 배지를 획득합니다.
- 배지의 종류
    - 7일 연속 추억 등록
    - 추억 수 20개 이상 등록
    - 그룹 생성 후 1년 달성
    - 그룹 공간 1만 개 이상 받기
    - 추억 공감 1만 개 이상 받기
        - 공감 1만 개 이상의 추억이 하나라도 있으면 획득
