//用require的时候，如果你想default export 你需要通过.default手动获取它，
if(document.querySelectorAll('a').length){
	/*webpack提供了代码分片机制，使我们能够将代码拆分后进行异步加载
	webpack对代码拆分的定位仅仅是为了解决文件过大、无法并发加载、加载时间过长等问题

	分割点表示代码在此处被分割成两个独立的文件，具体的方式有两种
	使用require.ensure  require.ensure(['module-a','module-b'],function(require){
	var a = require('module-a');
	})
	使用AMD的动态require：require(['module-a','module-b'],function(a,b){})*/
	require.ensure([],()=>{
		const Button = require('./components/button').default;
		const button = new Button('baidu.com');
		button.render('a');
	},'button');
}

// If we have a title, render the Header component on it
if (document.querySelectorAll('h1').length) {
	    require.ensure([], () => {
	    const Header = require('./Components/Header').default;
	    
	    new Header().render('h1');
    });
}