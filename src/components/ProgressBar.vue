<template>
  <div class="progress-bar">
    <div 
      v-if="progress > 0"
      class="progress-bar__current-status"
      :style="{ width: `${progress}%`}"
    
    />
    <span 
      class="progress-bar__current-money"
      :style="{
        width: `${progress}%`,
        color: progress < 5 ? '#000' : '#fff',
        display: `${progress < 100 ? 'block' : 'none'}`
      }">
        <slot name="current-progress"></slot>
      </span>
    <span 
      class="progress-bar__goal"
      >
        <slot name="goal"></slot>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ProgressBar',
  props: {
    currentValue: {
      type: Number,
      required: true,
      default: 0
    },
    totalValue: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data() {
    return {
      progress: 0
    }
  },
  watch: {
    currentValue(currentValue: number) {
      this.progress = (currentValue * 100) / this.totalValue
    }    
  },
  computed: {
    currentValuePosition() {
      if (this.progress > 8) {
        return `calc(${(100 * this.currentValue) / this.totalValue }% - 40px)`;
      }
      return `8px`;
    },
  }
})
</script>

<style lang="scss" scoped>
  .progress-bar {
    margin: 32px 0;
    width: 100%;
    height: 16px;
    position: relative;
    border-radius: 10px;
    background-color: #E9E9E9;
    border: 1px solid #f1f1f1;

    &::after {
      content: '';
      top: 6px;
      position: absolute;
      width: 24px;
      height: auto;
      transform: rotate(90deg);
      opacity: .5;
      border: 0.1px dashed #63666A;
      right: -4px;

      &.hidden {
        display: none;
      }
    }
  }

  .progress-bar__current-status {
    top: -1px;
    left: -1px;
    position: absolute;
    border-radius: inherit;
    background-color: #059D42;
    height: inherit;
  }

  .progress-bar__current-money {
    font-size: 8px;
    padding: 0 8px;
    text-align: right;
    font-style: normal;
    color: rgba(0, 0, 0, 0.7);
    font-weight: normal;
    top: -1px;
    position: absolute;

  }

  .progress-bar__goal {
    font-size: 8px;
    font-style: normal;
    right: -4px;
    color: rgba(0, 0, 0, 0.7);
    font-weight: normal;
    top: -24px;
    position: absolute;
  }
</style>