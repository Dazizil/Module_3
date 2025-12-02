//Fun with ES6 Classes #6 - Fake Files (Basic)
class File {
    constructor(fullName, contents) {
        this._fullName = fullName;
        this._contents = contents || "";

        //Парсим имя файла и расширение
        const lastDotIndex = fullName.lastIndexOf('.');
        this._filename = fullName.substring(0, lastDotIndex);
        this._extension = fullName.substring(lastDotIndex + 1);

        // Для методов gets() и getc()
        this._currentLine = 0;
        this._currentChar = 0;
        this._lines = this._contents ? this._contents.split('\n') : [];
    }

    // Read-only свойства
    get fullName() {
        return this._fullName;
    }

    get filename() {
        return this._filename;
    }

    get extension() {
        return this._extension;
    }

    // Методы
    getContents() {
        return this._contents;
    }

    write(str) {
        if (this._contents === "") {
            this._contents = str;
        } else {
            this._contents += "\n" + str;
        }
        this._lines = this._contents.split('\n');
    }

    gets() {
        if (this._currentLine >= this._lines.length) {
            return undefined;
        }
        return this._lines[this._currentLine++];
    }

    getc() {
        if (this._currentChar >= this._contents.length) {
            return undefined;
        }
        return this._contents[this._currentChar++];
    }
}
