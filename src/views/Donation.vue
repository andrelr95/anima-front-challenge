<template>
  <div>
    <h1 class="title-header">Pessoas que vão ganhar dinheiro</h1>
    <div class="error-container" v-show="hasError">
      <span class="error-feedback">Houve um erro ao receber informações!</span>
      <button class="btn-submit" @click="callEmpoyees()">Tentar novamente</button>
    </div>
    <div class="loading-container" v-show="isLoading">
      <span><img src="../assets/icons/loading.gif" /></span>
    </div>
    <div v-for="employee in employees" :key="employee.id">
      <Card leftContent tag :tagError="!employee.employee_current_value">
        <span slot="header">{{ employee.employee_name }} - {{ employee.employee_age }} anos.</span>
        <div slot="body">
          <span>Ao clicar no link abaixo, uma dialog irá aparecer perguntando quantos reais você deseja adicionar a barra de progresso. A barra deve começar em 0.</span>
          <progress-bar :currentValue="employee.employee_current_value" :totalValue="employee.employee_salary">
            <template slot="current-progress">
              {{ formatMoney(employee.employee_current_value) }}
            </template>
            <template slot="goal">
              {{ formatMoney(employee.employee_salary) }}
            </template>
          </progress-bar>
        </div>
        <button class="btn btn-link" slot="footer" @click="openModal(employee)">
          <icon-base icon-name="plus" width="21" height="21" iconColor="#059D42">
            <icon-plus />
          </icon-base>  
          Clique aqui para adicionar reais
        </button>
        <template slot="tag">
          <icon-base icon-name="dolar-sign" width="24" height="24" iconColor="#FFF"><icon-dolar-sign-small /></icon-base>
          {{ employee.employee_current_value ? `Você já adicionou ${formatMoney(employee.employee_current_value)}.` : 'Você não adicionou nada.'}}
        </template>
      </Card>
    </div>
    <modal 
      v-show="isOpenDialog"
      v-if="selectedEmployee"
      :title="`Quantos reais adicionar para ${selectedEmployee.employee_name}?`"
      @closeModal="closeModal"
    >
      <template slot="body">
        <span class="error-feedback" v-show="isCurrentHigherThanTotal">O valor é maior que o total!</span>
        <div class="cards-container">
          <div 
            v-for="(value) in [2500, 5000, 7500, 12500]"
            :key="value"
            class="card-value"
            :class="{ 
              'card-value__active': moneyToSend === value
            }" 
            @click="setValue(value)">
            {{ formatMoney(value) }}
          </div>
        </div>
      </template>
      <template slot="footer">
        <button class="btn-submit" :disabled="!isInvalid" @click="sendValue(moneyToSend)">Confirmar</button>
      </template>
    </modal>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapActions, mapState, mapGetters, mapMutations } from 'vuex'
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
    this.callEmpoyees()
  },
  data() {
    return {
      selectedEmployee: null,
      isOpenDialog: false,
      moneyToSend: 0,
    }
  },
  computed: {
    isCurrentHigherThanTotal() {
      const salary = this.selectedEmployee.employee_salary
      const currentValue = this.selectedEmployee.employee_current_value
      return currentValue + this.moneyToSend > salary
    },
    isInvalid() {
      return !this.isCurrentHigherThanTotal && !!this.moneyToSend
    },
    ...mapState({
      employees: state => state.employees.data,
      hasError: state => state.employees.hasError,
      isLoading: state=> state.employees.isLoading
    }),
    ...mapGetters([
      'emptySallary'
    ])
  },
  methods: {
    setValue(value) {
      this.moneyToSend = value
    },
    sendValue(value) {
      this.$store.commit('setEmployeeCurrentValue', { 
        id :this.selectedEmployee.id, 
        value
      })
      this.closeModal()
    },
    openModal(employee) {
      this.selectedEmployee = employee
      this.isOpenDialog = true
    },
    closeModal() {
      this.moneyToSend = 0
      this.isOpenDialog = false
    },
    formatMoney(value) {
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
    },
    ...mapActions([
      'callEmpoyees'
    ]),
    ...mapMutations([
      'setEmployeeCurrentValue'
    ])
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

  .btn-submit {
    margin-right: 16px;
    padding: 8px 16px;
    outline: none;
    cursor: pointer;
    border-radius: 4px;
    color: #FFF;
    background-color: #059D42;

    &:hover {
      opacity: .8;
    }
    &:disabled {
      opacity: .2;
      cursor: not-allowed
    }
  }

  .cards-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 640px;
  }

  .cards-container__footer {
    display: flex;
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

  .card-value__active {
    border: 1px solid #059D42;
  }

  .error-feedback {
    margin-left: 16px;
    color: #E14646;
  }

  .error-container {
    display: flex;
  }

  .loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    .title-header {
      margin-bottom: 48px;
    }
    .cards-container {
      width: auto;
    }
    .card-value {
      margin: 8px;
      width: 260px;
      min-width: unset;
    }
  }
</style>