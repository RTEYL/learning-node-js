const fs = require('fs')


const reqHandler = (req,res) => {
  const {url, method} = req

  if(url === '/'){
    res.write('<html>')
    res.write('<head><title>Form</title></head>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body>')
    res.write('</html>')
    return res.end()
  }

  if(url === '/message' && method ==='POST' ){
    const body = []
    req.on('data', (chunk) =>{
      body.push(chunk)
    })
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      const message = parsedBody.split('=')[1]
      fs.writeFile('message.txt', message, (err) =>{
        res.writeHead(302, {'Location': '/'})
        return res.end()
      })
    })
  }

  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>My First Page</title></head>')
  res.write('</html>')
  res.end()
}

module.exports = reqHandler
