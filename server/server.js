// express 모듈 호출
const express = require("express");
const app = express();
// const api = require("./routes/index");
const cors = require("cors");
const bodyParser = require("body-parser");

// api 처리는 './routes/index'에서 일괄처리
// app.use("/api", api);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({ test: "this is test!!" });
});

app.post("/idplz", (req, res) => {
  const serverId = req.body.plzid;
  console.log(serverId);
});

// server port 4000 할당
// 클라이언트와 다른 번호로 충돌나지 않도록
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server run : http://localhost:${PORT}/`);
});
