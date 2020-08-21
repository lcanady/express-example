# Express + Mongoose + Passport Demo

Here's a quick reference repo for setting up basic routing for your API. It's made a little looser than the express generator, but it doesn't have all of the boiler plate you don't need!

## Installation

```JS
git clone https://github.com/lcanady/express-demo.git
cd express-demo
npm install
```

The Demo uses a `.env` file to track a couple of enviornmental variables that your hosting is probably going to ask for, or provide space for. First is your `port` And then the `url` of your MongoDB instance.

```JS
// ./.env
PORT = 4000
HOST = /path/to/mongo/instance
```

Then start the server with `npm run dev` This will start Nodemon, it monitors your server for changes and restarts your process for you. It's a real time saver!

Then you should be able to point postman GET requests to http://localhost:4000/, and http://localhost:4000/api/hello/i234

We'll cover Mongoose and Models and then update this repo!

- Lem
