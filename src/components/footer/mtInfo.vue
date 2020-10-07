<template>
  <ul class="mt-info">
    <li>
      <div class="user-help">
        <p>用户帮助</p>
        <ul>
          <li v-for="user in userHelp" :key="user">
            <a href="#">{{user}}</a>
          </li>
        </ul>
      </div>
      <div class="mt-serve">
        <p>美团服务</p>
        <ul>
          <li v-for="mt in mtServe" :key="mt">
            <a href="#">{{mt}}</a>
          </li>
        </ul>
      </div>
    </li>
    <li>
      <div class="shop-store">
        <p>商家合作</p>
        <ul>
          <li v-for="shop in shopStore" :key="shop">
            <a href="#">{{shop}}</a>
          </li>
        </ul>
      </div>
    </li>
    <li>
      <div class="proxy">
        <p>代理商加盟</p>
        <ul>
          <li v-for="proxy in proxies" :key="proxy">
            <a href="#">{{proxy}}</a>
          </li>
        </ul>
      </div>
      <div class="mt-rules">
        <p>美团规则</p>
        <ul>
          <li v-for="mtRule in mtRules" :key="mtRule">
            <a href="#">{{mtRule}}</a>
          </li>
        </ul>
      </div>
    </li>
    <li>
      <div class="attent-mt">
        <p>关注美团</p>
        <ul>
          <li v-for="attent in attentMt" :key="attent">
            <a href="#">{{attent}}</a>
          </li>
        </ul>
      </div>
      <div class="company-info">
        <p>公司信息</p>
        <ul>
          <li v-for="info in companyInfoes" :key="info">
            <a href="#">{{info}}</a>
          </li>
        </ul>
      </div>
      <div class="report">
        <p>廉政举报</p>
        <ul>
          <li v-for="report in reports" :key="report">
            <a href="#">{{report}}</a>
          </li>
        </ul>
      </div>
      <div class="intel-property">
        <p>知识产权</p>
        <ul>
          <li v-for="intelProperty in intelProperties" :key="intelProperty">
            <a href="#">{{intelProperty}}</a>
          </li>
        </ul>
      </div>
    </li>
    <li>
      <div class="customer-serve-hotLine">
        <p>消费者服务热线</p>
        <ul>
          <li>
            外卖消费者：
            <a href="#">10109777</a>
          </li>
          <li>
            猫眼消费者：
            <a href="#">10105335</a>
          </li>
          <li>
            其他消费者：
            <a href="#">10107888</a>
          </li>
        </ul>
      </div>
      <div class="shop-serve-hotLine">
        <p>商家服务热线</p>
        <ul>
          <li>
            外卖&餐饮商家：
            <a href="#"></a>
          </li>
          <li>
            休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等商家：
            <a href="#">10100107</a>
          </li>
        </ul>
      </div>
      <div class="report-area">
        <p>投诉举报专区</p>
        <ul>
          <li>
            违法和不良信息举报电话：
            <a href="#">4006018900</a>
          </li>
          <li>
            举报邮箱：
            <a href="#">tousujubao@meituan.com</a>
          </li>
          <li>
            <a href="#">网上有害信息举报</a>
          </li>
        </ul>
      </div>
      <div class="shop-self-entry">
        <ul>
          <li>
            <a href="#">商家自助入驻美团入口</a>
          </li>
        </ul>
      </div>
      <div class="register-entry">
        <ul>
          <li>
            <a href="#">供应商注册入口</a>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      userHelp: [
        "申请退款",
        "查看美团券密码",
        "常见问题",
        "用户协议",
        "隐私政策",
        "反诈骗公告",
        "消费者权益保障",
      ],
      mtServe: [
        "美团外卖",
        "美团酒店",
        "猫眼电影",
        "美团配送",
        "美团云",
        "大众点评",
        "美团民宿",
        "无人配送",
      ],
      shopStore: [
        "美团餐饮商户中心",
        "美食商家入驻（非外卖）",
        "美团外卖开店申请",
        "美团收银官网",
        "外卖配送加盟申请",
        "美团点评餐饮学院",
        "酒店商家入驻",
        "境内度假商家入驻",
        "综合商家入驻",
        "美团民俗房东商家入驻",
        "商家开票申请",
        "美团点评智能收银机",
        "美团点评餐饮开放平台",
        "美团点评收单",
        "免费试用美团排队",
        "快驴进货商家合作",
        "美团闪购商家入驻",
      ],
      proxies: [
        "美团外卖代理商招募",
        "到店餐饮代理商招募",
        "非餐饮代理商招募",
        "美团联盟",
        "美团收银招募线上分销商",
        "美团点评5S服务商招募",
        "美团收单渠道代理商招募",
      ],
      mtRules: ["规则中心", "规则目录", "规则评议院"],
      attentMt: ["美团新浪微博"],
      companyInfoes: [
        "关于我们",
        "投资者关系",
        "加入我们",
        "商户诚信公约及管理办法",
        "保险经纪资质",
      ],
      reports: ["廉政举报平台"],
      intelProperties: ["知识产权维权平台"],
    };
  },
};
</script>