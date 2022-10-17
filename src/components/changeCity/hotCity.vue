<template>
  <div class="m-hotCity">
    <dl>
      <dt>{{ title }}</dt>
      <dd v-for="(item, index) in list" :key="index + '-' + item">
        {{ item.name }}
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: ["list", "title"],
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/hot.scss";
</style>
