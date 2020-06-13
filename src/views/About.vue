<template>
  <div class="about">
    <div id="router" >   
       <router-link v-bind:class="{'dark-mode' : dark}"   :to="'/'+ this.value_two +'/about'" @click.native="testMethod">Dark Mode</router-link>
    </div>
    <nav>
      <ul>
        <li v-bind:class=" { 'dark-mode' : dark } "><a v-bind:class=" { 'dark-mode' : dark } " href="Home.vue">Home</a></li>
        <li v-bind:class=" { 'dark-mode' : dark } "><a v-bind:class=" { 'dark-mode' : dark } " href="#">About</a></li>
        <li v-bind:class=" { 'dark-mode' : dark } "><a v-bind:class=" { 'dark-mode' : dark } " href="#">Contact</a></li>
      </ul>
    </nav>
    <ul id="flex">

      <li v-for="item in obj" v-bind:key="item">
        <div class="card" v-bind:class=" { 'dark-mode' : dark } ">
        <img :src="item.image" alt="" srcset="">
        <h2>{{item.title}}</h2>
        <p>{{item.description}}</p>
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value_one: false,
      value_two: 'light',
      changeMode: null,
      dark: false,
      cookieValue: this.$route.params.mode ,
      obj: [
        {
          image: 'https://i.ibb.co/HqfwnrY/FF.png',
          title: 'Polo 1.0 TSI Comfortline 70kW (95KS)',
          description: 'Puna cena vozila 15.922 € Specijalna cena vozila -  13.490 € Specijalna cena vozila u saradnji sa Porsche Mobility - 11.990 €*'
        },
        {
          image: 'https://www.carwiz.rs/data/public/rotator/proljece-add-carwiz-rent-a-car-beograd-srbija-golf_15e5906eadeef6.png',
          title: 'Golf 1.0 TSI Trendline 85kW (115KS)',
          description: 'Puna cena vozila 19.430 € Specijalna cena vozila -  16.490 € Specijalna cena vozila u saradnji sa Porsche Mobility - 14.990 €*'
        },
        {
          image: 'https://assets.volvocars.com/rs/~/media/shared-assets/navigation/cars/s90.png',
          title: 'Volvo modeli uz uštedu do 20.000 EUR',
          description: 'NEPONOVLJIVA OUTLET PONUDA Ograničena količina bogato opremljenih modela sa lagera, sada Vam je dostupna uz uštedu do 20.000 EUR'
        }
      ]
    }
  },
  methods: {
    darkTrue() {
      if(this.$route.params.mode == "dark") {
        this.dark = true;
      } else {
        this.dark = false;
      }
      if(this.mode == "light") {
        this.mode = "dark"
      } else {
        this.mode = "light"
      }
    },
    changeLights() {
      // if(this.dark == false) {
      // this.dark = true;
      // } else {
      // this.dark = false;
      // }
      if(this.mode == "light") {
        this.mode = "dark";
      } else {
        this.mode = "light";
      }
    },
    changeValue() {
      if(this.dark == false) {
      this.dark = true;
      } else {
        this.dark = false;
      }
      if(this.dark == false) {
        this.mode = "dark"
      } else {
        this.mode = "light"
      }
    },
    testMethod() {
      if(this.value_one == false) {
      this.value_one = true;
      } else {
        this.value_one = false;
      }
      if(this.value_two == "light") {
        this.value_two = "dark";
      } else {
        this.value_two = "light"
      }
    }
  },
  mounted() {
    this.cookieInstance = new this.$cookie
    this.cookieInstance.create('lighting', this.cookieValue, 10);
    if(this.$route.params.mode == "dark") {
      this.dark = true;
    } else {
      this.dark = false;
    }
  }
}
</script>

<style lang="scss" scoped>

img {
  width: 100%;
  height: 160px;
}
nav ul {
  margin: 50px auto;
  width: 600px;

  // width: 800px;
  li {
    display: inline-block;
    padding: 10px 25px;
    background: #DEE4E7;
  } a {
    color: #000;
    text-decoration: none;
    font-size: 36pt;
  }
}
li {
  list-style-type: none;
}
ul {
  padding: 0;
  margin: 50px;
}
.card {
  background: #DEE4E7;
  padding: 20px;
  width: 400px;
  height: 400px;
  h1, p {
    text-align: left;
    margin-left: 25px;
  }
  h2 {
    font-size: 18pt;
  }
  p {
    font-size: 16pt;
  }
}
#flex {
  display: flex;
  justify-content: space-between;
}
input {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 15px 50px;
  background: #DEE4E7;
  font-size: 15pt;
  font-family: serif;
}

.dark-mode {
  background: #37474F;
  color: #fff;
}
.darkmode {
  background:#000;
  color: #fff;
}
#router {
  background: #DEE4E7;
  color: #000;
  display: inline-block;
  position: absolute;
  top: 20px;
  right: 20px;
  a { 
    color: #000;
  font-size: 15pt;
  font-family: serif;
  text-decoration: none;
  display: inline-block;
  padding: 15px 25px;
  border: 1px solid #000;
  }
  a:hover {
    cursor: pointer;
  }
}
.newstyle {
  background: #000;
}
</style>