const constraints = {
  email: {
    presence: {
      message: "是必填的欄位",
    },
    email: true,
  },
  password: {
    presence: {
      message: "^密碼是必填的欄位",
    },
    length: {
      minimum: 5,
      message: "^密碼長度需大於５位數",
    },
  },
  確認密碼: {
    presence: {
      message: "是必填的欄位",
    },
    equality: {
      attribute: "password", // 此欄位要和密碼欄位一樣
      message: "^密碼不相同",
    },
  },
};

export default constraints;
