fetch('https://lucky-hummingbird-2a5600.netlify.app/')
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Error ${res.status}`);
    }
    return res.text();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
