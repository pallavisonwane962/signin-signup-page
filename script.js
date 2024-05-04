sign_in_btn=document.querySelector('#sign-in-button');                                                                                                 
sign_up_btn=document.querySelector('#sign-up-button'); 
                                                                       
container=document.querySelector('.container');
sign_up_btn.addEventListener('click',()=>{
	container.classList.add('sign-up-mode');
	image.classList.remove('hidden');
	
})                                                                                                                                                     
 sign_in_btn.addEventListener('click',()=>{
	 container.classList.remove('sign-up-mode');
	 image.classList.add('hidden');
 })   
 
 
                                                                                                                                                     