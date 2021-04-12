$(document).ready(function () {
  // menu mobile
  $('a.dark.nav-link').click(function(e) {
    e.preventDefault();
    console.log('mobile')
    

    $('.menu__mobile').toggleClass('ativamenu')
    $(this).toggleClass('ativeIcon')

    
  })


  var settings = {
    "url": "../api.php",
    data: {
      format: 'json'
    },
  }




  $.ajax(settings).done(function (response) {
    const bookBest = $('.books__container');

    let obj = JSON.parse(response)

    
    for (let i = 0; i < obj.length + 1; i++) {
      let divBookSlide = `
        <div class="book">
          
              <img src=${obj[i].items[0].images[0].imageUrl} alt=${obj[i].productName}>
              <h2>${obj[i].productName}</h2>
              <p>${obj[i].Autor}</p>
          
        </div>
      `;

      bookBest.append(divBookSlide)
    }
  });



});

