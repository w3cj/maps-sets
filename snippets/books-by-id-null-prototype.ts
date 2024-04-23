const booksById = Object.assign(Object.create(null), {
  42: {
    id: 42,
    title: "Hitchikers Guide To the Galaxy",
    authors: ["Adams, Douglas"],
  },
  7: {
    id: 7,
    title: "Secrets of the JavaScript Ninja",
    authors: ["Resig, John", "Bibeault, Bear", "Maras, Josip"],
  },
  13: {
    id: 13,
    title: "Don't Make Me Think",
    authors: ["Krug, Steve"],
  },
});

export default booksById;
