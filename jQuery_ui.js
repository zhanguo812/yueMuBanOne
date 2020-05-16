/***********echarts显示插件的函数**********/
jQuery.fn.my_index = function (i, id) {
  let html = $(`
  <div>
    <div>
      <span></span>
      <button style="margin-right:10px;background-color:rgb(1, 250, 97);color:#fff;";class="button">x</button>
    </div>
    <div id=${id} style="width:100%;height:92%"></div> 
  </div>
  `)
  // $('body').css("display", "flex").css("justify-content", "center").css("align-items", "center").css("margin", "0");
  this.css("width", "1150px")
    .append(html).children()
    .addClass("echarts")
    .children(":first-child")
    .css("display", "flex").css("justify-content", "space-between").css("align-items", "center")
    .addClass("header")
    .children(":first-child")
    .addClass("title")
    .html(i);
  $("#" + id).prev().children(":last-child").on("click", () => {
    this.popup({
      //width:"500", //设置弹出层宽度，如果不填写为300
      //height:"300", //设置弹出层高度，如果不填写为150
      title: "删除", //设置标题
      content: "是否删除当前页面", //设置内容
      cancelBoolse: 1, //1为确定，取消按钮都有，2为只有确定按钮，3为只有取消按钮
      cancelBtn: "取消", //设置关闭文字
      submitBtn: "确定", //设置确定文字
      submitCallBack: submitCallBack, //设置确定的回调函数
      closeCallBack: closeCallBack //设置关闭的回调函数
    });
    /* 确定回调函数*/
    function submitCallBack() {
      $("#" + id).parent().remove();
      // alert("这是确认事件处理");
      // submitCallBack();
    }
    /* 关闭回调函数*/
    function closeCallBack() {
      // alert("这是取消事件处理");
      // closeCallBack();
    }
  })

}
/***************************弹出层************************************/
jQuery.fn.popup = function (options) {
  let opt = options;
  popHtml();
  popStyle();
  //解决点击延迟与按钮生成之间的冲突 
  if (document.getElementById("cancelBtn")) {
    setTimeout(closeCallBack(), 300);
  };
  if (document.getElementById("submitBtn")) {
    setTimeout(submitCallBack(), 300);
  };
  function popHtml() {
    var str = "";
    str += "<div id=\"popUp\"  style=\"opacity:0.5;\" class=\"popUp\"><h2>" + opt.title + "</h2>";
    str += "<div class=\"popUp_cont\">" + opt.content + "</div>";
    if (opt.cancelBoolse == 1) {
      str += "<div class=\"popUp_btn\"><span id=\"submitBtn\" class=\"spanBlue\">" + opt.submitBtn + "</span><span id=\"cancelBtn\">" + opt.cancelBtn + "</span></div></div>";
    } else if (opt.cancelBoolse == 2) {
      str += "<div class=\"popUp_btn\"><span id=\"submitBtn\" class=\"spanBlue\">" + opt.submitBtn + "</span></div></div>";
    } else if (opt.cancelBoolse == 3) {
      str += "<div class=\"popUp_btn\"><span id=\"cancelBtn\">" + opt.cancelBtn + "</span></div></div>";
    }
    str += "<div id=\"popMask\" class=\"popMask\"></div>";
    $("body").append(str)
  }
  //设置元素的宽度和高度
  function popStyle() {
    var popUp = document.getElementById("popUp");
    var w = (opt.width != "" || opt.width != undefined) ? opt.width + "px" : 300 + "px";
    var Wleft = (opt.width != "" || opt.width != undefined) ? "-" + opt.width / 2 + "px" : "-" + 300 / 2 + "px";
    var h = (opt.height != "" || opt.height != undefined) ? opt.height + "px" : 130 + "px";
    var hTop = (opt.height != "" || opt.height != undefined) ? "-" + opt.height / 2 + "px" : "-" + 130 / 2 + "px";
    popUp.style.cssText = "width:" + w + ";height:" + h + ";margin-left:" + Wleft + ";margin-top:" + hTop + "";
    animatIn();
  }
  //设置弹出层动画
  function animatIn() {
    var andom = document.getElementById("popUp");
    var thisOpacity = 0;
    var otime = setInterval(function () {
      thisOpacity += 0.1;
      andom.style.opacity = thisOpacity;
      andom.style.filter = "alpha(opacity=" + thisOpacity * 100 + ")";
      if (andom.style.opacity >= 1) {
        clearInterval(otime);
      }
    }, 20);
  }
  //添加关闭回调函数
  function closeCallBack() {
    var cancelBtn = document.getElementById("cancelBtn");
    cancelBtn.addEventListener("click", closeDiv);
    cancelBtn.addEventListener("click", opt.closeCallBack);

  }
  //删除弹出层和遮罩层
  function closeDiv() {
    var popUp = document.getElementById("popUp");
    var popMask = document.getElementById("popMask");
    document.body.removeChild(popUp);
    document.body.removeChild(popMask);
  }
  //添加确定返回函数
  function submitCallBack() {
    var submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("click", closeDiv);
    submitBtn.addEventListener("click", opt.submitCallBack);
  }
};
