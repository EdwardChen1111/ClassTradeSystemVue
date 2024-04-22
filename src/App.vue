<template>
  <head>
    <title>ClassTradeSystemTest</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=10.0, user-scalable=yes">
  </head>
  <body>
    <header id="header" v-if="systemstatus">
      <button id="asidebtn" @click.self="ocaside"><img src="./asidebtn.png" @click.self="ocaside"></button>
      <span id="headerindex">校慶班級收銀系統</span>
      <button class="headerbtn arrowbtn" id="cashbtn" v-if="cashbtn" @click="change('cashbtn')"><span @click="change('cashbtn')">收銀</span></button>
      <button class="headerbtn arrowbtn" id="mdishbtn" v-if="mdishbtn" @click="change('mdishbtn')"><span @click="change('mdishbtn')">製餐</span></button>
      <button class="headerbtn arrowbtn" id="odishbtn" v-if="odishbtn" @click="change('odishbtn')"><span @click="change('odishbtn')">出餐</span></button>
      <button class="headerbtn arrowbtn" id="backbtn" v-if="backbtn" @click="change('backbtn')"><span @click="change('backbtn')">後台</span></button>
    </header>
    <main id="loginsystem" v-if="loginstatus">
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
          <span id="wronglogin" v-if="wronglogin">帳號或密碼錯誤</span>
        </p>
      </form>
    </main>
    <main id="mainsystem" v-if="systemstatus">
      <aside>
        <h1 v-if="mdishstatus === backstatus">這裡什麼都沒有</h1>
        <button class="asidelistbtn" v-if="mdishstatus">a餐</button>
        <button class="asidelistbtn" v-if="mdishstatus">b餐</button>
        <button class="asidelistbtn" v-if="mdishstatus">c餐</button>
        <button class="asidelistbtn" v-if="mdishstatus">d餐</button>
        <button class="asidelistbtn" v-if="backstatus" @click="caside('statistics')">統計</button>
        <button class="asidelistbtn" v-if="backstatus" @click="caside('mealsetting')">售價</button>
        <button class="asidelistbtn" v-if="backstatus" @click="caside('formula')">公式</button>
        <button class="asidelistbtn" v-if="backstatus" @click="caside('setting')">設定</button>
      </aside>
      <dialog id="addorder" v-if="addorderstatus" @click="ocaddorder">
        <table>
          <thead>
            <tr>
              <td>餐點</td>
              <td>單價</td>
              <td>數量</td>
              <td>總計</td>
            </tr>
          </thead>
          <tbody v-for="itempack in ordering" :key="itempack">
            <tr>
              <td>{{itempack.type}}</td>
              <td>{{itempack.price}}元</td>
              <td><input v-model="itempack.count"></td>
              <td>{{itempack.price*itempack.count}}元</td>
            </tr>
          </tbody>
          <tfoot>
            <div>
              <span>實收<input>元</span>
              <span>應收{{total}}元</span>
            </div>
            <div>
              <button @click="ocaddorder">取消</button>
              <p>
                <span>需等待{{waittime}}分鐘</span>
                <button>送出</button>
              </p>
            </div>
          </tfoot>
        </table>
      </dialog>
      <dialog id="detail" v-if="detailstatus" @click="ocdetail">
        <table>
          <caption>
            <span>單號:{{number}}</span>
            <span>需等待{{time}}</span>
          </caption>
          <thead>
            <tr>
              <td>餐點</td>
              <td>數量</td>
            </tr>
          </thead>
          <tbody v-for="itempack in detailthing" :key="itempack">
            <tr>
              <td>{{itempack.type}}</td>
              <td>{{itempack.count}}</td>
            </tr>
          </tbody>
          <tfoot>
            <button @click="ocdetail">完成</button>
            <span>共{{total}}項</span>
          </tfoot>
        </table>
      </dialog>
      <div id="cash" v-if="cashstatus">
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
          <tbody v-for="itempack in cashthing" :key="itempack">
            <tr>
              <td>{{itempack.num}}</td>
              <td><button @click="detail(itempack.order)">詳細內容</button></td>
              <td>{{itempack.price}}元</td>
              <td>{{itempack.time}}min</td>
              <td><button @click="remove(itempack.order)">取消訂單</button></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>
                <button @click="ocaddorder">新增訂單</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div id="mdish" v-if="mdishstatus">
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
          <tbody v-for="itempack in mdishthing" :key="itempack">
            <tr>
              <td>{{itempack.num}}</td>
              <td>{{itempack.time}}min</td>
              <td><button @click="start(itempack.order)">開始製作</button></td>
              <td><button @click="stop(itempack.order)">暫停製作</button></td>
              <td><button @click="finish(itempack.order)">完成製作</button></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>
                <button>重新整理</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div id="odish" v-if="odishstatus">
        <table>
          <caption>訂單資料</caption>
          <thead>
            <tr>
              <td>訂單編號</td>
              <td>詳細資料</td>
              <td>等待時間</td>
              <td>完成訂單</td>
            </tr>
          </thead>
          <tbody v-for="itempack in odishthing" :key="itempack">
            <tr>
              <td>{{itempack.num}}</td>
              <td><button @click="detail(itempack.order)">詳細內容</button></td>
              <td>{{itempack.time}}min</td>
              <td><button @click="finish(itempack.order)">完成訂單</button></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>
                <button>重新整理</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div id="back" v-if="backstatus">
        <div id="statistics" v-if="statisticsstatus">
          <h2>統計</h2>
          <div class="statisticsindex">
            <span>收入{{statisticsthing.income}}元</span>
            <span>支出{{statisticsthing.cost}}元</span>
          </div>
          <div class="statisticsindex">
            <span>最佳銷售:{{statisticsthing.best}}</span>
            <span>最差銷售:{{statisticsthing.worst}}</span>
          </div>
        </div>
        <div id="mealsetting" v-if="mealsettingstatus">
          <table>
            <caption>餐點資料設定</caption>
            <thead>
              <tr>
                <td>品項</td>
                <td>原價</td>
                <td>折價</td>
                <td>進貨數量</td>
                <td>剩餘數量</td>
                <td>內容</td>
                <td>編輯</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>a餐</td>
                <td>1000</td>
                <td>500</td>
                <td>1000</td>
                <td>800</td>
                <td>none</td>
                <td>
                  <button>編輯</button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <button>新增品項</button>
                </td>
                <td>
                  <button>新增套餐</button>
                </td>
                <td>
                  <button>保存設定</button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div id="formula" v-if="formulastatus">
          <table>
            <caption>a餐</caption>
            <thead>
              <tr>
                <td>時間</td>
                <td>數量</td>
                <td>價格</td>
                <td>回本率</td>
              </tr>
            </thead>
            <tbody></tbody>
            <tfoot>
              <button>新增條件</button>
            </tfoot>
          </table>
        </div>
        <div id="setting" v-if="settingstatus">
          <table>
            <caption>已連線用戶</caption>
            <thead>
              <tr>
                <td>職位</td>
                <td>IP</td>
                <td>時間</td>
                <td>移除</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>收銀</td>
                <td>192.168.5.29</td>
                <td>24h</td>
                <td>
                  <button>移除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
        loginstatus: true,
        wronglogin: false,

        systemstatus: false,
        cashbtn: false,
        mdishbtn: false,
        odishbtn: false,
        backbtn: false,

        cashstatus: false,
        mdishstatus: false,
        odishstatus: false,
        backstatus: false,
        statisticsstatus: true,
        mealsettingstatus: false,
        formulastatus: false,
        settingstatus: false,

        asidestatus: '-8%',
        asidetype: false,

        cashthing: [
          {
            "num": '#000',
            "price": 1000,
            "time": 5,
            "order": 0
          }
        ],

        mdishtype: 'yeeeeee',
        mdishthing: [
          {
            "num": 1,
            "time": 5,
            "order": 0
          }
        ],
        mdishlist: '',

        odishthing: [
          {
            "num": '#000',
            "time": 5,
            "order": 0
          }
        ],
        odishlist: '',

        statisticsthing: {
            income: 1000,
            cost: 1000,
            best: 'a餐',
            worst: 'b餐'
        },

        addorderstatus: false,
        detailstatus: false
      }
    },
    methods: {
      login () {
        if (this.passw === this.account) {
          this.systemstatus = true;
          this.loginstatus = false;
          this.wronglogin = false;

          if (this.account === 'cash') {
            this.cashbtn = this.cashstatus = true;
          } else if (this.account === 'mdish') {
            this.mdishbtn = this.mdishstatus = true;
          } else if (this.account === 'odish') {
            this.odishbtn = this.odishstatus = true;
          } else {
            this.cashbtn = this.mdishbtn = this.odishbtn = this.backbtn = this.backstatus = true;
          }

        } else {
          this.wronglogin = true;
        }
      },

      change (name) {
        this.cashstatus = this.mdishstatus = this.odishstatus = this.backstatus = false;

        if (this.asidetype) {
          this.ocaside();
        }
        
        if (name == 'cashbtn') {
          this.cashstatus = true;
        } else if (name == 'mdishbtn') {
          this.mdishstatus = true;
        } else if (name == 'odishbtn') {
          this.odishstatus = true;
        } else if (name == 'backbtn') {
          this.backstatus = true;
        }
      },

      ocaside () {
        this.asidetype = !this.asidetype;
        if (this.asidetype) {
          this.asidestatus = '0%';
        } else {
          this.asidestatus = '-8%';
        }
      },

      caside (name) {
        this.statisticsstatus = this.mealsettingstatus = this.formulastatus = this.settingstatus = false;
        this.ocaside();
        if (name == 'statistics') {
          this.statisticsstatus = true;
        } else if (name == 'mealsetting') {
          this.mealsettingstatus = true;
        } else if (name == 'formula') {
          this.formulastatus = true;
        } else if (name == 'setting') {
          this.settingstatus = true;
        }
      },

      ocaddorder () {
        this.addorderstatus = !this.addorderstatus;
      },

      ocdetail () {
        this.detailstatus = !this.detailstatus;
      },

      remove () {

      }
    }
  }
</script>

<style>
  aside {
    left: v-bind(asidestatus);
    transition: all 1s;
  }
</style>