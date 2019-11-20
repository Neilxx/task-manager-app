<template>
  <div class="row" id="container">
    <div class="col-6 offset-3" id="wrapper">
      <div id="myDIV" class="header">
        <h2 class="title">My Tasks</h2>
        <input v-model="inputTask" type="text" id="myInput" placeholder="Your Task...">
        <span v-on:click="newTask()" class="addBtn">Add</span>
      </div>
      <ul id="myUL">
        <!--eslint-disable-next-line-->
        <li v-for="task in tasks" v-on:click="handleTask" :class="{ checked: task.completed }" :data.prop="task._id">
          <input type="text" v-model="task.description" :data.prop="task._id" disabled="true" :class="{ 'strike-out': task.completed }">
          <i class="fas fa-edit edit-btn" v-on:click.stop="editTask"></i>
          <i class="fas fa-trash-alt trash-btn" v-on:click.stop="deleteTask"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputTask: '',
      tasks: []
    }
  },
  created: function () {
    const vm = this
    this.axios.get(
      'https://neilxx-task-manager.herokuapp.com/tasks',
      { withCredentials: true }
    )
      .then(function (res) {
        vm.$emit('login')
        vm.tasks = res.data
      })
      .catch(function () {
        vm.$router.push('/signin')
      })
  },
  methods: {
    handleTask (event) {
      var taskNode = ''
      if (event.target.tagName === 'INPUT') {
        taskNode = event.target.parentNode
      } else {
        taskNode = event.target
      }
      if (taskNode.classList.contains('edit-mode')) return
      const taskId = taskNode.data
      const task = this.tasks.find(task => task._id === taskId)
      task.completed = !task.completed

      this.axios.patch(
        `https://neilxx-task-manager.herokuapp.com/tasks/${taskId}`,
        { completed: task.completed },
        { withCredentials: true }
      )
    },
    newTask () {
      const vm = this
      if (!vm.inputTask) return
      this.axios.post(
        'https://neilxx-task-manager.herokuapp.com/tasks',
        { description: vm.inputTask },
        { withCredentials: true }
      )
        .then(function (res) {
          vm.inputTask = ''
          vm.tasks.push(res.data)
        })
    },
    editTask (event) {
      const taskNode = event.target.parentNode
      const [inputNode, iconNode] = taskNode.children
      const editMode = iconNode.classList.contains('fa-edit')
      const taskId = taskNode.data
      if (editMode) {
        iconNode.classList.remove('fa-edit')
        iconNode.classList.add('fa-check')
        taskNode.classList.add('edit-mode')
        inputNode.classList.add('edit-mode')
        inputNode.disabled = false
        inputNode.select()
      } else {
        iconNode.classList.remove('fa-check')
        iconNode.classList.add('fa-edit')
        taskNode.classList.remove('edit-mode')
        inputNode.classList.remove('edit-mode')
        inputNode.disabled = true
        this.axios.patch(
          `https://neilxx-task-manager.herokuapp.com/tasks/${taskId}`,
          { description: inputNode.value },
          { withCredentials: true }
        )
      }
    },
    deleteTask (event) {
      const vm = this
      const taskId = event.target.parentNode.data
      this.axios.delete(
        `https://neilxx-task-manager.herokuapp.com/tasks/${taskId}`,
        { withCredentials: true }
      )
        .then(function (res) {
          const newTasks = vm.tasks.filter((task) => {
            return task._id !== taskId
          })
          vm.tasks = newTasks
        })
    }
  }
}
</script>

<style scoped>
*:focus {
    outline: none;
}

li > input {
  background-color: rgba(0,0,0,0.0001);
  padding: 0;
  cursor: pointer;
}

.strike-out {
   text-decoration: line-through;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

ul li:nth-child(odd) {
  background: #f9f9f9;
}

ul li:hover {
  background: #ddd;
}

ul li.checked {
  background: #888;
  color: #fff;
}

ul li.checked::before {
  content: '';
  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0 2px 2px 0;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 15px;
  width: 7px;
}

.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;
}

.close:hover {
  background-color: #f44336;
  color: white;
}

.header {
  background-color: #FF6666;
  padding: 30px 40px;
  color: white;
  text-align: center;
}

.header:after {
  content: "";
  display: table;
  clear: both;
}

input {
  margin: 0;
  border: none;
  border-radius: 0;
  width: 75%;
  padding: 10px;

  font-size: 16px;
}

.addBtn {
  padding: 10px;
  width: 25%;
  background: #d9d9d9;
  color: #555;
  float: right;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
}

.addBtn:hover {
  background-color: #bbb;
}

.fa-trash-alt:before {
    position: absolute;
    top: 50%;
    left: 95%;
    transform: translate(-50%, -50%);
}

.fa-edit:before, .fa-check:before {
    position: absolute;
    top: 50%;
    left: 91%;
    transform: translate(-50%, -50%);
}

.title {
  margin-bottom: 30px;
}

.trash-btn, .edit-btn {
  transition: font-size 0.35s ease;
  cursor: pointer;
}

.trash-btn:hover, .edit-btn:hover, .finish-edit-btn:hover {
  font-size: 1.5em;
}

.edit-mode {
  cursor: text;
}

#wrapper {
  box-shadow: -15px -15px 1px -5px rgba(0, 0, 0, 0.192);
  padding: 0;
}

#container {
  padding: 30px 0;

}
</style>
