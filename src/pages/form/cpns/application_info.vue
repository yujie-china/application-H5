<template>
  <div class="application_info">
    <van-form class="warp" :model="FormData" label-align="top">
      <van-cell-group inset>
        <van-field v-model="FormData.position" :rules="apjobRules" maxlength="11"
          label="申请职位（前端、后端、测试、运维、前台、会计、售前、售后、其他则自填）" placeholder="申请职位" required />
        <!-- <van-field v-model="FormData.other_position" maxlength="11" label="其他感兴趣的职位" placeholder="其他感兴趣的职位" /> -->
        <van-field v-model="FormData.price" :rules="priRules" maxlength="11" label="期望月薪" placeholder="xxxx" required />
        <span style="margin-left: 16px; color:red">*</span><span style="font-size: 16px;color: #323233;">目前职业状态</span>
        <van-radio-group v-model="FormData.job_status" direction="horizontal">
          <van-radio class="radio_style" shape="square" icon-size="16px" name="1">在职</van-radio>
          <van-radio class="radio_style" shape="square" icon-size="16px" name="2">离职</van-radio>
        </van-radio-group>
        <!-- <van-field v-model="FormData.come_time" is-link readonly name="datePicker" label="可到岗日期" placeholder="点击选择时间"
          @click="showPicker1 = true" required />
        <van-popup v-model:show="showPicker1" position="bottom">
          <van-date-picker @confirm="onConfirm1" @cancel="showPicker1 = false" />
        </van-popup> -->
        <van-radio-group v-model="FormData.is_business_trip" direction="horizontal">
          <van-col :span="24"><span class="work_tit">是否接受出差：</span></van-col>
          <van-radio class="radio_style" shape="square" icon-size="16px" name="1">短期</van-radio>
          <van-radio class="radio_style" shape="square" icon-size="16px" name="2">长期</van-radio>
          <van-radio class="radio_style" shape="square" icon-size="16px" name="3">不接受</van-radio>
        </van-radio-group>
        <!-- <van-radio-group v-model="FormData.isFriend" direction="horizontal">
          <span class="work_tit">是否有在本公司任职的亲友及原同事：</span>
          <van-radio class="radio_style" shape="square" icon-size="16px" name="1">是</van-radio>
          <van-radio class="radio_style" shape="square" icon-size="16px" name="2">否</van-radio>
        </van-radio-group> -->
        <!-- <van-cell-group v-if="FormData.isFriend === '1'" inset v-for="(FormData, index) in FormDatas" :key="index"> -->
        <!-- <van-cell-group v-if="FormData.isFriend === '1'">
          <van-field v-model="FormData.friend_name" maxlength="11" label="姓名" placeholder="请填写姓名" />
          <van-field v-model="FormData.community" maxlength="11" label="关系" placeholder="请填写关系" />
          <van-field v-model="FormData.office" maxlength="24" label="在何部门任何职位" placeholder="请填写部门职位" />
        </van-cell-group> -->
        <!-- <div class="btns" v-if="FormData.isFriend === '1'">
          <van-button icon="plus" type="primary" @click="addForm" size="small" />
          <van-button icon="minus" type="primary" @click="reduceForm" :disabled="FormDatas.length === 1" size="small" />
        </div> -->
        <!-- <van-radio-group v-model="FormData.isAgain" direction="horizontal">
          <van-col :span="24"><span class="work_tit">在此之前是否来我司面试过？</span></van-col>
          <van-radio class="radio_style" shape="square" icon-size="16px" name="1">是</van-radio>
          <van-radio class="radio_style" shape="square" icon-size="16px" name="2">否</van-radio>
        </van-radio-group>
        <van-cell-group v-if="FormData.isAgain === '1'">
          <van-field v-model="FormData.re_position" maxlength="11" label="面试职位" placeholder="面试职位" />
          <van-field v-model="FormData.interview_time" is-link readonly name="datePicker" label="面试时间"
            placeholder="点击选择时间" @click="showPicker2 = true" />
          <van-popup v-model:show="showPicker2" position="bottom">
            <van-date-picker @confirm="onConfirm2" @cancel="showPicker2 = false" />
          </van-popup>
        </van-cell-group> -->
        <van-radio-group direction="horizontal">
          <van-field v-model="fieldValue" is-link readonly label="通过何种途径获知该职位？" placeholder="请选择途径"
            @click="show = true" />
          <van-popup v-model:show="show" round position="bottom">
            <van-cascader v-model="FormData.road" title="请选择途径" :options="options" @close="show = false"
              style="font-size: 16px" @finish="onFinish" />
          </van-popup>
        </van-radio-group>
      </van-cell-group>
    </van-form>
  </div>
</template>

<script setup lang="ts">


import { ref } from "vue";
// import { showDialog } from 'vant';
// import { applyMainFormData } from "@/service/main/main"
import { apjobRules, priRules } from "@/utils/rules";
import { storeToRefs } from "pinia"
import useApplicationStore from "@/store/main/application";
const applicationStore = useApplicationStore()
const { mainFormData } = storeToRefs(applicationStore)
const FormData = mainFormData


// function updateMainFormData () {
//   applicationStore.mainFormData = FormData.value;
// }


// const showSave = async () => {
//   showDialog({
//     title: "保存成功",
//   })
//   const response = await applyMainFormData(mainFormData.value);
// }




// const showPicker1 = ref(false);
// const showPicker2 = ref(false);
// const onConfirm1 = ({ selectedValues }) => {
//   FormData.value.come_time = selectedValues.join('/');
//   showPicker1.value = false;
// };
// const onConfirm2 = ({ selectedValues }) => {
//   FormData.value.interview_time = selectedValues.join('/');
//   showPicker2.value = false;
// };

const show = ref(false);
const fieldValue = ref('');
// 选项列表，children 代表子选项，支持多级嵌套
const options = [
  {
    text: '网站',
    value: '网站'
  },
  {
    text: '招聘会',
    value: '招聘会'
  },
  {
    text: '报纸',
    value: '报纸'
  },
  {
    text: '猎头',
    value: '猎头'
  },
  {
    text: '推荐',
    value: '推荐'
  },
  {
    text: '其他途径',
    value: '其他途径'
  },
];
// 全部选项选择完毕后，会触发 finish 事件
const onFinish = ({ selectedOptions }) => {
  show.value = false;
  fieldValue.value = selectedOptions.map((option) => option.text).join('/');
};

// const FormDatas = ref([{
//   friend_name: "",
//   community: "",
//   office: ""
// }])
// const addForm = function () {
//   FormDatas.value.push({
//     friend_name: "",
//     community: "",
//     office: ""
//   });
// };
// const reduceForm = () => {
//   if (FormDatas.value.length > 1) {
//     FormDatas.value.pop();
//   }
// };



</script>


<style lang="less" scoped>
.application_info {
  margin-top: 10px;
  padding-left: 10px;

  .application_info_tit {
    margin-bottom: 10px;
  }

  //:deep(.van-radio--horizontal) {
  //  margin-right: 0 !important;
  //}
  .radio_style {
    margin-left: 16px;
  }

  .work_tit {
    font-size: 16px;
    margin-left: 15px;
    color: #323233;
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
