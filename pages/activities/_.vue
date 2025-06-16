<template>
  <!-- 活动 -->
  <div class="activities">
    <div class="news" v-if="passages.extension !== 'mp4'">
      <div class="news-box">
        <!-- 标题部分 -->
        <div class="news-title-box">
          <div class="news-title">{{ passages.title }}</div>
        </div>
        <!-- 新闻内容部分 -->
        <div class="news-content" v-html="passages.content">
        </div>
      </div>

    </div>
    <div class="video" v-else>
      <video controlslist="nodownload" :src="passages.video" loop id="videos" @click="toggleVideo()">
        Your browser does not support the video tag.
      </video>
      <div class="button" id="buttons" @click="toggleVideo()">
        <a-icon type="play-circle" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "activities",
  head: {
    title:"往期活动回顾",
  },
  data () {
    return {
      // 当前是那一篇
      now: "",
      passages: {},
      // 文章列表
      //       passages: {
      //         video1: {
      //           title: "",
      //           author: "",
      //           id: "video1",
      //           releaseTime: "",
      //           content: ``,
      //           video: '/zhongxin/reviewVideo1.mp4',
      //           // video: '/reviewVideo1.mp4',
      //         },
      //         video2: {
      //           title: "",
      //           author: "",
      //           id: "video2",
      //           releaseTime: "",
      //           content: ``,
      //           video: '/zhongxin/reviewVideo2.mp4',
      //           // video: '/reviewVideo2.mp4',
      //         },
      //         // 宾利车主走进中信尊享会圆满落幕
      //         first: {
      //           title: "宾利车主走进中信尊享会圆满落幕",
      //           author: "中信养老",
      //           id: "first",
      //           releaseTime: "2023-12-25 16:00",
      //           img: require('../../assets/images/news/first/1.jpg'),
      //           video: '',
      //           content: `
      //             <div class="paragraph">乘稀世座驾，享匠心品质。11月23日-24日，一场低调奢华的“宾利车主走进中信”尊享会活动在上海圆满举行。此次活动由中信泰富大昌行、中信金控旗下中信保诚和中信信托、中信养老协同举办，让各位宾利车主深刻感受中信品牌带来的尊贵服务以及尊崇体验。</div>
      //             <div class="paragraph">本次活动流程紧凑，内容丰富多彩，包含中信泰富地产品牌馆参访、中信金控业务宣介、信澜天地参观及定制私宴、VIP客户专享交流等多个特色环节，客户们始终沉浸在愉悦的气氛中，度过了轻松而又惬意的两天。</div>
      //             <div class="paragraph">活动首日，客户们第一站来到上海中信泰富大厦，共同参观了中信泰富地产品牌馆，了解了30年来中信泰富地产的发展历程、业务布局与产品特色。随后宾利车主一行自驾前往位于崇明东滩的信澜天地项目，一路风清云淡、绿荫环绕，美不胜收。</div>
      //             <div class="img">
      //               <img src="${require('../../assets/images/activies/first/1.png')}" alt="" />
      //             </div>
      //             <div class="paragraph">在第二站信澜天地的活动环节中，首先特邀中信信托上海财富管理中心—赵志敏总为来宾们做了主题为《国内家族信托业务及发展》演讲，生动诠释如何在不确定经济环境下，通过保险金+家族信托的法律架构设计，灵活运用保险产品+养老服务产品+信托产品，为客户打造兼具守富、传富和债务隔离功能的资产配置解决方案。为高净值客户完美呈现了“一个客户，一个中信”的协同优势和综合金融尊贵服务的魅力。</div>
      //             <div class="paragraph">紧接着，信澜天地为客户们精心准备了一场精致而典雅的欢迎晚宴。在优雅舒缓的音乐中，客户们举杯共饮，笑语盈盈，品味佳肴。这场高规格的私宴，不仅生动展现了信澜天地厨师精湛的烹饪技艺，也展示了各协同单位组织接待、细节品控的高超水准，更将本次活动追求极致客户体验的精神体现得淋漓尽致。</div>
      //             <div class="paragraph">第二日，在信澜天地的工作人员引导下，大家参观了园区内的项目澜会所、康养公寓样板间、晖廷云居酒店、护理院，工作人员详细向来宾介绍了信澜天地近期推出的“三地旅居、信澜周、信澜月、平日惠”在内的多款康养产品。现场多组客户对信澜天地的产品产生浓厚的兴趣，在活动结束后，继续与现场工作人员深度交流，预约短住体验。</div>
      //             <div class="paragraph">此次中信泰富大昌行、中信保诚和中信信托、中信养老协同举办的宾利车主尊享会活动，不仅为宾利客户们提供了一个交流与互动的机会，还让他们在轻松愉悦的氛围中，深入了解中信旗下各业务板块的产品和特色优势，为后续更多的合作打下了良好的基础。</div>
      //           `,

      //         },
      //         // 杭州中信养老与杭州七院党建共建签约仪式
      //         second: {
      //           title: "杭州中信养老与杭州七院党建共建签约仪式",
      //           author: "中信养老",
      //           id: "second",
      //           releaseTime: "2023-11-27 12:03",
      //           img: require('../../assets/images/news/second/1.jpg'),
      //           video: '',
      //           content: `
      //           <div class="paragraph">为深入宣传贯彻党的二十大精神，进一步强化基层党建资源整合，更好发挥党建引领作用，推动党建与“医养结合”养老服务业工作同频共振、融合发展。8月9日，杭州市第七人民医院第六党支部与杭州中信养老党支部举行党建联建签约仪式。</div>
      //           <div class="paragraph">杭州市第七人民医院党委委员、副院长郭万军，健康事业部主任陶有庆，第六支部支部书记、重症医学科主任 罗伏钢，中信兴业养老服务有限公司总经理魏松、杭州中信养老服务有限公司副总经理何大为及双方党员代表参加签约仪式。</div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/second/1.png')}" alt="" />
      //           </div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/second/2.png')}" alt="" />
      //           </div>
      //           <div class="paragraph">签约仪式开始前，在中信兴业养老服务有限公司总经理魏松等陪同下，杭州市第七人民医院领导、党员们深入杭州中信养老项目参观，长者们日常文化生活、院容院貌、内涵建设给大家留下了深刻印象，进一步加深对中信养老构建“可支付、高品质”的养老综合服务体系的了解。</div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/second/3.jpg')}" alt="" />
      //           </div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/second/4.png')}" alt="" />
      //           </div>
      //           <div class="paragraph">签约仪式上，双方领导分别介绍了各自单位的基本情况、党建工作和联建规划。明确双方在基层党建、业务专业、人才培养等方面具有一定互通性，围绕双方的共同点，本着“资源共享、优势互补、互相促进、共同提高”建设理念，构建3个共通的支部共建模式：一是共同开展主题党日活动，丰富主题党日内容、创新党日活动形式；二是共同开展长者专业医疗问诊服务，开展建设杭州中信养老认知症特色专区经验交流；三是共同开展组织生活，围绕学习习近平新时代中国特色社会主义思想，集中学习，共上党课，分享交流心得，联手推进“医养结合”的党建工作新格局。</div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/second/5.jpg')}" alt="" />
      //           </div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/second/6.jpg')}" alt="" />
      //           </div>
      //           <div class="paragraph">党建联建签约仪式结束后，杭州市第七人民医院第六党支部（老年记忆障碍）的专家们走进杭州中信养老认知症专区，为院内长者开展个案诊断、并提供针对性治疗计划。现场，双方团队就通过非药物疗法来帮助认知症患者进行了探讨，表示通过建立的党建共建平台共同面对认知症这个世界难题，为认知症患者提供更优质的医疗服务。 </div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/second/7.jpg')}" alt="" />
      //           </div>
      //           <div class="paragraph">本次签约仪式标志着杭州中信养老在引入专业医疗资源、探索创新党建工作新格局方面迈出了重要的一步，下一步，双方借助结对共建的合作机遇，在“资源共享、队伍建设、服务联动”等方面，不断拓展合作的广度和深度，开展内容丰富、形式多样的活动，切实把结对共建活动抓出成效，抓出特色，实现共享、共建、共担当的共赢目标。</div>
      //           `,

      //         },
      //         // 天团级女医师云集由由信福，公益健康咨询关爱长者健康
      //         three: {
      //           title: "天团级女医师云集由由信福，公益健康咨询关爱长者健康",
      //           author: "中信养老",
      //           id: "three",
      //           releaseTime: "2023-11-06 16:05",
      //           img: require('../../assets/images/news/three/1.jpg'),
      //           video: '',
      //           content: `
      //           <div class="paragraph">10月20日 正值重阳节来临之际，由由信福养老院联合战略合作伙伴“海上名医”邀请中国女医师协会老年医学专业委员会，特为院内长辈举行公益健康咨询活动。此次医师阵容空前强大，近20位主任医师级专家，包含心血管科、呼吸科、中医内科、骨松科、老年科等老年医学方向的不同专业领域，擅长不同老年医学病症的诊断与治疗。</div>
      //           <div class="img">
      //             <img src="${require('../../assets/images/activies/three/1.jpg')}" alt="" />
      //           </div>
      //           <div class="paragraph">活动现场，养老院专派健康管家结合专家所擅长的领域和长辈们日常的健康状况，协助长辈们更精准地选择医师进行咨询，同时他们将医师的诊疗建议方案进行细化分析，融入到日后长辈们的日常健康管理服务当中。</div>
      //           <div class="paragraph">除咨询主会场外，协会医师考虑到护理区长辈身体状况，特别安排前往护理区楼层，为行动不便的长辈进行查房巡诊，并就后续诊疗协助其预约挂号。
      // 此次活动不仅为长辈们送上了一份节日的关爱，更能让由由信福在住长辈足不出院区，就享受到全市知名专家的健康咨询服务。</div>
      //           `,

      //         },
      //         // 喜迎元旦 欢乐相伴杭州中信养老新春市集火热开启！
      //         four: {
      //           title: "喜迎元旦 欢乐相伴杭州中信养老新春市集火热开启！",
      //           author: "中信养老",
      //           id: "four",
      //           releaseTime: " 2023-12-28 20:00",
      //           img: require('../../assets/images/news/four/3.jpg'),
      //           video: '',
      //           content: `
      //           <div class="paragraph">时光不辍，岁序更新，杭州中信养老党支部联合定安路社区党委和杭州联袂文化传媒有限公司举办“信悦国风宋韵 艺起祈福新年”迎新春特别活动。</div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/four/1.jpg')}" alt="" />
      //           </div>
      //           <div class="paragraph">新年贴“福”字，这是传统中国节日不可或缺的仪式感。活动现场，书法老师手持毛笔，在喜庆的红纸上书写出充满寓意的“福”字，并由现场的工作人员，将每一个“福”字亲手送给在场的长者，将美好的愿景和深切的祝福融入其中。</div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/four/2.jpg')}" alt="" />
      //           </div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/four/3.jpg')}" alt="" />
      //           </div>
      //           <div class="paragraph">由定安路社区志愿者带来的文艺表演和宋韵祈福仪式，舞姿灵动而曼妙，一声声祝福，萦绕在现场每个人的耳边。</div>
      //           <div class="paragraph">如果要问当下浙江最具代表性和辨识度的文化金名片是什么，相信不少人都会不约而同地说——“宋韵文化”，为此杭州中信养老在商业区精心布置了“宋韵国风市集”让历史与现代交融，为长者们呈现一场精彩纷呈的视觉盛宴。</div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/four/4.jpg')}" alt="" />
      //           </div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/four/5.jpg')}" alt="" />
      //           </div>
      //           <div class="paragraph">走在市集里，处处氤氲着茶香和牛奶的馥郁浓香，香肠在烤架上“滋滋”作响，感受到宋韵烟火的热闹与温暖。此外现场还准备了丰富多彩的抽奖环节，只要在场消费的长者都有机会参与抽取精美礼品。</div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/four/6.jpg')}" alt="" />
      //           </div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/four/7.jpg')}" alt="" />
      //           </div>
      //           <div class="paragraph">阔步新征程，2024年，杭州中信养老将不忘初心，努力为长者们创造更加灿烂美好的康养生活。愿新的一年阳光满路，温暖如初。</div>
      //           `,

      //         },
      //         // 信澜天地的41种奇妙体验：好玩到爆的新春指南正式发布
      //         five: {
      //           title: "信澜天地的41种奇妙体验：好玩到爆的新春指南正式发布",
      //           author: "中信养老",
      //           id: "five",
      //           releaseTime: "2023-12-28 20:00",
      //           img: require('../../assets/images/news/five/1.jpg'),
      //           video: '',
      //           content: `
      //           <div class="paragraph">新春将至，中信养老康养旗舰项目：信澜天地，将迎来一系列精彩纷呈的“新春嘉年华”活动，集结各种玩法，重拾传统年味，为住店客人带来多达41种奇妙体验(详见本次推送第2条)，让每一个住客感受更加美好的“康养+文旅”的融合生活方式，在这个新春假期，和长辈们一起尽享阖家欢乐。烟花篝火、特色美食、非遗与经典赏鉴、全能会所配套、诚意满满的活动安排……，信澜天地，还你一个充满年味、老少皆宜的幸福年。</div>
      //           <div class="paragraph">目前，信澜天地晖廷云居酒店春节期间的客房预订已进入高峰期，新春期间酒店各种房型(含早)每晚1288元起售，对应超五星环境品质和多姿多彩的节庆内容，性价比极高。据悉，早前开售的五天四晚康养短住产品预定火爆，其中，第一档(除夕至初四)已经售罄，仅剩第二档(初四至初八)少量房源。</div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/five/1.jpg')}" alt="" />
      //           </div>
      //           <div class="paragraph">谈到迎新的“仪式感”，节庆烟花秀和灯笼秀必定不能缺席。从除夕到初四，信澜天地每日将上演绚丽多彩的节庆烟花秀，为住客献上一场视觉盛宴。此外，灯笼秀也将全日开放，游客可以漫步在红色长廊中，百盏花灯流光溢彩，熠熠生辉，大家可以穿着汉服去打卡。此外，在信澜天地同样可以感受唯美梦幻的冬日限定美景，这个冬天的第一场心动初雪，在信澜天地龙腾市井如约而至；夜幕降临，繁星笼罩，大家可以围着熊熊燃烧的篝火，享受美食，度过一个难忘的夜晚。</div>
      //           <div class="paragraph">如果你细心留意，就会发现信澜天地的十八胜景中藏着多个与龙有关的景点：龙珠涌动、龙生九子、龙隐香樟、青雀黄龙、龙腾市井……；信澜天地为迎接龙年，推出了一系列龙主题有奖打卡探秘活动，在信澜天地过年，住客可以一边欣赏信澜美景，一边领略“龙”主题国学文化。</div>
      //           <div class="paragraph">除了打卡探秘活动，信澜天地还为住客准备了20余项丰富多彩的休闲娱乐项目。在澜会所，您可以尽情享受星空恒温泳池的惬意，体验活力健康馆的乐趣。如果您喜欢放松休闲，可以选择在图书馆静心阅读，或者参加少山文化咖啡品鉴活动。如果您热爱文化艺术，可以看一场朵云轩木版水印展，或者亲自动手，体验崇明非遗土布手工和崇明糕制作。更有电影放映、卡拉OK、桌球、乒乓球、室内高尔夫、美甲DIY、书画静心抄经、自行车骑行、怀旧邓丽君&黑池舞会&酒廊、崇明好物花车、崇明手帕馆、趣味高尔夫、河塘生态垂钓等，住客可以在信澜天地尽情探索，收获满满的快乐回忆。</div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/five/2.jpg')}" alt="" />
      //           </div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/five/3.jpg')}" alt="" />
      //           </div>
      //           <div class="paragraph">对于美食爱好者来说，信澜天地新春美食不容错过。不论是粤汕早茶式中西自助早餐，还是中餐厅的信澜新春家宴，都能满足不同口味的游客需求(详见本次推送第3条)。此外，本次信澜天地还推出2款别具特色的美食选择，崇明特色农场白山羊火锅和沪上网红ANAR KAWAP巨鹿路石榴烤肉，让住客在品尝美食的同时，也能感受到不同地域的独特风情。最后还能逛一逛崇明好物花车，把生态有机大米、崇明白山羊、有机无抗猪肉、精酿啤酒等特色美食带回家，这些商品势必会成为游客们了解崇明文化和带走美好回忆的最佳选择。</div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/five/4.jpg')}" alt="" />
      //           </div>
      //           <div class="paragraph">不得不提信澜天地的客房，不同类型的客房都有独特的设计和布置，满足不同家庭出游的需求。度假风的晖廷酒店，包括24间平层、复式客房，最适合亲子度假；全套房的云居酒店，由78间一房一厅、两房两厅酒店式公寓组成，起跳面积高达套内80平米，满足家庭出游，朋友聚会的各种需求。更让人惊喜的是，房间内由巴黎水领衔的mini吧可以统统带走。</div>
      //           <div class="paragraph">信澜天地具有烟火气、上海味、国际范的“新春嘉年华”活动内容设计，融合“康养+文旅”，实现各种生活场景的代际延伸，将为所有住客，尤其是跨代际大家庭带来一个别具特色的春节。</div>
      //           `,
      //         },
      //         // 信养之家协同上海市精神卫生中心 深耕认知症专业照护
      //         six: {
      //           title: "信养之家协同上海市精神卫生中心 深耕认知症专业照护",
      //           author: "中信养老",
      //           id: "six",
      //           releaseTime: "2023-12-28 20:00",
      //           img: require('../../assets/images/news/six/3.jpg'),
      //           video: '',
      //           content: `
      //           <div class="paragraph">上海市精神卫生中心不仅是市三级甲等精神卫生专科医院，也是全国规模最大、业务种类最全、领衔学科最多的精神卫生机构，在认知症治疗方面极具权威。12月20日下午，一场主题为“关怀照护，用爱守护”的认知症主题讲座在信养之家浦东锦绣养老院展开，上海市精神卫生中心的副主任医师许桦为来到现场的长者家属以及一线照护人员带来了一堂生动翔实的专业课，并现场解答家属疑问与照护难题，受到了非常热烈的反响。</div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/six/1.jpg')}" alt="" />
      //           </div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/six/2.jpg')}" alt="" />
      //           </div>
      //           <div class="paragraph">自与上海市精神卫生中心开展协同以来，这样的场景常常在信养之家的养老院中上演，专家医生每月来到认知症专区，开展巡诊、答疑解惑，小到对某位长者某种药物的用量调整建议，大到对整体认知症照护方法论的培训，专业渗透进了信养之家认知症专区服务的方方面面。</div>
      //           `,
      //         },
      //         // 中信养老 双节活动精彩回顾
      //         seven: {
      //           title: "中信养老 双节活动精彩回顾",
      //           author: "中信养老",
      //           id: "seven",
      //           releaseTime: "2023-12-15 12:32",
      //           img: require('../../assets/images/news/seven/2.jpg'),
      //           video: '',
      //           content: `
      //           <div class="paragraph">当中秋遇上国庆，快乐一定是加倍的。在中信养老，不仅迎来了崇明信澜天地晖廷云居酒店正式对外开业，还有信福&信悦、信养之家三大系列旗下不同特色康养社区丰富多彩的假期活动。从中秋团圆到老友欢聚，从手工月饼到文艺汇演……属于中信养老的双节回顾，精彩几乎溢出了镜头。</div>
      //           <div class="paragraph">崇明信澜天地晖廷云居酒店开业中信养老在“康养+文旅”的度假型养老社区规划中，作为信澜天地和锦江酒店（中国区）首次协力打造的度假酒店正式开业迎客。酒店除了坐享崇明东滩的自然生态外，还有大美无言的星空泳池，朵云轩木版水印大展，复古摩登黑池歌舞厅，非遗手工、纯正咖啡与中西厨餐厅……度假式的熟年生活已经梦想成真了！</div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/seven/1.jpg')}" alt="" />
      //           </div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/seven/2.jpg')}" alt="" />
      //           </div>
      //           <div class="p-title">无论是聚会还是晚会，热闹是第一位</div>
      //           <div class="paragraph">从由由信福养老院的中秋纳凉晚会开始，双节八天的长假里，每个社区都有属于自己的快乐方式，无论是信养之家温馨的老友欢聚，还是杭州信悦88载歌载舞的文艺汇演，热闹总是第一位的，谁说假期只属于年轻人，在我们的社区里，你能看到更多的朝气蓬勃。</div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/seven/3.jpg')}" alt="" />
      //           </div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/seven/4.jpg')}" alt="" />
      //           </div>
      //           <div class="p-title">团圆的又一层意思是：圆满</div>
      //           <div class="paragraph">不管是各式馅料的广式月饼，还是老人们手里一扭一圈的灯笼纸翻花，中国人讲究的阖家欢乐，中秋团圆，在年岁渐长的长者眼里，更是人生的又一次圆满吧。</div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/seven/5.jpg')}" alt="" />
      //           </div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/seven/6.jpg')}" alt="" />
      //           </div>
      //           <div class="p-title">最长情的告白，是每一年不忘你的生日</div>
      //           <div class="paragraph">节日够多、节目也排得满满当当，但属于你的生日会，我们一样一起过，十月生日会与祖国母亲同庆，可谓众星云集。</div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/seven/7.jpg')}" alt="" />
      //           </div>
      //           <div class="p-title">中信养老社区，日日都有小确幸</div>
      //           <div class="paragraph">金秋十月，丰收的季节里，中信养老将迎来收获满满的2023，属于我们的幸福人生，还有很多很多可以记录。</div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/seven/8.jpg')}" alt="" />
      //           </div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/seven/9.jpg')}" alt="" />
      //           </div>
      //           `,
      //         },
      //         // 中信养老九九重阳 久久相伴
      //         eight: {
      //           title: "中信养老九九重阳 久久相伴",
      //           author: "中信养老",
      //           id: "eight",
      //           releaseTime: "2023-12-28 20:00",
      //           img: require('../../assets/images/news/six/3.jpg'),
      //           video: '',
      //           content: `
      //           <div class="paragraph">两九相逢，好景橙黄，又是一年九九重阳节。这一年中信养老从春天里的浦东由由信福养老院开园运营，到秋日间的崇明信澜天地酒店开业，收获颇丰，入住各养老社区的长者们越来越多，生活也越来越丰富多彩。在丹桂飘香的初秋时节，登高望远、踏秋赏菊、佩茱萸、好友聚、品蟹面、尝重阳糕……夕阳无限好，炊烟绕安详，重阳节的欢乐气氛，飘荡在中信养老每个社区里。</div>
      //           <div class="p-title">登高望远，回头便有家人在</div>
      //           <div class="paragraph">登高望远一直都是重阳节的传统习俗。杭州中信养老的长者们，重阳当天早早就相伴登高城隍阁，远眺城市的风景，回首便是身旁的知心伴侣，这样的人生让人多少有点羡慕啊。早登高，午赏菊，下午的重阳糕、菊花茶，还有茱萸香囊，重阳节可不是一天就过完的，第二天的品蟹面，还有接下来几天的宋韵点茶，一个个小巧的活动里，穿插了浓浓的情意。</div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/eight/1.jpg')}" alt="" />
      //           </div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/eight/2.jpg')}" alt="" />
      //           </div>
      //           <div class="p-title">山河日月长，珍贵的还是陪伴的日常</div>
      //           <div class="paragraph">浦东由由信福养老院的踏秋活动选在了重阳节前夕，秋风习习，阳光微醺，长者们结伴游玩了浦东金海湿地公园。白沙滩、茅草亭，环绕清溪漫步森林拾景，秋天的景色别有一番成熟的韵味。再去走访下湿地科普馆和美术馆，阳光下的长者们笑得是那么开心。</div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/eight/3.jpg')}" alt="" />
      //           </div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/eight/4.jpg')}" alt="" />
      //           </div>
      //           <div class="p-title">听过很多声爷爷奶奶，内心却还是个小孩</div>
      //           <div class="paragraph">今年的重阳节，信养之家锦绣养老院迎来了幼儿园小朋友们的慰问表演。懵懂的天真儿童，和慢慢变成老小孩的两类人群，却又能奇妙的融合在一起。看着孩子们稚嫩的童音、真诚的歌唱，才艺满满的长者们也为孩子们带来了他们的拿手绝活。你方唱罢我登场，小小的社区里，一整天都洋溢着欢声笑语。</div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/eight/5.jpg')}" alt="" />
      //           </div>
      //           <div class="p-title">丹桂菊黄好时节，久久相伴情在中信</div>
      //           <div class="paragraph">从浦东由由信福养老院的高行沪剧开心团的慰问演出、云游新疆美食歌舞活动，到信养之家杨浦新江湾养老院的九九重阳情系信养的社区团建活动。从杭州中信养老重阳观影日、信养之家爱亲仁护理院联合口腔医院的联建签约仪式，到信养之家臻悦护理院关于老年人运动指导和防跌倒专题讲座。从上海现代服务业联合会赴中信养老社区节日慰问，到中国女医师协会公益健康咨询活动，九九重阳十月忙，中信养老的用心付出，都将不负岁月中每段情长。</div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/eight/6.jpg')}" alt="" />
      //           </div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/eight/7.jpg')}" alt="" />
      //           </div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/eight/8.jpg')}" alt="" />
      //           </div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/eight/9.jpg')}" alt="" />
      //           </div>
      //           `,
      //         },
      //         // 重阳特别策划：养老生活“烹”然心动 中信养老举办首届厨艺大赛
      //         nine: {
      //           title: "重阳特别策划：养老生活“烹”然心动 中信养老举办首届厨艺大赛",
      //           author: "中信养老",
      //           id: "nine",
      //           releaseTime: "2023-12-28 20:00",
      //           img: require('../../assets/images/news/six/3.jpg'),
      //           video: '',
      //           content: `
      //           <div class="paragraph">2023年10月23日，重阳节当天，中信养老第一届厨艺大赛暨美食节在信养之家宝山大场养老院举办，中信兴业养老总经理魏松出席本次大赛。活动围绕“适老化、提升长辈生活质量、营养均衡”的比拼目标激烈展开，评委由专业人士、机构负责人、长者及家属组成。这场以美食为主角的大赛，一开场就飘香四溢。</div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/nine/1.jpg')}" alt="" />
      //           </div>
      //           <div class="paragraph">中信养老信养之家的餐饮团队曾荣获过餐饮行业协会的优质团队奖，本次参赛的各位厨师来自信养之家旗下的五个机构，分别是锦绣梦之队、爱亲人队、场中理想队、世界有爱队、臻爱守护队。他们都有20至30多年的餐饮从业经验，平时也是各大社区营养膳食的掌勺人。</div>
      //           <div class="paragraph">这次厨艺大赛，除了现场制作要求的制定菜式青椒牛柳丝外，每队都带来了各自拿手的绝活，本帮菜酱鸭方、糟溜鱼片、酱爆腰花，潮州菜、京帮菜、粤菜、淮扬菜，现场一派热火朝天的景象：掂勺、爆炒、焖、蒸、煮、勾芡、淋汁……各位厨师十八般武艺火力全开，刀工火候、精巧摆盘、色香味形，简直让人目不暇接。</div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/nine/2.jpg')}" alt="" />
      //           </div>
      //           <div class="paragraph">特别让人心动的还有五个参赛队各自的创意菜，由于餐饮是养老行业运营很重要的板块，注重膳食营养均衡就成了各队新式菜肴的创意出发点——补肝健脾，补充蛋白质的翡翠鲈鱼片；补中益气，缓解气虚乏力的海苔焗南瓜；活血补气去热毒的苦瓜炒鳝片；扶正补虚、化痰理气的山药狮子头；富含多种维生素的金汤淋腰花等……一盘又一盘的特色菜、创意菜出锅，热气腾腾的吸引着在场的每一位评委和参与者踊跃品尝。</div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/nine/3.jpg')}" alt="" />
      //               <div>中信兴业养老总经理 魏松 颁发一等奖</div>
      //           </div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/nine/4.jpg')}" alt="" />
      //               <div>上海宝山区卫监所所长 黄铮 颁发二等奖</div>
      //           </div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/nine/5.jpg')}" alt="" />
      //               <div>上海信养事业二部副总经理 毕建科 颁发三等奖</div>
      //           </div>
      //           <div class="paragraph">经过几个小时的激烈角逐，评委们严谨的品鉴后，通过现场无记名投票，终于产生了金勺奖、银勺奖。精湛的厨艺背后蕴藏着无数次的刻苦练习和实践磨炼，此次重阳节特别策划，也体现了中信养老在日常运营中对餐饮环节的重视和对服务品质的务实。吃得好不好，是养老服务当中，长者和家属都特别在意，且实实在在容易感知的，中信养老希望通过厨艺大赛，不断提升餐饮烹饪服务品质，做到美味与营养兼得，创造舌尖上的养老新体验。</div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/nine/6.jpg')}" alt="" />
      //           </div>
      //           `,
      //         },
      //         // 中信养老喜迎第1000位长者入住
      //         ten: {
      //           title: "中信养老喜迎第1000位长者入住",
      //           author: "中信养老",
      //           id: "ten",
      //           releaseTime: "2023-12-28 20:00",
      //           img: require('../../assets/images/news/six/3.jpg'),
      //           video: '',
      //           content: `
      //           <div class="paragraph">2023年11月11日，恰逢中信兴业35岁生日，中信养老迎来了第1000位长者的入住，为司庆献礼。当天上午，在信养之家杨浦新江湾养老院举办了一场温馨的千人庆典，院领导陪同长者及家属参观了入住的房间，并送上了定制的证书、纪念盘和鲜花，来自由由信福养老院的长辈代表，亲笔书法一幅赠送给第千位长者，以字寄情，表达美好的祝福。</div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/ten/1.jpg')}" alt="" />
      //           </div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/ten/2.jpg')}" alt="" />
      //           </div>
      //           <div class="img">
      //               <img src="${require('../../assets/images/activies/ten/3.jpg')}" alt="" />
      //           </div>
      //           <div class="paragraph">中信养老在上海杭州两地投运的8家养老社区和机构，短短两年（其中将近一年受疫情影响）达成千人入住，其中：信养之家臻悦护理院、爱亲仁护理院入住率均已超过96%，达成满住排队常态；浦东由由信福养老院今年二季度开园运营，半年入住长者就逼近200人；崇明信澜天地晖廷云居酒店国庆正式对外迎客，五天实现满房。这种开业效率和入住率提升速度，以当下的行业市况来看，是极其不容易的。</div>
      //           <div class="paragraph">中信养老取得客户集中认可的背后，正是基于“都市型、一站式、医康养”清晰精准的行业定位。围绕都市特色的老年群体，量身打造医康养多个维度的专业产品与服务。中信养老在由由信福引进上海报业集团健康直播平台，汇聚上海众多三甲医院资源，打造“海上名医会客厅”，来自36家市级医院骨干持续开展公益健康科普宣传，提供了众多老年人与医师专家面对面沟通的机会。中信养老还和上海精神卫生中心，在认知症的专业诊断、护理培训等方面深入交流，并在信养之家养老院创建了国内领先的认知症专区。专业的医护资源保驾护航，中信养老各产品线，为家庭提供全面有效的解决方案。</div>
      //           <div class="paragraph">中信养老，聚焦集中式养老产品与服务，面向都市家庭的各种养老需求，已形成“信澜天地（度假式康养CCRC）、信福&信悦（都市医康养综合体）、信养之家（护理型养老机构连锁）”的“信字系列”产品线，为中国50-100岁长者的全周期康养需求提供解决方案。</div>
      //           `,
      //         },
      //       },
      // 当前页数
      current: 1,
      // 往期文章数目
      number: 0,
      //分页每页展示数目
      pageSize: 5,
    }
  },
  // async asyncData ({ $axios, params, $config }) {

  //   // const response = await $axios.get($config.apiBaseUrl + "/AcCalendarBannerList?type=0&is_pass=1")
  //   const response = await $axios.get("http://devsrv.linknology.cn:18888/zhongxin/index.php/AcCalendarBannerList?type=0&is_pass=1")
  //   let responsess = response.data.data
  //   console.log(responsess[0].id, Number(params.pathMatch))
  //   let responses = response.data.data.filter(item => item.id === Number(params.pathMatch))
  //   console.log(responses)
  //   let passages = {
  //     title: responses[0].title,
  //     author: responses[0].author,
  //     // id: data.data.id,
  //     // releaseTime: data.data.created_time,
  //     video: $config.apiFileUrl + responses[0].file_path,
  //     content: responses[0].html_content,
  //     extension: responses[0].extension
  //   }
  //   console.log("passages", passages)

  //   return {
  //     passages,
  //   }
  // },
  async mounted () {
    // const response = await $axios.get("http://devsrv.linknology.cn:18888/zhongxin/index.php/AcCalendarBannerList?type=0&is_pass=1")
    const response = await this.$axios.get(this.$config.apiBaseUrl + "/AcCalendarBannerList?type=0&is_pass=1")
    let responses = response.data.data.filter(item => item.id === Number(this.$route.params.pathMatch))
    this.passages = {
      title: responses[0].title,
      author: responses[0].author,
      // id: data.data.id,
      // releaseTime: data.data.created_time,
      video: this.$config.apiFileUrl + responses[0].file_path,
      content: responses[0].html_content,
      extension: responses[0].extension
    }


    console.log("this", this.passages, this.now)
    console.log("this.$route.params.name", this.$route.params.pathMatch)
    this.now = this.$route.params.pathMatch
    //文章数目
    // this.number = Object.values(this.passages).length

    console.log("this.$route", this.$route.name)
  },
  watch: {
    // 监视路由
    // $route (res) {
    //   console.log('shouyewww', res)
    //   this.showMobileMenu = true
    //   // 路由切换调用
    //   this.handleMobileMenu()
    //   // 给首页单独设置 点击图标的时候
    //   if (res.path == '/' || res.path.includes('/news')) {
    //     this.current = ['index']
    //   } else {//非首页的时候
    //     // // 对路径进行按'/'切分
    //     // let array = res.path.split('/');
    //     // // 存储路径关键字
    //     // let path = array[array.length-1];
    //     // // 将其path赋值给数组current
    //     // this.current = [path]
    //     // // 为stories需要修改
    //     // if(path=='stories'){
    //     //   this.current = ['success-stories']
    //     // }
    //     // if(!isNaN(this.current)){
    //     //   this.flags.forEach((item)=>{
    //     //     if(this.$route.path.includes(item.flag)){
    //     //       this.current = [item.name];
    //     //     }
    //     //   })
    //     // }
    //   }
    //   console.log("res", res, this.current)
    // },

  },
  methods: {
    toggleVideo () {
      const video = document.getElementById("videos")
      const playButton = document.getElementById("buttons")
      if (video.paused) {
        video.play()
        // video.volume = 0.5 // 设置音量为 0.5（取值范围为 0 到 1）
        playButton.style.display = "none"
      } else {
        video.pause()
        playButton.style.display = "block"
      }
    },


  },
  computed: {

  },
  beforeDestroy () { },
}
</script>
<style lang="less" scoped>
.activities {
  font-family: 'Source Han Serif SC VF';
  padding: 0;
  margin: 0;

  .news {
    background: #f5f5f5;
    padding-bottom: 40px;



    .news-box {
      width: 1200px;
      margin: 0 auto;


      .news-title-box {
        text-align: center;
        padding: 30px 0;

        .news-title {
          font-size: 40px;
          font-weight: 600;
          color: #333;
        }

      }

      .news-content {
        background-color: #fff;
        padding: 28px;

      }
    }



  }

  .video {
    position: relative;
    // top: 0;
    // left: 0;
    // position: absolute;
    // height: calc(100vh - 90px);
    // width: 100%;
    overflow: hidden;

    video {
      width: 100%;
    }

    .button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 55px;
      color: #fff;
      font-weight: 600;
      z-index: 99;
    }
  }
}

@media screen and(max-width:1200px) and(min-width:992px) {
  .activities {


    .news {

      .news-box {
        width: 100%;

        .news-title-box {

          .news-title {
            font-size: 36px;

          }
        }

        .news-content {
          padding: 24px;
        }
      }



    }

    .video {
      .button {
        font-size: 50px;
      }
    }

  }
}

@media screen and(max-width:991px) and(min-width:768px) {
  .activities {


    .news {
      background: #f5f5f5;
      padding-bottom: 40px;

      .news-box {
        width: 100%;

        .news-title-box {

          .news-title {
            font-size: 34px;
          }
        }

        .news-content {
          padding: 20px;
        }
      }



    }

    .video {
      .button {
        font-size: 45px;
      }
    }

  }
}

@media screen and(max-width:1050px) {
  .activities {
    padding-top: 75px;

    .news {

      .news-box {

        .news-title-box {

          .news-title {}
        }
      }

    }

  }
}

@media screen and(max-width:767px) {
  .activities {


    .news {

      .news-box {
        width: 100%;

        .news-title-box {

          .news-title {
            // padding-top: 75px;
            font-size: 28px;
          }


        }

        .news-content {
          padding: 10px;

          .img {
            width: 100%;

            img {
              width: 100%;
            }
          }
        }
      }
    }

    .video {
      .button {
        font-size: 35px;
      }
    }

  }
}
</style>
<style lang="less">
.news-content {
  background-color: #fff;
  padding: 28px;

  .paragraph {
    font-size: 16px;
    color: #333;
    line-height: 30px;
    margin-bottom: 20px;
    text-indent: 2em;
  }

  .title {
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
    font-weight: bolder;
    text-align: center;

    .h-title {
      display: inline-block;
      padding-bottom: 2px;
      border-bottom: 2px solid red;
    }
  }

  .img {
    text-align: center;
    margin-bottom: 20px;

    img {
      width: 640px;
      height: auto;
      margin-top: 20px;
    }
  }

  .p-title {
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
    font-weight: bolder;
  }
}

@media screen and(max-width:767px) {
  .activities {


    .news {

      .news-box {
        width: 100%;

        .news-title-box {

          .news-title {
            // padding-top: 75px;
            font-size: 28px;
          }


        }

        .news-content {
          .img {
            width: 100%;

            img {
              width: 100%;
            }
          }
        }
      }
    }

  }
}
</style>
