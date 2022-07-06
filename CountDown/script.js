const christmas='24 Dec 2022';

function countdown(){
    const christmasDate=new Date(christmas);
    const currentDate=new Date();
    const seconds=(christmasDate-currentDate)/1000;
    const days= Math.floor(seconds/3600/24); 
    const hours=Math.floor(seconds/3600)%24;
    const minutes=Math.floor(seconds/3600)%24;
    console.log(minutes)
}
///initial call
setInterval(countdown,1000)
