$(function(){var o=$("#name"),r=$("#number"),t=$("#psd"),s=$("#ypsd"),l=$("#yan"),e=$("#n-error"),c=$("#m-error"),n=$("#p-error"),u=$("#y-error"),f=$("#sub");function d(){if(""!==o.val()){if(/^(?!\d+$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(o.val()))return 1;e.html("用户名仅支持中英文、数字和下划线,且不能为纯数字,不包含空格!")}else e.html("用户名不能为空！")}function i(){if(""!==r.val()){if(/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(r.val()))return 1;c.html("手机号码格式不正确")}else c.html("手机号不能为空！")}function a(){if(""!==t.val()){if(/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{8,14}$/.test(t.val()))return 1;n.html("密码设置不符合要求")}else n.html("密码不能为空！")}function m(){if(""!==s.val())return 1;u.html("验证码不能为空！")}l.click(function(){var o=20,r=setInterval(function(){0==o?(clearInterval(r),l.text("获取验证码"),u.html("请求超时，请稍后再试"),l.attr("disabled",!0),l.css("cursor","not-allowed")):(l.attr("disabled",!0),l.text(o+"s"),o--)},1e3)}),o.focus(function(){o.css("borderColor","#2E58FF"),e.html("")}),r.focus(function(){r.css("borderColor","#2E58FF"),c.html("")}),t.focus(function(){t.css("borderColor","#2E58FF"),n.html("")}),s.focus(function(){s.css("borderColor","#2E58FF"),u.html("")}),o.focusout(function(){d()?(o.css("borderColor",""),e.html("")):o.css("borderColor","red")}),r.focusout(function(){i()?(r.css("borderColor",""),c.html("")):r.css("borderColor","red")}),t.focusout(function(){a()?(t.css("borderColor",""),n.html("")):t.css("borderColor","red")}),s.focusout(function(){m()?(s.css("borderColor",""),u.html("")):s.css("borderColor","red")}),f.click(function(){d()&&i()&&a()&&m()})});