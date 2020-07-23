<template>
  <div class="baseInfo">
    <div class="header">
      <div class="baseL">
        <div class="info">
          <span>
            数字信息
            <i class="el-icon-edit"></i>
          </span>
          &nbsp;&nbsp;&nbsp;
          <span>创建于:2020.02.02</span>
        </div>
        <div class="btnGroup">
          <el-button type="success" round size="mini">离线</el-button>
          <el-button type="info" round size="mini">实时</el-button>
        </div>
        <div class="text">
          <span>所属租户:张三</span>
          &nbsp;&nbsp;&nbsp;
          <span>项目code:codecodecode</span>
        </div>
        <div class="introduction">
          <span>
            简介:简介简介简
            <i class="el-icon-edit"></i>
          </span>
        </div>
      </div>
      <div class="baseR">
        <div class="btnGroup">
          <el-button size="mini" type="primary">新建项目</el-button>
          <el-button size="mini">全部项目</el-button>
          <el-button size="mini">转交</el-button>
          <el-button size="mini">...</el-button>
        </div>
        <div class="text">
          <i class="el-icon-s-custom"></i>生产账号:www.baidu.com
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="btnBox">
        <div class="boxL">
          <div class="demo-input-suffix">
            成员:
            <el-input v-model="manmber" style="width:200px"></el-input>
          </div>
          <div class="boxSelect">
            角色功能:
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="boxR">
          <el-button size="small" type="primary">添加成员</el-button>
        </div>
      </div>
      <div class="tableData">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="name" label="成员" width="180"></el-table-column>
          <el-table-column prop="date" label="部门岗位" width="100"></el-table-column>
          <el-table-column label="角色功能">
            <template>
              <el-checkbox :label="item" v-for="(item,index) in checkList" :key="index"></el-checkbox>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small"
              >权限赋予</el-button>
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small"
              >回收权限</el-button>
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small"
              >移出项目</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "projectInfo",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "项目管理员"
        },
        {
          value: "选项2",
          label: "运维"
        },
        {
          value: "选项3",
          label: "开发"
        },
        {
          value: "选项4",
          label: "分析师"
        }
      ],
      value: "",
      manmber: "",
      checkList: ["项目管理员", "运维", "开发", "分析师"],
      tableData: [
        {
          date: "A",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "A",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "A",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "A",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    selectChange(val) {
      console.log(val);
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px;
  background-color: white;

  .info {
    margin-bottom: 10px;
  }
  .btnGroup {
    margin-bottom: 10px;
  }
  .text {
    margin-bottom: 10px;
  }
}
.footer {
  background-color: white;
  margin-top: 10px;
  box-sizing: border-box;
  padding: 10px;
  .btnBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    .boxL {
      display: flex;
      .boxSelect {
        margin-left: 30px;
      }
    }
  }
}
</style>
