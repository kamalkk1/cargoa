const express = require("express");
const compression = require("compression");
const cors = require("cors");
const httpStatus = require("http-status");
const {json, urlencoded} = express;
const morgan = require('morgan');



const cookieParser = require("cookie-parser");
// const expressValidator = require("express-validator");

const app = express();
app.use(morgan("dev"));
app.use(cors({origin: true, credentials: true}));
app.use(json());
app.use(urlencoded({extended: false}));
app.use(cookieParser());
// app.use(expressValidator());

// parse json request body
app.use(express.json());

// parse urlencoded request body
// app.use(express.urlencoded({ extended: true }));

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options("*", cors());

//passport jwt auhtentication config
// app.use(passport.initialize());
// passport.use("jwt", jwtStrategy);


// Reroute all API request starting with "/v1" route
// app.use("/v1", routes);
// app.use('/v1/users/:userId', getUser);
// send back a 404 error for any unknown api request


// routes
// const testRoutes = require('./routes/test');
// app.use("/", testRoutes);

const userRoutes = require("./routes/user.route");
app.use("/", userRoutes);



app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// handle error
// app.use(errorHandler);

module.exports = app;