<template>
  <head>
    <title>ClassTradeSystemTest</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=10.0, user-scalable=yes">
  </head>
  <body>
    <header>
      <button id="asidebtn"><img src="./asidebtn.png"></button>
      <span id="headerindex">校慶班級收銀系統</span>
      <button class="headerbtn arrowbtn" id="cashbtn" v-on:click="change"><span>收銀</span></button>
      <button class="headerbtn arrowbtn" id="mdishbtn" v-on:click="change"><span>製餐</span></button>
      <button class="headerbtn arrowbtn" id="odishbtn" v-on:click="change"><span>出餐</span></button>
      <button class="headerbtn arrowbtn" id="backbtn" v-on:click="change"><span>後台</span></button>
    </header>
    <main id="mainsystem">
      <div class="cash">
        <h1>這是收銀</h1>
        <table>
          <caption>訂單資料</caption>
          <thead>
            <tr>
              <td>訂單編號</td>
              <td>詳細資料</td>
              <td>訂單價格</td>
              <td>等待時間</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#000</td>
              <td>
                <button>查閱詳細項目</button>
              </td>
              <td>1000</td>
              <td>5min</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mdish">
        <h1>這是製餐</h1>
      </div>
      <div class="odish">
        <h1>這是出餐</h1>
      </div>
      <div class="back">
        <h1>這是後台</h1>
      </div>
    </main>
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
  </body>
</template>

<script startup>
  import "./style.css"

  export default {
    data() {
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
      }
    },
    methods: {
      login() {
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
      change(event){
        this.cashstatus = this.mdishstatus = this.odishstatus = this.backstatus = 'none';
        if (event.target.id === 'cashbtn') {
          this.cashstatus = 'flex';
        } else if (event.target.id === 'mdishbtn') {
          this.mdishstatus = 'flex';
        } else if (event.target.id === 'odishbtn') {
          this.odishstatus = 'flex';
        } else {
          this.backstatus = 'flex';
        }
      }
    }
  }
</script>

<style>
  header {
    display: v-bind(systemstatus);
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

  .cash {
    display: v-bind(cashstatus);
  }

  .mdish {
    display: v-bind(mdishstatus);
  }

  .odish {
    display: v-bind(odishstatus);
  }

  .back {
    display: v-bind(backstatus);
  }
</style>