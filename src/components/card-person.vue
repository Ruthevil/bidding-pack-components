<template>
    <div class="card-template">
        <p>hello word, this is a plugin pack, user is {{user}}</p>
        <p>姓名：{{person.name}}</p>
        <p>年龄：{{person.age}}</p>
        <p>性别：{{person.sex}}</p>
        <p>身份证：{{person.idCard}}</p>
        <p>住址：{{person.address}}</p>
    </div>
</template>

<script>
    export default {
        name: "card-person",
        props: {
            user: {
                type: String,
                default: () => {
                    return 'admin'
                }
            },
            person: {
                type: Object,
                default: () => {
                    return {
                        name: '张小三',
                        age: 18,
                        sex: '男',
                        idCard: '420156235896546215',
                        address: '广东省东莞市三叉街道56弄'
                    }
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .card-template {
        background-color: #42b983
        color: chocolate;
        font-size: medium;
        font-family: Consolas;
    }
</style>