import Cookies from "js-cookie";
const UseSignUp = async ({ username, nickename, email, password }: { username: string; nickename: string; email: string; password: string }) => {
  const userData = {
    username: username,
    email: email,
    password: password,
  };
  let data = await fetch(`${process.env.NEXT_PUBLIC_starpi_url}/auth/local/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  let res = await data.json();
  console.log(res.data);
  if (res?.jwt) {
    Cookies.set("token", res.jwt, { secure: true, expires: 365 });
    return {
      color: "green",
      message: "Successfully,created an account for you",
    };
  } else {
    return {
      color: "red",
      message: res.error.message,
    };
  }
};

export default UseSignUp;
