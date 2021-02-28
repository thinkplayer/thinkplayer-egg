const sigIn = {
  schedule: {
    cron: "0 29 14 * * *", // second minute hour (day of month) (month day of week)
    type: "all", // 指定所有的 worker 都需要执行
  },
  async task(ctx) {
    console.log('准备签到')
    const { app } = ctx;
    const { config } = app;
    const userList = config.userList;
    const nameList = Object.keys(config.userList);
    nameList.forEach((name) => {
      const timeout = getRandomIntInclusive(1, 59) * 1000;
      console.log('%c 🍏 timeout: ', 'font-size:20px;background-color: #42b983;color:#fff;', timeout);
      setTimeout(async () => {
        const code = await ctx.service.user.signIn(userList[name]);
        console.log('%c 🍚 code: ', 'font-size:20px;background-color: #42b983;color:#fff;', code);
        ctx.body = code;
      }, timeout);
    });
  },
};
module.exports = sigIn;

/**
 * 获取两数之间的随机整数
 * @param {*} min
 * @param {*} max
 * @returns
 */
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
}
