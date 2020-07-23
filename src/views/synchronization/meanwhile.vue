<template>
  <div class="saveMangement">
    <div class="footer">
      <div class="content">
        <div class="baseL">
          <div class="btnBox">
            同步中心 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 基于账号对项目进行分配
          </div>
          <div class="btnBox textSync">
            同步任务支持实时，离线周期，离线手动三种同步模式，在创建同步任务前您需要先创建数据源，Hive，HDFS数据默认创建当前项目Hive库，存储HDFS路径
          </div>
        </div>
        <div class="baseR">
          <div class="btnGroup">
            <el-button
              size="mini"
              type="primary"
            >快速新建</el-button>
            <el-button size="mini" @click="addTask">新建同步任务</el-button>
          </div>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="textBox">
        <!-- <div class="boxL"> -->
        <div class="boxSelect">
          任务链路:
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
        <div class="boxSelect">
          责任人:
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

        <div>
          <el-input
            size="small"
            placeholder="请输入内容"
            suffix-icon="el-icon-search"
            v-model="seachVal"
          >
          </el-input>
        </div>
        <div>
            <el-checkbox v-model="checked">我的任务</el-checkbox>
            </div>
        <!-- <div class="boxR">
            <el-button
              size="small"
              type="primary"
            >申请新建离线队列</el-button>
          </div> -->
        <!-- </div> -->
      </div>
      <div class="tableData">
        <el-table
          :data="tableData"
          style="width: 100%"
        >
          <el-table-column
            prop="path"
            label="任务名称"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="science"
            label="类型"
            width="100"
          ></el-table-column>

          <el-table-column
            prop="saveAmount"
            label="状态"
            width="100"
          >
          </el-table-column>

          <el-table-column
            prop="name"
            label="责任人"
            width="150"
          ></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small"
              >
                前往调度
              </el-button>


              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small"
              >
                编辑
              </el-button>



              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small"
              >
                克隆
              </el-button>




              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small"
              >
                更多
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
      seachVal:"",
      value: "",
      manmber: "",
      checked:false,
      checkList: ["项目管理员", "运维", "开发", "分析师"],
      tableData: [
        {
          science: "离线周期",
          path: "Hive->MySql",
          saveAmount: "已生效",
          name:'张三'
        },
        {
          science: "离线周期",
          path: "Hive->MySql",
          saveAmount: "已生效",
          name:'张三'

        },
        {
          science: "离线周期",
          path: "Hive->MySql",
          saveAmount: "已生效",
          name:'张三'

        },
        {
          science: "离线周期",
          path: "Hive->MySql",
          saveAmount: "已生效",
          name:'张三'

        }
      ]
    };
  },
  methods: {
    selectChange(val) {
      console.log(val);
    },
    addTask(){
      this.$router.push("/synchronization/addTask")
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
  .text {
    margin-bottom: 10px;
  }
}
.footer {
  background-color: white;
  margin-top: 10px;
  box-sizing: border-box;
  .content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .btnBox {
      padding: 10px;
    }
  }
  .tableData {
    padding: 10px;
  }
  .textBox {
    margin-bottom: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .textSync {
    font-size: 13px;
  }
}
</style>
