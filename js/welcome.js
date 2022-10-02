function welcome(){
    let welcome_text = '欢迎光顾我的博客~'
    if(document.referrer!==''){
        let referrer=document.referrer.split("/")[2];
        welcome_text="欢迎你，来自"+referrer.toUpperCase()+"的用户！";
        if(referrer.toUpperCase()==document.domain.toUpperCase())return;
    }
    swal({
        title: " 欢迎！",
        text: welcome_text+'\n打开页面下方音乐以获得更佳体验！',
        imageUrl: "https://pic.rmb.bdstatic.com/bjh/b3a460ecab97434df969e0aaef39dc53.jpeg",
        timer: 1000,
        showConfirmButton: false
    });
}
$(document).ready(()=>{
    welcome()
})