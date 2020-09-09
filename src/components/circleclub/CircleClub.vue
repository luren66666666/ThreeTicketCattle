<template>
    <div class="vip-club">
       <van-nav-bar
        title="圈圈俱乐部"
        left-arrow
        @click-left="onClickLeft"
        />
        <!-- 主内容 -->
        <main>
            <div class="head-Wrap">
                <img src="../../assets/MineImg/vipClub/椭圆 2@2x.png" alt="">
                <div class="bg1"></div>
                <div class="bg2"></div>
                <div class="photo">
                    <van-image
                        round
                        width="62px"
                        height="62px"
                        :src="head"
                />
                </div>
                <div class="vip-id">
                    <img src="../../assets/MineImg/vipClub/TUBIA@2x.png" alt="">
                    <p>圈圈大人身份未点亮</p>
                </div>
            </div>
            <!-- 加入会员 -->
            <div class="join-vip" @click="show = true">
                <img src="../../assets/MineImg/vipClub/圆角矩形.png" alt="">
            </div>
            <!-- 点出弹出层 -->
            <van-action-sheet 
                :round="false"
                :duration="0.2"
                v-model="show"
                cancel-text="关闭"
                close-on-click-action
                @cancel="onCancel">
                <div class="content">
                   <div>
                       <img src="../../assets/MineImg/vipClub/组 4@2x.png" alt="">
                       <div class="content-class">
                            <p>身份标识</p>
                            <span>点亮达人标识，更显尊贵与荣耀</span>
                       </div>
                       
                   </div>
                   <div>
                       <img src="../../assets/MineImg/vipClub/组 5@2x.png" alt="">
                       <div class="content-class">
                            <p>福利优选选中</p>
                            <span>更高的免费活动中奖概率。（高质量内容越多，中将率越高</span>
                       </div>
                       
                   </div><div>
                       <img src="../../assets/MineImg/vipClub/组 6@2x.png" alt="">
                       <div class="content-class">
                            <p>优质内容奖励</p>
                            <span>下月1号可以获得本月专属100元优惠券奖励</span>
                       </div>
                       
                   </div>
                </div>
            </van-action-sheet>

            <!-- 申请条件 -->
            <section>
                <h3>CONDITION</h3>
                <p>申请条件</p>
                <ul>
                    <li>
                        <img src="../../assets/MineImg/vipClub/组 7@2x.png" alt="">
                        <p>诚信记录</p>
                        <p>良好</p>
                        <span>已达成</span>
                    </li>
                    <li>
                        <img src="../../assets/MineImg/vipClub/组 7 拷贝@2x.png" alt="">
                        <p>遵守社区规范</p>
                        <p>遵守网络法规</p>
                        <span>已达成</span>
                    </li>
                    <li>
                        <img src="../../assets/MineImg/vipClub/组 8@2x.png" alt="">
                        <p>3个月内产出</p>
                        <p>2条优质内容</p>
                        <span><b>0</b>/2</span>
                    </li>
                </ul>
            </section>
            <!-- 编写内容 -->
            <section>
                <h3>HOW TO WRITE</h3>
                <p>如何写一篇超赞的内容</p>
                <img src="../../assets/MineImg/vipClub/图层 1@2x.png" alt="">
            </section>
            <!-- 声明 -->
            <article>
                <h4>申请说明</h4>
                <div>
                    1.满足以下可加入圈圈俱乐部的条件后，通过申请可成为圈圈达人。
                    <br/>
                    <span>·未在平台发布过营销/恶意侮辱/违法等违反社区规范的 内容。</span>
                    <br/> 
                    <span>·未存在内容被驳回、被禁言的操作。</span>
                    <br/>
                     <span>·三个月内产出两条及以上优质内容的用户。 </span>
                     <br/>
                     2.成为圈圈达人后，每月至少完成3条优质内容，否则会在 第二个月取消达人身份，并不能获得当月奖励。 
                     <br/>
                     3.发布内容后，小编会在两个工作日内，根据内容质量给 予优质标识。 
                     <br/>
                     提示:满足以下条件之一，并有自己独到见解才有机会获 得优质标识。 
                     <br/>
                     <span>·文字内容大于80字。</span> 
                     <br/>
                     <span>·高清图片三张及以上。 </span>
                     <br/>
                     <span>·优质的视频内容。 </span>
                     <br/>
                     4.当月仅可申请一次。 
                     <br/>
                     5.主办账户、认证账户、官方账户不可加入圈圈俱乐部 
                     <br/>
                     <p>注:最终解释权归票牛所有</p>
                </div>
            </article>

            <button>未达到申请条件</button>
        </main>

         
    </div>
</template>
<script>
import Head from "../../assets/MineImg/图层 1@2x.png"

export default {
    data() {
        return {
            head: Head,
            show:false
        }
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        },
        onCancel() {
             this.show = false;
        }
    },
}
</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .vip-club {
        width: 100%;
        &::v-deep .van-nav-bar__arrow {
            color:#4F4F49;
        }
        .van-nav-bar {
            height: 34px;
            .van-nav-bar__title {
                font-size: 16px;
                font-weight: 700;
            }
        }
        // 主内容
        main {
            width: 100%;
            overflow: auto;
            background: #141A26;
            display: flex;
            flex-direction: column;
            align-items: center;
            color: white;
            // 头像
            .head-Wrap {
                height: 219px;
                width: 100%;
                &>img {
                    width: 100%;
                    height: 100%;
                }
                .bg1 {
                    background: url('../../assets/MineImg/vipClub/组 3@2x.png') no-repeat;
                    background-size: 100%,100%;
                    width: 275px;
                    height: 76px;
                    position: absolute;
                    top: 69px;
                    left: 55px;
                }
                .bg2 {
                    background: url('../../assets/MineImg/vipClub/组 2@2x.png') no-repeat;
                    background-size: 100%,100%;
                    width: 110px;
                    height: 104px;
                    position: absolute;
                    top: 53px;
                    left: 134px;
                }
                .photo {
                    width: 62px;
                    height: 62px;
                    position: absolute;
                    top: 73px;
                    left: 157px;
                }
                .vip-id {
                    height: 20px;
                    display: flex;
                    align-items: center;
                    position: absolute;
                    top: 169px;
                    left: 102px;
                    img {
                        width: 20px;
                        height: 20px;
                        margin-right: 8px;
                    } p {
                        font-size: 16px;
                        color: #7E848E;
                    }
                }
                
            }
            // 加入vip
            .join-vip {
                width: 348px;
                height: 156px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            // 声请条件&写内容
            section {
                padding: 0 14px;
                margin-top: 38px;
                display: flex;
                flex-direction: column;
                align-items: center;
                h3 {
                    font-size: 27px;
                    color: #302F32;
                    margin-bottom: 10px;
                }
                &>p {
                    font-size: 16px;
                    margin-bottom: 16px;
                    font-weight: bold;
                    line-height: 16px;
                }
                ul {
                    height: 147px;
                    display: flex;
                    justify-content: space-between;
                    li {
                        width: 110px;
                        height: 147px;
                        background: #212235;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding: 14px 0;
                    }
                    img {
                        width: 24px;
                        height: 27px;
                        margin-bottom: 17px;
                    }
                    p {
                        font-size: 14px;
                        color: #CECED2;
                        line-height: 13px;
                        margin-bottom: 5px;
                    }
                    span {
                        font-size: 12px;
                        color: #7F7F8A;
                        margin-top: 29px;
                        line-height: 12px;
                    }
                    b {
                        color: #FF3145;
                        font-size: 16px;
                    }

                }
                img {
                    width: 347px;
                    height: 195px;
                }
            }
            // 声明内容
            article {
                 padding: 0 15px;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 34px;
                h4 {
                    font-size: 16px;
                    margin-bottom: 29px;
                }
                div {
                    width: 100%;
                    font-size: 14px;
                    color: #7A7E84;
                    span {
                        margin-left: 7px;
                    }
                    p {
                        margin-top: 40px;
                    }
                }
            }

            button {
                width: 100%;
                height: 56px;
                font-size: 18px;
                text-align: center;
                line-height: 56px;
                outline: none;
                background: #989898;
                margin-top: 10px;
                font-weight: bold;
                border: none;
            }
        }
        // 点击加入会员弹框
        .van-popup {
            height: 500px;
            .van-action-sheet__gap {
                height: 0;
            }
            .content {
                padding:10px 18px 0;
                &>div {
                    display: flex;
                    height: 90px;
                    padding: 25px 0;
                    img {
                        width: 20px;
                        height: 20px;
                        margin-right: 7px;
                    }
                    .content-class {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }
                    p {
                        font-size: 13px;
                        font-weight: bold;
                    }
                    span {
                        font-size: 12px;
                        color: #CECED2;
                    }

                }
            }
            .van-action-sheet__cancel {
                background: white;
                position: absolute;
                bottom: 0;
                left: 0;
                font-weight: normal;
                font-size: 16px;
                border-top: 1px solid #989898;
                margin: 0;
            }
        }
    }
</style>