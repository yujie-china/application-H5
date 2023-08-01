<template>
  <div class="application_info">
    <van-form class="warp" :model="FormData" label-align="top">
      <van-cell-group inset>
        <van-field v-model="FormData.position" label="申请职位" placeholder="申请职位" />
        <van-field v-model="FormData.other_position" label="其他感兴趣的职位" placeholder="其他感兴趣的职位" />
        <van-field v-model="FormData.price" label="期望待遇" placeholder="xxx/月" />
        <van-field v-model="FormData.come_time" is-link readonly name="datePicker" label="可到岗日期" placeholder="点击选择时间"
          @click="showPicker1 = true" />
        <van-popup v-model:show="showPicker1" position="bottom">
          <van-date-picker @confirm="onConfirm1" @cancel="showPicker1 = false" />
        </van-popup>
        <van-radio-group v-model="FormData.isOffsite" direction="horizontal">
          <span class="work_tit">是否接受异地工作：</span>
          <van-radio shape="square" icon-size="16px" name="1">是</van-radio>
          <van-radio shape="square" icon-size="16px" name="2">否</van-radio>
        </van-radio-group>
        <van-field v-model="FormData.address" label="期望地域" placeholder="xxx城市" />
        <van-radio-group v-model="FormData.isAgain" direction="horizontal">
          <span class="work_tit">在此之前是否来我司面试过？</span>
          <van-radio shape="square" icon-size="16px" name="1">是</van-radio>
          <van-radio shape="square" icon-size="16px" name="2">否</van-radio>
        </van-radio-group>
        <van-field v-model="FormData.position" label="面试职位" placeholder="面试职位" />
        <van-field v-model="FormData.interview_time" is-link readonly name="datePicker" label="面试时间" placeholder="点击选择时间"
          @click="showPicker2 = true" />
        <van-popup v-model:show="showPicker2" position="bottom">
          <van-date-picker @confirm="onConfirm2" @cancel="showPicker2 = false" />
        </van-popup>
        <van-radio-group direction="horizontal">
          <van-field v-model="fieldValue" is-link readonly label="通过何种途径获知该职位？" placeholder="请选择途径"
            @click="show = true" />
          <van-popup v-model:show="show" round position="bottom">
            <van-cascader v-model="cascaderValue" title="请选择途径" :options="options" @close="show = false"
              @finish="onFinish" />
          </van-popup>
          <van-field class="input_other" label-align="left" v-model="FormData.road" label="其他途径:" placeholder="请说明" />
        </van-radio-group>
      </van-cell-group>
    </van-form>
  </div>
  <van-button type="default" block @click="showSave">保存</van-button>
</template>

<script setup>
import { showDialog } from 'vant';
const showSave = () => {
  showDialog({
    title: "保存成功",
  })
}

import { ref } from "vue";
const FormData = ref({
  position: "",
  other_position: "",
  price: "",
  address: "",
  isOffsite: "1",
  isAgain: "1",
  road: "",
  come_time: "",
  interview_time: "",
})


const showPicker1 = ref(false);
const showPicker2 = ref(false);
const onConfirm1 = ({ selectedValues }) => {
  FormData.value.come_time = selectedValues.join('/');
  showPicker1.value = false;
};
const onConfirm2 = ({ selectedValues }) => {
  FormData.value.interview_time = selectedValues.join('/');
  showPicker2.value = false;
};

const show = ref(false);
const fieldValue = ref('');
const cascaderValue = ref('');
// 选项列表，children 代表子选项，支持多级嵌套
const options = [
  {
    text: '网站',
    value: '1'
  },
  {
    text: '招聘会',
    value: '2'
  },
  {
    text: '报纸',
    value: '3'
  },
  {
    text: '猎头',
    value: '4'
  },
  {
    text: '推荐',
    value: '5'
  },
];
// 全部选项选择完毕后，会触发 finish 事件
const onFinish = ({ selectedOptions }) => {
  show.value = false;
  fieldValue.value = selectedOptions.map((option) => option.text).join('/');
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


:global(.van-dialog) {
  // background-color: aqua;
  width: 300px;
  height: 150px;
  border-radius: 15px;

  :global(.van-dialog__header) {
    font-size: 20px;
    line-height: 79px;
    text-align: center;


  }

  :global(.van-dialog__confir) {
    color: var(--primary-color);
  }
}
</style>
