<template>
  <div class="modal">
    <div class="backdrop" @click="close"></div>
    <div class="modal-content">
      <div class="modal-header">
        <span class="modal-title">{{ title }}</span>
        <button class="btn-icon" @click="close">
          <icon-base icon-name="close" icon-color="#FFF" width="14" height="14"><icon-close /></icon-base>
        </button>
      </div>
      <div class="modal-body">
        <slot name="body"></slot>
      </div>
      <div class="modal-footer"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import IconBase from '@/components/IconBase.vue'
import IconClose from '@/components/icons/IconClose.vue'

export default Vue.extend({
  name: 'Modal',
  components: {
    IconBase,
    IconClose
  },
  props: {
    title: {
      type: String,
      default: 'Modal Header'
    }
  },
  methods: {
    close() {
      this.$emit('closeModal')
    }
  }
})
</script>

<style lang="scss" scoped>

  .modal {
    position: fixed;
    top: 0;
    left: 0;;    
    z-index: 200;
    width: 100vw;
    height: 100vh; 
  }
  .backdrop {
    position: fixed;
    width: 100vw;
    height: 100vh; 
    background-color: #333;
    opacity: .5;
  }
  .modal-content {
    background-color: #FFFFFF;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-width: 560px;
    min-height: 320px;
    z-index: 100;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.5);
  }

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 24px;
    background-color: #059D42;
  }

  .modal-title {
    font-size: 16px;
    line-height: 25px;
    color: #FFF;
    font-weight: bold;
  }

  .modal-body {
    padding: 24px;
    flex-grow: 1;
  }

  .modal-footer {
    background-color: #F5F5F5;
    min-height: 72px;
    border: 0.5px solid #D2D2D2;
  }

  .btn-icon {
    background-color: transparent;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 768px) {
    .modal-body {
      padding: 8px;
    }
    .modal-content {
      width: 90%;
      min-width: unset;
    }
  }
</style>