import { isString } from './typeOf.js';
import { typeError } from '../error/typeError.js';

const { localStorage: storage } = window;

// 다 만드신분들 -> promise API

export function setStorage(key, value) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      storage.setItem(key, JSON.stringify(value));
      resolve();
    } else {
      reject({ message: 'key는 문자 타입 이어야 합니다.' });
    }
  });
  // if (!isString(key)) {
  //   typeError(
  //     'setStorage 함수의 첫 번째 인수인 key는 문자 타입 이어야 합니다.'
  //   );
  // }
  // storage.setItem(key, JSON.stringify(value));
}

export function getStorage(key) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      resolve(JSON.parse(storage.getItem(key)));
    } else {
      reject({ message: 'key는 문자 타입 이어야 합니다.' });
    }
  });
}

// setStorage('obj', { name: 'tiger' });

// storage.setItem('obj', JSON.stringify({ name: 'tiger', age: 15 }));

// console.log(JSON.parse(storage.getItem('obj')));

// storage.clear()
// storage.removeItem(key)

// deleteStorage()

export function deleteStorage(key) {
  return new Promise((resolve, reject) => {
    !key ? storage.clear() : storage.removeItem(key);
    resolve();
  });
}
