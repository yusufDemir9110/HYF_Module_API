const meeting = {
  name: "zoom1 meeting",
  people: ["john", "jane", "marry"],
  mShow() {
    this.people.forEach(function (person) {
      console.log(person + " joined " + this.name);
      console.log(this);
      console.log(this.name);
    });
  },
  mShow2() {
    this.people.forEach(
      function (person) {
        console.log(person + " joined " + this.name);
        console.log(this);
        console.log(this.name);
      }.bind(this)
    );
  },
};
meeting.mShow();
meeting.mShow2();
