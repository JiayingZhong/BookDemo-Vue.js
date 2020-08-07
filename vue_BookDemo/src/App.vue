<template>
  <div id="app">

    <el-container style="height: 500px; border: 1px solid #eee">

      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">

        <el-menu router :default-openeds="['0', '1']">
          <el-submenu v-for="(route, index) in $router.options.routes" v-bind:key="route.id" :index="index+''">
              <template slot="title"><i class="el-icon-message"></i>{{ route.name }}</template>
            <el-menu-item v-for="(child) in route.children" v-bind:key="child.id" :index="child.path"
                          :class="$route.path == child.path ? 'is-active' : ''">{{child.name}}</el-menu-item>
          </el-submenu>
        </el-menu>

      </el-aside>

      <el-main>
        <router-view></router-view>
      </el-main>

    </el-container>
  </div>
</template>

<style>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
export default {
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(20).fill(item)
    }
  }
};
</script>