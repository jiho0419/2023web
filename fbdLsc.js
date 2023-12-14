let errStack = 0;
let isLoginDisabled = false;

const id = document.getElementById('id');
const password = document.getElementById('password');
const login = document.getElementById('login');

function disableInputs() {
  id.disabled = true;
  password.disabled = true;
  login.disabled = true;
}

function enableInputs() {
  id.disabled = false;
  password.disabled = false;
  login.disabled = false;
}

login.addEventListener('click', () => {
  if (isLoginDisabled) {
    alert('잠시 후 다시 시도해주세요.');
    return;
  }

  if (id.value === 'jiho' && password.value === '1234') {
    alert('로그인 되었습니다!');
    window.location.href = 'fbd.html';
  } else {
    alert('아이디와 비밀번호를 다시 한 번 확인해주세요!');
    errStack++;
  }

  if (errStack >= 5) {
    alert('비밀번호를 5회 이상 틀리셨습니다. 30초 동안 잠금 처리됩니다.');
    isLoginDisabled = true;
    disableInputs();

    setTimeout(() => {
      errStack = 0;
      isLoginDisabled = false;
      enableInputs();
    }, 30000);
  }
});
