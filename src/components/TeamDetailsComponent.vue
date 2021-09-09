<template>
  <div id="TeamDetailsComponent">
    <!-- Page Content -->
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card mt-4">
            <div class="card-body">
              <h3 class="card-title">Oh la belle équipe de {{ team.title }} </h3>
              <h5 class="card-title">Composée de {{ team.recipients.length }} membres</h5>

              <div v-for="(member, index) in team.recipients"
                   :key="index"
                   class="media mb-2">
                <img class="mr-3 rounded" style='height:120px' :src="member.avatar"
                     alt="Generic placeholder image">
                <div class="media-body">
                  <h5 class="mt-0">{{ member.firstName }} {{ member.lastName }} ?</h5>
                  <span class="badge badge-info">a{{ member.email }}</span>
                </div>
              </div>

            </div>
          </div>

        </div>


      </div>

    </div>
    <!-- /.container -->
  </div>
</template>

<script>
import {recipientsGroup} from "../../public/js/recipientsGroup";

export default {
  name: "TeamDetailsComponent",
  data: () => ({
    allData: recipientsGroup,
    team: null,
    teamId: null
  }),
  created() {
    this.teamId = this.$route.params.teamId
    this.team = this.allData.find(elem => elem.id === this.teamId)
    console.log(this.team)
  }
}
</script>

<style scoped>

</style>
