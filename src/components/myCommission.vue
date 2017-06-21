<template>
  <el-table
    :data="tableData2"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="type"
      label="类型"
      >
    </el-table-column>
    <el-table-column
      prop="pre"
      label="变动前余额"
      >
    </el-table-column>
    <el-table-column
      prop="next"
      label="变动后余额">
    </el-table-column>
    <el-table-column
      prop="preCommission"
      label="变动前已提现">
    </el-table-column>
    <el-table-column
      prop="nextCommission"
      label="变动后已提现">
    </el-table-column>
  </el-table>
</template>

<style scoped>
  .el-table .info-row {
    background: #c9e5f5;
  }

  .el-table .positive-row {
    background: #e2f0e4;
  }

  .el-table .el-table__body {
    display: flex;
  }
  .el-table .el-table__body tbody {
    width: 100%;
  }
  .el-table .el-table__body tbody tr {
    display: flex;
  }
  .el-table .el-table__body tbody td {
    flex-grow: 1;
  }
</style>

<script>
  export default {
    methods: {
      tableRowClassName(row, index) {
        if (index === 1) {
          return 'info-row';
        } else if (index === 3) {
          return 'positive-row';
        }
        return '';
      }
    },
    data() {
      return {
        tableData2: [
            {
          type: '提现',
          pre: '4000',
          next: '5000',
          preCommission : '6000',
          nextCommission : '7000'
        },{
          type: '提现',
          pre: '4000',
          next: '5000',
          preCommission : '6000',
          nextCommission : '7000'
        },{
          type: '提现',
          pre: '4000',
          next: '5000',
          preCommission : '6000',
          nextCommission : '7000'
        },{
          type: '提现',
          pre: '4000',
          next: '5000',
          preCommission : '6000',
          nextCommission : '7000'
        },{
          type: '提现',
          pre: '4000',
          next: '5000',
          preCommission : '6000',
          nextCommission : '7000'
        },{
          type: '提现',
          pre: '4000',
          next: '5000',
          preCommission : '6000',
          nextCommission : '7000'
        },{
          type: '提现',
          pre: '4000',
          next: '5000',
          preCommission : '6000',
          nextCommission : '7000'
        },{
          type: '提现',
          pre: '4000',
          next: '5000',
          preCommission : '6000',
          nextCommission : '7000'
        },{
          type: '提现',
          pre: '4000',
          next: '5000',
          preCommission : '6000',
          nextCommission : '7000'
        },{
          type: '提现',
          pre: '4000',
          next: '5000',
          preCommission : '6000',
          nextCommission : '7000'
        }]
      }
    }
  }
</script>
