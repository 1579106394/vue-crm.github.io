<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea v-model="msg" placeholder="请输入要BB的内容（最多BB120字）" maxlength="120"></textarea>

        <mt-button @click="postComment" type="primary" size="large">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_time">
                <div class="cmt-title">
                    第{{ i+1 }}楼&nbsp;&nbsp;用户 : {{ item.user_name }}&nbsp;&nbsp; 发表时间 : {{ item.add_tiem | dateFormat }}
                </div>
                <div class="cmt-body">
                    {{ item.content === 'undefined' ? '此用户很懒，啥也没说' : item.content }}
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>

    import { Toast } from 'mint-ui'

    export default {
        data() {
            return {
                msg: '', // 评论输入的内容
                comments: [], // 所有的评论数据
                pageindex: 1 // 默认展示第一页数据
            }
        },
        created() {
            this.getComments()
        },
        methods: {
            getComments() { // 获取评论
                this.$http.get("api/getcomments/" + this.id + "?pageindex=" + this.pageindex).then(result => {
                    if (result.body.status == 0) {
                        // this.comments = result.body.message
                        this.comments = this.comments.concat(result.body.message)
                        // 每当获取新评论数据的时候，不要把老数据清空覆盖
                    } else {
                        Toast('获取评论失败！')
                    }
                })
            },
            getMore() { // 加载更多
                this.pageindex++
                this.getComments()
            },
            postComment() {
                // 校验是否为控
                if (this.msg.trim().length === 0) {
                    this.msg = ""
                    return Toast('评论内容不能为空！')
                }
                // 发表评论
                // 参数1，请求的URL地址
                // 参数2，提交给服务器的数据对象:
                // 参数3：定义提交时候表单中数据的格式{ emulateJSON：true }
                this.$http.post('api/postcomment/' + this.$route.params.id, { content: this.msg.trim() })
                    .then(result => {
                        if (result.body.status === 0) {
                            // 1.拼接出一个评论对象
                            var cmt = {
                                user_name: '匿名用户', 
                                add_time: Date.now(), 
                                content: this.msg.trim()
                            }
                            this.comments.unshift(cmt)
                            this.msg = ""
                        } else {

                        }
                    })
            }
        },
        props: ['id']
    }
</script>

<style scoped>
    .cmt-container h3 {
        font-size: 18px;
        ;
    }

    .cmt-container textarea {
        font-size: 14px;
        height: 85px;
        margin: 0;
    }

    .cmt-container .cmt-list {
        margin: 3px;
    }

    .cmt-container .cmt-list .cmt-item {
        font-size: 13px;
    }

    .cmt-container .cmt-list .cmt-item .cmt-title {
        padding-left: 3px;
        line-height: 30px;
        background-color: #ccc;
        border-radius: 3px;
    }

    .cmt-container .cmt-list .cmt-item .cmt-body {
        line-height: 35px;
        text-indent: 2em;
    }
</style>