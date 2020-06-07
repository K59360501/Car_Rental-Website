const assert = require('assert'); 

const item = require('./item');
const login = require('./login');
const login_admin = require('./login_admin');

//test login admin
describe('login_admin test', function () {
  it('should let you log in', function () {
    browser.url('~/login_admin.aspx');
    browser.setValue('input[ID="txtUser"]', 'admin');
    browser.setValue('input[ID="txtPass"]', '1234');
    browser.click('OnClick="btnLogin_Click1"');

    const pageUrl = browser.getUrl();
    assert.notEqual(pageUrl, 'http://projectcomsys.azurewebsites.net/');
    assert.equal(pageUrl, 'http://projectcomsys.azurewebsites.net/admin.aspx');
  });
});
//test login user
describe('login test', function () {
  it('should let you log in', function () {
    browser.url('~/login.aspx');
    browser.setValue('input[ID="txtUser"]', 'k');
    browser.setValue('input[ID="txtPass"]', '00000');
    browser.click('OnClick="Log_Click1"');

    const pageUrl = browser.getUrl();
    assert.notEqual(pageUrl, 'http://projectcomsys.azurewebsites.net/');
    assert.equal(pageUrl, 'http://projectcomsys.azurewebsites.net/item.aspx');
  });
});
//test รวมราคา
describe('calcost  Tests', function() {
	it('returns 2*2000=4000', function(done) {
		assert.equal(item.mul(2, 2000), 4000);
		done();
	});
});
//test เพิ่มสินค้า
    var obj = insert.insert(item);
    item = obj.item;
    assert.equal(item);
	
	
	
	
	
	
	
	