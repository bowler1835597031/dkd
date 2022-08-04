<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="1">
      <i class="el-icon-s-home"></i>
      <span slot="title">帝可得</span>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-s-order"></i>
        <span>工单管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="2-1">运营工单</el-menu-item>
        <el-menu-item index="2-2">运维工单</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>点位管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="3-1">区域管理</el-menu-item>
        <el-menu-item index="3-2">点位管理</el-menu-item>
        <el-menu-item index="3-3">合作商管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-shopping-bag-1"></i>
        <span>设备管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="4-1">设备管理</el-menu-item>
        <el-menu-item index="4-2">设备状态</el-menu-item>
        <el-menu-item index="4-3">设备类型管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">
        <i class="el-icon-s-custom"></i>
        <span>人员管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="5-1">人员列表</el-menu-item>
        <el-menu-item index="5-2">人效统计</el-menu-item>
        <el-menu-item index="5-3">工作量列表</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="6">
      <template slot="title">
        <i class="el-icon-s-goods"></i>
        <span>商品管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="6-1">商品类型</el-menu-item>
        <el-menu-item index="6-2">商品管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="7">
      <i class="el-icon-s-opportunity"></i>
      <span slot="title">策略管理</span>
    </el-menu-item>
    <el-menu-item index="8">
      <i class="el-icon-document"></i>
      <span slot="title">订单管理</span>
    </el-menu-item>
    <el-menu-item index="9">
      <i class="el-icon-s-claim"></i>
      <span slot="title">对账统计</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {};
  },

  created() {},

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.el-menu-vertical-demo {
  border: 0;
}
</style>
