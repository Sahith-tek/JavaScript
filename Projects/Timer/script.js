  
  function updateClock(){
    const date = new Date();
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');

    const currentTime = date.getHours() % 12 || 12 ;
    const currentMinutes = date.getMinutes().toString().padStart(2, '0');
    const currentSeconds = date.getSeconds().toString().padStart(2, '0');
    const currentMilliseconds = date.getMilliseconds().toString().padStart(3,'0');
    const amPm = date.getHours() >=12 ? 'PM' : 'AM';

    const options ={
        weekday:'long',
        year:'numeric',
        month:'long',
        day:'numeric'
    }

    const currentDate = date.toLocaleDateString("en-GB", options);

    timeElement.textContent = `${currentTime} : ${currentMinutes} :${currentSeconds} : ${currentMilliseconds} ${amPm}`;
    dateElement.textContent = currentDate ;

  }

  setInterval(updateClock , 100); 
 

  