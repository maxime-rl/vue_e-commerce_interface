<template>
  <form @submit="trySubmit" class="d-flex flex-column">
    <h4>Ajouter un produit :</h4>
    <hr class="w-100">
    <div class="form-group">
      <label>Image (url)</label>
      <input v-model="form.img" type="text" class="form-control">
    </div>
    <div class="form-group">
      <label>Title</label>
      <input v-model="form.title" class="form-control">
    </div>
    <div class="form-group">
      <label>Courte description</label>
      <textarea v-model="form.description" class="form-control" placeholder="60 caractères maximum"></textarea>
    </div>
    <div class="form-group">
      <label>Prix</label>
      <input v-model.number="form.price" type="number" class="form-control">
    </div>
      <ul v-if="errors.length">
        <li v-for="error in errors" :key="error" class="text-danger">{{ error }}</li>
      </ul>
      <!--<pre>{{ $data }}</pre> debug -->
      <button class="btn btn-primary mt-4">Ajouter</button>
  </form>
</template>


<script>

export default {
  data() {
    return {
      form: {
        img: '',
        title: '',
        description: '',
        price: ''
      },
      errors: []
    }
  },
    methods: {
      trySubmit(e) {
        e.preventDefault();
        if (this.formIsValid()) {
          this.$store.dispatch('product/saveOne', { ...this.form });
          this.resetForm();
          this.$router.push('/shop');
        }
      },
      resetForm() {
        this.form = {
          img: '',
          title: '',
          description: '',
          price: ''
        }
      },
      formIsValid() {
        this.errors = [];
        // validation image
        if (!this.form.img) {
          this.errors.push('img required');
        }
        // validation description
        if (!this.form.title) {
          this.errors.push('title required');
        }

        /* limiter le nombre de caracteres du title
        if (this.form.title.length > 18) {
          this.errors.push('Le titre ne doit pas comporter plus de 18 caractères');
        }
        */

        // validation description
        if (!this.form.description) {
          this.errors.push('description required');
        }
        if (this.form.description.length > 60) {
          this.errors.push('La description ne doit pas comporter plus de 60 caractères');
        }
        // validation price
        if (!this.form.price) {
          this.errors.push('price required');
        }

        return this.errors.length ? false : true;
      }
    }
  }

</script>


<style lang="scss">

</style>