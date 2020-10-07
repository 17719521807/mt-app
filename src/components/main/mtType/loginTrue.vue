<template>
    <div class="login-true">
        <div class="setting">
            <i class="iconfont icon-chilun"></i>
        </div>
        <div class="user-head-img">
        </div>
        <div class="user-name">
            {{$store.state.name}}
        </div>
        <ul class="oth-user-info">
            <li>
                <i class="iconfont icon-dingdan"></i>
                <span>我的订单</span>
            </li>
            <li>
                <i class="iconfont icon-xingxing"></i>
                <span>我的收藏</span>
            </li>
            <li>
                <i class="iconfont icon-diyongquan"></i>
                <span>抵用券</span>
            </li>
            <li>
                <i class="iconfont icon-yue"></i>
                <span>余额</span>
            </li>
            <li>
                <i class="iconfont icon-sangedian"></i>
                <span>更多</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>