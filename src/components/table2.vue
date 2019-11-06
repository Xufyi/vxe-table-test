<template>
    <div class="xfy">
        <p></p>
        <!-- <vxe-table
          :data="tableData2"
          :span-method="colspanMethod1"
          border>
          <vxe-table-column type="index" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="name"></vxe-table-column>
          <vxe-table-column field="sex" title="sex"></vxe-table-column>
          <vxe-table-column field="age" title="age"></vxe-table-column>
        </vxe-table> -->
        <br>
        <br>

        <vxe-grid
            border
            highlight-hover-row
            class="reverse-table"
            :show-header="false"
            :columns="tableColumn"
            :data="tableData"
            :span-method="colspanMethod"
            align='center'
            ref="xGrid"
            :edit-config="{trigger: 'click', mode: 'cell',autoClear:false}">
        </vxe-grid>
        <br>
        <br>
        <br>
        <br>
        <br>


    </div>
</template>    
<script>
    import Vue from 'vue'
    import 'xe-utils'
    import VXETable from 'vxe-table'
    import 'vxe-table/lib/index.css'

    Vue.use(VXETable)
    export default{
        data(){
            return{
                tableData2:[
                    {name:"xfy",sex:'男',age:'17'},
                    {name:"xfy",sex:'男',age:'17'},
                    {name:"xfy",sex:'男',age:'17'},
                    {name:"xfy",sex:'男',age:'17'},
                    {name:"xfy",sex:'男',age:'17'},
                ],
                tableData:[{
                    data1:'1#',
                    data5:'2#',

                },{
                        type:"尺寸A",
                        dev:'数显卡尺',
                        sl:"5.95",
                        usl:'6',
                        lsl:"5.90",
                        result:"",
                        //使用下拉框
                        data1:'',
                        data2:'',
                        data3:'',
                        data4:'',
                        data5:'',
                        data6:'',
                        data7:'',
                        data8:'',
                        data9:'',
                        data10:'',
                        editRender:{
                            name:'input'
                        }
                    },{
                        type:"尺寸B",
                        dev:'数显卡尺',
                        sl:"5.95",
                        usl:'6',
                        lsl:"5.90",
                        result:"",
                    },{
                        type:"尺寸C",
                        dev:'数显卡尺',
                        sl:"5.95",
                        usl:'6',
                        lsl:"5.90",
                        result:"",
                    },{
                        type:"尺寸D",
                        dev:'数显卡尺',
                        sl:"5.95",
                        usl:'6',
                        lsl:"5.90",
                        result:"",
                    },,{
                        type:"尺寸E",
                        dev:'数显卡尺',
                        sl:"5.95",
                        usl:'6',
                        lsl:"5.90",
                        result:"",
                    },{
                        type:"尺寸F",
                        dev:'数显卡尺',
                        sl:"5.95",
                        usl:'6',
                        lsl:"5.90",
                        result:"",
                    },{
                        type:"尺寸G",
                        dev:'数显卡尺',
                        sl:"5.95",
                        usl:'6',
                        lsl:"5.90",
                        result:"",
                    },{
                        type:"尺寸H",
                        dev:'数显卡尺',
                        sl:"5.95",
                        usl:'6',
                        lsl:"5.90",
                        result:"",
                    },{
                        type:"尺寸I",
                        dev:'数显卡尺',
                        sl:"5.95",
                        usl:'6',
                        lsl:"5.90",
                        result:"",
                    },{
                        type:"尺寸J",
                        dev:'数显卡尺',
                        sl:"5.95",
                        usl:'6',
                        lsl:"5.90",
                        result:"",
                    }],
                tableColumn: [
                { field: 'type', title: '检验项目' },
                { field: 'dev', title: '检验设备' },
                { field: 'sl', title: 'SL' },
                { field: 'usl', title: 'USL' },
                { field: 'lsl', title: 'LSL' },
                { field: 'result', title: '结果', editRender: { name: 'select', options: [
                    {value:"合格",id:"1"},
                    {value:"不合格",id:"0"}
                ] } },
                { field: 'data1', title: '1' ,editRender:{
                            name:'input'
                        }},
                { field: 'data2', title: '2' },
                { field: 'data3', title: '3' },
                { field: 'data4', title: '4' },
                { field: 'data5', title: '5' },
                { field: 'data6', title: '6' },
                { field: 'data7', title: '7' },
                { field: 'data8', title: '8' },
                { field: 'data9', title: '9' },
                { field: 'data10', title: '10' },
              ]
            }
        },
        created () {
            this.reverseTable()
            setTimeout(()=>{
                console.log(  this.$refs.xGrid  ) 
                let column = this.$refs.xGrid.getColumnByField('type')
                console.log(column)
            //    console.log(  column.editRender.options  ) 
            })
        },
        methods: {
        // 反转函数
            reverseTable () {
                let tableData = this.tableData
                this.tableData = this.tableColumn.map(column => {
                    let item = { 0: column.title,editRender :{name:"input"} }
                    // console.log(item)
                    tableData.forEach((row, rowIndex) => {
                        item[rowIndex + 1] = row[column.field]                
                    })
                    console.log(item)
                    return item
                })
                console.log(this.tableData)
                console.log(tableData)
                this.tableColumn = [{
                    field: '0',
                    fixed: 'left',
                    width: 80,
                    editRender:{
                            name:'input'
                        }
                    }].concat(tableData.map((item, index) => {
                        // console.log(item,index)
                        return {
                            field: `${index + 1}`,
                            width: 120,
                            // editRender:item.editRender
                        }
                }))
                console.log(this.tableColumn)
            },
        //合并首列
            colspanMethod ({ row, rowIndex, column, columnIndex, data }) {
                if (columnIndex  === 0) {
                    if (rowIndex < 6) {
                        return {
                            rowspan: 1,
                            colspan: 2
                        }
                    } 
                }else if((columnIndex  === 1)){
                    if (rowIndex < 6) {
                        return {
                            rowspan: 0,
                            colspan: 0
                        }
                    } 
                }
            },
           
            
        }
    }
</script>

<style scoped> 
   .xfy /deep/ .reverse-table .vxe-body--row .vxe-body--column:first-child{
        background-color: #f8f8f9;
    }
</style>


