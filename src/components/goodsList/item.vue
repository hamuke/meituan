<template>
  <dl class="s-item">
    <dt>
      <img :src="meta.image" alt="火锅" />
    </dt>
    <dd>
      <h3>
        <a href="#">
          {{ meta.title }}
        </a>
      </h3>
      <p>
        <el-rate v-model="meta.score" show-text disabled></el-rate>
        <span class="s-item-score">{{ meta.score }}分</span>
        <span class="s-item-comment-total">{{ meta.commentNum }}人评论</span>
      </p>
      <p>
        <span class="s-item-tab">
          <span v-for="(v, i) in meta.tab" :key="i">
            {{ v }}
          </span>
        </span>
        <span class="s-item-addr">{{ meta.address }}</span>
        <span>
          <a href="#">
            <i class="el-icon-location"></i>
            查看地图
          </a>
        </span>
      </p>
      <p>
        <span class="s-item-price"> 人均￥{{ meta.avg_price }} </span>
      </p>
      <ul class="deal-items">
        <li
          class="items"
          v-for="(item, index) in meta.dealItems.slice(0, 2)"
          :key="index"
        >
          <p class="deal-title">{{ item.title }}</p>
          <p>
            <span class="deal-price"> ￥{{ item.price }} </span>
            <span class="deal-old-price">门市价￥{{ item.counterPrice }}</span>
            <span class="deal-sales">已售{{ item.saleNum }}</span>
          </p>
        </li>
      </ul>
    </dd>
  </dl>
</template>

<script>
export default {
  props: ["meta"],
};
</script>