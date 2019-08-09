require('dotenv').config();
const path = require('path');

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(path.join(__dirname, 'client/build')))

  server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
  })
}

const server = require('./server.js');

const port = process.env.PORT || 8000;

server.listen(port, () =>
  console.log('\x1b[1m\x1b[32m', `*** listening on port ${port} ***`, '\x1b[0m')
);

/*
play this: https://www.youtube.com/watch?v=d-diB65scQU

Sing along:

here's a little code I wrote, you might want to read it really slow, don't worry be happy
in every line there may be trouble, but if you worry you make it double, don't worry, be happy
ain't got no sense of what is REST? just concentrate on learning Express, don't worry, be happy
your file is getting way too big, bring a Router and make it thin, don't worry, be crafty
there is no data on that route, just write some code, you'll sort it out… don't worry, just API…
I need this code, just don't know where, perhaps should make some middleware, don't worry, be happy

Go code!
*/