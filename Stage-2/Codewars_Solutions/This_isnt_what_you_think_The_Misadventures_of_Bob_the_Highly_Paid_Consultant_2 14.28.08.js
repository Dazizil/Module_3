ShoppingCart.prototype.addButtonClicked = function(item) {
    this.checkQuantityAsync(item, this.addButtonClicked1.bind(this));
};

ShoppingCart.prototype.addButtonClicked1 = function({item, quantity}) {
    if (quantity > 0) {
        this.addToCartAsync(item, 1, (result) => this.addButtonClicked2(result));
    }
};

ShoppingCart.prototype.addButtonClicked2 = function(success) {
    let self = this;
    if (success) {
        this.updateCartDisplayAsync(function(result) {
            self.addButtonClicked3(result);
        });
    }
};

ShoppingCart.prototype.addButtonClicked3 = function(success) {
    this.showMessage(`${success? "Successfully" : "Unsuccessfully"} added item to cart`);
};
