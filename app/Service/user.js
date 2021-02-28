const Service = require("egg").Service;
class userService extends Service {
  async login(data) {
    const res = await this.ctx.curl("http://157.122.54.189:9089/user/login", {
      method: "POST",
      data,
      contentType: 'json',
    });
    return res.data;
  }
  async signIn(CustID) {
    const res = await this.ctx.curl("http://pay.zk2016.com/api/web/SignIn.do", {
      method: "post",
      data: {
        CustID,
        PlaceID: "c4bf4cdd-a5f3-4e0d-926f-7f67e2042cc7",
      },
      contentType: 'json',
    });
    const resData = JSON.parse(res.data)
    return resData;
  }
}

module.exports = userService;



