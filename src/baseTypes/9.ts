/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/

type ArticleTime = {
  createAt: Date;
  updateAt: Date;
};

type Article = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: ArticleTime;
};

const page1: Article = {
  title: "The awesome Article",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: Article = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

export { page1, page2 };
