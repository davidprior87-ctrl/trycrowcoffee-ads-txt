import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/ads.txt", (req, res) => {
  res.type("text/plain");
  res.send("google.com, pub-1387759825174381, DIRECT, f08c47fec0942fa0");
});

app.listen(PORT, () => {
  console.log(`Ads.txt service running on port ${PORT}`);
});
