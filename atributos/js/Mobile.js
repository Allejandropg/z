/**
* Classe controle mobile
*/
function MobileClass(){
	
	/**
	* Define se o mobile está aberto ou fechado
	*/
	this.active = -1;
	
	/**
	* Atribui os eventos necessários para funcionamento do mobile
	*/
	this.start = function(){
		$('.nav-burger').click(function(){
			if(Mobile.active===-1){
				Mobile.config();
			}if(Mobile.active===false){
				Mobile.openNav();
			}else{
				Mobile.closeNav();
			}
		});
	}
	
	/**
	* Configura o menu adequadamente
	*/
	this.config = function(){
		$('.menu').addClass('is-hidden');
		$('.menu').addClass('transition-ease-slow');
		$('.menu-group').append($('.menu'));
		setTimeout(
			function(){
				Mobile.openNav();
			},100
		);
		
	}
	
	/**
	* Abre o menu mobile
	*/
	this.openNav = function(){
		Mobile.active = true;
		$('.menu').removeClass('is-hidden');
		$('.menu').addClass('is-active');
		$('.nav-burger').removeClass('is-hidden');
		$('.nav-burger').addClass('is-active');
	}
	
	/**
	* Fecha o menu mobile
	*/
	this.closeNav = function(){
		Mobile.active = false;
		$('.menu').removeClass('is-active');
		$('.menu').addClass('is-hidden');
		$('.nav-burger').removeClass('is-active');
		$('.nav-burger').addClass('is-hidden');
	}
	
}

Mobile = new MobileClass();