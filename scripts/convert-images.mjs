import heicConvert from 'heic-convert'
import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const SOURCE = ROOT
const OUTPUT = path.join(ROOT, 'public', 'images')

// Map: source filename → output filename (slug)
const HEIC_MAP = {
  'Mustafa Doğan Sanayi ana Görsel.HEIC': 'hero-main.webp',
  'Mustafa Doğan Sanayi Dış Görünüş.HEIC': 'sanayi-dis.webp',
  'Mustafa Doğan Dükkan Dış Görünüş.HEIC': 'dukkan-dis.webp',
  'Mustafa Doğan Malzeme Depo.HEIC': 'malzeme-depo.webp',
  'Mustafa Doğan Depo.HEIC': 'depo.webp',
  'Mustafa Doğan Depo (2).HEIC': 'depo-2.webp',
  'Mustafa Doğan Ofis.HEIC': 'ofis.webp',
  'Mustafa Doğan Patronu.heic': 'patron.webp',
  'Mustafa Doğan Sanayi Dükkanı.HEIC': 'sanayi-dukkani.webp',
  'Mustafa Doğan Üretim Yeri.HEIC': 'uretim-yeri.webp',
  'Sanayi Dıştan Görünüş.HEIC': 'sanayi-distan.webp',
  'Depo Dıştan Görünüş.HEIC': 'depo-distan.webp',
  'Depo Dıştan Görünüş (2).HEIC': 'depo-distan-2.webp',
  'Kereste Sevkiyat.HEIC': 'kereste-sevkiyat-a.webp',
  'Kereste Sevkiyat (2).HEIC': 'kereste-sevkiyat-b.webp',
  'Kereste Sevkiyat (3).HEIC': 'kereste-sevkiyat-c.webp',
  'Kereste Sevkiyat (4).HEIC': 'kereste-sevkiyat-d.webp',
  'Kereste Sevkiyat (5).HEIC': 'kereste-sevkiyat-e.webp',
  'Kereste Sevkiyat (6).HEIC': 'kereste-sevkiyat-f.webp',
  'Kereste Sevkiyat (7).HEIC': 'kereste-sevkiyat-g.webp',
  'Kereste Sevkiyat (8).HEIC': 'kereste-sevkiyat-h.webp',
  'Kereste Sevkiyat (9).HEIC': 'kereste-sevkiyat-i.webp',
  'Kereste Sevkiyat (10).HEIC': 'kereste-sevkiyat-j.webp',
  'Kereste Sevkiyat (11).HEIC': 'kereste-sevkiyat-k.webp',
  'Kereste Sevkiyat (12).HEIC': 'kereste-sevkiyat-l.webp',
  'Kereste Sevkiyat (13).HEIC': 'kereste-sevkiyat-m.webp',
  'Kereste Sevkiyat (14).HEIC': 'kereste-sevkiyat-n.webp',
  'Kereste Sevkiyat (15).HEIC': 'kereste-sevkiyat-o.webp',
  'Kereste (1).HEIC': 'kereste-1.webp',
  'Kereste (2).HEIC': 'kereste-2.webp',
  'Kereste (3).HEIC': 'kereste-3.webp',
  'Kereste (4).HEIC': 'kereste-4.webp',
  'Kereste (5).HEIC': 'kereste-5.webp',
  '5x10 Kereste.HEIC': 'kereste-5x10.webp',
  'Demir Sevkiyat.HEIC': 'demir-sevkiyat-a.webp',
  'Demir Sevkiyat (2).HEIC': 'demir-sevkiyat-b.webp',
  'İnşaat Demiri.HEIC': 'insaat-demiri.webp',
  'İnşaat Demirleri.HEIC': 'insaat-demirleri.webp',
  'Kiremit Sevkiyat.HEIC': 'kiremit-sevkiyat-a.webp',
  'Kiremit Sevkiyat (2).HEIC': 'kiremit-sevkiyat-b.webp',
  'Kiremit (2).HEIC': 'kiremit-2.webp',
  'Plywood.HEIC': 'plywood.webp',
  'Plywood Sevkiyat (2).HEIC': 'plywood-sevkiyat-b.webp',
  'PlyWood Sevkiyat.HEIC': 'plywood-sevkiyat-a.webp',
  'OSB Sevkiyat.HEIC': 'osb-sevkiyat.webp',
  'Beton Sevkiyat.HEIC': 'beton-sevkiyat-a.webp',
  'Beton Sevkiyat (2).HEIC': 'beton-sevkiyat-b.webp',
  'Çimento Sevkiyat.HEIC': 'cimento-sevkiyat.webp',
  'Çatı Kaplama Levhası.HEIC': 'cati-kaplama.webp',
  'Çatı Kaplama Malzemeleri.HEIC': 'cati-kaplama-malz.webp',
  'Gaz Beton.HEIC': 'gaz-beton-a.webp',
  'Gaz Beton (2).HEIC': 'gaz-beton-b.webp',
  'İzolasyon Malzemeleri.HEIC': 'izolasyon.webp',
  'İnşaat Malzemeleri.HEIC': 'insaat-malzemeleri.webp',
  'Pimapen Pencere.HEIC': 'pimapen.webp',
  'Tuğla.HEIC': 'tugla.webp',
  'Su Tankerleri.HEIC': 'su-tankerleri.webp',
  'Su Tankı.HEIC': 'su-tanki.webp',
  'Su Tankeri Sevkiyat.HEIC': 'su-tankeri-sevkiyat-a.webp',
  '10.000 Litre Su Tankeri Sevkiyat.HEIC': 'su-tankeri-sevkiyat-b.webp',
}

// Copy JPEG/PNG files
const COPY_MAP = {
  'Logo.jpg.jpeg': 'logo.jpg',
  'Çatı Kiremit Malzemeleri.jpeg': 'cati-kiremit.jpg',
  'Çorum Bıyıkoğlu Kiremit.jpeg': 'corum-kiremit.jpg',
  'demir sevkiyat.jpeg': 'demir-sevkiyat.jpg',
  'Kereste Sevkiyat (1).jpeg': 'kereste-sevkiyat-1.jpg',
  'kereste sevkiyat.jpeg': 'kereste-sevkiyat-2.jpg',
  'Mermer Görünümlü Duvar Panelleri (1).jpeg': 'mermer-panel-1.jpg',
  'Mermer Görünümlü Duvar Panelleri (2).jpeg': 'mermer-panel-2.jpg',
  'Mermer Görünümlü Duvar Panelleri (3).jpeg': 'mermer-panel-3.jpg',
  'Plastik PArke.PNG': 'plastik-parke.png',
}

async function convertHeic(sourcePath, outputPath) {
  try {
    const inputBuffer = await fs.readFile(sourcePath)
    const outputBuffer = await heicConvert({
      buffer: inputBuffer,
      format: 'JPEG',
      quality: 0.92,
    })
    await fs.writeFile(outputPath, Buffer.from(outputBuffer))
    console.log(`✓ Converted: ${path.basename(sourcePath)} → ${path.basename(outputPath)}`)
  } catch (err) {
    console.error(`✗ Failed: ${path.basename(sourcePath)} — ${err.message}`)
  }
}

async function copyFile(sourcePath, outputPath) {
  try {
    await fs.copyFile(sourcePath, outputPath)
    console.log(`✓ Copied: ${path.basename(sourcePath)} → ${path.basename(outputPath)}`)
  } catch (err) {
    console.error(`✗ Failed copy: ${path.basename(sourcePath)} — ${err.message}`)
  }
}

async function main() {
  await fs.mkdir(OUTPUT, { recursive: true })

  console.log('\n📁 Copying JPEG/PNG files...')
  for (const [src, dst] of Object.entries(COPY_MAP)) {
    const sourcePath = path.join(SOURCE, src)
    const outputPath = path.join(OUTPUT, dst)
    // Change .webp extension to .jpg for heic-converted files
    const finalOutputPath = outputPath.replace(/\.webp$/, '.jpg')
    await copyFile(sourcePath, outputPath)
  }

  console.log('\n🔄 Converting HEIC files...')
  // Convert in batches of 4 for performance
  const entries = Object.entries(HEIC_MAP)
  const batchSize = 4
  for (let i = 0; i < entries.length; i += batchSize) {
    const batch = entries.slice(i, i + batchSize)
    await Promise.all(batch.map(([src, dst]) => {
      const sourcePath = path.join(SOURCE, src)
      const outputPath = path.join(OUTPUT, dst.replace('.webp', '.jpg'))
      return convertHeic(sourcePath, outputPath)
    }))
  }

  console.log('\n✅ Done! All images converted to public/images/')
}

main().catch(console.error)
