requirejs.config({
    timeout: 0,
    baseUrl: "res/scripts",
    paths: {
        "axios": "lib/axios.min",
		"dayjs": "lib/dayjs.min",
        "json": "lib/json",
        "text": "lib/text",
        "util": "lib/util",
        "vue": "lib/vue.global",
        "vue-router": "lib/vue-router"
    }
});