const Koa = require("koa");
const json = require("koa-json");
const KoaRouter = require("koa-router");

const bodyParser = require("koa-bodyparser");
const router = require('./router');

const app = new Koa();


app.use(json());
app.use(bodyParser());


app.use(router.routes());
app.use(router.allowedMethods());

const port = 8000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
