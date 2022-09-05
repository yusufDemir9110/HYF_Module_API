const btn = document.querySelector("#btn1");
btn.addEventListener("click", (e) => {
  console.log(e.clientX);
});

const students = [
  { name: "jame", score: 15, school: "East" },
  { name: "john", score: 69, school: "West" },
  { name: "amber", score: 67, school: "East" },
  { name: "ashley", score: 94, school: "West" },
];

const processStudent = (data, callback) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].school.toLowerCase() === "east") {
      if (typeof callback === "function") {
        callback(data[i]);
      }
    }
  }
};
processStudent(students, (obj) => {
  if (obj.score > 60) {
    console.log(obj.name + " pass");
  }
});

const determineTotal = () => {
  let total = 0;
  let count = 0;

  processStudent(students, (obj) => {
    total = total + obj.score;
    count++;
  });
  console.log("total score " + total + " total count " + count);
};

determineTotal();
