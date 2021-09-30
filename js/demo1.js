var VueApp = new Vue({
    el: '.todoList',
    data: {
        todoList: [],
        newTodo: ""
    },
    methods: {
        addTodo: function(todo){
            this.todoList.push({content: todo, completed: false}); // this 可取得data的資料
        },
        removeTodo: function(todo){
            this.todoList.splice(this.todoList.indexOf(todo), 1);
        }
    }
});