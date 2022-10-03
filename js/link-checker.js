$(document).ready(function(){
    checkLink();
});
$(document).on('pjax:complete', function () {
    checkLink();   
});
async function checkLink(){
    console.log("Running...")
    let link = document.getElementsByTagName('a');
    //console.log(link)
    for(var i=0;i<link.length;i++){
        if(!await checkLocalSite(link[i].href)){
            link[i].href = "https://go.yxlr.tk/#"+window.btoa(link[i].href)
            console.log("edit.")
        }
    }
}
async function checkLocalSite(url){
    try{
        console.log("check:",url)
        let domain = url.split("/")[2];
        if(domain.endsWith("yxlr.tk")||domain.endsWith("127.0.0.1:4000"))return true;
        return false;
    }catch(err){
    return true;
    }
}