const	nextBtn	= document.querySecector('.next-btn');
const	preBtn	= document.querySecector('.prew-btn');
const	slides	= document.querySecector('.slide');
const numberOfSides = slides.length;
let slideNumber=0;

nextBtn.onClick =()=>
{
	slides.forEach((slide)=>
	{
		slide.classList.remove('active');
	})
	
	slideNumber++;

	if (slideNumber >(numberOfSides-1)) {

		slideNumber=0;
	}

	slides [slideNumber].classList.add('active');
}

preBtn.onClick =()=>
{
	slides.forEach((slide)=>
	{
		slide.classList.remove('active');
	})
	
	slideNumber--;

	if (slideNumber <0) {

		slideNumber=numberOfSides-1;
	}

	slides [slideNumber].classList.add('active');
}