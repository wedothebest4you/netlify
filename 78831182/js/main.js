fetch('/.netlify/functions/getusers')
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Error ${res.status}`);
    }
    return res.text();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
