const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local');
const cookieParser = require('cookie-parser');
const redis = require('connect-redis')(session);

const saltRounds = 12;
// routes
const userRoute = require('./routes/users');

require('dotenv').config();
const PORT = process.env.EXPRESS_CONTAINER_PORT;

const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// passport stuff

// app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(
  session({
    store: new redis({ url: process.env.REDIS_URL }),
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
  }),
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(function(username, password, done) {
    return new User({ username: username })
      .fetch()
      .then((user) => {
        console.log(user);

        if (user === null) {
          return done(null, false, { message: 'bad username and password' });
        } else {
          user = user.toJSON();
          bcrypt.compare(password, user.password).then((res) => {
            // happy route: username exists, passsword matches
            if (res) {
              return done(null, user);
            }
            // error route
            else {
              return done(null, false, { message: 'bad username or password' });
            }
          });
        }
      })
      .catch((err) => {
        console.log('error', err);
        return done(err);
      });
  }),
);

passport.serializeUser(function(user, done) {
  console.log('serializing');
  return done(null, { id: user.id, username: user.username });
});

passport.deserializeUser(function(user, done) {
  console.log('deserial');
  console.log(user);

  return new User({ id: user.id }).fetch().then((user) => {
    user = user.toJSON();
    done(null, {
      id: user.id,
      username: user.username,
      role_id: user.role_id,
    });
  });
});

app.get('/', (req, res) => {
  console.log('hi');
  return res.send('hi');
});

app.use('/api/users', userRoute);

const server = app.listen(PORT, () => {
  console.log(`Express app is running at port ${PORT}`);
});
