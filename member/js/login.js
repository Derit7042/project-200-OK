const _ipUser_pw = document.querySelector('#user_pw');    // password input 박스
const _imgPassEye = document.querySelector('#pass_eye');  // password input 박스 내 눈 표시 아이콘

// 패스워드 눈 아이콘 클릭시 이벤트 발생
_imgPassEye.addEventListener('click', () => {
  console.log("이미지 클릭이벤트 발생");
  if(_imgPassEye.classList.contains('pass_hide')) {
    // 비밀번호 숨김 > 보여줌으로 변경
    _imgPassEye.classList.replace('pass_hide', 'pass_show');
    _imgPassEye.src = "../images/icons/free-icon-eye.png";
    _ipUser_pw.type = 'text';
  }else if(_imgPassEye.classList.contains('pass_show')) {
    // 비밀번호 보여줌 > 숨김으로 변경
    _imgPassEye.classList.replace('pass_show', 'pass_hide');
    _imgPassEye.src = "../images/icons/free-icon-eye-hidden.png";
    _ipUser_pw.type = 'password';
  }
});

const _btnLogin = document.querySelector('.member_btn');  // 로그인
_btnLogin.addEventListener('click', (event) => {
  event.preventDefault(); // 폼제출 방지
  window.location.href = '../index.html';
})
