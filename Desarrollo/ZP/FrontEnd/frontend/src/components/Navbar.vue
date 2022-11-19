<script setup></script>
<template>
  <header class="position-sticky top-0 left-0 z-index-3 p-0">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid py-3 px-4">
        <a class="navbar-brand my-0 me-0 p-0 ms-md-3 ms-lg-5" href="">
          <img
            src="../assets/images/zorrito-icon.svg"
            alt="Ícono de Zorrito Plus"
            class="logo-icon"
          />
        </a>
        <button
          class="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around ms-0 p-0 border-0 position-relative"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            class="navbar-toggler__icon navbar-toggler__icon--top-bar"
          ></span>
          <span
            class="navbar-toggler__icon navbar-toggler__icon--middle-bar"
          ></span>
          <span
            class="navbar-toggler__icon navbar-toggler__icon--bottom-bar"
          ></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end my-0 ms-0 p-0 me-md-3 me-lg-5 p-0"
          id="navbarNav"
        >
          <ul class="navbar-nav d-lg-flex align-items-center pt-4 pt-lg-0">
            <li class="nav-item pb-2 pt-0 py-lg-0 px-0 pe-lg-4">
              <router-link
                to="/"
                class="nav-link active fs-5 p-0 fw-bold text-uppercase"
                >Inicio</router-link
              >
            </li>
            <li class="nav-item py-2 py-lg-0 px-0 px-lg-4">
              <router-link
                to="/servicios"
                class="nav-link active fs-5 p-0 fw-bold text-uppercase"
                >Servicios</router-link
              >
            </li>
            <li class="nav-item pt-2 pb-0 py-lg-0 px-0 ps-lg-4">
              <a class="nav-link active fs-5 p-0" href="#"
                ><button
                  class="bg-black text-white border-white rounded-4 py-2 px-3 fw-bold text-uppercase"
                >
                  Iniciar sesión
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 30 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.7434 32H1C4.4077 24.1099 6.60302 20.0727 16.1327 20.5C23.5899 20.4179 26.3019 23.0251 28.7434 32Z"
                      stroke="white"
                    />
                    <path
                      d="M23.7035 8.5C23.7035 12.9141 20.0923 16.5 15.6283 16.5C11.1643 16.5 7.55307 12.9141 7.55307 8.5C7.55307 4.08587 11.1643 0.5 15.6283 0.5C20.0923 0.5 23.7035 4.08587 23.7035 8.5Z"
                      stroke="white"
                    />
                  </svg></button
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<style lang="scss">
header {
  background-image: linear-gradient(to bottom right, black 50%, #040c51 100%);
}
.logo-icon {
  max-width: 8rem;
}
* {
  font-family: "Poppins", sans-serif;
}
.nav-link {
  font-family: "Readex Pro", sans-serif;
}
.navbar-toggler {
  width: 35px;
  height: 31px;
  -webkit-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 0;
  &__icon {
    display: block;
    position: absolute;
    height: 5px;
    width: 100%;
    background-color: white;
    border-radius: 50px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
    &--top-bar {
      margin-top: 0px;
      -webkit-transform: rotate(135deg);
      -ms-transform: rotate(135deg);
      transform: rotate(135deg);
    }
    &--middle-bar {
      opacity: 0;
      margin-top: 0px;
      filter: alpha(opacity=0);
    }
    &--bottom-bar {
      margin-top: 0px;
      -webkit-transform: rotate(-135deg);
      -ms-transform: rotate(-135deg);
      transform: rotate(-135deg);
    }
  }
  &.collapsed {
    .navbar-toggler__icon--top-bar {
      position: absolute;
      top: 0;
      right: 0;
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    .navbar-toggler__icon--middle-bar {
      position: absolute;
      opacity: 1;
      filter: alpha(opacity=100);
    }
    .navbar-toggler__icon--bottom-bar {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
}
</style>
