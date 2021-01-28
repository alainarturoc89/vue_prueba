require([
    "vue",
    "vue-router",
], (Vue, VueRouter) => {

    Vue.use(VueRouter);

    const router = new VueRouter({
        routes: [

        ]
    });

    const app = Vue.createApp({
        router,
        el: "main",
        data() {
            return {

            };
        },
        computed: {
        },
        methods: {          
        },
        created() {
        }
    });
});