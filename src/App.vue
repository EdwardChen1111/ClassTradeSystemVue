<template>
  <head>
    <title>ClassTradeSystemTest</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=10.0, user-scalable=yes">
  </head>
  <body>
    <transition name="dialog" @after-leave="OCAddOrder(false)">
      <dialog ref="AddOrder" v-show="AddOrderStatus" id="addorder" @click="AOHCOS" @cancel.prevent>
        <form @submit.prevent="SendOrder">
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
                <td><input type="number" min="0" :max="CalMaxCount(itempack.type)" v-model="itempack.count" required></td>
                <td>{{itempack.price*itempack.count}}元</td>
              </tr>
            </tbody>
          </table>
          <div class="tfoot">
            <div>
              <span>實收<input type="number" min="0" :max="CalcTotal()+10000" v-model="ordering.npay">元</span>
              <span>應收{{CalcTotal()}}元</span>
              <span>找零{{CalcHpay()}}元</span>
            </div>
            <div>
              <button type="button" @click="AddOrderStatus = false">取消</button>
              <p>
                <span>需等待{{CalTime(CalOrderTime())}}</span>
                <button type="submit">送出</button>
              </p>
            </div>
          </div>
        </form>
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
    <transition name="dialog" @after-leave="OCSendSettingDish(false)">
      <dialog ref="SendSettingDish" v-show="SendSettingDishStatus" id="sendsettingdish" @click="SSDHCOS" @cancel.prevent>
        <form @submit.prevent="ModifyMealSettingData('addDish', SendSettingData); SendSettingDishStatus = false">
          <table>
            <caption>餐點資料設定</caption>
            <thead>
              <tr>
                <td>品項</td>
                <td>成本</td>
                <td>折價</td>
                <td>進貨數量</td>
                <td>剩餘數量</td>
                <td>製作時間</td>
                <td>同時製作上限</td>
                <td>刪除</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="text" :disabled="CheckSSDT(SendSettingData.type)" v-model="SendSettingData.type" maxlength="10" required></td>
                <td><input type="number" min="0" max="100000" v-model="SendSettingData.oprice" required></td>
                <td><input type="number" min="0" max="100000" v-model="SendSettingData.nprice" required></td>
                <td><input type="number" min="0" max="1000000" v-model="SendSettingData.ocount" required></td>
                <td><input type="number" min="0" :max="SendSettingData.ocount" v-model="SendSettingData.ncount" required></td>
                <td><input type="number" min="0" max="43200000" v-model="SendSettingData.mtime" required></td>
                <td><input type="number" min="0" max="10000" v-model="SendSettingData.ulimit" required></td>
                <td><button @click="ModifyMealSettingData('remove', SendSettingData); SendSettingDishStatus = false">刪除</button></td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <button type="button" @click="SendSettingDishStatus = false">取消</button>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <button type="submit">保存設定</button>
                </td>
              </tr>
            </tfoot>
          </table>
        </form>
      </dialog>
    </transition>
    <transition name="dialog" @after-leave="OCSendSettingCombo(false)">
      <dialog ref="SendSettingCombo" v-show="SendSettingComboStatus" id="sendsettingcombo" @click="SSCHCOS" @cancel.prevent>
        <form @submit.prevent="ModifyMealSettingData('addCombo', SendSettingData)">
          <table>
            <caption><span>套餐資料設定</span><input :disabled="CheckSSDT(SendSettingData.type)" v-model="SendSettingData.type"></caption>
            <thead>
              <tr>
                <td>餐點</td>
                <td>單價</td>
                <td>數量</td>
                <td>成本</td>
              </tr>
            </thead>
            <tbody v-for="(itempack, index) in SendSettingData.index" :key="index">
              <tr>
                <td>{{itempack.type}}</td>
                <td>{{itempack.price}}</td>
                <td><input type="number" min="0" :max="CalMaxCount(itempack.type)" v-model="itempack.num" required></td>
                <td>{{itempack.price*itempack.num}}</td>
              </tr>
            </tbody>
          </table>
          <div class="tfoot">
            <div>
              <p>
                <span>銷售數量</span>
                <input type="number" min="0" max="5000000" v-model="SendSettingData.ocount" required>
              </p>
              <p>
                <span>套餐價</span>
                <input type="number" min="0" max="5000000" v-model="SendSettingData.nprice" required>
              </p>
              <p>
                <span>原價{{CalcSSDCTP()}}</span>
              </p>
            </div>
            <div>
              <button type="button" @click="SendSettingComboStatus = false">取消</button>
              <button type="button" @click="ModifyMealSettingData('remove', SendSettingData); SendSettingComboStatus = false">刪除</button>
              <button type="submit">保存設定</button>
            </div>
          </div>
        </form>
      </dialog>
    </transition>
    <transition name="dialog" @after-leave="OCModifyFormula(false)">
      <dialog ref="ModifyFormula" v-show="ModifyFormulaStatus" id="modifyformula" @click="MFHCOS" @cancel.prevent>
        <form @submit.prevent="SendModifyFormula('addFormula')">
          <table>
            <caption>{{ModifyFormulaData.type}}</caption>
            <thead>
              <tr>
                <td>時間</td>
                <td>數量</td>
                <td>價格</td>
                <td>刪除</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="datetime-local" v-model="ModifyFormulaData.data.time" required></td>
                <td><input type="number" min="0" v-model="ModifyFormulaData.data.count" required></td>
                <td><input type="number" min="0" v-model="ModifyFormulaData.data.price" required></td>
                <td>
                  <button type="button" @click="SendModifyFormula('remove')">刪除</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="tfoot">
            <div>
              <button type="button" @click="ModifyFormulaStatus = false">取消</button>
              <button type="submit">保存設定</button>
            </div>
          </div>
        </form>
      </dialog>
    </transition>
    <transition name="dialog" @after-leave="OCCheckToken(false)">
      <dialog ref="CheckTokenDialog" id="checktoken" v-show="CheckTokenStatus" @click="CTHCOS" @cancel.prevent>
        <table>
          <thead>
            <tr>
              <td>令牌</td>
              <td>登出</td>
            </tr>
          </thead>
          <tbody v-for="item in UserToken.data" :key="item">
            <tr>
              <td>{{item}}</td>
              <td>
                <button type="button" @click="UserLogOut(UserToken.account, item)">刪除</button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <button @click="CheckTokenStatus = false">完成</button>
          </tfoot>
        </table>
      </dialog>
    </transition>
    <transition name="dialog" @after-leave="OCModifyUser(false)">
      <dialog ref="ModifyUser" id="modifyuser" v-show="ModifyUserStatus" @click="MUHCOS" @cancel.prevent>
        <form @submit.prevent="ModifyUserData(nowUserData)">
          <table>
            <thead>
                <tr>
                  <td>職位</td>
                  <td>密碼</td>
                  <td>最大在線人數</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{nowUserData.account}}</td>
                  <td><input maxlength="12" v-model="nowUserData.password" required></td>
                  <td><input type="number" min="1" max="50" v-model="nowUserData.maxonline" required></td>
                </tr>
              </tbody>
            <tfoot>
              <button type="button" @click="ModifyUserStatus = false">取消</button>
              <button type="submit">送出</button>
            </tfoot>
          </table>
        </form>
      </dialog>
    </transition>
    <transition name="dialog" @after-leave="OCCostumeMdishShow(false)">
      <dialog ref="MdishShow" id="mdishshow" v-show="CostumeMdishShowStatus" @click="CMSHCOS" @cancel.prevent>
        <table>
          <thead>
            <tr>
              <td>項目</td>
              <td>顯示</td>
            </tr>
          </thead>
          <tbody v-for="(itempack, index) in MdishShowList" :key="index">
            <tr>
              <td>{{itempack.type}}</td>
              <td><input type="checkbox" v-model="itempack.check"></td>
            </tr>
          </tbody>
          <tfoot>
            <button @click="CostumeMdishShowStatus = false; ChangeMdishPage('costume')">完成</button>
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
      <transition name="aside">
        <aside v-show="AsideStatus">
          <h1 v-if="MainPageStatus.mdish === MainPageStatus.back">這裡什麼都沒有</h1>
          <div class="asidediv" v-if="MainPageStatus.mdish">
            <button class="asidelistbtn" @click="ChangeMdishPage('all')">全部</button>
            <button class="asidelistbtn" @click="ChangeMdishPage('costume')">自定義</button>
            <div class="asidediv" v-for="itempack in MealSettingData" :key="itempack.type">
              <button class="asidelistbtn" v-if="itempack.index == 'delete'" @click="ChangeMdishPage(itempack.type)">{{itempack.type}}</button>
            </div>
          </div>
          <div class="asidediv" v-if="MainPageStatus.back">
            <button class="asidelistbtn" @click="ChangeBackPage('statistics')">統計</button>
            <button class="asidelistbtn" @click="ChangeBackPage('mealsetting')">售價</button>
            <button class="asidelistbtn" @click="ChangeBackPage('formula')">公式</button>
            <button class="asidelistbtn" @click="ChangeBackPage('setting')">設定</button>
          </div>
        </aside>
      </transition>
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
              <td><button @click="detail(index, 'CO')">詳細內容</button></td>
              <td>{{itempack.price}}元</td>
              <td>{{CalTime(itempack.time)}}</td>
              <td><button :disabled="itempack.status" @click="RemoveDish(index)">取消訂單</button></td>
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
        <div id="mdishtable" v-for="(itempack, NMDDindex) in NMDD" :key="NMDDindex">
          <table v-if="CheckMdishTable(itempack.type)">
            <caption>{{itempack.type}}製作列表</caption>
            <thead>
              <tr>
                <td>製作份數</td>
                <td>製作時間</td>
                <td>開始製作</td>
                <td>暫停製作</td>
                <td>完成製作</td>
              </tr>
            </thead>
            <tbody v-for="(item, index) in itempack.data" :key="index">
              <tr>
                <td>{{item.count}}</td>
                <td>{{CalTime(item.mtime)}}</td>
                <td><button @click="start(NMDDindex, index)">開始製作</button></td>
                <td><button @click="stop(NMDDindex, index)">暫停製作</button></td>
                <td><button :disabled="item.mtime" @click="complete(NMDDindex, index)">完成製作</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <button v-if="MdishType == 'costume'" @click="OCostumeMdishShow()">編輯顯示項目</button>
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
              <td><button @click="detail(index, 'CO')">詳細內容</button></td>
              <td>{{CalTime(itempack.time)}}</td>
              <td><button :disabled="CheckDishFinish(itempack.order)" @click="finish(index)">完成訂單</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="back" v-if="MainPageStatus.back">
        <div id="statistics" v-if="BackPageStatus.statistics">
          <h2>統計</h2>
          <div class="statisticsindex">
            <span>收入{{StatisticsData.income}}元</span>
            <span>支出{{StatisticsData.cost}}元</span>
          </div>
          <!--<div class="statisticsindex">
            <span>最佳銷售:{{StatisticsData.best}}</span>
            <span>最差銷售:{{StatisticsData.worst}}</span>
          </div>-->
        </div>
        <div id="mealsetting" v-if="BackPageStatus.mealsetting">
          <table>
            <caption>餐點資料設定</caption>
            <thead>
              <tr>
                <td>品項</td>
                <td>成本</td>
                <td>售價</td>
                <td>進貨數量</td>
                <td>剩餘數量</td>
                <td>製作時間</td>
                <td>同時製作上限</td>
                <td>內容</td>
                <td>編輯</td>
              </tr>
            </thead>
            <tbody  v-for="(itempack, index) in MealSettingData" :key="itempack">
              <tr>
                <td>{{itempack.type}}</td>
                <td>{{itempack.oprice}}</td>
                <td>{{itempack.nprice}}</td>
                <td>{{itempack.ocount}}</td>
                <td>{{itempack.ncount}}</td>
                <td>{{CalTime(itempack.mtime)}}</td>
                <td>{{itempack.ulimit}}</td>
                <td>
                  <button v-if="itempack.index == 'delete'" @click="ModifyMealSettingData('remove', itempack)">刪除</button>
                  <button v-if="itempack.index != 'delete'" @click="detail(index, 'MS')">詳細內容</button>
                </td>
                <td>
                  <button @click="MealConfig(index)">編輯</button>
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
                <td></td>
                <td>
                  <button @click="MealConfig('AddDish')">新增品項</button>
                </td>
                <td>
                  <button @click="MealConfig('AddCombo')">新增套餐</button>
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
                <td>編輯</td>
              </tr>
            </thead>
            <tbody v-for="(items, index) in itempack.data" :key="items">
              <tr>
                <td>{{CalMFTime(items.time)}}</td>
                <td>{{items.count}}</td>
                <td>{{items.price}}</td>
                <td>
                  <button @click="OModifyFormula('', itempack, index)">編輯</button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <button @click="OModifyFormula('add', itempack)">新增條件</button>
            </tfoot>
          </table>
        </div>
        <div id="setting" v-if="BackPageStatus.setting">
          <table>
            <caption>已連線用戶</caption>
            <thead>
              <tr>
                <td>職位</td>
                <td>密碼</td>
                <td>在線人數</td>
                <td>最大在線人數</td>
                <td>令牌</td>
                <td>編輯</td>
              </tr>
            </thead>
            <tbody v-for="itempack in UserData" :key="itempack">
              <tr>
                <td>{{UETUC[itempack.account]}}</td>
                <td>{{itempack.password}}</td>
                <td>{{itempack.onlinecount}}</td>
                <td>{{itempack.maxonline}}</td>
                <td>
                  <button :disabled="!itempack.onlinecount" @click="CheckToken(itempack.account, itempack.data)">查看</button>
                </td>
                <td>
                  <button @click="OModifyUserData(itempack)">編輯</button>
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
  import { cloneDeep } from 'lodash';

  let COD, MDD, SD, MSD, FSD, UETUC = {
    cash: '收銀',
    mdish: '製餐',
    odish: '出餐',
    back: '後台'
  };

  let ServerURL = 'https://edwardChen1111.ddns.net:5000';
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
      if (userinfo.value.account == 'back') {
        UserData.value.splice(0, UserData.value.length, ...result.data.UserData);
      }
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
          console.log(userinfo.value.account);
          if (userinfo.value.account == 'back') {
            UserData.value.splice(0, UserData.value.length, ...result.data.UserData);
            console.log(UserData.value);
          }
          let check = false;
          for (let j of MealSettingData.value) {
            if (j.type == MdishType.value) {
              check = true;
            }
          }
          if (!check && MealSettingData.value[0] != undefined && MdishType.value != 'all' && MdishType.value != 'costume') {
            MdishType.value = 'all';
          }
          if (MdishType.value != 'all' && MdishType.value != 'costume') {
            for (let item of MdishData.value) {
              if (item.type == MdishType.value) {
                NMDD.value.splice(0, NMDD.value.length, item);
              }
            }
          } else if (MdishType.value == 'all') {
            NMDD.value.splice(0, NMDD.value.length, ...MdishData.value);
          } else if (MdishType.value == 'costume') {
            NMDD.value.splice(0, NMDD.value.length);
            for (let i of MdishShowList.value) {
              let check = false;
              for (let j of MdishData.value) {
                if (i.type == j.type && i.check) {
                  check = true;
                  NMDD.value.push(j);
                }
              }
              if (!check) {
                NMDD.value.push({
                  type: i.type,
                  data: []
                });
              }
            }
          }
        })
        .catch((err) => { 
          console.log(err);
          if (err.response.data == 'log out') {
            SystemStatus.value = false;
            WrongLogin.value = false;
            MainPageStatus.value[userinfo.value.account] = true;
            token = 'first';
            CashOdishData.value.splice(0, CashOdishData.value.length);
            MdishData.value.splice(0, MdishData.value.length);
            StatisticsData.value = {};
            MealSettingData.value.splice(0, MealSettingData.value.length);
            FormulaSettingData.value.splice(0, FormulaSettingData.value.length);
            axios.defaults.headers.common['Authorization'] = token;
            for (let i in HeaderBtnStatus.value) {
              HeaderBtnStatus.value[i] = false;
            }
            for (let i in MainPageStatus.value) {
              MainPageStatus.value[i] = false;
            }
            clearInterval(AutoUpdate);
            alert('登入失效');
          }
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

  async function ModifyMdish (prefix, NMDDindex, index) {
    const dict = NMDD.value[NMDDindex].data[index];
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
        type: NMDD.value[NMDDindex].type
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

  async function ModifyMealSettingData (prefix, dict) {
    if (prefix == 'delete') {
      let comform = false;
      for (let i of MealSettingData) {
        if (i.type == dict.type) {
          comform = true;
          break
        }
      }
      if (!comform) {
        return;
      }
      SendSettingDishStatus.value = false; 
    } else if (prefix == 'addCombo') {
      let check = false;
      if (dict.type == '') {
        alert('請輸入有效套餐名稱');
        return;
      }
      if (dict.ocount != 0) {
        dict.ncount = dict.ocount;
      } else {
        alert('請輸入有效套餐數量');
        return;
      }
      for (let i of dict.index) {
        if (i.num != 0) {
          check = true;
          break;
        }
      }
      if (!check) {
        alert('請輸入有效餐點數量');
        return;
      }
      SendSettingComboStatus.value = false; 
    }

    await axios({
      method: 'post',
      baseURL: ServerURL,
      url: '/mealSettingData',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        doing: prefix,
        dict: dict,
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
  
  async function SendModifyFormula (doing) {
    let dict = ModifyFormulaData.value;
    dict.data.time = Date.parse(dict.data.time);
    
    await axios({
      method: 'post',
      baseURL: ServerURL,
      url: '/modifyFormula',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        doing: doing,
        type: dict.type,
        dict: dict.data
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

  async function ModifyComboCount (type, count) {    
    await axios({
      method: 'post',
      baseURL: ServerURL,
      url: '/modifyComboCount',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        type: type,
        count: count
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

  async function ModifyUserData (dict) {
    await axios({
      method: 'post',
      baseURL: ServerURL,
      url: '/modifyUserData',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        dict: dict
      }
    })
    .then((result) => { 
      console.log(result);
      ModifyUserStatus.value = false;
    })
    .catch((err) => { 
      console.log(err.response.data);
    });

    return;
  }

  async function UserLogOut (account, token) {
    await axios({
      method: 'post',
      baseURL: ServerURL,
      url: '/modifyUserLogOut',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        account: account,
        token: token
      }
    })
    .then((result) => { 
      console.log(result);
      CheckTokenStatus.value = false;
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
    MdishShowList = ref([]),

    DetailStatus = ref(false),
    AddOrderStatus = ref(false),
    SendSettingDishStatus = ref(false),
    SendSettingComboStatus = ref(false),
    ModifyFormulaStatus = ref(false),
    CheckTokenStatus = ref(false),
    ModifyUserStatus = ref(false),
    CostumeMdishShowStatus = ref(false),

    AddOrder = ref(),
    Detail = ref(),
    SendSettingDish = ref(),
    SendSettingCombo = ref(),
    ModifyFormula = ref(),
    CheckTokenDialog = ref(),
    ModifyUser = ref(),
    MdishShow = ref(),

    SendSettingData = ref({}),
    ModifyFormulaData = ref({
      type: '',
      data: {
        time: 0,
        count: 0,
        price: 0,
        order: 0
      }
    }),
    UserData = ref([]),
    UserToken = ref({}),
    nowUserData = ref({}),

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
      ChangeMdishPage('all');
      return;
    } else if (userinfo.value.account == 'back') {
      for (let i in HeaderBtnStatus.value) {
        HeaderBtnStatus.value[i] = true;
      }
      ChangeMdishPage('all');
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
    MdishType.value = 'none';
    if (name == 'mdish' && MealSettingData.value[0] != undefined) {
      MdishType.value = 'all';
      ChangeMdishPage('all');
    } else if (name == 'mdish') {
      alert('無餐點資料，請洽貴班後台新增。');
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
    let check = false, temp = [];
    MdishType.value = type;
    NMDD.value.splice(0, NMDD.value.length);
    console.log(MdishData.value);
    if (MdishData.value.length != 0) {
      let havepush = [];
      console.log('yeeeee')
      MdishData.value.forEach((item) => {
        if (item.type == MdishType.value || type == 'all') {
          check = true;
          temp.push(item);
          havepush.push(item.type);
        } else if (type == 'costume') {
          for (let i of MdishShowList.value) {
            if (i.type == item.type && i.check) {
              check = true;
              temp.push(item);
              havepush.push(item.type);
            }
          }
        }
      });
      
      if (type == 'all') {
        check = true;
        for (let i of MealSettingData.value) {
          if (havepush.indexOf(i.type) == -1 && i.index == 'delete') {
            temp.push({
              type: i.type,
              data: []
            });
          }
        }
      } else if (type == 'costume') {
        check = true;
        for (let i of MdishShowList.value) {
          if (havepush.indexOf(i.type) == -1 && i.check) {
            temp.push({
              type: i.type,
              data: []
            });
          }
        }
      }

      if (!check) {
        temp.push({
          type: type,
          data: []
        });
      }
    } else {
      if (type != 'all' && type != 'costume') {
        temp.push({
          type: type,
          data: []
        });
      } else if (type == 'all') {
        for (let i of MealSettingData.value) {
          if (i.index == 'delete') {
            temp.push({
              type: i.type,
              data: []
            });
          }
        }
      } else if (type == 'costume') {
        for (let i of MdishShowList.value) {
          console.log('hihi')
          if (i.check) {
            temp.push({
              type: i.type,
              data: []
            });
          }
        }
      }
    }

    NMDD.value.splice(0, 1, ...temp);
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
    if (word == '') {
      word = 'finish';
    }

    return word;
  }

  function CalMFTime (time) {
    let d = new Date(parseInt(time));
    let word = d.getHours() + '時' + d.getMinutes() + '分';

    return word;
  }

  function CalcHpay () {
    let hpay = 0
    if (ordering.value.npay - CalcTotal() > 0) {
      hpay = ordering.value.npay - CalcTotal();
    }
    return hpay;
  }

  function CalcTotal () {
    let TTotal = 0;
    for (let i of ordering.value.data) {
      TTotal += i.price * i.count;
    }
    ordering.value.total = TTotal;
    return TTotal;
  }

  function CalMaxCount (type) {
    for (let i of MealSettingData.value) {
      if (i.type == type) {
        return i.ncount;
      }
    }
  }

  function CalOrderTime () {
    let time = 1000, LastTime = {};

    MdishData.value.forEach((item) => {
      if (item.data.length != 0) {
        LastTime[item.type] = item.data[item.data.length - 1].time;
      }
    });

    let temp = {};
    for (let i of ordering.value.data) {
      if (i.index != 'delete') {
        for (let j in i.index) {
          if (temp[i.index[j].type] == undefined) {
            temp[i.index[j].type] = i.count*i.index[j].num;
          } else {
            temp[i.index[j].type] += i.count*i.index[j].num;
          }
        }
      }
    }

    for (let i of ordering.value.data) {
      for (let j of MealSettingData.value) {
        if (j.type == i.type && i.index == 'delete') {
          if (LastTime[i.type] != null) {
            if (temp[i.type] != null) {
              time = Math.max(time, (j.mtime*Math.ceil((i.count + temp[i.type])/ j.ulimit) + LastTime[i.type]));
            } else {
              time = Math.max(time, (j.mtime*Math.ceil(i.count/ j.ulimit) + LastTime[i.type]));
            }
          } else {
            if (temp[i.type] != null) {
              time = Math.max(time, j.mtime*Math.ceil((i.count + temp[i.type])/ j.ulimit));
            } else {
              time = Math.max(time, j.mtime*Math.ceil(i.count/ j.ulimit));
            }
          }
          break;
        }
      }
    }
    ordering.value.time = time;

    return time;
  }

  function CalcSSDCTP() {
    let price = 0;

    if (SendSettingData.value != null && SendSettingData.value.index != null && SendSettingData.value.index != 'delete') {
      for (let i of SendSettingData.value.index) {
        price += i.price*i.num;
      }
      SendSettingData.value.oprice = price;
    }
    
    return price;
  }

  function ocaside () {
    AsideStatus.value = !AsideStatus.value;
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

  function start (NMDDindex, index) {
    ModifyMdish('start',NMDDindex,  index);
  }

  function stop (NMDDindex, index) {
    ModifyMdish('stop',NMDDindex,  index);
  }

  function complete (NMDDindex, index) {
    ModifyMdish('complete',NMDDindex,  index);
  }

  function SendOrder () {
    let last, time = 0;
    if (CashOdishData.value[CashOdishData.value.length - 1] == undefined) {
      last = {
        num: -1,
        order: -1
      }
    } else {
      last = CashOdishData.value[CashOdishData.value.length - 1];
    }

    time = CalOrderTime();
    
    let temp = {
      num: last.num + 1,
      dish: {},
      price: ordering.value.total,
      time: time,
      status: 0,
      show: true,
      order: last.order + 1
    };
    for (let i in ordering.value.data) {
      if (ordering.value.data[i].index == 'delete') {
        if (temp.dish[ordering.value.data[i].type] == null) {
          temp.dish[ordering.value.data[i].type] = ordering.value.data[i].count;
        } else {
          temp.dish[ordering.value.data[i].type] += ordering.value.data[i].count;
        }
      } else {
        ModifyComboCount(ordering.value.data[i].type, ordering.value.data[i].count);
        for (let j in ordering.value.data[i].index) {
          if (temp.dish[ordering.value.data[i].index[j].type] == null) {
            temp.dish[ordering.value.data[i].index[j].type] = ordering.value.data[i].index[j].num*ordering.value.data[i].count;
          } else {
            temp.dish[ordering.value.data[i].index[j].type] += ordering.value.data[i].index[j].num*ordering.value.data[i].count;
          }
        }
      }
    }

    let check = false;
    for (let i in temp.dish) {
      if (temp.dish[i] != 0) {
        check = true;
        break;
      }
    }
    if (!check) {
      alert("請輸入有效餐點數量");
      return;
    }

    ModifyOrder('add', temp);
    AddOrderStatus.value = false;
  }

  function OAddOrder () {
    ordering.value.data.splice(0, ordering.value.data.length);
    ordering.value.npay = 0;
    for (let i in MealSettingData.value) {
      let temp = MealSettingData.value[i];
      ordering.value.data.push({
        type: temp.type,
        price: temp.nprice,
        count: 0,
        index: temp.index
      })
    }
    AddOrderStatus.value = true;
  }

  function detail (index, thing) {
    let TTotal = 0;
    if (thing == 'CO') {
      for (let i in CashOdishData.value[index].dish) {
        TTotal += parseInt(CashOdishData.value[index].dish[i]);
      }
      DetailThing.value.data = CashOdishData.value[index].dish;
    } else if (thing == 'MS') {
      DetailThing.value.data = {};
      for (let i in MealSettingData.value[index].index) {
        TTotal += parseInt(MealSettingData.value[index].index[i].num);
        DetailThing.value.data[MealSettingData.value[index].index[i].type] = MealSettingData.value[index].index[i].num;
      }
    }
    
    for (let i in DetailThing.value.data) {
      if (DetailThing.value.data[i] == 0) {
        delete DetailThing.value.data[i];
      }
    }
    DetailThing.value.total = TTotal;

    DetailStatus.value = true;
  }

  function OCostumeMdishShow () {
    let temp = [];

    for (let i of MealSettingData.value) {
      if (MdishShowList.value != []) {
        let check = false;
        for (let j in MdishShowList.value) {
          if (MdishShowList.value[j].type == i.type && i.index == 'delete') {
            check = true;
            temp.push(cloneDeep(MdishShowList.value[j]));
            break;
          }
        }
        if (!check && i.index == 'delete') {
          temp.push({
            type: i.type,
            check: false
          });
        }
      } else if (i.index == 'delete') {
        temp.push({
          type: i.type,
          check: false
        });
      }
    }

    MdishShowList.value.splice(0, MdishShowList.value.length, ...temp);
    CostumeMdishShowStatus.value = true;
  }

  function CheckToken (account, dict) {
    UserToken.value = {
      account: account,
      data: dict
    };

    CheckTokenStatus.value = true;
  }

  function CheckMdishTable (type) {
    if (MdishType.value == 'all' || type == MdishType.value) {
      return true;
    } else if (MdishType.value == 'costume') {
      for (let i of MdishShowList.value) {
        if (type == i.type && i.check) {
          return true;
        }
      }
    }

    return false;
  }

  function CheckDishFinish (order) {
    for (let i of MdishData.value) {
      if (i.data.length != 0 && i.data[0].order <= order) {
        return true;
      }
    }
    return false;
  }

  function OModifyUserData (data) {
    nowUserData.value = cloneDeep(data);

    ModifyUserStatus.value = true;
  }

  function OModifyFormula (prefix, itempack, index) {
    if (prefix == 'add') {
      let order;
      if (itempack.data.length != 0) {
        order = itempack.data[itempack.data.length - 1].order + 1;
      }
      ModifyFormulaData.value = {
        type: cloneDeep(itempack.type),
        data: {
          time: 0,
          count: 200,
          price: 1000,
          order: cloneDeep(order)
        }
      };
    } else {
      ModifyFormulaData.value = {
        type: cloneDeep(itempack.type),
        data: cloneDeep(itempack.data[index])
      };
    }

    ModifyFormulaStatus.value = true;
  }

  function MealConfig (index) {
    if (index == 'AddDish') {
      SendSettingData.value = {
        type: '',
        oprice: 0,
        nprice: 0,
        ocount: 0,
        ncount: 0,
        mtime: 0,
        ulimit: 2,
        index: 'delete'
      };
      SendSettingDishStatus.value = true;
    } else if (index == 'AddCombo') {
      let temp = [];
      for (let i of MealSettingData.value) {
        if (i.index == 'delete') {
          temp.push({
            type: i.type,
            price: i.nprice,
            num: 0
          });
        }
      }
      SendSettingData.value = {
        type: '',
        oprice: 0,
        nprice: 0,
        ocount: 0,
        ncount: 0,
        mtime: 1,
        ulimit: 'none',
        index: temp
      };
      
      SendSettingComboStatus.value = true;
    } else {
      SendSettingData.value = cloneDeep(MealSettingData.value[index]);
      if (SendSettingData.value.index == 'delete') {
        SendSettingDishStatus.value = true;
      } else {
        SendSettingComboStatus.value = true;
      }
    }
  }

  function CheckSSDT (type) {
    for (let i of MealSettingData.value) {
      if (i.type == type) {
        return true;
      }
    }
    return false;
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

  function OCSendSettingDish (show) {
    if (!SendSettingDish.value) return;
    if (show) {
      SendSettingDish.value.showModal();
    } else {
      SendSettingDish.value.close();
    }
  }

  function OCSendSettingCombo (show) {
    if (!SendSettingCombo.value) return;
    if (show) {
      SendSettingCombo.value.showModal();
    } else {
      SendSettingCombo.value.close();
    }
  }

  function OCModifyFormula (show) {
    if (!ModifyFormula.value) return;
    if (show) {
      ModifyFormula.value.showModal();
    } else {
      ModifyFormula.value.close();
    }
  }

  function OCCheckToken (show) {
    if (!CheckTokenDialog.value) return;
    if (show) {
      CheckTokenDialog.value.showModal();
    } else {
      CheckTokenDialog.value.close();
    }
  }

  function OCModifyUser (show) {
    if (!ModifyUser.value) return;
    if (show) {
      ModifyUser.value.showModal();
    } else {
      ModifyUser.value.close();
    }
  }

  function OCCostumeMdishShow (show) {
    if (!MdishShow.value) return;
    if (show) {
      MdishShow.value.showModal();
    } else {
      MdishShow.value.close();
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

  function SSDHCOS ({ clientX: x, clientY: y }) {
    if (!SendSettingDish.value) return;

    const { left, right, top, bottom } = SendSettingDish.value.getBoundingClientRect();
    if (x < left || x > right || y < top || y > bottom) {
      SendSettingDishStatus.value = false;
    }
  }

  function SSCHCOS ({ clientX: x, clientY: y }) {
    if (!SendSettingCombo.value) return;

    const { left, right, top, bottom } = SendSettingCombo.value.getBoundingClientRect();
    if (x < left || x > right || y < top || y > bottom) {
      SendSettingComboStatus.value = false;
    }
  }

  function MFHCOS ({ clientX: x, clientY: y }) {
    if (!ModifyFormulaStatus.value) return;

    const { left, right, top, bottom } = ModifyFormula.value.getBoundingClientRect();
    if (x < left || x > right || y < top || y > bottom) {
      ModifyFormulaStatus.value = false;
    }
  }

  function CTHCOS ({ clientX: x, clientY: y }) {
    if (!CheckTokenStatus.value) return;

    const { left, right, top, bottom } = CheckTokenDialog.value.getBoundingClientRect();
    if (x < left || x > right || y < top || y > bottom) {
      CheckTokenStatus.value = false;
    }
  }

  function MUHCOS ({ clientX: x, clientY: y }) {
    if (!ModifyUserStatus.value) return;

    const { left, right, top, bottom } = ModifyUser.value.getBoundingClientRect();
    if (x < left || x > right || y < top || y > bottom) {
      ModifyUserStatus.value = false;
    }
  }

  function CMSHCOS ({ clientX: x, clientY: y }) {
    if (!ModifyUserStatus.value) return;

    const { left, right, top, bottom } = ModifyUser.value.getBoundingClientRect();
    if (x < left || x > right || y < top || y > bottom) {
      ModifyUserStatus.value = false;
    }
  }

  onMounted(() => {
    if (AddOrderStatus.value) OCAddOrder(true);
    if (DetailStatus.value) OCDetail(true);
    if (SendSettingDishStatus.value) OCSendSettingDish(true);
    if (SendSettingComboStatus.value) OCSendSettingCombo(true);
    if (ModifyFormulaStatus.value) OCModifyFormula(true);
    if (CheckTokenStatus.value) OCCheckToken(true);
    if (ModifyUserStatus.value) OCModifyUser(true);
    if (CostumeMdishShowStatus.value) OCCostumeMdishShow(true);
  });

  watch(AddOrderStatus, (isOpen) => {
    if (isOpen) OCAddOrder(true);
  });

  watch(DetailStatus, (isOpen) => {
    if (isOpen) OCDetail(true);
  });

  watch(SendSettingDishStatus, (isOpen) => {
    if (isOpen) OCSendSettingDish(true);
  });

  watch(SendSettingComboStatus, (isOpen) => {
    if (isOpen) OCSendSettingCombo(true);
  });

  watch(ModifyFormulaStatus, (isOpen) => {
    if (isOpen) OCModifyFormula(true);
  });

  watch(CheckTokenStatus, (isOpen) => {
    if (isOpen) OCCheckToken(true);
  });

  watch(ModifyUserStatus, (isOpen) => {
    if (isOpen) OCModifyUser(true);
  });

  watch(CostumeMdishShowStatus, (isOpen) => {
    if (isOpen) OCCostumeMdishShow(true);
  });
</script>

<style>
  .aside-enter-from,
  .aside-leave-to {
    left: -9%;
  }

  .aside-enter-to,
  .aside-leave-from {
    left: 0%;
  }

  .aside-enter-active {
    transition-timing-function: "ease-out";
  }

  .aside-leave-active {
    transition-timing-function: "ease-in";
  }

  .aside-enter-active,
  .aside-leave-active {
    transition-duration: 200ms;
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

  .dialog-enter-from#sendsettingdish,
  .dialog-leave-to#sendsettingdish {
    transform: scale(0.9) translateY(-2rem);
  }

  .dialog-enter-from#sendsettingcombo,
  .dialog-leave-to#sendsettingcombo {
    transform: scale(0.9) translateY(-2rem);
  }

  .dialog-enter-from#modifyformula,
  .dialog-leave-to#modifyformula {
    transform: scale(0.9) translateY(-2rem);
  }

  .dialog-enter-from#checktoken,
  .dialog-leave-to#checktoken {
    transform: scale(0.9) translateY(-2rem);
  }

  .dialog-enter-from#modifyuser,
  .dialog-leave-to#modifyuser {
    transform: scale(0.9) translateY(-2rem);
  }

  .dialog-enter-from#mdishshow,
  .dialog-leave-to#mdishshow {
    transform: scale(0.9) translateY(-2rem);
  }
</style>