const http = require("http");

const port = Number(process.env.PORT || 3000);
const host = "0.0.0.0";

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json; charset=utf-8",
  });

  res.end(
    JSON.stringify({
      message: "Hello from MyDeploy!",
      status: "ok",
      deployedBy: "github",
    })
  );
});

server.listen(port, host, () => {
  console.log(`hello-mydeploy listening on ${host}:${port}`);
});
