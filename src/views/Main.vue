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
        <comont-tag></comont-tag>
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
import ComontTag from '@/components/ComontTag.vue'
export default {
  name: 'Main',
  components: {
    ComontAside,
    ComontHeard,
    ComontTag
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: rgb(49, 49, 49);
}
.el-main {
  padding-top: 0;
}
</style>
