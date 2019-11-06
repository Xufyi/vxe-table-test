<template>
  <div class="xfy">
      <Table :columns="columns14" :data="data5" border :span-method="handleSpan"></Table>
  </div>

</template>
<script>
    export default {
        data () {
            return {
                columns14: [
                    {
                        title: 'PS\n取样数',
                        key: 'date',
                        // fixed: 'left',
                        width:'80',
                        align:"left",
                        resizable :true
                    },
                    {
                        title: 'Name',
                        key: 'name',
                        width:'200'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        width:'200'
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        width:'200',
                        width:'200'
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        width:'200'
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        width:'200'
                    }
                ],
                data5: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    },{
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    },
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        },
        methods: {
            handleSpan ({ row, column, rowIndex, columnIndex }) {
                // if (rowIndex === 0 && columnIndex === 0) {
                //     return [1, 2];
                // } else if (rowIndex === 0 && columnIndex === 1) {
                //     return  [0, 0];
                // }
                
                // if (rowIndex === 2 && columnIndex === 0) {
                //     return {
                //         rowspan: 2,
                //         colspan: 1
                //     };
                // } else if (rowIndex === 3 && columnIndex === 0) {
                //     return {
                //         rowspan: 0,
                //         colspan: 0
                //     };
                // }
                  
                //第7行开始后，第一列和第二列合并一起
                if (rowIndex < 6 && columnIndex === 0) {
                    return {
                        rowspan: 1,
                        colspan: 2
                    };
                } else if (rowIndex <6 && columnIndex === 1) {
                    return {
                        rowspan: 0,
                        colspan: 0
                    };
                }
            }
        }
    }
</script>

<style>
  .xfy .ivu-table-cell span{
    white-space: pre-wrap;
  }
</style>


