'use strict';
////引入 测试实现代码
var collect_all_even = require('../../main/collectionOperator/collect_all_even.js');
// describe块称为"测试套件"（test suite），表示一组相关的测试。它是一个函数，第一个参数是测试套件的名称（"加法函数的测试"），第二个参数是一个实际执行的函数。
describe('collect_all_even', function () {

  var collection_a = [1, 2, 3, 4, 5];
  var collection_b = [2, 4];

  it('选出给定区间中所有的偶数', function() {
//it块称为"测试用例"（test case），表示一个单独的测试，是测试的最小单位。它也是一个函数，第一个参数是测试用例的名称（"1 加 1 应该等于 2"），第二个参数是一个实际执行的函数。

    var result = collect_all_even(collection_a);
    
//expect 断言，测试 result 和 collection_b 结果是否一致，从而判断该测试用例是否通过

    expect(result).toEqual(collection_b);
  });
});

