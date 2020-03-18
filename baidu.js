var $name = $('#name'),
    $number = $('#number'),
    $psd = $('#psd'),
    $ypsd = $('#ypsd'),
    $yan= $('#yan');
var $nerror=$("#n-error"),
    $merror=$("#m-error"),
    $perror=$("#p-error"),
    $yerror=$("#y-error"),
    $sub=$("#sub")
/*点击获取验证码*/
$yan.click(function () {
    let count =3;
    const countDown = setInterval(() => {
      if (count === 0) {
       $yan.text('获取验证码')
       $yerror.html('请求超时，请稍后再试');
       $yan.attr('disabled',true);
       clearInterval(countDown);
       $yan.css({
           cursor:"not-allowed"
       });
      } 
      else {
        $yan.attr('disabled',true);
        $yan.text(count+"s");
      }
      count--;
     }, 1000);
});
//用户名 检验
function testName(){
    if($name.val()===""){
        $nerror.html('用户名不能为空！');
        return false;
    }
    if(!/^(?!\d+$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test($name.val())){
        $nerror.html('用户名仅支持中英文、数字和下划线,且不能为纯数字,不包含空格!');
        return false;
    }
    return true;
}
// 手机号码  ^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$  检验
function testNum(){
    if($number.val()===""){
        $merror.html('手机号不能为空！');
        return false;
    }
    if(!/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test($number.val())){
        $merror.html('手机号码格式不正确');
        return false;
    }
    return true;
}
//密码  ^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{8,14}$
function testPsd(){
    if($psd.val()===""){
        $perror.html('密码不能为空！');
        return false;
    }
    if(!/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{8,14}$/.test($psd.val())){
        $perror.html("密码设置不符合要求");
        return false;
    }
    return true;
}
//验证码 
function testYsd(){
    if($ypsd.val()===""){
        $yerror.html('验证码不能为空！');
        return false;
    }
    return true;
}

$name.focusout(function(){
    if(!testName()){
        $name.css("borderColor","red")
    }
    else{
        $name.css("borderColor","")
        $nerror.html('')
    }
});
$number.focusout(function(){
    if(!testNum()){
        $number.css("borderColor","red")
    }
    else{
        $number.css("borderColor","")
        $merror.html('')
    }
});
$psd.focusout(function(){
    if(!testPsd()){
        $psd.css("borderColor","red")
    }
    else{
        $psd.css("borderColor","")
        $perror.html('')
    }
});
$ypsd.focusout(function(){
    if(!testYsd()){
        $ypsd.css("borderColor","red")
    }
    else{
        $ypsd.css("borderColor","")
        $yerror.html('')
    }
});

$sub.click(function(){
    if(!testName()  ||!testNum()|| !testPsd()||!testYsd()) return;
   
  });
