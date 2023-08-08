<template>
  <div class="application_info">

    <van-form label-align="top">
      <van-cell-group inset v-for="(FormData, index) in FormDatas" :key="index">
        <van-row gutter="24">
          <van-col :span="12">
            <van-field v-model="FormData.member_name" :rules="cnameRules" maxlength="11" label="姓名" placeholder="请输入姓名"
              required />
          </van-col>
          <van-col :span="12">
            <van-field v-model="FormData.relations" :rules="comRules" maxlength="2" label="关系" placeholder="请输入关系"
              required />
          </van-col>
          <van-field v-model="FormData.workplace" :rules="wpRules" maxlength="24" label="所在单位" placeholder="请输入所在单位"
            required />
          <van-field v-model="FormData.family_home" :rules="addressRules" maxlength="24" label="居住地" placeholder="请输入居住地"
            required />
          <van-field v-model="FormData.family_phone" maxlength="11" :rules="mobileRules" label="联系电话"
            placeholder="请输入联系电话" required />
        </van-row>
      </van-cell-group>
      <div class="btns">
        <van-button icon="plus" type="primary" size="small" @click="addForm" />
        <van-button icon="minus" type="primary" size="small" @click="reduceForm" :disabled="FormDatas.length === 1" />
      </div>
    </van-form>
  </div>
  <van-button type="default" block>保存</van-button>
</template>

<script setup>
import { ref } from "vue";
import { addressRules, cnameRules, comRules, mobileRules, wpRules } from "@/utils/rules.ts";
import { storeToRefs } from "pinia"
import useApplicationStore from "@/store/main/application";
const applicationStore = useApplicationStore()
const { familyFormData } = storeToRefs(applicationStore)
const FormDatas = familyFormData

const addForm = function () {
  FormDatas.value.push({
    member_name: "",
    relations: "",
    workplace: "",
    family_home: "",
    family_phone: "",
  });
};
const reduceForm = () => {
  if (FormDatas.value.length > 1) {
    FormDatas.value.pop();
  }
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
