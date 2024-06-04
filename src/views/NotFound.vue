<template>
  <div class="rn-not-found-area rn-section-gapTop vh-100 d-flex justify-content-center align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="rn-not-found-wrapper text-center">
            <h2 class="large-title">404</h2>
            <h3 class="title">Page not found!</h3>
            <p>The page you are looking for is not available.</p>
            <router-link class="btn btn-primary btn-large" to="/">Go Back To Home</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rn-not-found-area {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.rn-not-found-wrapper {
  text-align: center;
}
</style>


<script>
    import Layout from '@/components/layouts/Layout'

    export default {
        name: 'NotFound',
        components: {Layout}
    }
</script>