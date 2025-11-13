//Promises Made and Broken: The Misadventures of Bob the Highly Paid Consultant
async function submitOrder(user) {
    try {
        let shoppingCart, zipCode, shippingRate, orderSuccessful;

        // Get the current user's shopping cart
        // OrderAPI.getShoppingCartAsync(user).then(function(cart) {
        //     shoppingCart = cart;
        // });
        shoppingCart = await OrderAPI.getShoppingCartAsync(user);

        // Also look up the ZIP code from their profile
        // CustomerAPI.getProfileAsync(user).then(function(profile) {
        //     zipCode = profile.zipCode;
        // });
        profile = await CustomerAPI.getProfileAsync(user);
        zipCode = profile.zipCode;

        // Calculate the shipping fees
        shippingRate = calculateShipping(shoppingCart, zipCode);

        // Submit the order
        // OrderAPI.placeOrderAsync(shoppingCart, shippingRate).then(function(success) {
        //     orderSuccessful = success;
        // });
        orderSuccessful = await OrderAPI.placeOrderAsync(shoppingCart, shippingRate);

        console.log(`Your order ${orderSuccessful ? "was" : "was NOT"} placed successfully`);
    } catch (error) {
        throw error;
    }
}
