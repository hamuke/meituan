<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }"> 美团 </el-breadcrumb-item>
    <el-breadcrumb-item>
      {{ $store.state.position.name }}
    </el-breadcrumb-item>
    <el-breadcrumb-item>
      {{ $route.params.name }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {};
</script>