<template>
    <div class="login">
        <form>
            <div class="filed text-left">
                <label for="email">邮箱</label>
                <a-input type="email" />
            </div>
            <div class="filed text-left">
                <label for="password">密码</label>
                <a-input type="password" />
            </div>
            <button type="submit" class="btn btn-default btn-sm">提交</button>
        </form>
    </div>
</template>

<style scoped lang="scss">
.login {
    margin: 0 auto;
    width: 400px;
    padding-bottom: 55px;
    border: 1px solid #eee;
    box-shadow: 1px 1px 1px #eee;

    .filed {
        margin: 20px;
    }
    .btn {
        float: left;
        margin-left: 20px;
    }
}

</style>