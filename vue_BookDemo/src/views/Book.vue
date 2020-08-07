<template>
    <div>
      <table>
        <tr>
          <td>id</td>
          <td>book name</td>
          <td>author</td>
        </tr>
        <tr v-for="book in books" v-bind:key="book.id">
          <td>{{book.id}}</td>
          <td>{{book.name}}</td>
          <td>{{book.author}}</td>
        </tr>
      </table>
    </div>
</template>

<script>
  export default {
    name: "Book",
    data(){
      return{
        books: [
          {
            id: 1,
            name: 'Java',
            author: 'zjy'
          },
          {
            id: 2,
            name: 'Python',
            author: 'gyj'
          }
        ]
      }
    },
    created() {
      const _this = this;
      // eslint-disable-next-line no-unused-vars,no-undef
      axios.get('http://localhost:8181/book/findAll').then(function (resp){
        _this.books = resp.data;
      });
    }
  }
</script>

<style scoped>

</style>