var app = new Vue({
    el: '#app',
    data: {
        data2: [],
        data3: [],
        arrayTest: [{
            name: "Alex"
        }, {
            name: "Dario"
        }, {
            name: "Alberto"
        }, {
            name: "Rodrigo"
        }]
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
                for (var i = 0; i < app.data2.length; i++) {
                    app.data3 = app.data2[i].cover;
                }
                console.log(app.data2);



            }).catch(function (error) {
                console.log("Request failed:" + error.message);
            })
        },
    }
});
