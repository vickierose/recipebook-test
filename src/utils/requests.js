export const post = (url, data) => {
  return fetch(new Request(url, {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    mode: 'cors',
    body: JSON.stringify(data)
  }));
};

export const put = (url, data) => {
  return fetch(new Request(url, {
    method: 'PUT',
    headers: {'Content-type': 'application/json'},
    mode: 'cors',
    body: JSON.stringify(data)
  }));
};

export const get = (url) => {
  return fetch(url);
};