<template>
  <dl class="classic">
    <dt>{{title}}</dt>
    <dt>全部</dt>
    <dd class="m-product-select" v-for="item in list" :key="item.type">
      <dl class="tab">
        <dt>
          {{ item.title }}
          <i class="el-icon-caret-bottom"></i>
        </dt>
        <dd>
          <p class="select-title">{{ item.title }}</p>
          <span v-for="subItem in item.subList" :key="subItem.id">
            {{ subItem.name }}
          </span>
        </dd>
      </dl>
    </dd>
  </dl>
</template>

<script>
export default {
  props:['list','title']
};
</script>