<template>
    <div class="home">
        <h3>我们来学习axios</h3>
        <p>点击下面的按钮跳转到登录/注册页面吧</p>
        <router-link tag="button" to="/register" class="btn btn-default">注册</router-link>
        <router-link tag="button" to="/login" class="btn btn-default">登录</router-link>
    </div>
</template>

<style>
.home {
    background: #fff;
    padding-top: 20px;
}
.btn {
    width: 80px;
    margin: 0 10px;
    color: blue;
    border-color: blue; 
}
</style>