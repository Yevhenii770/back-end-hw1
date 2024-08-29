const requestHandler = (req, res) => {
  const url = req.url;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Welcome to my web server </title></head>");
    res.write(
      "<body><form action = '/create-user' method = 'POST' > <input type='text' name='username'><button type='submit'>Send</button></form><h2>Raccoons are fascinating nocturnal creatures known for their dexterous front paws and distinctive black masks. Native to North America, they are highly adaptable and can thrive in various habitats, including urban areas. Despite their charming appearance, raccoons are wild animals and should be observed from a distance to avoid conflicts.</h2></body > "
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");
    res.write(
      "<body><h2><ul><li>1)First raccon</li><li>2)raccon</li><li>3)raccon</li><li>4)raccon</li><li>5)raccon</li><li>6)raccon</li></ul ></h2 ></body > "
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user") {
    const data = [];
    req.on("data", (chunk) => data.push(chunk));

    return req.on("end", () => {
      const parsedBody = Buffer.concat(data).toString();
      const message = parsedBody.split("=")[1];
      console.log(message);
      return res.end();
    });
  }

  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title> Its my test server page</title></head>");
  res.write("<body><h2>Node js server</h2></body>");
  res.write("</html>");
  res.end();
};

module.exports.handler = requestHandler;
