<template>
  <div>
    <el-container style="heigh: 100%">
      <el-aside width="auto">
        <comont-aside></comont-aside>
      </el-aside>
      <el-container>
        <el-header>
          <comont-heard></comont-heard>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import ComontAside from '@/components/ComontAside.vue'
import ComontHeard from '@/components/ComontHeard.vue'
export default {
  name: 'Home',
  components: {
    ComontAside,
    ComontHeard
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: black;
}
.el-main {
  padding-top: 0;
}
</style>
