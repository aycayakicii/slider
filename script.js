//Dizi içinde elemanları olan obje oluşturalım.
var moons = [
  {
    color: 'white',
    image : 'images/indir.jpg',
    link : 'https://i2.milimaj.com/i/milliyet/75/0x410/5c8e0ed607291c1d7405507c.jpg'
  },
  {
    color: 'red',
    image : 'images/indir2.jpg',
    link : 'https://i4.hurimg.com/i/hurriyet/75/750x422/5c6bf6450f254427e00f20bf.jpg'
  },
  {
    color: 'yellow',
    image : 'images/indir3.jpg',
    link : 'https://bilimvegelecek.com.tr/wp-content/uploads/2019/07/1-23.jpg'
  },
  {
    color: 'blue',
    image : 'images/indir4.jpg',
    link : 'https://hthayat.haberturk.com/im/2019/08/05/ver1565178436/1071865_620x360.jpg'
  },
  {
    color: 'pink',
    image : 'images/indir5.jpg',
    link : 'https://i.pstimaj.com/img/75/740x0/5e9038acae298bf16cc42886.jpg'
  }
];

var index = 0;
var slaytCount = moons.length;
var settings ={ //tüm özellikleri içerecek olan obje tanımladık.
  duration : '1000',
  random : false
};
var interval;
init(settings);
document.querySelector('.fa-arrow-left').addEventListener('click', function(){
  index--;
  showSlide(index);
  console.log(index);
});

document.querySelector('.fa-arrow-right').addEventListener('click', function(){
  index++;
  showSlide(index);
  console.log(index);
});
document.querySelectorAll('.arrow').forEach(function(item) {
  item.addEventListener('mouseenter', function(){
    clearInterval(interval);
  })
});
document.querySelectorAll('.arrow').forEach(function(item) {
  item.addEventListener('mouseleave', function(){
    init(settings);
  })
});
function init(settings){
  var prev;
  interval=setInterval(function(){
    if (settings.random) {   //Burasının çalışmasını istiyorsak yukarıda random seçeneğine true yapmamız lazım.
      //Random index
      do {    //Üst üste aynı sayıyı random vermesin diye.
        index = Math.floor(Math.random()*slaytCount);
      } while (index==prev);
      prev=index;

    }else {
      //Artan index
      if (slaytCount == index+1) {
        index= -1;
      }
      showSlide(index);
      index++;
    //  console.log(index);
    }
    console.log(index);
    showSlide(index);
  },settings.duration)
}

function showSlide(i){
  index = i;
  if (i<0) {
    index= slaytCount-1;
  }
  if (i>=slaytCount) {
    index = 0;
  }
  document.querySelector('.card-title').textContent = moons[index].color;
  document.querySelector('.card-img-top').setAttribute('src', moons[index].image);
  document.querySelector('.card-link').setAttribute('href', moons[index].link);
}
