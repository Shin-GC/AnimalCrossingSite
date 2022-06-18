import axios from "axios";

// const backendPortNumber = "api";
const backendPortNumber = "5001";
const serverUrl = "http://animalcrossing.site:" + backendPortNumber + "/";
// const serverUrl =
//   "http://" + window.location.hostname + ":" + backendPortNumber + "/";

async function get(endpoint) {
  return axios.get(serverUrl + endpoint);
}

async function post(endpoint, data) {
  // JSON.stringify 함수: Javascript 객체를 JSON 형태로 변환함.
  // 예시: {name: "Kim"} => {"name": "Kim"}
  const bodyData = JSON.stringify(data);
  return axios.post(serverUrl + endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

async function put(endpoint, data) {
  // JSON.stringify 함수: Javascript 객체를 JSON 형태로 변환함.
  // 예시: {name: "Kim"} => {"name": "Kim"}
  return axios.put(serverUrl + endpoint, data);
}

// 아래 함수명에 관해, delete 단어는 자바스크립트의 reserved 단어이기에,
// 여기서는 우선 delete 대신 del로 쓰고 아래 export 시에 delete로 alias 함.
async function del(endpoint, params = "") {
  return axios.delete(serverUrl + endpoint + "/" + params);
}

async function postPostsById(endpoint, data, config) {
  return axios.post(serverUrl + endpoint, data, config);
}

// 아래처럼 export한 후, import * as A 방식으로 가져오면,
// A.get, A.post 로 쓸 수 있음.
export { get, post, put, del as delete, postPostsById };
