<template>
    <div class="recommend-list">
        <p>猜你喜欢</p>
        <ul>
            <li v-for="item in recommendList" :key="item.itemId">
                <div class="img">
                    <img src="https://p1.meituan.net/msmerchant/1392193f68f1fa823735ccdcf0452033254542.jpg@275w_156h_1e_1c" alt="">
                </div>
                <div class="title">{{item.title}}</div>
                <div class="score">{{item.score}} {{item.commentNum}}个评价</div>
                <div class="address">{{item.areaName}}</div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            recommendList: [],
        }
    },
    created() {
        this.axiosRecommendList();
    },
    methods: {
        axiosRecommendList() {
            this.axios.get('/api/meituan/list/recommend.json', {
                params: {
                    appkey: 'lhf604110425_1590916475099'
                }
            }).then(res => {
                this.recommendList = res.data;
            })
        }
    }
}
</script>