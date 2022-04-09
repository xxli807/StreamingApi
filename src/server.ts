import * as http from "http";
import * as fs from "fs";

/*
 * send interval in millionSec
 */
const sendInterval = 5000;

function sendServerSendEvent(
  req: http.IncomingMessage,
  res: http.ServerResponse
) {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  var id = new Date().toLocaleTimeString();

  setInterval(function () {
    SendServerEvent(res, id, new Date().toLocaleTimeString());
  }, sendInterval);

  SendServerEvent(res, id, new Date().toLocaleTimeString());
}

// has to be in this format
function SendServerEvent(
  res: { write: (arg0: string) => void },
  sessionId: string,
  data: string
) {
  res.write("id: " + sessionId + "\n\n");
  res.write("data: new server event: " + data + "\n\n");
}

http
  .createServer(function (req: http.IncomingMessage, res: http.ServerResponse) {
    if (req.headers.accept && req.headers.accept == "text/event-stream") {
      if (req.url == "/message") {
        sendServerSendEvent(req, res);
      } else {
        res.writeHead(404);
        res.end();
      }
    } else {
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.write(fs.readFileSync(__dirname + "/public/index.html"));
      res.end();
    }
  })
  .listen(3300);
