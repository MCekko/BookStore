var app = new Vue({
    el: '#app',
    data: {
        data2: [],
        data3: [],
    },
    created: function () {
        this.getData()
    },
    methods: {

        getData: function () {

            fetch("https://api.myjson.com/bins/zyv02", {
                method: "GET",

            }).then(function (response) {
                if (response.ok) {


                    return response.json();
                }

            }).then(function (json) {
                app.data2 = json.books

                console.log(app.data2);

            }).catch(function (error) {
                console.log("Request failed:" + error.message);
            })
        },
        SearchBooks: function () {

            for (var i = 0; i < app.data2.length; i++) {
                if (app.data2.title == document.getElementById("Search").value) {

                }
            }

        },
    }
});
