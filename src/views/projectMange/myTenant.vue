<template>
  <div class="baseInfo">
    <div class="header">
      <div class="baseL">
        <div class="info myTenant">
          <span>
            我的租户
          </span>
        </div>
        <div class="info department">
          <div class="info">
            <span>
              归属一级部门：xxx部门
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>已用存储成本:10000元/月</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>已用计算成本:10000元/月</span>

          </div>
        </div>
        <div class="info">
          <div class="info">
            <span>
              租户管理员：啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦
              <i class="el-icon-edit"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="baseR">
        <div class="btnGroup">
          <span><i class="el-icon-s-custom"></i>当前租户:张三</span>
        </div>
      </div>
    </div>
    <div class="footer">
      <el-tabs
        v-model="activeName"
        @tab-click="handleClick"
      >
        <el-tab-pane
          label="离线Yam队列"
          name="first"
        >
          <div class="btnBox">
            <div class="boxL">
              <div class="demo-input-suffix">
                Yam队列:
                <el-input
                  v-model="manmber"
                  style="width:200px"
                  placeholder="请输入关键字，模糊搜索"
                ></el-input>
              </div>
              <div class="boxSelect">
                属性:
                <el-select
                  v-model="value"
                  placeholder="请选择"
                >
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
              <el-button
                size="small"
                type="primary"
              >申请新建离线队列</el-button>
            </div>
          </div>
          <div class="tableData">
            <el-table
              :data="tableData"
              style="width: 100%"
            >
              <el-table-column
                prop="name"
                label="队列名称"
                width="180"
              ></el-table-column>
              <el-table-column
                prop="date"
                label="属性"
                width="100"
              ></el-table-column>
              <el-table-column
                label="成本部(元/月)"
                prop="layDate"
              >
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index, tableData)"
                    type="text"
                    size="small"
                  >查看项目</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>

        </el-tab-pane>
        <el-tab-pane
          label="实时Yam队列"
          name="second"
        >实时Yam队列</el-tab-pane>
        <el-tab-pane
          label="离线GateWay队列"
          name="third"
        >离线GateWay队列</el-tab-pane>
        <el-tab-pane
          label="租户成员"
          name="fourth"
        >租户成员</el-tab-pane>
        <el-tab-pane
          label="全部项目"
          name="five"
        >全部项目</el-tab-pane>
      </el-tabs>

    </div>
  </div>
</template>

<script>
export default {
  name: "myTenant",
  data() {
    return {
      value: "",
      manmber: "",
      options: [
        {
          value: "选项1",
          label: "开发"
        },
        {
          value: "选项2",
          label: "生产"
        }
      ],
      checkList: ["项目管理员", "运维", "开发", "分析师"],
      tableData: [
        {
          date: "生产",
          name: "root.root.root",
          read: "否",
          layDate: "10000元"
        },
        {
          date: "开发",
          name: "root.root.root",
          read: "否",
          layDate: "10000元"
        },
        {
          date: "生产",
          name: "root.root.root",
          read: "否",
          layDate: "10000元"
        },
        {
          date: "开发",
          name: "root.root.root",
          read: "否",
          layDate: "10000元"
        }
      ],
      activeName: "first",
      value1: true
    };
  },
  methods: {
    selectChange(val) {
      console.log(val);
    },
    handleClick(tab, event) {
      console.log(tab, event);
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
    margin: 10px 0;
  }
  .myTenant {
    margin: 20px 0;
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
    margin: 20px 0;
    .boxL {
      display: flex;
      align-items: center;
      .boxSelect {
        margin: 0 30px;
      }
    }
  }
}
</style>
