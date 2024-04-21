<template>
  <head>
    <title>ClassTradeSystemTest</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=10.0, user-scalable=yes">
  </head>
  <body>
    <header id="header">
      <button id="asidebtn" @click.self="ocaside"><img src="./asidebtn.png" @click.self="ocaside"></button>
      <span id="headerindex">校慶班級收銀系統</span>
      <button class="headerbtn arrowbtn" id="cashbtn" @click="change('cashbtn')"><span @click="change('cashbtn')">收銀</span></button>
      <button class="headerbtn arrowbtn" id="mdishbtn" @click="change('mdishbtn')"><span @click="change('mdishbtn')">製餐</span></button>
      <button class="headerbtn arrowbtn" id="odishbtn" @click="change('odishbtn')"><span @click="change('odishbtn')">出餐</span></button>
      <button class="headerbtn arrowbtn" id="backbtn" @click="change('backbtn')"><span @click="change('backbtn')">後台</span></button>
    </header>
    <main id="loginsystem">
      <form @submit.prevent="login" id="loginform">
        <legend>校慶班級收銀系統登入</legend>
        <p id="account">
          <label id="labela">帳號</label>
          <select size="0" name="account" id="acselect" v-model="account">
            <option value="none" selected disabled>請選擇職位</option>
            <option value="cash">收銀</option>
            <option value="mdish">製餐</option>
            <option value="odish">出餐</option>
            <option value="back">後台</option>
          </select>
        </p>
        <p id="password">
          <label id="labelp">密碼</label>
          <input type="password" name="passw" id="passw" v-model="passw" required>
        </p>
        <p id="submit">
          <button type="submit" class="arrowbtn" id="loginbtn"><span>登入</span></button>
          <span id="wronglogin">帳號或密碼錯誤</span>
        </p>
      </form>
    </main>
    <main id="mainsystem">
      <aside v-html="aside"></aside>
      <div id="cash">
        <table>
          <caption>訂單資料</caption>
          <thead>
            <tr>
              <td>訂單編號</td>
              <td>詳細資料</td>
              <td>訂單價格</td>
              <td>等待時間</td>
              <td>移除訂單</td>
            </tr>
          </thead>
          <tbody v-html="cashlist"></tbody>
          <tfoot>
            <tr>
              <td>
                <button>新增訂單</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div id="mdish">
        <table>
          <caption>{{mdishtype}}餐製作列表</caption>
          <thead>
            <tr>
              <td>製作份數</td>
              <td>製作時間</td>
              <td>開始製作</td>
              <td>暫停製作</td>
              <td>完成製作</td>
            </tr>
          </thead>
          <tbody v-html="mdishlist"></tbody>
          <tfoot>
            <tr>
              <td>
                <button>重新整理</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div id="odish">
        <table>
          <caption>訂單資料</caption>
          <thead>
            <tr>
              <td>訂單編號</td>
              <td>詳細資料</td>
              <td>等待時間</td>
            </tr>
          </thead>
          <tbody v-html="odishlist"></tbody>
          <tfoot>
            <tr>
              <td>
                <button>重新整理</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div id="back">
        <h1>這是後台</h1>
      </div>
    </main>
  </body>
</template>

<script startup>
  import "./style.css"
  import "./main.js"

  export default {
    data () {
      return {
        loginstatus: 'flex',
        wronglogin: 'none',

        systemstatus: 'none',
        cashbtn: 'none',
        mdishbtn: 'none',
        odishbtn: 'none',
        backbtn: 'none',

        cashstatus: 'none',
        mdishstatus: 'none',
        odishstatus: 'none',
        backstatus: 'none',

        aside: '<p>1111</p>',
        asidestatus: 'none',
        asidetype: false,

        cashthing: {
          "num": ['#000'],
          "price": [1000],
          "time": [5],
          "order": [0]
        },
        cashlist: '',

        mdishtype: 'yeeeeee',
        mdishthing: {
          "num": [1],
          "time": [5],
          "order": [0],
        },
        mdishlist: '',

        odishthing: {
          "num": ['#000'],
          "time": [5],
          "order": [0]
        },
        odishlist: '',
      }
    },
    methods: {
      login () {
        if (this.passw === this.account) {
          this.systemstatus = 'flex';
          this.loginstatus = 'none';
          this.wronglogin = 'none';

          if (this.account === 'cash') {
            this.cashbtn = this.cashstatus = 'flex';
          } else if (this.account === 'mdish') {
            this.mdishbtn = this.mdishstatus = 'flex';
          } else if (this.account === 'odish') {
            this.odishbtn = this.odishstatus = 'flex';
          } else {
            this.cashbtn = this.mdishbtn = this.odishbtn = this.backbtn = this.backstatus = 'flex';
          }
        } else {
          this.wronglogin = 'flex';
        }
      },
      change (name) {
        this.cashstatus = this.mdishstatus = this.odishstatus = this.backstatus = 'none';
        this.ocaside();
        if (name == 'cashbtn') {
          this.cashstatus = 'flex';
          this.cashlist =
            `<tr>\
              <td>${this.cashthing["num"][0] == undefined ? 'none' : this.cashthing["num"][0]}</td>\
              <td><button @click="detail(${this.cashthing["order"][0] == undefined ? 'none' : this.cashthing["order"][0]})">詳細內容</button></td>\
              <td>${this.cashthing["price"][0] == undefined ? 'none' : this.cashthing["price"][0]}元</td>\
              <td>${this.cashthing["time"][0] == undefined ? 'none' : this.cashthing["time"][0]}min</td>\
              <td><button @click="remove(${this.cashthing["order"][0] == undefined ? 'none' : this.cashthing["order"][0]})">取消訂單</button></td>\
            </tr>`;
        } else if (name == 'mdishbtn') {
          this.mdishstatus = 'flex';
          this.mdishlist =
            `<tr>\
              <td>${this.mdishthing["num"][0] == undefined ? 'none' : this.mdishthing["num"][0]}</td>\
              <td>${this.mdishthing["time"][0] == undefined ? 'none' : this.mdishthing["time"][0]}min</td>\
              <td><button @click="start(${this.mdishthing["order"][0] == undefined ? 'none' : this.mdishthing["order"][0]})">開始製作</button></td>\
              <td><button @click="stop(${this.mdishthing["order"][0] == undefined ? 'none' : this.mdishthing["order"][0]})">暫停製作</button></td>\
              <td><button @click="finish(${this.mdishthing["order"][0] == undefined ? 'none' : this.mdishthing["order"][0]})">完成製作</button></td>\
            </tr>`;
        } else if (name == 'odishbtn') {
          this.odishstatus = 'flex';
          this.odishlist =
            `<tr>\
              <td>${this.cashthing["num"][0] == undefined ? 'none' : this.cashthing["num"][0]}</td>\
              <td><button @click="detail(${this.cashthing["order"][0] == undefined ? 'none' : this.cashthing["order"][0]})">詳細內容</button></td>\
              <td>${this.cashthing["time"][0] == undefined ? 'none' : this.cashthing["time"][0]}min</td>\
            </tr>`;
        } else if (name == 'backbtn') {
          this.backstatus = 'flex';
        }
      },
      ocaside () {
        if (this.asidetype) {
          this.asidetype = false;
          this.asidestatus = 'none';
        } else {
          this.asidetype = true;
          this.asidestatus = 'flex';
          if (this.mdishstatus == 'flex') {
            this.aside =
              `<button>a餐</button>
              <button>b餐</button>
              <button>c餐</button>
              <button>d餐</button>
              `;
          } else if (this.backstatus == 'flex') {
            this.aside =
              `<button>統計</button>
              <button>售價</button>
              <button>折價</button>
              <button>公式</button>
              `;
          } else {
            this.aside =
              `<h1>這裡什麼都沒有</h1>
              `;
          }
        }
      }
    }
  }
</script>

<style>
  header {
    display: v-bind(systemstatus);
  }

  aside {
    display: v-bind(asidestatus);
  }

  #cashbtn {
    display: v-bind(cashbtn);
  }

  #mdishbtn {
    display: v-bind(mdishbtn);
  }

  #odishbtn {
    display: v-bind(odishbtn);
  }

  #backbtn {
    display: v-bind(backbtn);
  }

  #loginsystem {
    display: v-bind(loginstatus);
  }

  #wronglogin {
    display: v-bind(wronglogin);
  }

  #mainsystem {
    display: v-bind(systemstatus);
  }

  #cash {
    display: v-bind(cashstatus);
  }

  #mdish {
    display: v-bind(mdishstatus);
  }

  #odish {
    display: v-bind(odishstatus);
  }

  #back {
    display: v-bind(backstatus);
  }
</style>