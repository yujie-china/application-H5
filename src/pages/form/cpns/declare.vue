<template>
  <div class="application_info">

    <van-form :model="FormData" label-align="top">
      <van-cell-group inset>
        <van-field v-model="FormData.confirmed"
          label="我仅声明此申请表所填写的一切情况真实、完整。如有与事实不符之处，录用后同意接受公司立即解雇的处理。同时，我授权江西海默技术股份有限公司调查我除目前供职公司外的一切情况。"
          placeholder="同意/不同意" />
        <van-field v-model="FormData.application_name" label="申请人签字" placeholder="请签字" />
        <van-field v-model="FormData.apply_time" is-link readonly name="datePicker" label="申请时间" placeholder="点击选择时间"
          @click="showPicker1 = true" />
        <van-popup v-model:show="showPicker1" position="bottom">
          <van-date-picker @confirm="onConfirm1" @cancel="showPicker1 = false" />
        </van-popup>
      </van-cell-group>
    </van-form>
  </div>
  <van-button type="default" block>保存</van-button>
</template>

<script setup>
import { ref } from "vue";
const FormData = ref({
  application_name: "",
  apply_time: ""

})

const showPicker1 = ref(false);
const onConfirm1 = ({ selectedValues }) => {
  FormData.value.apply_time = selectedValues.join('/');
  showPicker1.value = false;
};

</script>


<style lang="less" scoped>
.application_info {
  margin-top: 10px;
  padding-left: 10px;

  .application_info_tit {
    margin-bottom: 10px;

  }

  .work_tit {
    font-size: 14px;
    margin-left: 15px;
  }

  .road {
    display: flex;
    flex-wrap: wrap;
    padding: 0 14px;

    .input_other {
      padding: 0;

    }
  }

}
</style>