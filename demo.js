;$(function() {
	// index搜索匹配的元素，并返回相应元素的索引值，从0开始计数。
	// 省略参数，那么返回值就是这个jQuery对象集合中第一个元素相对于其同辈元素的位置。
    // 如果参数是一个选择器，那么返回值就是原先元素相对于选择器匹配元素中的位置。如果找不到匹配的元素，则返回-1。 具体请参考示例。 
    // 如果参数是一组DOM元素或者jQuery对象，那么返回值就是传递的元素相对于原先集合的位置。


    // 省略参数： 返回第一个li元素在所有同辈元素中的索引
 //    console.log($("li").index());// 0

 //    // 参数为选择器字符串： 返回$li中的第一个元素(即n5)在选择器"#n4"所匹配的元素中的索引
	// // 选择器"#n4"匹配的元素只有n4一个，没有n5，因此返回-1
	// console.log($("li").index("#n4")); // -1
	// console.log($("#n7").index("ul")); // -1
	// console.log($("#n7").index("span")); // -1
	// console.log($("#n7").index("li")); // 2

 //    // 参数为DOM元素或jquery对象： 返回n7在$li中的索引
    // console.log($("li").index($("#n7").get(0))); // 2
	// console.log($("li").index($("#n7"))); // 2
});