<template>
  <div class="row">
    <div class="col-6">
      <p class="lead">Component Member</p>

      <table class="table col-12">
        <thead class="thead-dark">
          <tr>
            <th scope="col-1">NO</th>
            <th scope="col-5">Nama</th>
            <th scope="col-5">Umur</th>
          </tr>
        </thead>
        <tbody v-for="user in member" :key="user.id">
          <tr>
            <th>{{user.id}}</th>
            <td>{{user.nama}}</td>
            <td>{{user.email}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      member: [
        { nama: "Andy Reztyan", email: "andyreztyan@gmail.com" },
        { nama: "Bambang Gentolet", email: "bambang@gmail.com" },
        { nama: "Mas Tamvan", email: "xitampan@gmail.com" }
      ]
    };
  }
};
</script>
<style>
</style>