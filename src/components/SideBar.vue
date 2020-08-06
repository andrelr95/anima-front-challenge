<template>
  <div class="menu-header">
    <div class="navbar">
      <button class="button-menu" @click="openPanel" type="button">
        <span class="burger-bar"></span>
        <span class="burger-bar burger-bar__2"></span>
        <span class="burger-bar burger-bar__3"></span>
      </button>
      <div class="logo">
        <span>LOGOTIPO</span>
      </div>
    </div>
    <div class="sidebar">
      <div class="sidebar-backdrop" v-if="isOpen && !isSidebarFixed" @click="openPanel"></div>
      <transition name="slide">
        <aside class="sidebar-panel" v-if="isOpen || isSidebarFixed">

          <div class="logo">
            <span>LOGOTIPO</span>
            <h1>{{$vssWidth}}</h1>
          </div>

          <nav id="nav" class="nav-container">
            <span class="subheader">Menu</span>
            <router-link to="/" class="nav-item">Home</router-link>
            <router-link to="/donation" class="nav-item">Doar dinheiro</router-link>
            <span class="subheader">Submenu</span>
            <a href="/" class="nav-item">Link</a>
            <a href="/" class="nav-item">Link</a>
            <a href="/" class="nav-item">Link</a>
            <a href="/" class="nav-item">Link</a>
            <span class="subheader">Submenu</span>
            <a href="/" class="nav-item">Link</a>
            <a href="/" class="nav-item">Link</a>
            <a href="/" class="nav-item">Link</a>
            <a href="/" class="nav-item">Link</a>
          </nav>
        </aside>
      </transition>
    </div>
  </div>
</template>

<script>
import VueScreenSize from 'vue-screen-size'

export default ({
  name: 'Sidebar',
  mixins: [VueScreenSize.VueScreenSizeMixin],
  data() {
    return {
      isOpen: false,
    }
  },
  computed: {
    isSidebarFixed() {
      return this.$vssWidth > 768
    },
  },
  methods: {
    openPanel() {
      this.isOpen = !this.isOpen
    },
  }
})
</script>

<style lang="scss" scoped>
  .slide-enter-active {
    transition: all .3s ease-in;
  }

  .slide-leave-active {
    transition: all .3s ease-in;
  }

  .slide-enter, .slide-leave-to {
    transform: translateX(-228px);
  }

  .menu-header {
    position: relative;
  }

  .navbar {
    height: 80px;
    display: flex;
    align-items: center;
    position: absolute;
    background-color: #059D42;
    width: 100%;
  }

  .button-menu {
    width: 40px;
    height: 40px;
    background-color: transparent;
    margin-left: 16px;
    position: absolute;
    display: flex;
    padding:8px;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;
  }

  .burger-bar {
    background-color: white;
    height: 2px;
    width: 100%;
    margin: 1px;

    &.burger-bar__2 {
      width: 60%;
    }

    &.burger-bar__3 {
      width: 80%;
    }
  }

  .sidebar {
    .sidebar-panel {
      width: 228px;
      height: 100vh;
      z-index: 2;
      background-color: #059D42;
      position: absolute;
    }
    .sidebar-backdrop {
      position: fixed;
      background-color: #333;
      opacity: 0.5;
      z-index: 1;
      cursor: pointer;
      width: 100vw;
      height: 100vh;
    }

    .nav-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 24px;
      align-items: flex-start;

      .nav-item {
        margin-bottom: 8px;
        font-size: 14px;
        text-decoration: none;
        color: #FFF;
        &:hover {
          opacity: 0.8;  
        }
        &:last-of-type {
          margin-bottom: 24px;
        }
      }
    }
  }

  .nav-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 24px;
    align-items: flex-start;

    .nav-item {
      margin-bottom: 8px;
      font-size: 14px;
      text-decoration: none;
      color: #FFF;
      &:hover {
        opacity: 0.8;  
      }
      &:last-of-type {
        margin-bottom: 24px;
      }
    } 
    
    .subheader {
      color: #93FFE8;
      line-height: 19px;
      margin: 16px 0;
      font-size: 16px;
      font-weight: bold;
    }
  }

  .logo {
    margin: 32px 24px;
    padding: 24px;
    font-size: 28px;
    border-radius: 34px;
    background-color: #FFF;
    color: #059D42;
    font-weight: 900;
    line-height: 36px;
    text-transform: uppercase;
    opacity: 0.6;
  }

  @media screen and (max-width: 768px) {
    aside {
      display: block;
    }
    .navbar {
      .logo {
        padding: 12px 16px;
        margin: 0 auto;
        font-size: 14px;
        line-height: 16px;
        border-radius: 16px;
      }
    }
  }

    @media screen and (min-width: 769px) {
    .navbar {
      display: none;
    }
  }
</style>