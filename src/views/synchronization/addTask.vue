<template>
  <div class="saveMangement">
    <div class="footer">
      <div class="content">
        <div class="baseL">
          <div class="btnBox">
            新建同步任务
          </div>
        </div>
        <div class="baseR">
          <div class="btnGroup">
            <i class="el-icon-notebook-2"></i>
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small"
            >
              数据源列表
            </el-button>
            <i class="el-icon-notebook-2"></i>
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small"
            >
              同步任务列表
            </el-button>
          </div>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="progress">
        <el-steps :active="1">
          <el-step
            title="基本信息"
            icon="el-icon-edit"
          ></el-step>
          <el-step
            title="来源去向"
            icon="el-icon-upload"
          ></el-step>
          <el-step
            title="字段映射"
            icon="el-icon-picture"
          ></el-step>
          <el-step
            title="任务配置"
            icon="el-icon-picture"
          ></el-step>
        </el-steps>

      </div>

      <div class="formContent">
        <div
          class="formBox"
          style=""
        >
          <el-form
            :model="formData"
            ref="form"
            :rules="rules"
            label-width="150px">
            <el-form-item
              label="任务名称："
              prop="levelName"
            >
              <el-input
                style="width:400px;"
                v-model="formData.levelName"
                placeholder="请输入任务名称"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="负责人："
              prop="levelName"
            >
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
            </el-form-item>

            <el-form-item
              label="同步任务类型："
              prop="levelName"
            >
              <el-radio-group v-model="radio">
                <el-radio :label="1">离线周期</el-radio>
                <el-radio :label="2">离线手动</el-radio>
                <el-radio :label="3">实时</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-form>


                <div class="tableData">
        <el-table
          :data="tableData"
          style="width: 100%"
        >
          <el-table-column
            prop="path"
            label="同步数据来源"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="science"
            label="同步数据去向"
            width="180"
          ></el-table-column>

          <el-table-column label="说明">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small"
              >
                查看
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: "addTask",
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
      seachVal: "",
      value: "",
      manmber: "",
      checked: false,
      checkList: ["项目管理员", "运维", "开发", "分析师"],
      tableData: [
        {
          science: "ES",
          path: "Hive",
          saveAmount: "已生效",
          name: "张三"
        },
        {
          science: "ES",
          path: "Hive",
          saveAmount: "已生效",
          name: "张三"
        },
        {
          science: "ES",
          path: "Hive",
          saveAmount: "已生效",
          name: "张三"
        },
        {
          science: "ES",
          path: "Hive",
          saveAmount: "已生效",
          name: "张三"
        }
      ],
      formData: {
        levelName: ""
      },
      rules: {
        levelName: [
          {
            required: true,
            message: "请输入任务名称",
            trigger: "blur"
          }
        ]
      },
      radio: 1
    };
  },
  methods: {
    selectChange(val) {
      console.log(val);
    },
    addTask() {
      this.$router.push("/synchronization/addTask");
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
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .btnBox {
      padding: 10px;
    }
  }
  .progress {
    width: 800px;
    margin: 0 auto;
  }
  .formContent {
    position: relative;
    background-color: white;
    min-height: 500px;
    .formBox {
      width: 600px;
      margin: 30px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
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
