<template>
    <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
                <slot name="header">
                  <button class="close" @click="$emit('close')">x</button>
                </slot>
                <div class="modal-body">
                <slot name="body">
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
</template>


<script>

export default {
    props: ['modal']
}

</script>


<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 90vw;
  margin: 0px auto;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;

  @media (min-width: 576px) {
        width: 85vw;
}
  @media (min-width: 768px) {
        width: 75vw;
}
  @media (min-width: 1200px) {
        width: 55vw;
  }
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/* modal transition */
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
  transition: .2s;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transform: scaleY(.5);
}

</style>