const http = require("http");
const calculate = require("./calculator");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.write("<h1>Addition : " + calculate.add(5, 7) + "</h1>");
//   res.write("<h1>Subtraction : " + calculate.sub(10, 3) + "</h1>");
//   res.end("<h1>Multiplication : " + calculate.mul(5, 7) + "</h1>");
// });

// server.listen(3000, () => {
//   console.log("Server is running on http://127.0.0.1:3000");
// });

// fs.readFile("sample.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });

// fs.writeFile("sample1.txt", "hello world", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
// });

const fs = require("fs");

function readData() {
  try {
    const data = fs.readFileSync("sample.json", "utf8");
    console.log(JSON.parse(data));
  } catch (err) {
    console.log("Error reading data:", err);
  }
}

function addData(nobj) {
  try {
    const data = fs.readFileSync("sample.json", "utf8");
    const obj = JSON.parse(data);
    const updatedObj = [...obj, nobj];
    fs.writeFileSync("sample.json", JSON.stringify(updatedObj));
  } catch (err) {
    console.log("Error adding data:", err);
  }
}

function deleteData(delName) {
  try {
    const data = fs.readFileSync("sample.json", "utf8");
    const obj = JSON.parse(data);
    const updatedObj = obj.filter((item) => item.name !== delName);
    fs.writeFileSync("sample.json", JSON.stringify(updatedObj));
  } catch (err) {
    console.log("Error deleting data:", err);
  }
}

function updateData(upName, upAge) {
  fs.readFile("sample.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const obj = JSON.parse(data);
    const nobj = obj.map((item) => {
      if (item.name === upName) {
        item.age = upAge;
      }
      return item;
    });
    fs.writeFile("sample.json", JSON.stringify(nobj), (err) => {
      if (err) {
        console.log(err);
        return;
      }
    });
  });
}

readData();
addData({ name: "John", age: 30, city: "New York" });
deleteData("Doe");
readData();
updateData("Rahul", 45);
readData();