<template>
  <head>
    <title>ClassTradeSystemTest</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=10.0, user-scalable=yes">
  </head>
  <body>
    <transition name="dialog" @after-leave="OCAddOrder(false)">
      <dialog ref="AddOrder" v-show="AddOrderStatus" id="addorder" @click="AOHCOS">
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
              <span>應收{{ordering.total}}元</span>
              <span>找零{{ordering.hpay}}元</span>
            </div>
            <div>
              <button @click="AddOrderStatus = false">取消</button>
              <p>
                <span>需等待{{CalTime(ordering.time)}}分鐘</span>
                <button>送出</button>
              </p>
            </div>
          </tfoot>
        </table>
      </dialog>
    </transition>
    <transition name="dialog" @after-leave="OCDetail(false)">
      <dialog ref="Detail" id="detail" v-show="DetailStatus" @click="DHCOS">
        <table>
          <caption>
            <span>單號:1<!--{{number}}--></span>
            <span>需等待1<!--{{time}}--></span>
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
            <button @click="DetailStatus = false">完成</button>
            <span>共1<!--{{total}}-->項</span>
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
        <p id="account">
          <label id="labela">帳號</label>
          <select size="0" name="account" id="acselect" v-model="userinfo.account">
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
        <button class="asidelistbtn" v-if="MainPageStatus.mdish">a餐</button>
        <button class="asidelistbtn" v-if="MainPageStatus.mdish">b餐</button>
        <button class="asidelistbtn" v-if="MainPageStatus.mdish">c餐</button>
        <button class="asidelistbtn" v-if="MainPageStatus.mdish">d餐</button>
        <button class="asidelistbtn" v-if="MainPageStatus.back" @click="ChangeBackPage('statistics')">統計</button>
        <button class="asidelistbtn" v-if="MainPageStatus.back" @click="ChangeBackPage('mealsetting')">售價</button>
        <button class="asidelistbtn" v-if="MainPageStatus.back" @click="ChangeBackPage('formula')">公式</button>
        <button class="asidelistbtn" v-if="MainPageStatus.back" @click="ChangeBackPage('setting')">設定</button>
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
          <tbody v-for="itempack in CashOdishData" :key="itempack">
            <tr>
              <td>{{itempack.num}}</td>
              <td><button @click="detail(itempack.order)">詳細內容</button></td>
              <td>{{itempack.price}}元</td>
              <td>{{CalTime(itempack.time)}}</td>
              <td><button @click="remove(itempack.order)">取消訂單</button></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>
                <button @click="AddOrderStatus = true">新增訂單</button>
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
          <tbody v-for="itempack in MdishData[MdishType]" :key="itempack">
            <tr>
              <td>{{itempack.count}}</td>
              <td>{{CalTime(itempack.time)}}</td>
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
          <tbody v-for="itempack in CashOdishData" :key="itempack">
            <tr>
              <td>{{itempack.num}}</td>
              <td><button @click="detail(itempack.order)">詳細內容</button></td>
              <td>{{CalTime(itempack.time)}}</td>
              <td><button @click="remove(itempack.order)">完成訂單</button></td>
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
  import { ref, onMounted, watch } from "vue";

  let COD = [
    {
      num: '000',
      dish: {
        a餐: 0,
        b餐: 0,
        c餐: 0,
        d餐: 0,
      },
      price: 1000,
      time: {
        hour: 1,
        min: 1,
        sec: 1
      },
      status: true,// true(doing) or false(finish)
      order: 0
    },
    {
      num: '001',
      dish: {
        a餐: 1,
        b餐: 1,
        c餐: 1,
        d餐: 1,
      },
      price: 5000,
      time: {
        hour: 1,
        min: 1,
        sec: 1
      },
      status: true,// true(doing) or false(finish)
      order: 1
    }
  ];

  let MDD = {
    a餐: [
      {
        count: 2,
        time: {
          hour: 1,
          min: 1,
          sec: 1
        },
        order: 0
      },
      {
        count: 1,
        time: {
          hour: 1,
          min: 1,
          sec: 1
        },
        order: 1
      }
    ],
    b餐: [
      {
        count: 2,
        time: {
          hour: 1,
          min: 1,
          sec: 1
        },
        order: 0
      },
      {
        count: 1,
        time: {
          hour: 1,
          min: 1,
          sec: 1
        },
        order: 1
      }
    ],
    c餐: [
      {
        count: 2,
        time: {
          hour: 1,
          min: 1,
          sec: 1
        },
        order: 0
      },
      {
        count: 1,
        time: {
          hour: 1,
          min: 1,
          sec: 1
        },
        order: 1
      }
    ],
    d餐: [
      {
        count: 2,
        time: {
          hour: 1,
          min: 1,
          sec: 1
        },
        order: 0
      },
      {
        count: 1,
        time: {
          hour: 1,
          min: 1,
          sec: 1
        },
        order: 1
      }
    ]
  };

  let SD = {
    income: 100000,
    cost: 1000000,
    best: 'a餐',
    worst: 'b餐',
    data: []
  }

  let MSD = {
    a餐: {
      type: 'a餐',
      oprice: 1000,
      nprice: 1000,
      ocount: 50000,
      ncount: 50000,
      index: 'none'
    },
    b餐: {
      type: 'b餐',
      oprice: 2000,
      nprice: 2000,
      ocount: 50000,
      ncount: 50000,
      index: 'none'
    },
    c餐: {
      type: 'c餐',
      oprice: 3000,
      nprice: 3000,
      ocount: 50000,
      ncount: 50000,
      index: 'none'
    },
    d餐: {
      type: 'd餐',
      oprice: 4000,
      nprice: 4000,
      ocount: 50000,
      ncount: 50000,
      index: 'none'
    }
  };

  let FSD = [
    {
      type: 'a餐',
      data: [
        {
          time: {
            hour: 1,
            min: 1,
            sec: 1
          },
          count: 200,
          price: 1000,
          percent: {
            min: 150,
            max: 200
          }
        },
        {
          time: {
            hour: 1,
            min: 1,
            sec: 1
          },
          count: 100,
          price: 1000,
          percent: {
            min: 150,
            max: 200
          }
        }
      ]
    },
    {
      type: 'b餐',
      data: [
        {
          time: {
            hour: 1,
            min: 1,
            sec: 1
          },
          count: 200,
          price: 1000,
          percent: {
            min: 150,
            max: 200
          }
        },
        {
          time: {
            hour: 1,
            min: 1,
            sec: 1
          },
          count: 300,
          price: 1000,
          percent: {
            min: 150,
            max: 200
          }
        }
      ]
    },
    {
      type: 'c餐',
      data: [
        {
          time: {
            hour: 1,
            min: 1,
            sec: 1
          },
          count: 200,
          price: 1000,
          percent: {
            min: 150,
            max: 200
          }
        },
        {
          time: {
            hour: 1,
            min: 1,
            sec: 1
          },
          count: 400,
          price: 1000,
          percent: {
            min: 150,
            max: 200
          }
        }
      ]
    },
    {
      type: 'd餐',
      data: [
        {
          time: {
            hour: 1,
            min: 1,
            sec: 1
          },
          count: 200,
          price: 1000,
          percent: {
            min: 150,
            max: 200
          }
        },
        {
          time: {
            hour: 1,
            min: 1,
            sec: 1
          },
          count: 500,
          price: 1000,
          percent: {
            min: 150,
            max: 200
          }
        },
      ]
    }
  ];

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

    CashOdishData = ref(COD),
    MdishData = ref(MDD),
    StatisticsData = ref(SD),
    MealSettingData = ref(MSD),
    FormulaSettingData = ref(FSD),

    MdishType = ref('a餐'),

    DetailStatus = ref(false),
    AddOrderStatus = ref(false),

    AddOrder = ref(),
    Detail = ref(),
    
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
      hpay: self.total - self.npay,
      time: {
        hour: 1,
        min: 1,
        sec: 1
      }
    });
    
  function login () {
    if (userinfo.value.passw == userinfo.value.account) {
      SystemStatus.value = true;
      WrongLogin.value = false;
      MainPageStatus.value[userinfo.value.account] = true;

      if (userinfo.value.account == 'back') {
        for (let i in HeaderBtnStatus.value) {
          HeaderBtnStatus.value[i] = true;
        }
      } else {
        HeaderBtnStatus.value[userinfo.value.account + 'btn'] = true;
      }
    } else {
      WrongLogin.value = true;
    }
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

  function CalTime (time) {
    let word = '';

    if (time.hour != 0) {
      word += time.hour + 'h';
    } else if (time.min != 0) {
      word += time.min + 'h';
    } else if (time.sec != 0) {
      word += time.sec + 'h';
    }

    return word;
  }

  function ocaside () {
    AsideStatus.value = !AsideStatus.value;

    if (AsideStatus.value) {
      AsidePos.value = '0%';
    } else {
      AsidePos.value = '-9%';
    }
  }

  function remove (order) {
    CashOdishData.value.splice(order,1);
  }

  function start (order) {
    alert(order);
  }

  function stop (order) {
    alert(order);
  }

  function finish (order) {
    MdishData.value[MdishType].splice(order,1);
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

  function detail (order) {
    console.log(order);
    DetailStatus.value = true;
    OCDetail(true);
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
    if (isOpen) OCAddOrder(isOpen);
  });

  watch(DetailStatus, (isOpen) => {
    if (isOpen) OCDetail(isOpen);
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