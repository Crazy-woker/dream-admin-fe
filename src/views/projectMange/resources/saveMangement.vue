<template>
  <div class="saveMangement">
    <div class="header">
      <div class="baseL">
        <div class="info">
          <span>
            www.baidu.comwww.baidu.comwww.baidu.comwww.baidu.com
          </span>
        </div>
        <div class="btnGroup">
          本次数据统计时间：2020.02.02
        </div>
        <div class="remainingStorage">
          <div class="remainL">
            <div>剩余存储量</div>
            <div class="allStorage">总存储量</div>
            <div>
              <el-progress :percentage="10"></el-progress>
            </div>
          </div>
          <div class="remainR">
            <div>剩余文件配置</div>
            <div class="allStorage">总文件配置</div>
            <div>
              <el-progress :percentage="70"></el-progress>
            </div>
          </div>
        </div>
      </div>
      <div class="baseR">
        <div class="btnGroup">
          <el-button
            size="mini"
            type="primary"
          >申请扩容</el-button>
          <el-button size="mini">缩减资源</el-button>
          <el-button size="mini">存储明细</el-button>
        </div>
        <div class="text">
          <i class="el-icon-s-custom"></i>生产账号:www.baidu.com
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="btnBox">项目存储管理: 基于账号对项目进行分配</div>
      <el-divider></el-divider>
      <div class="textBox">当前生产账号可分配存储量</div>
      <div class="tableData">
        <el-table
          :data="tableData"
          style="width: 100%"
        >
          <el-table-column
            prop="path"
            label="路径"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="science"
            label="环境"
            width="100"
          ></el-table-column>

          <el-table-column
            prop="saveAmount"
            label="剩余存储量"
            width="100"
          >
          </el-table-column>

          <el-table-column
            prop="date"
            label="剩余文件配额"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="分配quota"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="整体quota使用率"
            width="100"
          ></el-table-column>

          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small"
              >
                调整分配
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "saveMangement",
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
          science: "dev",
          path: "www.baidu.com",
          saveAmount: "11518"
        },
        {
          science: "dev",
          path: "www.baidu.com",
          saveAmount: "11517"
        },
        {
          science: "dev",
          path: "www.baidu.com",
          saveAmount: "11519"
        },
        {
          science: "dev",
          path: "www.baidu.com",
          saveAmount: "11516"
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
  // height: 150px;
  box-sizing: border-box;
  padding: 10px;
  background-color: white;

  .info {
    margin-bottom: 10px;
  }
  .btnGroup {
    margin-bottom: 10px;
  }
  .remainingStorage {
    display: flex;
    .remainL {
      padding: 10px;
      width: 300px;
      height: 100px;
      border: 1px solid gray;
      .allStorage {
        margin: 10px 0;
      }
    }
    .remainR {
      margin-left: 20px;
      padding: 10px;
      width: 300px;
      height: 100px;
      border: 1px solid gray;
      .allStorage {
        margin: 10px 0;
      }
    }
  }
  .text {
    margin-bottom: 10px;
  }
}
.footer {
  background-color: white;
  margin-top: 10px;
  box-sizing: border-box;
  .btnBox {
    padding: 10px;
  }
  .tableData {
    padding: 10px;
  }
  .textBox {
    margin-bottom: 10px;
    padding: 10px;
    box-sizing: border-box;
  }
}
</style>
