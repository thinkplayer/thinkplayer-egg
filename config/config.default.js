module.exports = {
  security: {
    csrf: {
      enable: false,
    },
  },
  cors: {
    origin: "*",
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH",
  },
  bodyParser: {
    jsonLimit: "300mb",
  },
  userList: {
    wzj1: "f0f9e135-190f-4d5a-99bd-1b997118c90c",
    wzj2: "1702ceec-c34a-4693-994b-480b7f6fafbe",
    whr1: "79c54d98-3f27-41af-830c-128b0b99d3b9",
    whr2: "d8ad6332-27c8-4684-9b85-2b30325c2c50",
    ljl1: "431890d7-97e7-4cb7-bda9-2d7036634e52",
    ljf1: "970ba76f-700f-4482-92c9-18a87e9d51f0",
  },
};
