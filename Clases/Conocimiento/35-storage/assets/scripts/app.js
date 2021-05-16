const btnSave = document.getElementById('button-save');
const btnRetrieve = document.getElementById('button-retrieve');
const btnRetrieveAll = document.getElementById('button-retrieve-all');
const btnDelete = document.getElementById('button-delete');
const btnUpdate = document.getElementById('button-update');

const dbRequest = indexedDB.open('ProductsDB', 1);

let db;

const addProduct = (product) => {
  const productStore = db
    .transaction('products', 'readwrite')
    .objectStore('products');
  productStore.add(product);
};

const getProduct = (productId) => {
  const productStore = db
    .transaction('products', 'readwrite')
    .objectStore('products');
  const request = productStore.get(productId);

  request.onsuccess = (evt) => console.log(request.result);
};

const deleteProduct = (productId) => {
  const productStore = db
    .transaction('products', 'readwrite')
    .objectStore('products');
  const request = productStore.delete(productId);

  request.onsuccess = (evt) => console.log(request.result);
};

const getProductAll = () => {
  const productStore = db
    .transaction('products', 'readwrite')
    .objectStore('products');
  const request = productStore.getAll();

  request.onsuccess = (evt) => console.log(request.result);
};

const updateProduct = (productId, newTitle) => {
  const productStore = db
    .transaction('products', 'readwrite')
    .objectStore('products');
  const request = productStore.get(productId);

  request.onsuccess = (evt) => {
    const data = evt.target.result;
    data.title = newTitle;

    const requestUpdate = productStore.put(data);
    requestUpdate.onsuccess = (evt) => console.log('Product updated');
  };
};

dbRequest.onsuccess = (evt) => {
  db = evt.target.result;
  console.log('onsuccess');
};

dbRequest.onupgradeneeded = (evt) => {
  db = evt.target.result;

  const objectStore = db.createObjectStore('products', { keyPath: 'id' });

  objectStore.transaction.oncomplete = (evt) => {
    addProduct({ id: 'p1', title: 'Product 01' });
    addProduct({ id: 'p2', title: 'Product 02' });
    addProduct({ id: 'p3', title: 'Product 03' });
  };
};

btnRetrieve.addEventListener('click', getProduct.bind(this, 'p2'));
btnRetrieveAll.addEventListener('click', getProductAll);
btnDelete.addEventListener('click', deleteProduct.bind(this, 'p3'));
btnUpdate.addEventListener(
  'click',
  updateProduct.bind(this, 'p1', 'New Title')
);
