import path from 'node:path';
import fs from 'node:fs/promises';

const message = 'Hello World!';
console.log(message);

const pathToWorkDir = path.join(process.cwd()); // отримуємо шлях до кореневої директорії викликом метода process.cwd()
const somePath = path.join(pathToWorkDir, 'some_folder', 'some_file.txt');
console.log(somePath);

(async () => {
  const data = 'Це дані, які ми записуємо у файл.';
  try {
    await fs.writeFile('output.txt', data, 'utf8');
    console.log('Дані успішно записані у файл.');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
})();

(async () => {
  try {
    const data = await fs.readFile('output.txt', 'utf8');
    console.log('Вміст файлу:', data);
  } catch (err) {
    console.error('Помилка читання файлу:', err);
  }
})();

(async () => {
  const data = 'Це дані, які ми додаємо до файлу.';
  try {
    await fs.appendFile('output.txt', data, 'utf8');
    console.log('Дані успішно додані до файлу.');
  } catch (err) {
    console.error('Помилка додавання даних до файлу:', err);
  }
})();

(async () => {
  try {
    await fs.rename('output.txt', 'newfile.txt');
    console.log('Файл або каталог успішно перейменовано або переміщено.');
  } catch (err) {
    console.error('Помилка перейменування або переміщення:', err);
  }
})();

(async () => {
  try {
    await fs.unlink('newfile.txt');
    console.log('Файл успішно видалено.');
  } catch (err) {
    console.error('Помилка видалення файлу:', err);
  }
})();

(async () => {
  try {
    const files = await fs.readdir('.');
    console.log('Список файлів і каталогів:', files);
  } catch (err) {
    console.error('Помилка отримання списку файлів і каталогів:', err);
  }
})();
