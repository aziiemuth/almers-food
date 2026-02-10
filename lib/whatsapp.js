import { formatRupiah } from './formatRupiah';

const WA_NUMBER = '6287806554701';

export function generateOrderMessage({ name, address, note, method, items }) {
  const lines = [];
  lines.push('*Pesanan Baru - Almers Food*');
  lines.push('');
  lines.push('*Nama:* ' + name);
  lines.push('*Alamat:* ' + address);
  lines.push('*Pengiriman:* ' + method);
  if (note) {
    lines.push('*Catatan:* ' + note);
  }
  lines.push('');
  lines.push('----------------------------');
  lines.push('*Detail Pesanan:*');
  lines.push('');

  let total = 0;
  items.forEach((item, index) => {
    const subtotal = item.price * item.qty;
    total += subtotal;
    const variantText = item.selectedVariant ? ' (' + item.selectedVariant + ')' : '';
    lines.push((index + 1) + '. ' + item.name + variantText);
    lines.push('   ' + item.qty + ' x ' + formatRupiah(item.price) + ' = ' + formatRupiah(subtotal));
    lines.push('');
  });

  lines.push('----------------------------');
  lines.push('*Total: ' + formatRupiah(total) + '*');
  lines.push('');
  lines.push('Terima kasih sudah order di Almers Food!');

  return lines.join('\n');
}

export function generateSingleOrderMessage({ name, address, note, productName, variant, qty, price }) {
  const subtotal = price * qty;
  const variantText = variant ? ' (' + variant + ')' : '';

  const lines = [];
  lines.push('*Pesanan Baru - Almers Food*');
  lines.push('');
  lines.push('*Nama:* ' + name);
  lines.push('*Alamat:* ' + address);
  if (note) {
    lines.push('*Catatan:* ' + note);
  }
  lines.push('');
  lines.push('----------------------------');
  lines.push('*Detail Pesanan:*');
  lines.push('');
  lines.push(productName + variantText);
  lines.push(qty + ' x ' + formatRupiah(price) + ' = ' + formatRupiah(subtotal));
  lines.push('');
  lines.push('----------------------------');
  lines.push('*Total: ' + formatRupiah(subtotal) + '*');
  lines.push('');
  lines.push('Terima kasih sudah order di Almers Food!');

  return lines.join('\n');
}

export function openWhatsApp(message) {
  const encoded = encodeURIComponent(message);
  window.location.href = 'https://wa.me/' + WA_NUMBER + '?text=' + encoded;
}
