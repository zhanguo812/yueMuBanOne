# yueMuBanOne
jQuery插件
my_index（）  
参数1：板块的标题
参数2：要显示图表的id名；
投射（）投射层使用
$（this）.popup（{
        // width：“ 500”，//设置展开层宽度，如果不填充为300
        //height:"300", //设置弹出层高度，如果不填写为150
        title: "可以修改的标题", //设置标题
        content: "可以修改的内容提示", //设置内容
        cancelBoolse: 1, //1为确定，取消按钮都有，2为只有确定按钮，3为只有取消按钮
        cancelBtn: "取消", //设置关闭文字
        submitBtn: "确定", //设置确定文字
        submitCallBack: submitCallBack, //设置确定的回调函数
        closeCallBack: closeCallBack //设置关闭的回调函数
      });
      /* 确定回调函数*/
      function submitCallBack() {
        alert("这是确认事件处理");
      }
      /* 关闭回调函数*/
      function closeCallBack() {
        alert("这是取消事件处理");
      }


