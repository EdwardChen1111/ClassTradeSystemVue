<template>
  <head>
    <title>ClassTradeSystemTest</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=10.0, user-scalable=yes">
  </head>
  <body>
    <transition name="dialog" @after-leave="OCAddOrder(false)">
      <dialog ref="AddOrder" v-show="AddOrderStatus" id="addorder" @click="AOHCOS" @cancel.prevent>
        <table>
          <thead>
            <tr>
              <td>餐點</td>
              <td>單價</td>
              <td>數量</td>
              <td>總計</td>
            </tr>
          </thead>
          <tbody v-for="itempack in ordering.data" :key="itempack">
            <tr>
              <td>{{itempack.type}}</td>
              <td>{{itempack.price}}元</td>
              <td><input v-model="itempack.count"></td>
              <td>{{itempack.price*itempack.count}}元</td>
            </tr>
          </tbody>
          <tfoot>
            <div>
              <span>實收<input v-model="ordering.npay">元</span>
              <span>應收{{CalcTotal()}}元</span>
              <span>找零{{CalcHpay()}}元</span>
            </div>
            <div>
              <button @click="AddOrderStatus = false">取消</button>
              <p>
                <span>需等待{{CalTime(CalOrderTime())}}</span>
                <button @click="SendOrder">送出</button>
              </p>
            </div>
          </tfoot>
        </table>
      </dialog>
    </transition>
    <transition name="dialog" @after-leave="OCDetail(false)">
      <dialog ref="Detail" id="detail" v-show="DetailStatus" @click="DHCOS" @cancel.prevent>
        <table>
          <thead>
            <tr>
              <td>餐點</td>
              <td>數量</td>
            </tr>
          </thead>
          <tbody v-for="(value, key) in DetailThing.data" :key="key">
            <tr>
              <td>{{key}}</td>
              <td>{{value}}</td>
            </tr>
          </tbody>
          <tfoot>
            <button @click="DetailStatus = false">完成</button>
            <span>共{{DetailThing.total}}項</span>
          </tfoot>
        </table>
      </dialog>
    </transition>
    <header id="header" v-if="SystemStatus">
      <button id="asidebtn" @click.self="ocaside"><img src="./asidebtn.png" @click.self="ocaside"></button>
      <span id="headerindex">校慶班級收銀系統</span>
      <button class="headerbtn arrowbtn" id="cashbtn" v-if="HeaderBtnStatus.cashbtn" @click="ChangePage('cash')"><span @click="ChangePage('cash')">收銀</span></button>
      <button class="headerbtn arrowbtn" id="mdishbtn" v-if="HeaderBtnStatus.mdishbtn" @click="ChangePage('mdish')"><span @click="ChangePage('mdish')">製餐</span></button>
      <button class="headerbtn arrowbtn" id="odishbtn" v-if="HeaderBtnStatus.odishbtn" @click="ChangePage('odish')"><span @click="ChangePage('odish')">出餐</span></button>
      <button class="headerbtn arrowbtn" id="backbtn" v-if="HeaderBtnStatus.backbtn" @click="ChangePage('back')"><span @click="ChangePage('back')">後台</span></button>
    </header>
    <main id="loginsystem" v-if="!SystemStatus">
      <form @submit.prevent="login" id="loginform">
        <legend>校慶班級收銀系統登入</legend>
        <p id="class">
          <label id="labela">班級</label>
          <select size="0" name="class" class="loginselect" v-model="userinfo.class">
            <option value="none" selected disabled>請選擇班級</option>
            <option value="201">201</option>
            <option value="202">202</option>
            <option value="203">203</option>
            <option value="204">204</option>
            <option value="205">205</option>
            <option value="206">206</option>
            <option value="207">207</option>
            <option value="208">208</option>
            <option value="209">209</option>
            <option value="210">210</option>
            <option value="211">211</option>
            <option value="212">212</option>
            <option value="213">213</option>
            <option value="214">214</option>
            <option value="215">215</option>
            <option value="216">216</option>
            <option value="217">217</option>
            <option value="218">218</option>
            <option value="219">219</option>
            <option value="220">220</option>
          </select>
        </p>
        <p id="account">
          <label id="labela">帳號</label>
          <select size="0" name="account" class="loginselect" v-model="userinfo.account">
            <option value="none" selected disabled>請選擇職位</option>
            <option value="cash">收銀</option>
            <option value="mdish">製餐</option>
            <option value="odish">出餐</option>
            <option value="back">後台</option>
          </select>
        </p>
        <p id="password">
          <label id="labelp">密碼</label>
          <input type="password" name="passw" id="passw" v-model="userinfo.passw" required>
        </p>
        <p id="submit">
          <button type="submit" class="arrowbtn" id="loginbtn"><span>登入</span></button>
          <span id="wronglogin" v-if="WrongLogin">帳號或密碼錯誤</span>
        </p>
      </form>
    </main>
    <main id="mainsystem" v-if="SystemStatus">
      <aside>
        <h1 v-if="MainPageStatus.mdish === MainPageStatus.back">這裡什麼都沒有</h1>
        <div class="asidediv" v-if="MainPageStatus.mdish">
          <div class="asidediv" v-for="itempack in MealSettingData" :key="itempack.type">
            <button class="asidelistbtn" @click="ChangeMdishPage(itempack.type, index)">{{itempack.type}}</button>
          </div>
        </div>
        <div class="asidediv" v-if="MainPageStatus.back">
          <button class="asidelistbtn" @click="ChangeBackPage('statistics')">統計</button>
          <button class="asidelistbtn" @click="ChangeBackPage('mealsetting')">售價</button>
          <button class="asidelistbtn" @click="ChangeBackPage('formula')">公式</button>
          <button class="asidelistbtn" @click="ChangeBackPage('setting')">設定</button>
        </div>
      </aside>
      <div id="cash" v-if="MainPageStatus.cash">
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
          <tbody v-for="(itempack, index) in CashOdishData" :key="index">
            <tr v-if="itempack.show">
              <td>{{itempack.num}}</td>
              <td><button @click="detail(index)">詳細內容</button></td>
              <td>{{itempack.price}}元</td>
              <td>{{CalTime(itempack.time)}}</td>
              <td><button @click="RemoveDish(index)">取消訂單</button></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>
                <button @click="OAddOrder">新增訂單</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div id="mdish" v-if="MainPageStatus.mdish">
        <table>
          <caption>{{MdishType}}製作列表</caption>
          <thead>
            <tr>
              <td>製作份數</td>
              <td>製作時間</td>
              <td>開始製作</td>
              <td>暫停製作</td>
              <td>完成製作</td>
            </tr>
          </thead>
          <tbody v-for="(itempack, index) in NMDD" :key="index">
            <tr>
              <td>{{itempack.count}}</td>
              <td>{{CalTime(itempack.time)}}</td>
              <td><button @click="start(index)">開始製作</button></td>
              <td><button @click="stop(index)">暫停製作</button></td>
              <td><button @click="complete(index)">完成製作</button></td>
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
      <div id="odish" v-if="MainPageStatus.odish">
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
          <tbody v-for="(itempack, index) in CashOdishData" :key="itempack">
            <tr v-if="itempack.show">
              <td>{{itempack.num}}</td>
              <td><button @click="detail(index)">詳細內容</button></td>
              <td>{{CalTime(itempack.time)}}</td>
              <td><button @click="finish(index)">完成訂單</button></td>
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
      <div id="back" v-if="MainPageStatus.back">
        <div id="statistics" v-if="BackPageStatus.statistics">
          <h2>統計</h2>
          <div class="statisticsindex">
            <span>收入{{StatisticsData.income}}元</span>
            <span>支出{{StatisticsData.cost}}元</span>
          </div>
          <div class="statisticsindex">
            <span>最佳銷售:{{StatisticsData.best}}</span>
            <span>最差銷售:{{StatisticsData.worst}}</span>
          </div>
        </div>
        <div id="mealsetting" v-if="BackPageStatus.mealsetting">
          <table>
            <caption>餐點資料設定</caption>
            <thead>
              <tr>
                <td>品項</td>
                <td>原價</td>
                <td>折價</td>
                <td>進貨數量</td>
                <td>剩餘數量</td>
                <td>製作時間</td>
                <td>同時製作上限</td>
                <td>內容</td>
                <td>編輯</td>
              </tr>
            </thead>
            <tbody  v-for="itempack in MealSettingData" :key="itempack">
              <tr>
                <td>{{itempack.type}}</td>
                <td>{{itempack.oprice}}</td>
                <td>{{itempack.nprice}}</td>
                <td>{{itempack.ocount}}</td>
                <td>{{itempack.ncount}}</td>
                <td>{{CalTime(itempack.mtime)}}</td>
                <td>{{itempack.ulimit}}</td>
                <td>{{itempack.index}}</td>
                <td>
                  <button @click="MealConfig(itempack.type)">編輯</button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
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
        <div id="formula" v-if="BackPageStatus.formula">
          <table v-for="itempack in FormulaSettingData" :key="itempack">
            <caption>{{itempack.type}}</caption>
            <thead>
              <tr>
                <td>時間</td>
                <td>數量</td>
                <td>價格</td>
                <td>回本率</td>
              </tr>
            </thead>
            <tbody v-for="items in itempack.data" :key="items">
              <tr>
                <td>{{CalTime(items.time)}}</td>
                <td>{{items.count}}</td>
                <td>{{items.price}}</td>
                <td>{{items.percent.min + '% ~ ' + items.percent.max + '%'}}</td>
              </tr>
            </tbody>
            <tfoot>
              <button>新增條件</button>
            </tfoot>
          </table>
        </div>
        <div id="setting" v-if="BackPageStatus.setting">
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

<script setup>
  import "./style.css"
  import "./main.js"
  import axios from "axios";
  import { ref, onMounted, watch } from "vue";

  let COD, MDD, SD, MSD, FSD;

  let ServerURL = 'http://localhost:5000';
  let token = 'first';

  let AutoUpdate;

  async function GetToken () {
    await axios({
      method: 'post',
      baseURL: ServerURL,
      url: '/login',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      data: userinfo.value
    })
    .then((result) => { 
      token = result.data.token;
      axios.defaults.headers.common['Authorization'] = token;
    })
    .catch((err) => { 
      console.log(err.response.data);
    });
    return token != 'first';
  }

  async function InitData () {
    let success = false;
    await axios({
      method: 'get',
      baseURL: ServerURL,
      url: '/init',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((result) => { 
      console.log(result);
      COD = result.data.COD;
      MDD = result.data.MDD;
      SD = result.data.SD;
      MSD = result.data.MSD;
      FSD = result.data.FSD;
      success = true;
    })
    .catch((err) => { 
      console.log(err);
      success = false;
    });

    CashOdishData.value.push(...COD);
    MdishData.value.push(...MDD);
    StatisticsData.value = SD;
    MealSettingData.value.push(...MSD);
    FormulaSettingData.value.push(...FSD);

    AutoUpdate = setInterval(
      function () {
        axios({
          method: 'get',
          baseURL: ServerURL,
          url: '/checkUpdate',
          timeout: 1000,
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((result) => { 
          console.log(result.data);
          if (result.data == 'noUpdate') return;
          CashOdishData.value.splice(0, CashOdishData.value.length, ...result.data.COD);
          MdishData.value.splice(0, MdishData.value.length, ...result.data.MDD);
          StatisticsData.value = result.data.SD;
          MealSettingData.value.splice(0, MealSettingData.value.length, ...result.data.MSD);
          FormulaSettingData.value.splice(0, FormulaSettingData.value.length, ...result.data.FSD);
        })
        .catch((err) => { 
          console.log(err);
        });
      },1000
    );
    
    return success;
  }

  async function ModifyOrder (prefix, dict) {
    await axios({
      method: 'post',
      baseURL: ServerURL,
      url: '/modifyOrder',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        doing: prefix,
        dict: dict
      }
    })
    .then((result) => { 
      console.log(result);
    })
    .catch((err) => { 
      console.log(err.response.data);
    });

    return;
  }

  async function ModifyMdish (prefix, index) {
    const dict = NMDD.value[index];
    await axios({
      method: 'post',
      baseURL: ServerURL,
      url: '/modifyMdish',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        doing: prefix,
        dict: dict,
        type: MdishType.value
      }
    })
    .then((result) => { 
      console.log(result);
    })
    .catch((err) => { 
      console.log(err.response.data);
    });

    return;
  }

  let SystemStatus = ref(false),
    WrongLogin = ref(false),
    userinfo = ref({
      class: 201,
      account: 'cash',
      passw: ''
    }),

    AsideStatus = ref(false),
    AsidePos = ref('-9%'),
        
    HeaderBtnStatus = ref({
      cashbtn: false,
      mdishbtn: false,
      odishbtn: false,
      backbtn: false
    }),

    MainPageStatus = ref({
      cash: false,
      mdish: false,
      odish: false,
      back: false
    }),

    BackPageStatus = ref({
      statistics: true,
      mealsetting: false,
      formula: false,
      setting: false
    }),

    CashOdishData = ref([]),
    MdishData = ref([]),
    StatisticsData = ref({}),
    MealSettingData = ref([]),
    FormulaSettingData = ref([]),

    MdishType = ref(''),
    NMDD = ref([]),

    DetailStatus = ref(false),
    AddOrderStatus = ref(false),

    AddOrder = ref(),
    Detail = ref(),
    DetailThing = ref({
      data: {},
      total: 0,
    }),
    
    ordering = ref({
      data: [
        {
          type: 'a餐',
          price: 1000,
          count: 0
        }
      ],
      npay: 0,
      total: 0,
      time: 0
    });
    
  async function login () {
    let temp = await GetToken();
    if (!temp) {
      WrongLogin.value = true;
      return;
    }

    let init = await InitData();
    if (!init) {
      alert('伺服器通信失敗');
      return;
    }

    SystemStatus.value = true;
    WrongLogin.value = false;
    MainPageStatus.value[userinfo.value.account] = true;

    if (userinfo.value.account == 'mdish' && MealSettingData.value[0] != undefined) {
      ChangeMdishPage(MealSettingData.value[0].type);
      return;
    } else if (userinfo.value.account == 'back') {
      for (let i in HeaderBtnStatus.value) {
        HeaderBtnStatus.value[i] = true;
      }
      ChangeMdishPage(MealSettingData.value[0].type);
      return;
    }
    HeaderBtnStatus.value[userinfo.value.account + 'btn'] = true;
  }

  function ChangePage (name) {
    for (let i in MainPageStatus.value) {
      MainPageStatus.value[i] = false;
    }

    if (AsideStatus.value) {
      ocaside();
    }
    
    MainPageStatus.value[name] = true;
  }

  function ChangeBackPage (name) {
    for (let i in BackPageStatus.value) {
      BackPageStatus.value[i] = false;
    }
    BackPageStatus.value[name] = true;

    ocaside();
  }

  function ChangeMdishPage (type) {
    MdishType.value = type;
    MdishData.value.forEach((item) => {
      if (item.type == type) {
        NMDD.value.splice(0, NMDD.value.length, ...item.data);
      }
    });
  }

  function CalTime (time) {
    let word = '';
    const TTime = new Date(time - 28800000);

    if (TTime.getHours()) {
      word += TTime.getHours() + '時';
    }
    if (TTime.getMinutes()) {
      word += TTime.getMinutes() + '分';
    }
    if (TTime.getSeconds()) {
      word += TTime.getSeconds() + '秒';
    }

    return word;
  }

  function CalcHpay () {
    return ordering.value.npay - CalcTotal();
  }

  function CalcTotal () {
    let TTotal = 0;
    for (let i of ordering.value.data) {
      TTotal += i.price * i.count;
    }
    ordering.value.total = TTotal;
    return TTotal;
  }

  function CalOrderTime () {
    let time;
    try {
      time = CashOdishData.value[CashOdishData.value.length - 1].time;
    } catch (error) {
      time = 0;
    }

    for (let i of ordering.value.data) {
      for (let j of MealSettingData.value) {
        if (j.type == i.type) {
          time = Math.max(time, j.mtime*i.count);
          break;
        }
      }
    }
    ordering.value.time = time;
    return time;
  }

  function ocaside () {
    AsideStatus.value = !AsideStatus.value;

    if (AsideStatus.value) {
      AsidePos.value = '0%';
    } else {
      AsidePos.value = '-9%';
    }
  }

  function RemoveDish (index) {
    let temp = CashOdishData.value[index];
    ModifyOrder('remove', temp);
    //CashOdishData.value.splice(index,1);
  }

  function finish (index) {
    let temp = CashOdishData.value[index];
    ModifyOrder('finish', temp);
  }

  function start (index) {
    ModifyMdish('start', index);
  }

  function stop (index) {
    ModifyMdish('stop', index);
  }

  function complete (index) {
    ModifyMdish('complete', index);
  }

  function OAddOrder () {
    ordering.value.data.splice(0, ordering.value.data.length);
    for (let i in MealSettingData.value) {
      let temp = MealSettingData.value[i];
      ordering.value.data.push({
        type: temp.type,
        price: temp.nprice,
        count: 0
      })
    }
    AddOrderStatus.value = true;
  }

  function SendOrder () {
    let last, time = 0;
    if (CashOdishData.value[CashOdishData.value.length - 1] == undefined) {
      last = {
        num: -1,
        time: 0,
        order: -1
      }
    } else {
      last = CashOdishData.value[CashOdishData.value.length - 1];
    }

    for (let i of ordering.value.data) {
      for (let j of MealSettingData.value) {
        if (j.type == i.type) {
          time = Math.max(time, j.mtime*i.count);
          break;
        }
      }
    }
    
    let temp = {
      num: last.num + 1,
      dish: {},
      price: ordering.value.total,
      time: last.time + time,
      status: 0,
      show: true,
      order: last.order + 1
    };
    for (let i in ordering.value.data) {
      temp.dish[ordering.value.data[i].type] = ordering.value.data[i].count;
    }
    ModifyOrder('add', temp);
    //CashOdishData.value.push(temp);
    AddOrderStatus.value = false;
  }

  function detail (index) {
    let TTotal = 0;
    for (let i in CashOdishData.value[index].dish) {
      TTotal += parseInt(CashOdishData.value[index].dish[i]);
    }
    DetailThing.value.data = CashOdishData.value[index].dish;
    DetailThing.value.total = TTotal;

    DetailStatus.value = true;
  }

  function OCAddOrder (show) {
    if (!AddOrder.value) return;
    if (show) {
      AddOrder.value.showModal();
    } else {
      AddOrder.value.close();
    }
  }

  function OCDetail (show) {
    if (!Detail.value) return;
    if (show) {
      Detail.value.showModal();
    } else {
      Detail.value.close();
    }
  }

  function AOHCOS ({ clientX: x, clientY: y }) {
    if (!AddOrder.value) return;

    const { left, right, top, bottom } = AddOrder.value.getBoundingClientRect();
    if (x < left || x > right || y < top || y > bottom) {
      AddOrderStatus.value = false;
    }
  }

  function DHCOS ({ clientX: x, clientY: y }) {
    if (!Detail.value) return;

    const { left, right, top, bottom } = Detail.value.getBoundingClientRect();
    if (x < left || x > right || y < top || y > bottom) {
      DetailStatus.value = false;
    }
  }

  onMounted(() => {
    if (AddOrderStatus.value) OCAddOrder(true);
    if (DetailStatus.value) OCDetail(true);
  });

  watch(AddOrderStatus, (isOpen) => {
    if (isOpen) OCAddOrder(true);
  });

  watch(DetailStatus, (isOpen) => {
    if (isOpen) OCDetail(true);
  });
</script>

<style>
  aside {
    left: v-bind(AsidePos);
    transition: all 1s;
  }

  .dialog-enter-from,
  .dialog-leave-to {
    opacity: 0;
  }

  .dialog-enter-active {
    transition-timing-function: "ease-out";
  }

  .dialog-leave-active {
    transition-timing-function: "ease-in";
  }

  .dialog-enter-active,
  .dialog-leave-active {
    transition-duration: 200ms;
  }

  .dialog-enter-from#addorder,
  .dialog-leave-to#addorder {
    transform: scale(0.9) translateY(-2rem);
  }

  .dialog-enter-from#detail,
  .dialog-leave-to#detail {
    transform: scale(0.9) translateY(-2rem);
  }
</style>