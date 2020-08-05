<template>
  <div>
    <h1 class="title-header">Pessoas que vão ganhar dinheiro</h1>
    <Card leftContent tag>
      <span slot="header">Nome da Pessoa Vai aqui</span>
      <span slot="body">Ao clicar no link abaixo, uma dialog irá aparecer perguntando quantos reais você deseja adicionar a barra de progresso. A barra deve começar em 0.</span>
      <button class="btn btn-link" slot="footer">
        <icon-base icon-name="plus" width="21" height="21" iconColor="#059D42">
          <icon-plus />
        </icon-base>  
        Clique aqui para adicionar reais
      </button>
      <template slot="tag">
        <icon-base icon-name="dolar-sign" width="24" height="24" iconColor="#FFF"><icon-dolar-sign-small /></icon-base>
        Você já adicionou R$ 125,00
      </template>
    </Card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from '@/components/Card.vue'
import IconBase from '@/components/IconBase.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import IconDolarSignSmall from '@/components/icons/IconDolarSignSmall.vue'


export default Vue.extend({
  components: {
    Card,
    IconBase,
    IconPlus,
    IconDolarSignSmall
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
</style>