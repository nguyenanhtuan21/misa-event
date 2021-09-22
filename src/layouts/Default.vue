<template>
  <div>
    <header id="Header" class="sticky">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="logo-ctn">
              <a href="/">
                <img src="/img/home/logo.svg" alt="AMIS Sự kiện" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main id="Main">
      <slot />
    </main>
  </div>
</template>

<script>
/* ============
 * Default Layout
 * ============
 *
 * Used for the home and account pages.
 *
 * Layouts are used to store a lot of shared code.
 * This way the app stays clean.
 */

export default {
  /**
   * The name of the layout.
   */
  name: "DefaultLayout",

  /**
   * The data that can be used by the page.
   *
   * @returns {Object} The view-model data.
   */
  data() {
    return {
      menuCollapsed: false,
    };
  },

  /**
   * The methods that the layout can use.
   */
  methods: {
    /**
     * Will log the user out.
     */
    logout() {
      this.$store.dispatch("auth/logout");
    },

    /**
     * Will toggle the menu.
     */
    toggleMenu() {
      this.menuCollapsed = !this.menuCollapsed;
    },
  },
  mounted() {
  },
};
</script>
<style>
.logo-ctn img {
  display: block;
  max-width: 200px;
  height: 60px;
  max-height: 60px;
  line-height: 60px;
  padding: 10px 0;
  top: 0;
}
#Main {
  padding-top: 60px;
}
</style>
