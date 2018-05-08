var app = new Vue({
  el: '#app',
  data: {
   todos: [
   'My first to do item',
   'My second to do item',
   'My third to do item'],
   item: 'Todo items'
  },
  methods: {
  	addTodo(){
  		this.todos.push(this.item)
  		this.item = '';
  	}
   }
})