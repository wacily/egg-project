'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    let data = {
      head: "猴子",
      body: {a:"1111111", b: "2222222"},
      foot: {f1:"aaaaa", f1:"bbbbbb"}
    }
    //await this.ctx.render("index");
      await this.ctx.render("index", data);
  }
}

module.exports = HomeController;
