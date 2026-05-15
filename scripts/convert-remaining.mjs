import heicConvert from 'heic-convert';
import { promises as fs } from 'fs';
import path from 'path';

const ROOT = 'C:/Users/ahmet/OneDrive/Desktop/mustafadoğanweb';
const DST = ROOT + '/public/images';

const files = [
  ['Demir Sevkiyat.HEIC', 'demir-sevkiyat-a.jpg'],
  ['Demir Sevkiyat (2).HEIC', 'demir-sevkiyat-b.jpg'],
  ['PlyWood Sevkiyat.HEIC', 'plywood-sevkiyat-a.jpg'],
  ['Plywood Sevkiyat (2).HEIC', 'plywood-sevkiyat-b.jpg'],
  ['OSB Sevkiyat.HEIC', 'osb-sevkiyat.jpg'],
  ['Kiremit Sevkiyat.HEIC', 'kiremit-sevkiyat-a.jpg'],
  ['Kiremit Sevkiyat (2).HEIC', 'kiremit-sevkiyat-b.jpg'],
  ['İnşaat Malzemeleri.HEIC', 'insaat-malzemeleri.jpg'],
  ['İnşaat Demiri.HEIC', 'insaat-demiri.jpg'],
  ['İnşaat Demirleri.HEIC', 'insaat-demirleri.jpg'],
  ['Kereste (1).HEIC', 'kereste-1.jpg'],
  ['Kereste (2).HEIC', 'kereste-2.jpg'],
  ['Kereste (3).HEIC', 'kereste-3.jpg'],
  ['5x10 Kereste.HEIC', 'kereste-5x10.jpg'],
  ['Beton Sevkiyat.HEIC', 'beton-sevkiyat-a.jpg'],
  ['Çatı Kaplama Levhası.HEIC', 'cati-kaplama.jpg'],
  ['Gaz Beton.HEIC', 'gaz-beton-a.jpg'],
  ['Su Tankerleri.HEIC', 'su-tankerleri.jpg'],
  ['Plywood.HEIC', 'plywood.jpg'],
  ['Kiremit (2).HEIC', 'kiremit-2.jpg'],
];

async function run() {
  for (const [src, dst] of files) {
    const srcPath = ROOT + '/' + src;
    const dstPath = DST + '/' + dst;
    try {
      const buf = await fs.readFile(srcPath);
      const out = await heicConvert({ buffer: buf, format: 'JPEG', quality: 0.9 });
      await fs.writeFile(dstPath, Buffer.from(out));
      console.log('OK: ' + dst);
    } catch(e) {
      console.log('FAIL: ' + src + ' - ' + e.message);
    }
  }
  console.log('Done');
}
run();
