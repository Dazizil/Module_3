function nouveau(Constructor, ...args) {
    let instance = Object.create(Constructor.prototype);
    let constructorReturn = Constructor.apply(instance, args);

    if ((typeof constructorReturn === 'object' && constructorReturn !== null) || typeof constructorReturn === 'function') {
        return constructorReturn;
    } else {
        return instance;
    }
}
