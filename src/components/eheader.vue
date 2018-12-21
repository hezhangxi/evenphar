<template>
  <div>
    <div class="header">
      <img class="logo" src="https://www.baidu.com/img/baidu_jgylogo3.gif"></img>
      <span class="nav">
	      <router-link to="">登陆</router-link>
	      <router-link to="">注册</router-link>
	      <router-link to="">关于</router-link>
      </span>
    </div>
    <div></div>
  </div>
</template>
<script>
export default {
  name: 'eheader'
}

</script>
<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  width:100%;
  height:50px;
  background-color:DimGray;

}

.logo{
	margin: 10px 300px;
	height:38px;
	width:117px;
}
.nav{
	margin:10px 300px;
	color:white;

}

</style>