<template>
  <div class="m-nav">
    <ul class="nav">
      <li class="list my">
        <router-link :to="{ name: 'my' }">我的美团</router-link>
        <dl>
          <dd>
            <router-link :to="{ path: '/' }">我的订单</router-link>
          </dd>
          <dd>
            <router-link :to="{ path: '/' }">我的收藏</router-link>
          </dd>
          <dd>
            <router-link :to="{ path: '/' }">抵用券</router-link>
          </dd>
          <dd>
            <router-link :to="{ path: '/' }">账户设置</router-link>
          </dd>
        </dl>
      </li>
      <li class="list">
        <router-link :to="{ name: 'my' }">手机APP</router-link>
      </li>
      <li class="list bd">
        <router-link :to="{ name: 'my' }">商家中心</router-link>
        <dl>
          <dd>
            <router-link :to="{ path: '/' }">登录商家中心</router-link>
          </dd>
          <dd>
            <router-link :to="{ path: '/' }">美团智能收银</router-link>
          </dd>
          <dd>
            <router-link :to="{ path: '/' }">我想合作</router-link>
          </dd>
          <dd>
            <router-link :to="{ path: '/' }">账户设置</router-link>
          </dd>
        </dl>
      </li>
      <li class="list site">
        <router-link :to="{ name: 'my' }">网站导航</router-link>
        <div class="subContainer">
          <dl class="hotel">
            <dt>酒店旅游</dt>
            <dd>
              <router-link :to="{ path: '/' }">国际机票</router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/' }">火车票</router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/' }">民宿</router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/' }">经济型酒店</router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/' }">主题酒店</router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/' }">商务酒店</router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/' }">豪华酒店</router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/' }">青年旅社</router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/' }">度假酒店</router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/' }">别墅</router-link>
            </dd>
          </dl>
          <dl class="food">
            <dt>吃美食</dt>
            <dd>
              <router-link :to="{ path: '/' }">烤鱼</router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/' }">特色小吃</router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/' }">烧烤</router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/' }">自助餐</router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/' }">火锅</router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/' }">代金券</router-link>
            </dd>
          </dl>
          <dl class="movie">
            <dt>看电影</dt>
            <dd>
              <router-link :to="{ path: '/' }">热映电影</router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/' }">热门影院</router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/' }">热映电影口碑榜</router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/' }">最受期待电影</router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/' }">北美票房榜</router-link>
            </dd>
            <dd>
              <router-link :to="{ path: '/' }">电影排行榜</router-link>
            </dd>
          </dl>
          <dl class="app">
            <dt>手机应用</dt>
            <dd>
              <img
                class="appicon"
                src="https://s3plus.meituan.net/static-prod01/com.sankuai.fe.www.web-files/dee7a53/img/appicons/meituan.png"
                title="美团app"
                alt="美团app"
              />
            </dd>
            <dd>
              <img
                src="https://s3plus.meituan.net/static-prod01/com.sankuai.fe.www.web-files/dee7a53/img/appicons/waimai.png"
                title="美团外卖"
                alt="美团外卖"
              />
            </dd>
            <dd>
              <img
                src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png"
                title="美团民宿"
                alt="美团民宿"
              />
            </dd>
            <dd>
              <img
                src="https://s3plus.meituan.net/static-prod01/com.sankuai.fe.www.web-files/dee7a53/img/appicons/dianping.png"
                title="大众点评"
                alt="大众点评"
              />
            </dd>
            <dd>
              <img
                src="https://s3plus.meituan.net/static-prod01/com.sankuai.fe.www.web-files/dee7a53/img/appicons/maoyan.png"
                title="猫眼电影"
                alt="猫眼电影"
              />
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>