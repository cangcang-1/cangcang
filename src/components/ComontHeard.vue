<template>
  <div class="heard-container">
    <div class="l-container">
      <el-button plain icon="el-icon-menu" size="mini" @click="handleMenu"></el-button>
      <h4 style="color: #fff">首页</h4>
    </div>
    <div class="r-container">
      <el-dropdown>
        <span><img :src="userImg" /></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userImg: require('../assets/image/user.png')
    }
  },
  methods: {
    handleMenu() {
      this.$store.commit('collapseMenu')
    }
  }
}
</script>

<style lang="less" scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.heard-container {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
.l-container {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}
.r-container {
  display: flex;
  align-items: center;
  img {
    width: 35px;
    border-radius: 50%;
  }
}
</style>
