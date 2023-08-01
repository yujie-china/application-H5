<template>
  <div class="application_info">

    <van-form label-align="top">
      <van-cell-group inset v-for="(FormData, index) in FormDatas" :key="index">
        <van-field v-model="FormData.friend_name" label="姓名" placeholder="请填写姓名" />
        <van-field v-model="FormData.community" label="关系" placeholder="请填写关系" />
        <van-field v-model="FormData.office" label="在何部门任何职位" placeholder="请填写部门职位" />
      </van-cell-group>
    </van-form>
  </div>
  <van-button type="default" block>保存</van-button>
</template>

<script setup>
import { ref } from "vue";
const FormDatas = ref([{
  friend_name: "",
  community: "",
  office: ""

}])

const addForm = function () {
  FormDatas.value.push({
    friend_name: "",
    community: "",
    office: ""
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