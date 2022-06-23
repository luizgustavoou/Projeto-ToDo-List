<template>
  <div class="container mt-2">
    <div v-for="(task, index) in tasks" :key="index">
      <b-card :title="task.title">
        <b-card-text>{{ task.description }}</b-card-text>
        
      <b-button variant="outline-secondary" class="mr-2" @click.stop.prevent="edite(index)">Editar</b-button>
      <b-button variant="outline-danger" class="mr-2" @click.stop.prevent="remove(task, index)">Excluir</b-button>
      </b-card>
    </div>

    <b-modal ref="my-modal" hide-footer title="Exclusão de tarefas">
      <div class="d-block text-center">
        Deseja realmente excluir essa tarefa?
      </div>
      <div class="mt-3 d-flex justify-content-end">
      <b-button variant="outline-secondary" class="mr-2" @click.stop.prevent="hideModal()">Cancelar</b-button>
      <b-button variant="outline-danger" class="mr-2" @click.stop.prevent="confirmRemove()">Excluir</b-button>
      </div>
    </b-modal>
  </div>

  
</template>

<script>

import mixin from '../mixins/toastMixin'
export default {
  name: 'List',
  mixins: [mixin],
  data() {
    return {
      tasks: [],
      taskSelected: {}
    }
  },
  methods: {
    getTasks() {
      this.tasks = localStorage.getItem('tasks') ?  JSON.parse(localStorage.getItem('tasks')) : [];
    },
    edite(index) {
      this.$router.push({ name: 'formedit', params: { index: index}});
    },
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    remove(task, index) {
      this.taskSelected = task;
      this.taskSelected.id = index;
      this.showModal();
      

    },
    confirmRemove() {
      this.tasks.splice(this.taskSelected.index, 1);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));

      /* let tasks = localStorage.getItem('tasks') ?  JSON.parse(localStorage.getItem('tasks')) : [];
      tasks.splice(this.taskSelected.id, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      this.getTasks(); */
      this.hideModal();

      this.showToast("success", "Suceso!", "Tarefa deletada com sucesso");
    }
  },
  created() {
    this.getTasks();
  }
}
</script>
