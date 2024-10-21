var a = {
  fname: "tisha",
  lname: "kevadiya",
  age: 20,
  email: "kevadiyatisha@gmail.com",
  favMovies: ["dhoom", "sholay", "hum"],
  living: {
    city: "surat",
    county: "india",
  },

  salary: function () {
    return 25000;
  },
  fullname: function () {
    return this.fname + "" + this.lname;
  },
};

console.log(a);
document.write(a.email);
document.write(a.salary());
document.write(a.fullname());
document.write(a.living.city);
