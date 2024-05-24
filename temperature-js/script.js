var userTemp = prompt("Enter Today\'s Temperature ");




if (userTemp>=1 && userTemp<=4) {
    document.write('<div class="card temp-card mx-auto mt-5" style="width: 22rem; height: 30rem;">'+
    '<div class="card-body">'+
    '<h2>'+tempReport+
    '<img src="https://i.pinimg.com/originals/dc/40/ee/dc40eec571ff5fe4770ac2517bb93e60.gif" width:"20%">'+
    '</h2>'+
    '<h4>'+
    'It\'s freeze Temperature'+
    '</h4>'+
    ' </div>'+
    '</div>')
}

else if (userTemp>=5 && userTemp<=10) {
    document.write('<div class="card temp-card mx-auto mt-5" style="width: 22rem; height: 30rem;">'+
    '<div class="card-body">'+
    '<h2>'+tempReport+
    '<img src="https://media.giphy.com/media/lh0xkPINGHhS0/source.gif" width:"20%">'+
    '</h2>'+
    '<h4>'+
    'It\'s very cold Temperature'+
    '</h4>'+
    ' </div>'+
    '</div>')
}
else if (userTemp>=11 && userTemp<=15) {
    document.write('<div class="card temp-card mx-auto mt-5" style="width: 22rem; height: 30rem;">'+
    '<div class="card-body">'+
    '<h2>'+tempReport+
    '<img src="https://media.giphy.com/media/3o6ZsXVpxRhXN8WHqU/giphy.gif" width:"20%">'+
    '</h2>'+
    '<h4>'+
    'It\'s cold Temperature'+
    '</h4>'+
    ' </div>'+
    '</div>')
}

else if (userTemp>=16 && userTemp<=22) {
    document.write('<div class="card temp-card mx-auto mt-5" style="width: 22rem; height: 30rem;">'+
    '<div class="card-body">'+
    '<h2>'+tempReport+
    '<img src="https://media2.giphy.com/media/Xejz3ZWoOpnRktb6Ok/giphy.gif?cid=790b76116378508340a5e5b6004b00bcb94d684f995cefe5&rid=giphy.gif&ct=s" width:"20%">'+
    '</h2>'+
    '<h4>'+
    'It\'s mild Temperature'+
    '</h4>'+
    ' </div>'+
    '</div>')
}

else if (userTemp>=23 && userTemp<=26) {
    document.write('<div class="card temp-card mx-auto mt-5" style="width: 22rem; height: 30rem;">'+
    '<div class="card-body">'+
    '<h2>'+tempReport+
    '<img src="https://i.pinimg.com/originals/12/25/d9/1225d9f092cbd4c65a8826b97418d8b1.gif" width:"20%">'+
    '</h2>'+
    '<h4>'+
    'It\'s hot Temperature'+
    '</h4>'+
    ' </div>'+
    '</div>')
}
else if (userTemp>=27 && userTemp<=32) {
    document.write('<div class="card temp-card mx-auto mt-5" style="width: 22rem; height: 30rem;">'+
    '<div class="card-body">'+
    '<h2>'+tempReport+
    '<img src="https://media3.giphy.com/media/vwjAf1EsSG7k1Jbtkx/source.gif" width:"20%">'+
    '</h2>'+
    '<h4>'+
    'It\'s very hot Temperature'+
    '</h4>'+
    ' </div>'+
    '</div>')
}
else if (userTemp>=33 && userTemp<=39) {
    document.write('<div class="card temp-card mx-auto mt-5" style="width: 22rem; height: 30rem;">'+
    '<div class="card-body">'+
    '<h2>'+tempReport+
    '<img src="https://www.bing.com/th/id/OGC.0ecf335949013cbaada22c2797621eed?pid=1.7&rurl=https%3a%2f%2fmedia2.giphy.com%2fmedia%2fIfy8LioiUw91qBxyu1%2fgiphy.gif&ehk=4kGe6etC%2fIpiGFPYQT0SzvJx9sR7uqb0NZjpoJn2b8w%3d" width:"20%">'+
    '</h2>'+
    '<h4>'+
    'It\'s heat wave'+
    '</h4>'+
    ' </div>'+
    '</div>')
}
else if (userTemp>=38 && userTemp<=55) {
    document.write('<div class="card temp-card mx-auto mt-5" style="width: 22rem; height: 30rem;">'+
    '<div class="card-body">'+
    '<h2>'+tempReport+
    '<img src="https://3.bp.blogspot.com/-NhYKxBhF8uI/VuNBYbOhkDI/AAAAAAAA4EA/64gc1ITFDFU7TGkQh6n62bwQPEc66YSzw/w1200-h630-p-nu/laughing%2Bdonald%2Bduck.gif" width:"20%">'+
    '</h2>'+
    '<h4>'+
    'It\'s extremley hot Temperature you could be die'+
    '</h4>'+
    ' </div>'+
    '</div>')
}

else {
    document.write('<div class="card temp-card mx-auto mt-5" style="width: 22rem; height: 30rem;">'+
    '<div class="card-body">'+
    '<h2>'+tempReport+
    '<img src="https://th.bing.com/th/id/R.6e53df2880974d2efad4170790ca4f61?rik=wXCUtseIHnUCDA&pid=ImgRaw&r=0" width:"20%">'+
    '</h2>'+
    '<h4>'+
    'You give invalid temperature'+
    '</h4>'+
    ' </div>'+
    '</div>')
};

