const btnSave = document.getElementById('button-save');
const btnRetrieve = document.getElementById('button-retrieve');
const btnDelete = document.getElementById('button-delete');

const saveInLocalStorage = () => {
  localStorage.setItem('userId', 20);
  localStorage.setItem('user', JSON.stringify({ name: 'Claudia' }));
};

const retrieveFromLocalStorage = () => {
  const userId = localStorage.getItem('userId');
  const user = JSON.parse(localStorage.getItem('user'));

  console.log('userId', userId);
  console.log('user', user);
};

const deleteFromLocalStorage = () => {
  localStorage.clear();
  //localStorage.removeItem('userId');
};

const saveInCookies = () => {
  const expiresDate = new Date();
  expiresDate.setTime(expiresDate.getTime() + 60000);
  document.cookie = 'userId=20; max-age=60';
  document.cookie =
    'user=' +
    JSON.stringify({ name: 'Claudia' }) +
    '; expires=' +
    expiresDate.toGMTString();
};

const getListCookies = (accum, pair) => {
  const pairValue = pair.split('=');
  if (!accum[pairValue[0]]) {
    accum[pairValue[0]] = pairValue[1];
  }
  return accum;
};

const getCookie = (nameCookie) => {
  const pairCookies = document.cookie.split(';').map((el) => el.trim());
  const cookies = pairCookies.reduce(getListCookies, {});

  return cookies[nameCookie];
};

const retrieveFromCookies = () => {
  const userId = getCookie('userId');
  const user = getCookie('user');

  console.log('userId', userId);
  console.log('user', user);
};

const deleteCookie = (nameCookie) => {
  const expiresDate = new Date();
  expiresDate.setTime(expiresDate.getTime() - 1000);
  document.cookie = nameCookie + '= ; expires=' + expiresDate.toGMTString();
};

const deleteFromCookies = () => {
  deleteCookie('user');
};

btnSave.addEventListener('click', saveInCookies);
btnRetrieve.addEventListener('click', retrieveFromCookies);
btnDelete.addEventListener('click', deleteFromCookies);
