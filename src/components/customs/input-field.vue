<template>
  <div class="group">
    <input type="text" />
    <span class="highlight"></span>
    <span class="bar"></span>
    <label>{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
defineProps<{ label: string }>();
</script>

<style scoped>
/* form starting stylings ------------------------------- */
.group {
  position: relative;
}
input {
  font-size: 17px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #eee;
  letter-spacing: -0.41px;
}
input:focus {
  outline: none;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  background-color: #fff !important;
  color: #000 !important;
  -webkit-text-fill-color: #000 !important;
  -webkit-box-shadow: 0 0 0 1000px #fff inset !important;
  transition: background-color 5000s ease-in-out 0s !important;
}

/* LABEL ======================================= */
label {
  color: #3c3c43;
  opacity: 0.3;
  font-size: 17px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

/* active state */
input:focus ~ label,
/* input:valid ~ label, */
input:-webkit-autofill ~ label,
input:-webkit-autofill:hover ~ label,
input:-webkit-autofill:focus ~ label {
  top: -20px;
  font-size: 14px;
  color: #5264ae;
}
/* BOTTOM BARS ================================= */
.bar {
  position: relative;
  display: block;
  width: 100%;
}
.bar:before,
.bar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #5264ae;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}
.bar:before {
  left: 50%;
}
.bar:after {
  right: 50%;
}
/* active state */
input:focus ~ .bar:before,
input:focus ~ .bar:after,
input:-webkit-autofill ~ .bar:before,
input:-webkit-autofill:hover ~ .bar:before,
input:-webkit-autofill:focus ~ .bar:before,
input:-webkit-autofill ~ .bar:after,
input:-webkit-autofill:hover ~ .bar:after,
input:-webkit-autofill:focus ~ .bar:after {
  width: 50%;
}
/* HIGHLIGHTER ================================== */
.highlight {
  position: absolute;
  height: 60%;
  width: 100%;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}
/* active state */
input:focus ~ .highlight,
input:-webkit-autofill ~ .highlight,
input:-webkit-autofill:hover ~ .highlight,
input:-webkit-autofill:focus ~ .highlight {
  -webkit-animation: inputHighlighter 0.3s ease-in-out;
  -moz-animation: inputHighlighter 0.3s ease-in-out;
  animation: inputHighlighter 0.3s ease-in-out;
}

/* ANIMATIONS ================ */
@-webkit-keyframes inputHighlighter {
  from {
    background: #5264ae;
  }
  to {
    width: 0;
    background: transparent;
  }
}
@-moz-keyframes inputHighlighter {
  from {
    background: #5264ae;
  }
  to {
    width: 0;
    background: transparent;
  }
}
@keyframes inputHighlighter {
  from {
    background: #5264ae;
  }
  to {
    width: 0;
    background: transparent;
  }
}
</style>
