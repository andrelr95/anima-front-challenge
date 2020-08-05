<template>
  <div class="card">
    <div v-if="leftContent" class="left-content">
      <icon-base icon-name="dolar-sign" width="42" height="42" iconColor="#059D42"><icon-dolar-sign /></icon-base>
    </div>
    <div class="right-content">
      <div class="card-header">
        <slot name="header">
          Header content
        </slot>
      </div>
      <div class="card-body">
        <slot name="body">
          Body content
        </slot>
      </div>
      <div class="card-footer">
        <slot name="footer">
          Footer content
        </slot>
      </div>
    </div>
    <div v-if="tag" class="card-tag">
      <slot name="tag">Tag content</slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import IconBase from './IconBase.vue'
import IconDolarSign from './icons/IconDolarSign.vue'

export default Vue.extend({
  name: "Card",
  components: {
    IconBase,
    IconDolarSign,
  },
  props: {
    leftContent: {
      type: Boolean,
      default: false
    },
    tag: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style lang="scss" scoped>
  .card {
    padding: 24px;
    position: relative;
    background-color: #FFF;
    display: flex;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.15);

    .left-content {
      margin-right: 16px;
    }
    
    .card-header {
      color: #059D42;
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 8px;
    }

    .card-body {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      color: #63666A;
      line-height: 17px;
      margin-bottom: 8px;
    }

    .card-tag {
      display: flex;
      align-items: center;
      position: absolute;
      transform: translateY(-50%) translateX(10%);
      top: 0;
      right: 0;
      padding: 8px 16px;
      background-color: #059D42;
      color: #FFF;
      font-style: normal;
      font-size: 16px;
      font-weight: bold;
      > :first-child {
        margin-right: 4px;
      }
    }
    .btn {
      &.btn-link {
        text-decoration: none;
        display: flex;
        outline: none;
        align-items: center;
        background-color: transparent;
        color: #059D42;
        cursor: pointer;
        > :first-child {
          margin-right: 4px;
        }
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
</style>