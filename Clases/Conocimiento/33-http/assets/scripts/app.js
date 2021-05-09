const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const fetchBtn = document.querySelector('#available-posts button');
const form = document.querySelector('#new-post form');
const postList = document.querySelector('ul');

const sendHttpRequest = (method, url, data) => {
  /*   const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.responseType = 'json';

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error('Something is wrong'));
      }
    };

    xhr.onerror = function () {
      reject(new Error('Error while sending request'));
    };

    xhr.send(JSON.stringify(data));
  });

  return promise; */

  return fetch(url, {
    method,
    // body: JSON.stringify(data),
    body: data,
    /*     headers: {
      'content-type': 'application/json',
    }, */
  })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        return response.json().then((err) => {
          console.log(err);
          throw new Error('Something is wrong by server side');
        });
      }
    })
    .catch((err) => {
      console.log(err);
      throw new Error('Something is wrong by client side');
    });
};

const fetchPosts = async () => {
  try {
    const responseData = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );

    const listOfPosts = responseData.data;
    for (const post of listOfPosts) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector('h2').textContent = post.title.toUpperCase();
      postEl.querySelector('p').textContent = post.body;
      postEl.querySelector('li').id = post.id;
      listElement.appendChild(postEl);
    }
  } catch (error) {
    alert(error.message);
  }
};

const createPost = (title, body) => {
  const userId = Math.random();
  const post = { title, body, userId };

  const fd = new FormData();
  fd.append('title', title);
  fd.append('body', body);
  fd.append('userId', userId);

  sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', fd);
};

fetchBtn.addEventListener('click', fetchPosts);
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const title = evt.currentTarget.querySelector('#title').value;
  const content = evt.currentTarget.querySelector('#content').value;

  createPost(title, content);
});
postList.addEventListener('click', (evt) => {
  if (evt.target.tagName === 'BUTTON') {
    const postId = evt.target.closest('li').id;
    sendHttpRequest(
      'DELETE',
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
});

const usersSystem = ['marco', 'julia', 'pedro', 'javier', 'carmen'];
const usersMarketing = ['marco', 'estela', 'alfonso'];

const difference = _.difference(usersSystem, usersMarketing);
console.log(difference);
