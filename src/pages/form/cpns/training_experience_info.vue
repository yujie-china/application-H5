<template>
  <div class="application_info">
    <van-form label-align="top">
      <van-cell-group inset v-for="(FormData, index) in FormDatas" :key="index">
        <van-field v-model="FormData.train_name" label="培训机构名称" placeholder="培训机构名称" />
        <van-field v-model="FormData.start_time" is-link readonly name="datePicker" label="开始时间" placeholder="点击选择时间"
          @click="showPicker1[index] = true" />
        <van-popup v-model:show="showPicker1[index]" position="bottom">
          <van-date-picker @confirm="onConfirm1($event, index)" @cancel="showPicker1[index] = false" />
        </van-popup>
        <van-field v-model="FormData.end_time" is-link readonly name="datePicker" label="结束时间" placeholder="点击选择时间"
          @click="showPicker2[index] = true" />
        <van-popup v-model:show="showPicker2[index]" position="bottom">
          <van-date-picker @confirm="onConfirm2($event, index)" @cancel="showPicker2[index] = false" />
        </van-popup>
        <van-field v-model="FormData.major_name" label="专业/科目名称" placeholder="填写专业/科目名称" />
        <van-field v-model="FormData.certificate" label="证书" placeholder="填写证书" />
      </van-cell-group>
      <div class="btns">
        <van-button icon="plus" type="primary" @click="addForm" />
        <van-button icon="minus" type="primary" @click="reduceForm" :disabled="FormDatas.length === 1" />
      </div>
    </van-form>
  </div>
  <van-button type="default" block>保存</van-button>
</template>

<script setup>
import { ref } from "vue";
const FormDatas = ref([{
  train_name: "",
  major_name: "",
  certificate: "",
  start_time: "",
  end_time: ""
}])
const addForm = function () {
  FormDatas.value.push({
    train_name: "",
    major_name: "",
    certificate: "",
    start_time: "",
    end_time: ""
  });
};
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

  /deep/.van-button {
    border-radius: 50px;
    margin: 0 auto;
    display: block;
  }

}
</style>