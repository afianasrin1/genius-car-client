export const setAuthToken = (user) => {
  const currentUser = {
    email: user.email,
  };
  //get JWT token
  fetch("https://genius-car-server-ten-iota.vercel.app/jwt", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      //not saf in local storage
      localStorage.setItem("car-token", data.token.token);
    });

  //   navigate(from, { replace: true });
};
