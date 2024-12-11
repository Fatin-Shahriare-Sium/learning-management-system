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
  let userInfo = {
    documentId: res.user.documentId,
    email: res.user.email,
    username: res.username,
  };
  console.log(res.data);
  if (res?.jwt) {
    const token_length = res.jwt.length;
    Cookies.set("token_length", token_length, { expires: 365 });
    Cookies.set("realToken", res.jwt, { expires: 365 });
    Cookies.set("token", `${res.jwt}Z1dx-1E`, { secure: true, expires: 365 });
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
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
