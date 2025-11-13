//Find all javascript files
function findAllJavascriptFiles(folder, callback) {
    let jsFiles = [];

    //Счетчик ожидающих операций
    let pendingOperations = 0;

    // Функция для обработки папки
    function processFolder(currentFolder) {
        pendingOperations++;

        currentFolder.size((folderSize) => {
            if (folderSize === 0) {
                pendingOperations--;
                if (pendingOperations === 0) {
                    callback(jsFiles);
                }
                return;
            }

            //Обрабатываем каждый элемент в папке
            for (let i = 0; i < folderSize; i++) {
                pendingOperations++;

                currentFolder.read(i, (item) => {
                    if (typeof item === 'string') {
                        //Если найден файл, то проверяем расширение .js
                        if (item.endsWith('.js')) {
                            jsFiles.push(item);
                        }
                    } else {
                        //Если найдена вложенная папка, то рекурсивно обрабатываем
                        processFolder(item);
                    }

                    pendingOperations--;

                    if (pendingOperations === 0) {
                        callback(jsFiles);
                    }
                });
            }

            pendingOperations--;
            if (pendingOperations === 0) {
                callback(jsFiles);
            }
        });
    }

    processFolder(folder);
}
