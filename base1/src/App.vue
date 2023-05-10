<template>
  <div class="head">
    <img src="./assets/logo.svg" alt="" class="logo">
  </div>
  <div class="container">
    <div class="left">
      <div class="title">Vue Think Tank(VTT)</div>
      <!-- <router-link v-for="item in data" :to="item.path" class="sort">{{ item.name }}
      </router-link> -->
      <div class="case">
        <el-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick" />
      </div>
    </div>
    <div class="right">
      <div class="right-main">
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import { LeftTitle } from './unitl/vue';
import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()
function handleNodeClick(data) {
  if (data.path != undefined) {
    proxy.$router.push({
      path: data.path
    })
  }
}
const data = LeftTitle.start();
const defaultProps = {
  children: 'children',
  label: 'name',
}
</script>
<style scoped>
div.head {
  height: 50px;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
}

::v-deep .el-tree-node__content {
  font-size: 14.5px;
  display: block;
  /* margin-top: 20px; */
  background-color: #E9EDF0;
  transition: all 0.2s linear;
  padding: 12px 25px;
  color: #999999;
  cursor: pointer;
  text-decoration: none;
}

div.container {
  /* margin: 0 auto;
  width: 800px;
  height: 500px; */
  display: flex;
  /* justify-content: space-between; */
}

div.left {
  width: 350px;
  background-color: #E9EDF0;
  height: 910px;
  overflow-y: auto;
  flex-shrink: 0;
}

.title {
  color: #333;
  padding: 10px 20px;

}

.right {
  /* background-color: blanchedalmond; */
  /* width: 100%; */
  flex-grow: 1;
}

.logo {
  height: 70%;
  margin: 10px 15px;
}

.left a.router-link-exact-active {
  background-color: white;
}
</style>