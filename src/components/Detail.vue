<template>
  <div>
    <Header></Header>
    <div class="detail-container">
      <div class="content-title">安静的卡萨帝金卡及暗示的骄傲看得见奥斯卡大家</div>
      <div class="content-date">
        <span class="date">发布于：2019-12-12</span>
        <span class="comment">浏览次数：10</span>
      </div>
      <div class="detail-content">
        <p></p>
        <p></p>
        <p></p>
        <p>
          <img
            src="https://img.wbp5.com/upload/images/firstnews/2019/07/13/181522645.jpg"
            data-preview-src
            data-preview-group="1"
          />
        </p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p>【外汇交易的最佳时段在哪里？】</p>
        <p></p>
        <p>参与外汇交易的人越多的时间段内，外汇市场的流动性就越高，流动性高的时段就是外汇交易的最佳时段。那么以此类推，两个交易时段相重叠的时间内，外汇市场流动性最高，也最适合交易。交易时段重叠的有东京-伦敦交易时段以及伦敦-纽约交易时段，而真正的最佳交易时段是伦敦-纽约交易时段。</p>
        <p></p>
        <p>东京-伦敦交易时段重叠</p>
        <p></p>
        <p>东京和伦敦有一个小时的重叠时间，此时为亚洲交易时段结束而伦敦交易时段刚开始。在此重叠期，市场交易量并不会明显增加。</p>
        <p></p>
        <p>这是因为，通常情况下，东京交易市场起伏不大，一旦进入下午，亚洲市场就开始进入停滞状态。再加上欧洲的交易者们才刚刚开始进入他们的办公室，市场上流动性的不足只会让交易者看到索然无味的行情。</p>
        <p></p>
        <p>此时是交易者们冷静思考的理想时间，可以放松一下心情或为伦敦和纽约时段寻找潜在的交易线索。</p>
        <p></p>
        <p>伦敦-纽约交易时段重叠</p>
        <p></p>
        <p>相比较而言，伦敦和纽约重叠时段可以说是最好的交易时段。</p>
        <p></p>
        <p>这段时间往往是行情真正开始的时候，也是一天中最忙碌的时候，因为来自伦敦和纽约两大金融中心的交易者们都已经开始行动起来了。</p>
        <p></p>
        <p>也是在这段时间，交易者能够看到市场上的一些巨大波动，尤其是当美国和加拿大经济数据公布的时候。当然，市场也会受到来自欧洲尾盘消息面因素的冲击。</p>
        <p></p>
        <p>如果市场在欧洲时段确立了某一趋势，将看到该趋势在纽约时段继续蔓延。这是因为来自纽约的交易者们在回顾了早些时候的市况后往往会考虑跟风入市并建立他们的头寸。</p>
        <p></p>
        <p>不过，需要特别注意的是，在欧洲时段尾盘，欧洲交易者们的平仓动作可能会导致市场在纽约时段午间出现一些波动，应预先加倍提防。</p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p>
          <img
            src="https://img.wbp5.com/upload/images/firstnews/2019/07/13/181522911.jpg"
            data-preview-src
            data-preview-group="1"
          />
        </p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p>风险提示</p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p>外汇、差价合约及衍生产品交易存在高风险，阁下的损失有可能超过最初的投资金额，阁下应只利用可承担损失的资金进行投资。上述金融产品并不适合所有投资者，请确保阁下已充分地了解交易所涉及的风险，并在需要时寻求独立的投资建议。</p>
        <p></p>
        <p>请注意City Credit Capital（英国）有限公司并不接受美国客户</p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p>更多精彩内容</p>
        <p></p>
        <p>微信ID：CCCapital</p>
        <p></p>
        <p></p>
        <p>官网：www.cccapital.co.uk</p>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
export default {
  name: "Detail",
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route.query.id)
  },
  components: { Header }
};
</script>

<style lang="scss" scoped type="text/css">
.detail-container {
  margin-left: 280px;
  padding: 20px 80px;
  .content-title {
    color: #333;
    font-size: 1.5rem;
  }
  .content-date {
    font-size: 0.8125rem;
    color: #8f8f8f;
    margin-top: 10px;
    .comment {
      margin-left: 10px;
    }
  }
  .detail-content {
    color: #333;
    margin-top: 20px;
    font-size: 0.85rem;
    p {
      line-height: 1.8;
    }
    img {
      width: 100%;
      margin: 10px 0;
    }
  }
}
</style>