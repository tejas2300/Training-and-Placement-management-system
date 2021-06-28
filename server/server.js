const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const mongoose = require("mongoose");

//bring routes
const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blog");
const userRouters = require("./routes/userRoutes");
// const facultieRouter = require('./routes/faculties');
const companyRouter = require('./routes/companies');
const scheduleRouter = require('./routes/schedule');
const trainingRouter = require('./routes/training');
const departmentRouter = require('./routes/department');
const resourceRouter = require('./routes/eresource');
const statRouter = require('./routes/statistics');


//app
const app = express();

//database connect
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB Connected")).catch = (err) => {
  console.log(err.message);
};

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

//cors
if (process.env.NODE_ENV == "development") {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

//routes middleware
app.use("/api", blogRoutes);
app.use("/api", authRoutes);
app.use("/api", userRouters);
app.use("/users", userRouters);
app.use("/company",companyRouter);
// app.use("/facultie",facultieRouter);
app.use("/schedule",scheduleRouter);
app.use("/training",trainingRouter);
app.use("/dept",departmentRouter);
app.use("/resource",resourceRouter);
app.use("/stats",statRouter);
app.disable('etag');

//port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Your server is running on port ${port}`);
});
