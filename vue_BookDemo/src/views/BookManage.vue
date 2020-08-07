<template>
  <div>
    <el-table
        :data="tableData"
        border
        style="width: 80%">
      <el-table-column
          fixed
          prop="id"
          label="编号"
          width="150">
      </el-table-column>
      <el-table-column
          prop="name"
          label="书名"
          width="300">
      </el-table-column>
      <el-table-column
          prop="author"
          label="作者"
          width="300">
      </el-table-column>

<!--      <el-table-column-->
<!--          fixed="right"-->
<!--          label="操作"-->
<!--          width="100">-->
<!--        <template slot-scope="scope">-->
<!--          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
<!--          <el-button type="text" size="small">编辑</el-button>-->
<!--        </template>-->
<!--      </el-table-column>-->

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="edit(scope.row)">修改</el-button>
            <el-button type="primary" size="mini" @click="deleteById(scope.row)">删除</el-button>
          </template>
        </el-table-column>
    </el-table>

    <el-pagination
        background
        layout="prev, pager, next"
        :page-size="pageSize"
        :total="total"
        @current-change="page">
    </el-pagination>
  </div>
</template>

<script>
export default {
  methods: {
    deleteById(row){
      const _this = this
      // eslint-disable-next-line no-unused-vars,no-undef
      axios.delete('http://localhost:8181/book/deleteById/' + row.id).then(function (resp){
        _this.$alert('删除成功', '提示', {
          confirmButtonText: '确定',
          // eslint-disable-next-line no-unused-vars,no-undef
          callback: action => {
            // 让页面动态刷新
            window.location.reload()
          }
        });
      })
    },
    edit(row) {
      this.$router.push({
        path: "/update",
        query:{
          id: row.id
        }
      })
    },
    page(currentPage){
      const _this = this
      // eslint-disable-next-line no-unused-vars,no-undef
      axios.get('http://localhost:8181/book/findAll/'+currentPage+'/6').then(function (resp){
        _this.tableData = resp.data.content
        _this.total = resp.data.totalElements
        _this.pageSize = resp.data.size
      });
    }
  },
  created() {
    const _this = this
    // eslint-disable-next-line no-unused-vars,no-undef
    axios.get('http://localhost:8181/book/findAll/1/6').then(function (resp){
      _this.tableData = resp.data.content
      _this.total = resp.data.totalElements
      _this.pageSize = resp.data.size
    });
  },
  data() {
    return {
      pageSize: null,
      total: null,
      tableData: null
    }
  }
}
</script>