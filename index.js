$('h1').css('color', 'red')

console.log($('h1').css('font-size'))

// $('button')

$('h2').addClass('big-title margin-50')

$('h2').hasClass('margin-50'); //true

$('h3').text('bye')

$('button').text("don't click me")

$('h2.sait').html('<em>hey sait</em>')

//get attr
console.log($('img').attr("src"))

//set attr
$('a').attr('href', 'https://www.yahoo.com')

console.log($('h2').attr('class'))

$('h1').click(() => {
  $('h1').css('color', 'purple')
})

//js
// for (let i = 0; i<5; i++) {
//   document.querySelectorAll('button')[i].addEventListener('click', () => {
//     document.querySelector('h1').style.color = 'purple'
//   })
// }

//query
$('button').click(() => {
  $('h1').css('color', 'yellow')
})

$('input').keypress((e) => {
  console.log(e.key)
})

$(document).keypress((e) => {
  $('h1').text(e.key)
})

$('h1').on('mouseover', () => {
  $('h1').css('color', 'green')
})

//adding and removing elements with jquery
$('h1').before("<button>new</button>")
$('h1').after("<button>new</button>")
$('h1').append("<button>new</button>")
$('h1').prepend("<button>new</button>")

// $('button').remove()

//animation with jquery
$('button').on('click', () => {
  $('h1').toggle()
  //hide() or show(), fadeIn() or fadeOut(), fadeToggle(), slideDown() or slideUp() or slideToggle()
})

$('button').on('click', () => {
  $('h2').slideUp().slideDown().animate({
    opacity: 0.5
  })
})

