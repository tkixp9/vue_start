<template>
  <div class="home">
    <swiper :options="swiperOption" ref="mySwiper" class="banner" v-if="bannerData.length>1">
      <!-- slides -->
      <swiper-slide v-for="item in bannerData" :key="item.id">
        <a :href="item.url" :style="{backgroundImage: `url(${host+item.img_path})` }" class="banner-link" target="_blank"></a>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <div class="banner" v-else-if="bannerData.length">
      <a class="banner-link" :href="bannerData[0].url" :style="{backgroundImage: `url(${host+bannerData[0].img_path})` }" target="_blank"></a>
    </div>
    <div class="introduce container">
      <div class="fs24-grey">
        山东微桌是一家以互联网为基础的平台公司<br/>
        聚焦于新经济下企业用工模式趋于灵活、高效发展趋势<br/>
        我们的使命是“开启未来工作时代”
      </div>
      <ul class="fs30">
        <li>
          <router-link to="/aboutus#id1">
            <img src="~@/assets/images/home/introduce1.png">
            <div>公司简介</div>
          </router-link>
        </li>
        <li>
          <router-link to="/aboutus#id4">
            <img src="~@/assets/images/home/introduce2.png">
            <div>企业文化</div>
          </router-link>
        </li>
        <li>
          <router-link to="/joinus#id1-3">
            <img src="~@/assets/images/home/introduce3.png">
            <div>办公环境</div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="service">
      <div class="container clearfix">
        <ul class="left-nav">
          <li :class="{active: active === 1}" @mouseenter="active=1">
            <div class="fs24">企业定制服务</div>
            <p class="fs14">打破行业天花板，让行业快速发展</p>
            <i class="iconfont iconicon-shouye-fuwu"></i>
          </li>
          <li :class="{active: active === 2}" @mouseenter="active=2">
            <div class="fs24">企业生态服务</div>
            <p class="fs14">业务流程外包</p>
            <i class="iconfont iconicon-shouye-fuwu"></i>
          </li>
          <li :class="{active: active === 3}" @mouseenter="active=3">
            <div class="fs24">个人定制服务</div>
            <p class="fs14">业务流程外包</p>
            <i class="iconfont iconicon-shouye-fuwu"></i>
          </li>
        </ul>
        <div class="info-right">
          <ul v-if="active === 1">
            <li>
              <router-link to="/business-outsourcing">
                <img src="../assets/images/home/img-1.png">
                <div>
                  <h3 class="fs24">业务流程外包</h3>
                  <p class="fs14">自由工作线上服务社区 ——— 软硬服务支撑、创业扶持优享</p>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/human-resource">
                <img src="../assets/images/home/img-2.png">
                <div>
                  <h3 class="fs24">人力资源优化</h3>
                  <p class="fs14">多元化用工模式选择 激活企业用工自主权</p>
                </div>
              </router-link>
            </li>
            <li class="block">
              <router-link to="/data-crowdsourcing">
                <img src="../assets/images/home/img-3.png">
                <div>
                  <h3 class="fs24">数据众包</h3>
                  <p class="fs14">平台认证资深CPA 为您量身定制个人财税服务0佣金 无中介费 —— 只为一份信任</p>
                </div>
              </router-link>
            </li>
          </ul>
          <ul v-if="active === 2">
            <li class="block">
              <router-link to="/digital-transformation">
                <img src="../assets/images/home/img-4.png">
                <div>
                  <h3 class="fs24">数字化转型</h3>
                  <p class="fs14">新型数字化组织架构趋势 ——— 微桌企业服务帮您随心所欲“漫步云端”</p>
                </div>
              </router-link>
            </li>
            <li class="block">
              <router-link to="/crowd-innovation">
                <img src="../assets/images/home/img-5.png">
                <div>
                  <h3 class="fs24">众创+</h3>
                  <p class="fs14">自由工作线上服务社区 ——— 软硬服务支撑、创业扶持优享</p>
                </div>
              </router-link>
            </li>
          </ul>
          <ul v-if="active === 3">
            <li>
              <router-link to="/virtual-employee">
                <img src="../assets/images/home/img-6.png">
                <div>
                  <h3 class="fs24">虚拟雇员</h3>
                  <p class="fs14">每个人都是企业家，每个人都是艺术家，每个人都是自己的老板 ——— 做自己</p>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/property-services">
                <img src="../assets/images/home/img-7.png">
                <div>
                  <h3 class="fs24">知识产权服务</h3>
                  <p class="fs14">打造自我保护的知识堡垒</p>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/personal-finance">
                <img src="../assets/images/home/img-8.png">
                <div>
                  <h3 class="fs24">个人财税师</h3>
                  <p class="fs14">平台认证资深CPA 为您量身定制个人财税服务0佣金 无中介费 ——— 只为一份信任</p>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/social-security">
                <img src="../assets/images/home/img-9.png">
                <div>
                  <h3 class="fs24">轻松社保</h3>
                  <p class="fs14">降低用工风险，提高工作效率</p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="title fs40-black">
      <div>企业产品</div>
      <p>ENTERPRISE PRODUCT</p>
    </div>
    <ul class="product container clearfix">
      <li>
        <a href="https://www.vzhuo.com">
          <svg class="icon-svg" aria-hidden="true">
            <use xlink:href="#iconMarketPlace"></use>
          </svg>
          <div>
            <div class="fs30-black">MarketPlace</div>
            <p class="fs14-grey">一个专注分布式人才共享、远程工作，为共享经济模式提供全生命周期服务的互联网平台</p>
          </div>
        </a>
      </li>
      <li>
        <router-link to="">
          <svg class="icon-svg" aria-hidden="true">
            <use xlink:href="#iconrenwuguanjia"></use>
          </svg>
          <div>
            <div class="fs30-black">任务管家</div>
            <p class="fs14-grey">智能财税云服务完成财务流程重构、票财税一体化、税种一健申报、助办业务优化、</p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/flexible-employment">
          <svg class="icon-svg" aria-hidden="true">
            <use xlink:href="#iconlinghuoyonggong"></use>
          </svg>
          <div>
            <div class="fs30-black">灵活用工</div>
            <p class="fs14-grey">多元化用工模式的新型人力即服务（HaaS）平台化，布局新型工作成长服务模式</p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/bpo-cloud">
          <svg class="icon-svg" aria-hidden="true">
            <use xlink:href="#iconBPOCloud"></use>
          </svg>
          <div>
            <div class="fs30-black">BPO-Cloud</div>
            <p class="fs14-grey">针对行业专业化服务流程外包。新型现代化服务+数字经济。针对行业专业化服务流程外包。</p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/we-tax">
          <svg class="icon-svg" aria-hidden="true">
            <use xlink:href="#iconWeTax"></use>
          </svg>
          <div>
            <div class="fs30-black">We Tax</div>
            <p class="fs14-grey">为自由职业者财务核算提供智能数字化服务，个人自雇者平均每年解决21836额外开支</p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/micro-offices">
          <svg class="icon-svg" aria-hidden="true">
            <use xlink:href="#iconweizhangfang"></use>
          </svg>
          <div>
            <div class="fs30-black">微账房</div>
            <p class="fs14-grey">专业企业的财税服务云管家，提供智能分析和高效代账</p>
          </div>
        </router-link>
      </li>
    </ul>
    <div class="cooperation">
      <div class="title fs40-black">
        <div>合作企业</div>
        <p>BUSINESS COOPERATION</p>
      </div>
      <div class="container cooperation-list clearfix">
        <img src="../assets/images/home/cooperation1.png">
        <img src="../assets/images/home/cooperation2.png">
        <img src="../assets/images/home/cooperation3.png">
        <img src="../assets/images/home/cooperation4.png">
        <img src="../assets/images/home/cooperation5.png">
        <img src="../assets/images/home/cooperation6.png">
        <img src="../assets/images/home/cooperation7.png">
        <img src="../assets/images/home/cooperation8.png">
        <img src="../assets/images/home/cooperation9.png">
        <img src="../assets/images/home/cooperation10.png">
        <img src="../assets/images/home/cooperation11.png">
        <img src="../assets/images/home/cooperation12.png">
      </div>
    </div>
    <div class="title fs40-black">
      <div>企业资讯</div>
      <p>ENTERPRISE INFORMATION</p>
    </div>
    <div class="container news" v-if="news.length">
      <router-link :to="'/detail/'+news[0].id" class="news-main">
        <img :src="`${host}${news[0].cover_path}`" alt="">
        <div class="mask"></div>
        <div class="info">
          <h3 class="fs20">{{news[0].title}}</h3>
          <p class="fs14">{{news[0].description}}</p>
        </div>
      </router-link>
      <div class="news-list">
        <router-link :to="'/detail/' + item.id" v-for="(item, index) in news.slice(1,5)" :key="index">
          <h2 class="fs24-black">{{item.title}}</h2>
          <div class="fs14-grey">{{item.update_at | date}}</div>
        </router-link>
        <router-link to="/news" class="more fs20-black">MORE +</router-link>
      </div>
    </div>
    <a target="_blank" href="https://www.vzhuo.com/" class="container banner-bottom">
      <img src="../assets/images/home/banner-bottom.png">
    </a>
  </div>
</template>

<script>
  import axios from 'axios';
  import { getDate } from '@/utils/_date.js';
  export default {
    name: 'Home',
    metaInfo: {
      title: '区域工业互联网平台'
    },
    filters:{
      date (value) {
        return getDate(value);
      }
    },

    data() {
      return {
        active: 1,
        news:[],
        swiperOption:{
          // 参数选项,显示小点
          pagination:'.swiper-pagination',
          //循环
          loop:true,
          //每张播放时长10秒，自动播放
          autoplay:10000,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
        },
        bannerData:[],
        host: window.location.origin
      };
    },
    mounted () {
      this.getNews();
      this.getBanner();
    },
    methods: {
      getNews(){
        axios.get('/api/information/index').then((res)=>{
          if (res.data.code==0) {
            this.news = res.data.data;
          }
        });
      },
      getBanner(){
        axios.get('/api/advertisement/index').then((res)=>{
          if (res.data.code==0) {
            this.bannerData = res.data.data;
          }
        });
      }
    },
  };
</script>

<style lang="less">
  @import "~@/assets/less/home.less";
</style>
