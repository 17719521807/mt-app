<template>
    <div class="city-list">
        <div class="select">
            <div class="province-select">
                <span>按省份选择：</span>
                <div class="province" @click="$set(childShow, 0, !childShow[0])">
                    {{province}}
                    <i class="iconfont icon-xiajiantou"></i>
                    <div class="province-child child" v-show="childShow[0]">
                        <p>省份</p>
                        <ul class="clearfix">
                            <li v-for="province in provinceList" :key="province.provinceCode" @click="selectProvince(province.provinceName)">{{province.provinceName}}</li>
                        </ul>
                    </div>
                </div>
                <div class="city" @click="$set(childShow, 1, !childShow[1])">
                    {{city}}
                    <i class="iconfont icon-xiajiantou"></i>
                    <div class="city-child child" v-show="childShow[1] && province != '省份'">
                        <p>城市</p>
                        <ul class="clearfix">
                            <li v-for="city in cityList" :key="city.id" @click="clickRouter(city.name)">{{city.name}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="dir-select">
                <span>直接搜索：</span>
                <input type="text" placeholder="请输入城市中文或拼音" v-model="dirSearch" @focus="inputFocusHandle" ref="dirSelect">
                <ul v-show="dirSearchListIsShow">
                    <li v-for="dirItem in dirSearchList" :key="dirItem.id">{{dirItem.name}}</li>
                </ul>
            </div>
        </div>
        <dl class="hot-city">
            <dt>热门城市：</dt>
            <dd v-for="item in hotCity" :key="item.id" @click="clickRouter(item.name)">
                {{item.name}}
            </dd>
        </dl>
        <dl class="recent-search">
            <dt>最近搜索：</dt>
            <dd v-for="item in recentSearch" :key="item.id" @click="clickRouter(item.name)">
                {{item.name}}
            </dd>
        </dl>
        <div class="initail">
            <div class="initail-select">
                <span>按拼音首字母选择：</span>
                <a :href="`#${letter}`" v-for="letter in initail" :key="letter">{{letter}}</a>
            </div>
            <dl v-for="letter in initail" :key="letter" :id="letter">
                <dt>{{letter}}</dt>
                <dd v-for="item in filterItemCity(letter)" :key="item.id" @click="clickRouter(item.name)" :class="{active: item.active}">{{item.name}}</dd>
            </dl>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            province: '省份',
            city: '城市',
            hotCity: [],
            recentSearch: [],
            initail: [],
            itemCity: [],
            provinceList: [],
            childShow: [false, false],
            cityList: [],
            dirSearch: '',
            dirSearchTimer: 0,
            dirSearchList: [],
            dirSearchListIsShow: false,
        }
    },
    created() {
        this.initail = this.getLetter('upperCase');
        this.getHotCity();
        this.getRecentSearch();
        this.getItemCityList();
        this.getProvinceList();
        this.eventClick();
    },
    watch: {
        "province"(newVal) {
            this.provinceList.forEach(value => {
                if(value.provinceName == newVal) {
                    this.cityList = value.cityInfoList;
                }
            })
        },
        "dirSearch"(newVal) {
            clearTimeout(this.dirSearchTimer);
            this.dirSearchTimer = setTimeout(() => {
                this.dirSearchList = this.itemCity.filter(value => {
                    return value.name.indexOf(newVal) != -1 && newVal != '';
                });
                this.dirSearchList.length != 0 ? this.dirSearchListIsShow = true : this.dirSearchListIsShow = false;
            }, 800);
        }
    },
    methods: {
        inputFocusHandle() {
          if(this.dirSearchList.length != 0) {
              this.dirSearchListIsShow = true;
          }  
        },
        eventClick() {
            document.addEventListener('click',  (e) => {
                if(e.target != this.$refs.dirSelect) {
                    this.dirSearchListIsShow = false;
                }
            });
        },
        selectProvince(province) {
            this.province = province;
        },
        getProvinceList() {
            this.axios.get('/api/meituan/city/province.json', {
                params: {
                    appkey: 'lhf604110425_1590916475099'
                }
            }).then(res => {
                this.provinceList = res.data;
            })
        },
        filterItemCity(upperLetter) {
            return this.itemCity.filter((value) => {
                for(let i = 0; i < this.hotCity.length; i++) {
                    if(value.name == this.hotCity[i].name) {
                        value.active = true;
                    }
                }
                return value.firstChar.toUpperCase() == upperLetter;
            });
        },
        getLetter(type) {
            const arr = [];
            let letter = type == 'upperCase' ? 65 : 97;
            for(let i = 0; i < 26; i++) {
                const finalLetter = String.fromCharCode(letter + i);
                arr.push(finalLetter);
            }
            return arr;
        },
        getItemCityList() {
            this.axios.get('/api/meituan/city/cityList.json', {
                params: {
                    appkey: 'lhf604110425_1590916475099'
                }
            }).then(res => {
                this.itemCity = res.data;
                for(const item in this.itemCity) {
                    this.itemCity[item].active = false;
                }
            })
        },
        clickRouter(name) {
            this.$store.commit('setAddress', {address: name});
            this.$router.push('/main');
        },
        getHotCity() {
            this.axios.get('/api/meituan/city/hot.json', {
                params: {
                    appkey: 'lhf604110425_1590916475099'
                }
            }).then(res => {
                this.hotCity = res.data;
            })
        },
        getRecentSearch() {
            this.axios.get('/api/meituan/city/recents.json', {
                params: {
                    appkey: 'lhf604110425_1590916475099'
                }
            }).then(res => {
                this.recentSearch = res.data;
            })
        }
    }
}
</script>
<style scoped>
@import url('../../assets/css/cityList/index.css');
</style>