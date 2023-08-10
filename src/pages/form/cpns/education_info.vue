<template>
  <div class="application_info">

    <van-form label-align="top">
      <div>（教育背景从最高学历填起至高中）</div>
      <van-cell-group inset v-for="(FormData, index) in FormDatas" :key="index">
        <van-row gutter="24">
          <van-col :span="11">
            <van-field v-model="FormData.start_time" is-link readonly name="datePicker" label="开始时间" placeholder="点击选择时间"
              @click="showPicker1[index] = true" />
            <van-popup v-model:show="showPicker1[index]" position="bottom">
              <van-date-picker @confirm="onConfirm1($event, index)" @cancel="showPicker1[index] = false"
                :min-date="minDate" />
            </van-popup>
          </van-col>
          <van-col :span="2">
            <div style="margin-top:18px">--</div>
          </van-col>
          <van-col :span="11">
            <van-field v-model="FormData.end_time" is-link readonly name="datePicker" label="结束时间" placeholder="点击选择时间"
              @click="showPicker2[index] = true" />
            <van-popup v-model:show="showPicker2[index]" position="bottom">
              <van-date-picker @confirm="onConfirm2($event, index)" @cancel="showPicker2[index] = false"
                :min-date="minDate" />
            </van-popup>
          </van-col>
          <van-col :span="13">
            <van-field v-model="FormData.school_name" maxlength="24" :rules="snameRules" label="学校名称" placeholder="学校名称"
              required />
          </van-col>
          <van-col :span="11">
            <van-field v-model="FormData.major" maxlength="11" :rules="majRules" label="专业" placeholder="填写专业" required />
          </van-col>
          <van-col :span="13">
            <van-field v-model="FormData.study_way" maxlength="4" :rules="stuwayRules" label="学习方式" placeholder="全日制/非全日制"
              required />
          </van-col>
          <van-col :span="11">
            <van-field v-model="FormData.qualifications" maxlength="3" :rules="quaRules" label="学历" placeholder="填写学历"
              required />
          </van-col>

        </van-row>
      </van-cell-group>
      <div class="btns">
        <van-button icon="plus" type="primary" size="small" @click="addForm" />
        <van-button icon="minus" type="primary" size="small" @click="reduceForm" :disabled="FormDatas.length === 1" />
      </div>
    </van-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { majRules, quaRules, snameRules, stuwayRules } from "@/utils/rules.ts";
import { storeToRefs } from "pinia"
import useApplicationStore from "@/store/main/application";
const applicationStore = useApplicationStore()
const { educationFormData } = storeToRefs(applicationStore)
const FormDatas = educationFormData
const minDate = ref(new Date("1970-01-01"));
//添加
const addForm = function () {
  FormDatas.value.push({
    school_name: "",
    major: "",
    study_way: "",
    qualifications: "",
    start_time: "",
    end_time: ""
  });
};
//减少
const reduceForm = () => {
  if (FormDatas.value.length > 1) {
    FormDatas.value.pop();
  }
};


//时间
const showPicker1 = ref(Array(FormDatas.value.length).fill(false));
const showPicker2 = ref(Array(FormDatas.value.length).fill(false));
const onConfirm1 = ({ selectedValues }, index) => {
  FormDatas.value[index].start_time = selectedValues.join("/");
  showPicker1.value[index] = false;
};
const onConfirm2 = ({ selectedValues }, index) => {
  FormDatas.value[index].end_time = selectedValues.join("/");
  showPicker2.value[index] = false;
};

</script>


<style lang="less" scoped>
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

  :deep(.van-button) {
    border-radius: 50px;
    margin: 0 auto;
    display: block;
  }

}
</style>
