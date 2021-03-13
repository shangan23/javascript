let capitan1 = {
  firstname: "Mahendra",
  middlename: "Sing",
  lastname: "Dhoni"
};

let capitan2 = {
  firstname: "Mark",
  middlename: "",
  lastname: "Waugh"
};

let worldCupWinningCapitanDetails = function(year, country) {
  // Reference it using this
  console.log(`${this.firstname} ${this.middlename} ${this.lastname} won the world cup in the year ${year} hosted in ${country}
    `);
};


worldCupWinningCapitanDetails.bind(capitan2,"1987", "India and Pakistan")();

let worldcupWonByIndia = worldCupWinningCapitanDetails.bind(capitan1,"2011", "India and Bangladesh");
worldcupWonByIndia("2011", "India and Bangladesh");

let worldcupWonByAustralia = worldCupWinningCapitanDetails.bind(capitan2);
worldcupWonByAustralia("1999", "England");
