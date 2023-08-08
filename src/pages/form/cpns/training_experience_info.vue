<template>
  <div class="application_info">
    <van-form label-align="top">
      <!-- 工作经历 -->
      <span class="box">工作经历:</span>
      <van-cell-group inset v-for="(FormData, index) in WeFormData" :key="index">

        <van-row>
          <van-col :span="11">
            <van-field v-model="FormData.workstart_time" is-link readonly name="datePicker" label="任职起始时间"
              placeholder="点击选择时间" @click="showPicker1[index] = true" />
            <van-popup v-model:show="showPicker1[index]" position="bottom">
              <van-date-picker @confirm="onConfirm1($event, index)" @cancel="showPicker1[index] = false"
                :min-date="minDate" />
            </van-popup>
          </van-col>
          <van-col :span="2">
            <div style="margin-top:18px">--</div>
          </van-col>
          <van-col :span="11">
            <van-field v-model="FormData.workend_time" is-link readonly name="datePicker" label="任职结束时间"
              placeholder="点击选择时间" @click="showPicker2[index] = true" />
            <van-popup v-model:show="showPicker2[index]" position="bottom">
              <van-date-picker @confirm="onConfirm2($event, index)" @cancel="showPicker2[index] = false"
                :min-date="minDate" />
            </van-popup>
          </van-col>
        </van-row>
        <van-field v-model="FormData.company_name" maxlength="24" label="公司名称" placeholder="请输入公司名称" />
        <van-field v-model="FormData.position" maxlength="11" label="所任职位" placeholder="请输入所任职位" />
        <van-field v-model="FormData.treatment" maxlength="24" label="薪酬待遇" placeholder="请输入薪酬待遇" />
        <van-field v-model="FormData.leave_reason" maxlength="24" label="离职原因" placeholder="请输入离职原因" />
        <van-field v-model="FormData.superior_phone" maxlength="11" label="直接上级及电话" placeholder="请输入直接上级及电话" />
      </van-cell-group>
      <div class="btns">
        <van-button icon="plus" type="primary" @click="addForm2" size="small" />
        <van-button icon="minus" type="primary" @click="reduceForm2" :disabled="WeFormData.length === 1" size="small" />
      </div>
      <!-- 培训机构 -->
      <span class="box">培训机构:</span>
      <van-cell-group inset v-for="(FormData, index) in TeFormData" :key="index">
        <van-field v-model="FormData.trainingTime" is-link readonly name="datePicker" label="培训时间" placeholder="点击选择时间"
          @click="showPicker[index] = true" />
        <van-popup v-model:show="showPicker[index]" position="bottom">
          <van-date-picker @confirm="onConfirm($event, index)" @cancel="showPicker[index] = false" :min-date="minDate" />
        </van-popup>
        <van-field v-model="FormData.trainingLocation" maxlength="24" label="培训地点" placeholder="请输入培训地点" />
        <van-field v-model="FormData.trainingCourse" maxlength="24" label="培训课程" placeholder="请输入培训课程" />
      </van-cell-group>
      <div class="btns">
        <van-button icon="plus" type="primary" @click="addForm1" size="small" />
        <van-button icon="minus" type="primary" @click="reduceForm1" :disabled="TeFormData.length === 1" size="small" />
      </div>
    </van-form>
  </div>
  <van-button type="default" block>保存</van-button>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia"
import useApplicationStore from "@/store/main/application";
const applicationStore = useApplicationStore()
const { work_experienceFormData, train_experienceFormData } = storeToRefs(applicationStore)
const TeFormData = train_experienceFormData
const WeFormData = work_experienceFormData
const minDate = ref(new Date("1970-01-01"))

const addForm1 = function () {
  const newForm1 = {
    trainingTime: "",
    trainingLocation: "",
    trainingCourse: "",
  };

  if (TeFormData.value.length === 1) {
    // 如果当前只有一个表单，将新的工作经历表单插入到第二个位置
    TeFormData.value.splice(1, 0, newForm1);
  } else {
    // 如果当前已经存在多个表单，将新的工作经历表单插入到最后一个位置
    TeFormData.value.push(newForm1);
  }
};
const reduceForm1 = () => {
  if (TeFormData.value.length > 1) {
    TeFormData.value.pop();
  }
};

const addForm2 = function () {
  const newForm2 = {
    workstart_time: "",
    workend_time: "",
    company_name: "",
    position: "",
    treatment: "",
    leave_reason: "",
    superior_phone: ""
  };

  if (WeFormData.value.length === 1) {
    // 如果当前只有一个表单，将新的工作经历表单插入到第二个位置
    WeFormData.value.splice(1, 0, newForm2);
  } else {
    // 如果当前已经存在多个表单，将新的工作经历表单插入到最后一个位置
    WeFormData.value.push(newForm2);
  }
};
const reduceForm2 = () => {
  if (WeFormData.value.length > 1) {
    WeFormData.value.pop();
  }
};

// 时间
const showPicker = ref(Array(TeFormData.value.length).fill(false));
const showPicker1 = ref(Array(WeFormData.value.length).fill(false));
const showPicker2 = ref(Array(WeFormData.value.length).fill(false));
const onConfirm = ({ selectedValues }, index) => {
  TeFormData.value[index].trainingTime = selectedValues.join("/");
  showPicker.value[index] = false;
};
const onConfirm1 = ({ selectedValues }, index) => {
  WeFormData.value[index].workstart_time = selectedValues.join("/");
  showPicker1.value[index] = false;
};
const onConfirm2 = ({ selectedValues }, index) => {
  WeFormData.value[index].workend_time = selectedValues.join("/");
  showPicker2.value[index] = false;
};
</script>

<style lang="less" scoped>
.box {
  font-size: 16px;
  color: black;
  margin-left: 16px;
}

.application_info {
  margin-top: 10px;
  padding-left: 10px;

  .application_info_tit {
    margin-bottom: 10px;
  }

  .btns {
    display: flex;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  /deep/.van-button {
    border-radius: 50px;
    margin: 0 auto;
    display: block;
  }
}
</style>
