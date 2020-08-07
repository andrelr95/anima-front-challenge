<template>
  <div>
    <h1 class="title-header">Pessoas que vão ganhar dinheiro</h1>
    <Card leftContent tag>
      <span slot="header">Nome da Pessoa Vai aqui</span>
      <div slot="body">
        <span>{{ employees }}</span>
        <span>Ao clicar no link abaixo, uma dialog irá aparecer perguntando quantos reais você deseja adicionar a barra de progresso. A barra deve começar em 0.</span>
        <progress-bar :currentValue="currentValue" :totalValue="totalValue">
          <template slot="current-progress">
            {{ formatMoney(currentValue) }}
          </template>
          <template slot="goal">
            {{ formatMoney(totalValue) }}
          </template>
        </progress-bar>
      </div>
      <button class="btn btn-link" slot="footer" @click="openModal">
        <icon-base icon-name="plus" width="21" height="21" iconColor="#059D42">
          <icon-plus />
        </icon-base>  
        Clique aqui para adicionar reais
      </button>
      <template slot="tag">
        <icon-base icon-name="dolar-sign" width="24" height="24" iconColor="#FFF"><icon-dolar-sign-small /></icon-base>
        Você já adicionou {{ formatMoney(currentValue)}}
      </template>
    </Card>
    <modal 
      v-show="isOpenDialog"
      title="Quantos reais adicionar para [Nome da Pessoa]"
      @closeModal="closeModal"
    >
      <template slot="body">
        <div class="cards-container">
          <div class="card-value">R$ 25</div>
          <div class="card-value">R$ 50</div>
          <div class="card-value">R$ 75</div>
          <div class="card-value">R$ 125</div>
        </div>
      </template>
    </modal>
  </div>
</template>

<script>
import Vue from 'vue'
import Card from '@/components/Card.vue'
import IconBase from '@/components/IconBase.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import IconDolarSignSmall from '@/components/icons/IconDolarSignSmall.vue'
import Modal from '@/components/Modal.vue'
import ProgressBar from '@/components/ProgressBar.vue'

export default Vue.extend({
  components: {
    Card,
    IconBase,
    IconPlus,
    IconDolarSignSmall,
    Modal,
    ProgressBar
  },
  created() {
    this.autoUpdateProgress()
  },
  data() {
    return {
      isOpenDialog: false,
      currentValue: 0,
      totalValue: 250
    }
  },
  computed: {
    employees () {
      console.log('employees', this.$store.state.employees.data)
      return this.$store.state.employees.data
    }
  },
  methods: {
    openModal() {
      this.isOpenDialog = true
    },
    closeModal() {
      this.isOpenDialog = false
    },
    autoUpdateProgress() {
      setInterval(() => {
        if (this.currentValue < 250) {
          this.currentValue = this.currentValue + 1
        }
      }, 100)
    },
    formatMoney(value) {
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
    }

  }
})
</script>

<style lang="scss">
  .title-header {
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    margin-bottom: 80px;
    font-size: 28.3666px;
    line-height: 33px;
    opacity: 0.7;
  }

  .cards-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 640px;
  }
  .card-value {
    width: 240px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    height: 96px;
    background-color: #D4E4DB;
    color: #059D42;
    font-weight: 900;
    margin: 16px;
    font-size: 24px;
    line-height: 36px;
    &:hover {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 768px) {
    .cards-container {
      width: auto;
    }
    .card-value {
      margin: 8px;
      width: 140px;
      min-width: unset;
    }
  }
</style>