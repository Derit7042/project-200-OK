const _ipUserPass = document.querySelector('#user_pass');               // password input 박스
const _imgPassEye = document.querySelector('#pass_eye');                // password input 박스 내 눈 표시 아이콘

const _ipUserPassCheck = document.querySelector('#user_pass_check');    // password check input 박스
const _imgPassEyeCheck = document.querySelector('#pass_eye_check');     // password check input 박스 내 눈 표시 아이콘

// 회원가입 화면 작업 할 사항
// 1.회원가입 버튼 클릭시 빈값 없는지 확인(지역은 선택하세요가 아니여야함)
//   ㄴ 아이디, 비밀번호, 비밀번호확인, 닉네임, 거주지역
// 2.회원가입 버튼 클릭시 비밀번호 두개 일치한지 확인하기
// 3.모든데이터를 입력하였을때만 회원가입 버튼에 색이 바뀌도록 하고싶음
//   ㄴ 입력안했을경우 비활성화시키기

// ========== 패스워드 영역 이벤트 ==========
// 패스워드 숨김/보임 아이콘 이벤트
_imgPassEye.addEventListener('click', () => {
  if(_imgPassEye.classList.contains('pass_hide')) {
    // 비밀번호 숨김 > 보여줌으로 변경
    _imgPassEye.classList.replace('pass_hide', 'pass_show');
    _imgPassEye.src = "../images/icons/free-icon-eye.png";
    _ipUserPass.type = 'text';
  }else if(_imgPassEye.classList.contains('pass_show')) {
    // 비밀번호 보여줌 > 숨김으로 변경
    _imgPassEye.classList.replace('pass_show', 'pass_hide');
    _imgPassEye.src = "../images/icons/free-icon-eye-hidden.png";
    _ipUserPass.type = 'password';
  }
});
_imgPassEyeCheck.addEventListener('click', () => {
  if(_imgPassEyeCheck.classList.contains('pass_hide')) {
    // 비밀번호 숨김 > 보여줌으로 변경
    _imgPassEyeCheck.classList.replace('pass_hide', 'pass_show');
    _imgPassEyeCheck.src = "../images/icons/free-icon-eye.png";
    _ipUserPassCheck.type = 'text';
  }else if(_imgPassEyeCheck.classList.contains('pass_show')) {
    // 비밀번호 보여줌 > 숨김으로 변경
    _imgPassEyeCheck.classList.replace('pass_show', 'pass_hide');
    _imgPassEyeCheck.src = "../images/icons/free-icon-eye-hidden.png";
    _ipUserPassCheck.type = 'password';
  }
});

// 패스워드 & 패스워드 확인 일치여부 확인
_ipUserPass.addEventListener('input',() => {
  let pass1 = document.getElementById('user_pass').value;
  let pass2 = document.getElementById('user_pass_check').value;
  if( pass1 != pass2 ) {
    document.getElementById('msg_pass').style.display = 'block';
  }else {
    document.getElementById('msg_pass').style.display = 'none';
  }
});
_ipUserPassCheck.addEventListener('input',() => {
  let pass1 = document.getElementById('user_pass').value;
  let pass2 = document.getElementById('user_pass_check').value;
      if( pass1 != pass2 ) {
        document.getElementById('msg_pass').style.display = 'block';
      }else {
        document.getElementById('msg_pass').style.display = 'none';
      }
});


// ========== 지역명 Select Box 영역 ==========
const _selUserRegion = document.querySelector('#user_region'); //select태그(부모)
const regions = [
  {name : "선택하세요", val : "no"},
  {name : "서울", val : "seoul"},
  {name : "부산", val : "busan"},
  {name : "대구", val : "daegu"},
  {name : "인천", val : "incheon"},
  {name : "광주", val : "gwangju"},
  {name : "대전", val : "daejeon"},
  {name : "울산", val : "ulsan"},
  {name : "강원", val : "gangwon"},
  {name : "경기", val : "gyeonggi"},
  {name : "경남", val : "gyeongnam"},
  {name : "경북", val : "gyeongbuk"},
  {name : "전남", val : "jeonnam"},
  {name : "전북", val : "jeonbuk"},
  {name : "제주", val : "jeju"},
  {name : "충남", val : "chungnam"},
  {name : "충북", val : "chungbuk"}];
  
// 부모안에 option 값 넣기
regions.forEach((region, index) => {
  let option = document.createElement('option');
  option.value = region.val;
  option.textContent = region.name;
  _selUserRegion.appendChild(option);
});
                 

// ========== 하단 버튼 영역 ==========
const _btnLogin = document.querySelector('.member_btn');  // 로그인
_btnLogin.addEventListener('click', (event) => {
  event.preventDefault(); // 폼제출 방지
  window.location.href = 'login.html';
})
