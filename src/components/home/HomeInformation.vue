<template>
    <div class="information">
        <!-- 消息头部 -->
        <van-nav-bar title="消息中心" fixed>
            <template #right>
               <img src="../../assets/Information-Img/矢量智能对象@2x.png" alt="">
            </template>
        </van-nav-bar>
        <!-- 中间内容 -->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" :head-height="60">
            <main>
                <nav>
                    <li>
                        <img src="../../assets/Information-Img/组 17@2x.png" alt="">
                        <p>票牛活动</p>
                    </li>
                    <li>
                    <img src="../../assets/Information-Img/组 18@2x.png" alt="">
                        <p>互动消息</p>
                    </li>
                    <li>
                        <img src="../../assets/Information-Img/组 22@2x.png" alt="">
                        <p>在线客服</p>
                    </li>
                </nav>
                <!-- 空状态 -->
                <van-empty
                    class="custom-image"
                    :image="emptyImg"
                />
            </main>
        </van-pull-refresh>

        
    </div>
</template>


<script>
import { Toast } from 'vant';
import emptyImg from '../../assets/Information-Img/组 25@2x.png'

export default {
    data() {
        return {
            count: 0,
            isLoading: false,
            emptyImg:emptyImg
        }
    },
    methods: {
        onRefresh() {
            setTimeout(() => {
                this.isLoading = false;
                this.count++;
            }, 1000);
        },
    },
}
</script>


<style lang="scss">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Medium;
    }
    .information {
        .van-nav-bar {
            height: 53px;
        }
        .van-nav-bar__title {
            font-family: Bold;
        }
        .van-nav-bar__right{
            padding: 0 14px;
            img {
                width: 22px;
                height: 22px;
            }
        }
        // 中间内容
        .van-pull-refresh {
            position: absolute;
            top: 53px;
            left: 0;
            right: 0;
            bottom: 0;
        }
        main {
            position: absolute;
            top: 0px;
            left: 0;
            right: 0;
            bottom: 50px;
            background: #F2F2F2;
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow: auto;
            .van-pull-refresh__track {
                width: 100%;
            }
            nav {
                width: 353px;
                height: 101px;
                background: white;
                padding: 16px 27px 20px;
                display: flex;
                justify-content: space-between;                
                border-radius: 6px;
                position: relative;
                top: 14px;
                li {
                   display: flex;
                   flex-direction: column;
                   align-items: center;
                   justify-content: space-between;
                }
                img {
                    width: 44px;
                }
                p {
                    font-size: 12px;
                }
            }
            //下拉刷新
            .doge {
                width: 140px;
                height: 72px;
                margin-top: 8px;
                border-radius: 4px;
            }
            // 空状态
            .custom-image {
                width: 100%;
                padding: 0;
                .van-empty__image {
                    width: 84px;
                    height: 60px;
                    margin-top: 157px;
                }
            }
        }
    }
</style>