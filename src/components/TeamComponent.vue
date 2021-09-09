<template>
<div id="TeamComponent">
  <!-- Page Content -->
  <div class="container">

    <div class="row">

      <!-- /.col-lg-3 -->

      <div class="col">

        <div class="card mt-4">
          <div class="card-body">
            <h3 class="card-title">Nos équipes ! </h3>
            <div class="card" >
              <ul class="list-group list-group-flush text-center">

                <li v-for="(group, index) in groups"
                    :key="index"
                    class="list-group-item" >
                  L'équipe {{ group.title }}  {{group.icon}}
                  <button @click="groupDetails(group.id)" class="btn btn-secondary btn-sm" role="button">Voir</button>
                </li>
<!--                <li class="list-group-item" > L'équipe Marketing 💥-->
<!--                  <a href="oneteam.html" class="btn btn-secondary btn-sm" role="button">Voir</a>-->
<!--                </li>-->

              </ul>
            </div>
          </div>
        </div>
        <!-- /.card -->


        <!-- /.card -->

      </div>
      <!-- /.col-lg-9 -->

    </div>

  </div>
  <!-- /.container -->
</div>
</template>

<script>
import {recipientsGroup} from "../../public/js/recipientsGroup";
export default {
  name: "TeamComponent",
  data: ()=>({
    groups: recipientsGroup
  }),
  methods: {
    groupDetails(id){
      this.$router.push({
        name:'TeamDetails',
        params:{teamId:id}
      })

    }
  }
}
</script>

<style scoped>

</style>
