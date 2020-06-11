<template>
  <div class="about">
    <nav>
      <ul>
        <li><a href="Home.vue">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <ul id="flex">

      <li v-for="item in obj" v-bind:key="item">
        <div class="card">
        <img :src="item.image" alt="" srcset="">
        <h2>{{item.title}}</h2>
        <p>{{item.description}}</p>
        </div>
      </li>

    </ul>
    <input type="button" value="Dark Mode" v-on:click='changeToDark'>

  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: [
        {
          image: 'https://lh3.googleusercontent.com/proxy/0hfxe3CzlmNcp3WcDpZJ3SQ5Mcw1f0QDiYUTyAXHyuCIAKiL6HF4M0uq20CkB-8nHLt9MHr0iJwiwH1uu0RWX2TTa7JfUT3qPr2fMJHZcw',
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
    changeToDark() {
      document.querySelectorAll(".card").forEach((card) => {
        card.classList.toggle('dark-mode');
      });
        document.querySelector("input").classList.toggle('dark-mode');
        document.querySelectorAll("nav li").forEach((item) => {
          item.classList.toggle('dark-mode');
        })
        document.querySelectorAll("a").forEach((link) => {
          link.classList.toggle('dark-mode');
        })

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
</style>