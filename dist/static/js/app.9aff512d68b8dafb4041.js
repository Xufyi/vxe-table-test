webpackJsonp([1],{"4viP":function(e,a){},"837c":function(e,a){},NHnr:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=t("xd7I"),n={render:function(){var e=this.$createElement,a=this._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var d=t("VU/8")({name:"App"},n,!1,function(e){t("4viP")},null,null).exports,s=t("/ocq"),r=t("bOdI"),o=t.n(r),i={data:function(){return{columns14:[{title:"PS\n取样数",key:"date",width:"80",align:"left",resizable:!0},{title:"Name",key:"name",width:"200"},{title:"Age",key:"age",width:"200"},o()({title:"Address",key:"address",width:"200"},"width","200"),{title:"Address",key:"address",width:"200"},{title:"Address",key:"address",width:"200"}],data5:[{name:"John Brown",age:18,address:"New York No. 1 Lake Park",date:"2016-10-03"},{name:"Jim Green",age:24,address:"London No. 1 Lake Park",date:"2016-10-01"},{name:"Joe Black",age:30,address:"Sydney No. 1 Lake Park",date:"2016-10-02"},{name:"Jon Snow",age:26,address:"Ottawa No. 2 Lake Park",date:"2016-10-04"},{name:"John Brown",age:18,address:"New York No. 1 Lake Park",date:"2016-10-03"},{name:"Jim Green",age:24,address:"London No. 1 Lake Park",date:"2016-10-01"},{name:"Joe Black",age:30,address:"Sydney No. 1 Lake Park",date:"2016-10-02"},{name:"Jon Snow",age:26,address:"Ottawa No. 2 Lake Park",date:"2016-10-04"},{name:"John Brown",age:18,address:"New York No. 1 Lake Park",date:"2016-10-03"},{name:"Jim Green",age:24,address:"London No. 1 Lake Park",date:"2016-10-01"},{name:"Joe Black",age:30,address:"Sydney No. 1 Lake Park",date:"2016-10-02"},{name:"Jon Snow",age:26,address:"Ottawa No. 2 Lake Park",date:"2016-10-04"}]}},methods:{handleSpan:function(e){e.row,e.column;var a=e.rowIndex,t=e.columnIndex;return a<6&&0===t?{rowspan:1,colspan:2}:a<6&&1===t?{rowspan:0,colspan:0}:void 0}}},u={render:function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"xfy"},[a("Table",{attrs:{columns:this.columns14,data:this.data5,border:"","span-method":this.handleSpan}})],1)},staticRenderFns:[]};var c=t("VU/8")(i,u,!1,function(e){t("837c")},null,null).exports,f=(t("JE8S"),t("N26I")),m=t.n(f);t("v7rV");l.default.use(m.a);var p={data:function(){return{tableData2:[{name:"xfy",sex:"男",age:"17"},{name:"xfy",sex:"男",age:"17"},{name:"xfy",sex:"男",age:"17"},{name:"xfy",sex:"男",age:"17"},{name:"xfy",sex:"男",age:"17"}],tableData:[{data1:"1#",data5:"2#"},{type:"尺寸A",dev:"数显卡尺",sl:"5.95",usl:"6",lsl:"5.90",result:"",data1:"",data2:"",data3:"",data4:"",data5:"",data6:"",data7:"",data8:"",data9:"",data10:"",editRender:{name:"input"}},{type:"尺寸B",dev:"数显卡尺",sl:"5.95",usl:"6",lsl:"5.90",result:""},{type:"尺寸C",dev:"数显卡尺",sl:"5.95",usl:"6",lsl:"5.90",result:""},{type:"尺寸D",dev:"数显卡尺",sl:"5.95",usl:"6",lsl:"5.90",result:""},,{type:"尺寸E",dev:"数显卡尺",sl:"5.95",usl:"6",lsl:"5.90",result:""},{type:"尺寸F",dev:"数显卡尺",sl:"5.95",usl:"6",lsl:"5.90",result:""},{type:"尺寸G",dev:"数显卡尺",sl:"5.95",usl:"6",lsl:"5.90",result:""},{type:"尺寸H",dev:"数显卡尺",sl:"5.95",usl:"6",lsl:"5.90",result:""},{type:"尺寸I",dev:"数显卡尺",sl:"5.95",usl:"6",lsl:"5.90",result:""},{type:"尺寸J",dev:"数显卡尺",sl:"5.95",usl:"6",lsl:"5.90",result:""}],tableColumn:[{field:"type",title:"检验项目"},{field:"dev",title:"检验设备"},{field:"sl",title:"SL"},{field:"usl",title:"USL"},{field:"lsl",title:"LSL"},{field:"result",title:"结果",editRender:{name:"select",options:[{value:"合格",id:"1"},{value:"不合格",id:"0"}]}},{field:"data1",title:"1",editRender:{name:"input"}},{field:"data2",title:"2"},{field:"data3",title:"3"},{field:"data4",title:"4"},{field:"data5",title:"5"},{field:"data6",title:"6"},{field:"data7",title:"7"},{field:"data8",title:"8"},{field:"data9",title:"9"},{field:"data10",title:"10"}]}},created:function(){var e=this;this.reverseTable(),setTimeout(function(){console.log(e.$refs.xGrid);var a=e.$refs.xGrid.getColumnByField("type");console.log(a)})},methods:{reverseTable:function(){var e=this.tableData;this.tableData=this.tableColumn.map(function(a){var t={0:a.title,editRender:{name:"input"}};return e.forEach(function(e,l){t[l+1]=e[a.field]}),console.log(t),t}),console.log(this.tableData),console.log(e),this.tableColumn=[{field:"0",fixed:"left",width:80,editRender:{name:"input"}}].concat(e.map(function(e,a){return{field:""+(a+1),width:120}})),console.log(this.tableColumn)},colspanMethod:function(e){e.row;var a=e.rowIndex,t=(e.column,e.columnIndex);e.data;if(0===t){if(a<6)return{rowspan:1,colspan:2}}else if(1===t&&a<6)return{rowspan:0,colspan:0}}}},v={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"xfy"},[t("p"),e._v(" "),t("br"),e._v(" "),t("br"),e._v(" "),t("vxe-grid",{ref:"xGrid",staticClass:"reverse-table",attrs:{border:"","highlight-hover-row":"","show-header":!1,columns:e.tableColumn,data:e.tableData,"span-method":e.colspanMethod,align:"center","edit-config":{trigger:"click",mode:"cell",autoClear:!1}}}),e._v(" "),t("br"),e._v(" "),t("br"),e._v(" "),t("br"),e._v(" "),t("br"),e._v(" "),t("br")],1)},staticRenderFns:[]};var h=t("VU/8")(p,v,!1,function(e){t("RLFJ")},"data-v-2eef6aca",null).exports;l.default.use(s.a);var k=new s.a({routes:[{path:"/table2",name:"table2",component:h},{path:"/",name:"table",component:c}]}),g=t("K6Kj"),w=t.n(g);l.default.use(w.a),l.default.config.productionTip=!1,new l.default({el:"#app",router:k,components:{App:d},template:"<App/>"})},RLFJ:function(e,a){},v7rV:function(e,a){}},["NHnr"]);