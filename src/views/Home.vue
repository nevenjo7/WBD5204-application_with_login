<template>
  <div class="home">
    <div class="form">
      <div class="left">
        <h3>Login</h3>
        <p>By logging in you agreed to the ridicilously long term you didn't bother to read.</p>
      </div>
      <div class="right">
        <label for="email">Email</label>
        <br>
        <input id="email" type="text" :placeholder="placeholder.email" v-model="inputEmail">
        <br>
        <label for="pass">Password</label>
        <a href="#" @click="changeVisibility"><i style="font-size:24px" class="fa">&#xf06e;</i></a>
        <br>
        <input id="pass" v-bind:type="visible" :placeholder="placeholder.password" v-model="inputPass">
        <div v-if="hasError">{{error}}</div>
        <br>
        <button v-on:click="validate">Log in</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data:function() {
    return {
      email: "neven@sae.com",
      pass: "secret",
      inputEmail: "",
      inputPass: "",
      visible: "password",
      error: "Credentials are not correct",
      hasError: false,
      placeholder: {
        email: 'example@sae.com',
        password: 'Enter your password'
      }
    }
    
  },
  methods: {
    changeVisibility: function() {
        if(this.visible === 'password') {
          this.visible = 'text';
        } else {
          this.visible = 'password';
        }
    },
    validate: function() {
      if(this.inputEmail === this.email && this.inputPass === this.pass) {
        this.$router.push('about');
      } else {
         this.hasError = true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
div.form {
  width: 620px;
  box-sizing: border-box;
  margin: 100px auto;
}
div.left {
  width: 200px;
  float: left;
  padding: 20px;
  margin: 0px 20px;
  h3 {
    font-family:sans-serif;
    font-size: 170%;
  }
  p {
    color:rgb(116, 122, 128);
    font-size: 110%;
  }
}
div.right {
  background-color: #32475C;
  text-align: left;
  width: 300px;
  padding: 40px 10px;
  float: right;
  border-radius: 5px;
  
  
  ::placeholder {
    color: rgb(228, 216, 216);
  }
  label, input, button, div {
    margin: 5px 30px;
  }
  input {
    margin: 15px 30px;
  }
  label {
    color: rgb(126, 127, 128);
  }
  input {
    background: #32475C;
    outline: none;
    border: none;
    color: #fff;
  }
  button {
    margin: 0px 20px;
    padding: 15px 0px;
    width: 80%;
    background-color: #fff;
    border: none;
  }
}
a {
  color: #DEE2E5;
}


</style>
