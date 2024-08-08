<template>
    <v-app-bar app dark>
        <v-container align-center background-color="sid_green">
            <v-row>
                <v-col class="d-flex justify-start"> <!--d-flex justify-start: 전체를 좌측 정렬-->
                    <div v-if="userRole == 'ADMIN'">
                        <v-btn :to="{path:'/member/list'}">회원 관리</v-btn>
                        <v-btn :to="{path:'/product/manage'}">상품 관리</v-btn>
                        <v-btn :to="{path:'/order/list'}">실시간 주문</v-btn>
                    </div>
                </v-col>
                <v-col class="text-center">
                    <v-btn :to="{path:'/'}" color="sid_btn2">java shop</v-btn>
                </v-col>
                <v-col class="d-flex justify-end"> <!--d-flex justify-start: 전체를 우측 정렬-->
                    <v-btn v-if="isLogin" :to="{path:'/product/list'}">장바구니</v-btn>
                    <v-btn :to="{path:'/product/list'}">상품 목록</v-btn>
                    <v-btn v-if="isLogin" :to="{path:'/mypage'}">마이페이지</v-btn>
                    <v-btn v-if="!isLogin" :to="{path:'/member/create'}">회원 가입</v-btn>
                    <v-btn v-if="!isLogin" :to="{path:'/login'}">로그인</v-btn>
                    <v-btn v-if="isLogin" @click="doLogout">로그아웃</v-btn>
                </v-col>
            </v-row>
        </v-container>

    </v-app-bar>
</template>
<script>
export default{
    data() {
        return {
            userRole: null,
            isLogin: false
        }
    },
    created() {
        const token = localStorage.getItem("token");
        if(token) {
            this.isLogin = true;
            this.userRole = localStorage.getItem("role");
            console.log('role' + this.userRole);
        }
    },
    methods: {
        doLogout() {
            localStorage.clear();
            window.location.href = '/';
        }
    }
};
</script>