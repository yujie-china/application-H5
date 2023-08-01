<template>
  <div class="application_info">

    <van-form label-align="top">
      <van-cell-group inset v-for="(FormData, index) in FormDatas" :key="index">
        <van-field v-model="FormData.certificate_name" label="资格证书" placeholder="填写资格证书名称" />
        <van-field v-model="FormData.certificate_id" label="证书编号" placeholder="填写证书编号" />

        <van-field v-model="FormData.certificate_end_time" is-link readonly name="datePicker" label="证书到期日"
          placeholder="点击选择时间" @click="showPicker[index] = true" />
        <van-popup v-model:show="showPicker[index]" position="bottom">
          <van-date-picker @confirm="onConfirm($event, index)" @cancel="showPicker[index] = false" />
        </van-popup>

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
  certificate_name: "",
  certificate_id: "",
  certificate_end_time: ""

}])

const addForm = function () {
  FormDatas.value.push({
    certificate_name: "",
    certificate_id: ""
  });
};
const reduceForm = () => {
  if (FormDatas.value.length > 1) {
    FormDatas.value.pop();
  }
};

const showPicker = ref(Array(FormDatas.value.length).fill(false));
const onConfirm = ({ selectedValues }, index) => {
  FormDatas.value[index].certificate_end_time = selectedValues.join("/");
  showPicker.value[index] = false;
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