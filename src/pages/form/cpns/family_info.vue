<template>
  <div class="application_info">

    <van-form label-align="top">
      <van-cell-group inset v-for="(FormData, index) in FormDatas" :key="index">
        <van-field v-model="FormData.member_name" label="姓名" placeholder="请输入姓名" />
        <van-field v-model="FormData.relations" label="关系" placeholder="请输入关系" />
        <van-field v-model="FormData.workplace" label="所在单位" placeholder="请输入所在单位" />
        <van-field v-model="FormData.family_home" label="居住地" placeholder="请输入居住地" />
        <van-field v-model="FormData.family_phone" label="联系电话" placeholder="请输入联系电话" />
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
  member_name: "",
  relations: "",
  workplace: "",
  family_home: "",
  family_phone: ""
}])
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