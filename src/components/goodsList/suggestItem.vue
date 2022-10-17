<template>
  <div class="m-suggest">
    <dl class="suggest-list">
      <dd class="text">
        <div>
          <img
            src="https://p0.meituan.net//merchant/60b781385a603ac92d76c1eb0d5a529b174834.jpg@188w_106h_1e_1c"
            alt=""
          />
        </div>
        <p class="name">{{meta.title}}</p>
        <p class="desc">
          <el-rate v-model.number="meta.score" disabled></el-rate>
          <span>{{meta.commentNum}}人评价</span>
        </p>
        <p class="price">￥ <span>{{meta.lowPrice}}</span> 起</p>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: ["meta"],
};
</script>