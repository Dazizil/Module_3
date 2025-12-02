//PaginationHelper
class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }

    itemCount() {
        return this.collection.length;
    }

    pageCount() {
        return Math.ceil(this.collection.length / this.itemsPerPage);
    }

    pageItemCount(pageIndex) {
        if (pageIndex < 0 || pageIndex >= this.pageCount()) {
            return -1;
        }

        //Проверка количества элементов на последней странице
        //Если мы можем нацело поделить количество элементов в коллекции на число элементов на каждой странице,
        //это значит, что на всех страницах будут одинаковое количество элементов,
        //иначе на последней странице будет количество элементов, равное остатку от деления количества элементов в коллекции на число элементов на каждой странице
        if (pageIndex === this.pageCount() - 1) {
            return this.collection.length % this.itemsPerPage || this.itemsPerPage;
        }

        return this.itemsPerPage
    }

    pageIndex(itemIndex) {
        if (itemIndex < 0 || itemIndex >= this.collection.length) {
            return -1;
        }

        return Math.floor(itemIndex / this.itemsPerPage);
    }
}
