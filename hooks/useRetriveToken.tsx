import Cookies from "js-cookie";
const useRetriveToken = () => {
  const TOKEN_LENGTH = Cookies.get("token_length");
  const TOKENX = Cookies.get("token");
  const retrivedToken = TOKENX?.slice(0, Number(TOKEN_LENGTH));
  return {
    token: TOKENX ? retrivedToken : "",
  };
};

export default useRetriveToken;
