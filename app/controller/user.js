const Controller = require("egg").Controller;
class UserController extends Controller {
  async login() {
    const { ctx } = this;
    const code = await ctx.service.user.login(ctx.request.body);
    ctx.body = code;
  }
  async signIn() {
    const { ctx, config } = this;
    const userList = config.userList;
    const nameList = Object.keys(config.userList);
    nameList.forEach((name) => {
      const timeout = getRandomIntInclusive(1, 59) * 1000;
      setTimeout(async () => {
        const code = await ctx.service.user.signIn(userList[name]);
        console.log(`${name}: `, code);
        ctx.body = code;
      }, timeout);
    });
  }
}
module.exports = UserController;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
}
