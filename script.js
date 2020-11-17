let image = document.querySelector('.img'),
    sea = document.querySelector('.sea'),
    cloud1 = document.querySelector('.cloud1'),
    cloud2 = document.querySelector('.cloud2');
    sun = document.querySelector('.sun');

document.addEventListener('keydown', start);
document.addEventListener('keyup', stop);

function start(e) {
	 if(e.key === 'ArrowRight') {
		  image.classList.add('run');
		  sea.classList.add('run');
		  cloud1.classList.add('run');
		  cloud2.classList.add('run');
		  sun.classList.add('run');
 	}
}

function stop(e) {
	if(e.key === 'ArrowLeft') {
  		image.classList.remove('run');
  		sea.classList.remove('run');
  		cloud1.classList.remove('run');
 	 	cloud2.classList.remove('run');
  		sun.classList.remove('run');
	}
}


