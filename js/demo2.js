var VueApp = new Vue({
    el: '.data',
    data: {
        money: 0,
        selCurrency:["TWD"],
        currencyList: []
    },
    created: function () {
        this.getCurrencyList();
    },
    methods: {
        getCurrencyList: function(){
            var currency = [
                {"name":"新台幣(TWD)", "currency":"TWD"},
                {"name":"美元(USD)", "currency":"USD"},
                {"name":"日幣(JSY)", "currency":"JSY"},
            ]
            this.currencyList = currency;
        }
    },
    computed:{
        TWD: function(money){

        },
        USD: function(money){
            
        }
    }
});