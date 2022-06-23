<template>
  <div class="container mt-2">
    <b-form>
      <b-form-group label="Título" label-for="title">
        <b-form-input v-model="form.title" id="title" type="text" placeholder="Ex: lavar casa" required></b-form-input>
      </b-form-group>
      <b-form-group label="Descrição" label-for="description">
        <b-form-textarea v-model="form.description" id="description" type="text" placeholder="Ex: preciso levar o carro para lavar" required></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="outline-primary" @click.stop.prevent="save()">Salvar</b-button>

    </b-form>
  </div>
</template>

<script>
import mixin from '../mixins/toastMixin'
export default {
  name: 'Form',
  mixins: [mixin],
  data() {
    return {
      form: {
        title: '',
        description: ''
      },
      id: null
    }
  },
  created() {
    this.id = this.$route.params.index || this.$route.params.index === 0 ? this.$route.params.index : null;
    if(this.id || this.id === 0) {
       let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
       this.form = tasks[this.id];
    }
  },
  methods: {
    save() {
      let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
      if(this.id || this.id === 0) {
        tasks[this.id] = this.form;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        this.$router.push({ name: 'list' });

        this.showToast("success", "Suceso!", "Tarefa atualizado com sucesso");
        return;

      }
      tasks.push(this.form);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      this.showToast("success", "Suceso!", "Tarefa criada com sucesso");
      this.$router.push({ name: 'list' });
      
    }
  }
}
</script>
