<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
/* ============
 * Entry Point
 * ============
 *
 * The entry point of the application.
 */
import $ from 'jquery/dist/jquery';

export default {
  /**
   * The name of the application.
   */
  name: 'VueBoilerplate',
  created() {
    console.log($(document));
  },
  /**
   * Fires when the app has been mounted.
   */
  mounted() {
    // If the user is authenticated,
    // fetch the data from the API
    if (this.$store.state.auth.authenticated) {
      this.$store.dispatch('account/find');
    }
  },
};
</script>
