<template>
  <div id="app">
    <aside>
      <div>
        <div class="logo">
          <span>LOGOTIPO</span>
        </div>
      </div>
      <nav id="nav" class="nav-container">
        <router-link to="/donation" class="nav-item">Doar dinheiro</router-link>
        <a href="/" class="nav-item">Link</a>
        <a href="/" class="nav-item">Link</a>
        <a href="/" class="nav-item">Link</a>
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
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style lang="scss">
  @import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;900&display=swap);

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html body {
    #app {
      width: 100%;
      height: 100vh;
    }
  }
  main {
    width: calc(100% - 228px);
    float: right;
    padding: 28px 122px;
  }
  aside {
    width: 228px;
    background-color: #059D42;
    height: 100%;
    position: absolute;
  }

  nav#nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    .subheader {
      color: #93FFE8;
      line-height: 19px;
      margin: 16px 0;
      font-size: 16px;
      font-weight: bold;
    }

    &.nav-container {
      margin: 0 24px;
      align-items: flex-start;
      a.nav-item {
        margin-bottom: 8px;
        font-size: 14px;
        text-decoration: none;
        color: #FFF;
        &:hover {
          opacity: 0.5;  
        }
        &:last-of-type {
          margin-bottom: 24px;
        }
      }
    }


      
  }

  .logo {
    margin: 32px 24px;
    padding: 24px;
    border-radius: 34px;
    background-color: #FFF;
    opacity: 0.6;

    span {
      font-weight: 900;
      color: #059D42;
      line-height: 36px;
      font-size: 28px;
      text-transform: uppercase;
    }
  }
</style>
