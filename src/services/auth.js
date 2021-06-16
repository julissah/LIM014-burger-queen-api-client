export const createToken = (data) => { return fetch('http://localhost:8000/auth', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
}) 
  .then(response => response.json())
  .then(data => console.log(data));
}

