<template>
  <div class="baseInfo">
    <div class="header">
      <div class="baseL">
        <div class="info">
          <span>
            个人权限
          </span>
          &nbsp;&nbsp;&nbsp;
          <span><i class="el-icon-s-custom"></i>生产账号:www.baidu.com</span>
        </div>
      </div>
      <div class="baseR">
        <div class="btnGroup">
          <el-button
            size="mini"
            type="primary"
          >为个人申请权限</el-button>
          <el-button size="mini">验证权限</el-button>
          <el-button size="mini">转交权限审批人</el-button>
          <el-button size="mini">我的申请</el-button>
        </div>
      </div>
    </div>
    <div class="footer">

      <el-tabs
        v-model="activeName"
        @tab-click="handleClick"
      >
        <el-tab-pane
          label="有权限的库"
          name="first"
        >
          <el-row :gutter="12">
            <el-col :span="24">
              <el-card
                shadow="never"
                body-style="padding:10px;"
              >
                仅包含所说项目的权限项，通过权限包继承的库的权限不在此范围内，库权限仅赋予获得无法主动申请，延期
              </el-card>
            </el-col>
          </el-row>
          <div class="btnBox">
            <div class="boxL">
              <div class="demo-input-suffix">
                库名:
                <el-input
                  v-model="manmber"
                  style="width:200px"
                  placeholder="请输入关键字，模糊搜索"
                ></el-input>
              </div>
              <div class="boxSelect">
                归属项目:
                <el-input
                  v-model="manmber"
                  style="width:300px"
                  placeholder="请输入关键字模糊搜索(code,中文名)"
                ></el-input>
              </div>
              <div class="selectBtn">
                仅能展示生产:
                <el-switch v-model="value1">
                </el-switch>
              </div>
            </div>
          </div>
          <div class="tableData">
            <el-table
              :data="tableData"
              style="width: 100%"
            >
              <el-table-column
                prop="name"
                label="库名"
                width="180"
              ></el-table-column>
              <el-table-column
                prop="date"
                label="归属项目"
                width="100"
              ></el-table-column>
              <el-table-column label="同时拥有HDFS读权限" prop="read">
              </el-table-column>
              <el-table-column label="过期时间" prop="layDate">
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index, tableData)"
                    type="text"
                    size="small"
                  >放弃权限</el-button>
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index, tableData)"
                    type="text"
                    size="small"
                  >权限延期</el-button>
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index, tableData)"
                    type="text"
                    size="small"
                  >补充权限</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>

        </el-tab-pane>
        <el-tab-pane
          label="有权限的表"
          name="second"
        >配置管理</el-tab-pane>
        <el-tab-pane
          label="有权限的包"
          name="third"
        >角色管理</el-tab-pane>
        <el-tab-pane
          label="权限权限"
          name="fourth"
        >权限权限</el-tab-pane>
      </el-tabs>

    </div>
  </div>
</template>

<script>
export default {
  name: "single",
  data() {
    return {
      value: "",
      manmber: "",
      checkList: ["项目管理员", "运维", "开发", "分析师"],
      tableData: [
        {
          date: "A",
          name: "库名",
          read: "否",
          layDate:'2020.20.20'
        },
        {
          date: "A",
          name: "库名",
          read: "否",
          layDate:'2020.20.20'

        },
        {
          date: "A",
          name: "库名",
          read: "否",
          layDate:'2020.20.20'

        },
        {
          date: "A",
          name: "库名",
          read: "否",
          layDate:'2020.20.20'

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
