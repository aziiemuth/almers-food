'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { formatRupiah } from '@/lib/formatRupiah';
import { generateSingleOrderMessage, openWhatsApp } from '@/lib/whatsapp';
import { toast } from 'sonner';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.overlay};
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

const Modal = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 24px;
  width: 100%;
  max-width: 480px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 32px;
  position: relative;

  @media (max-width: 480px) {
    padding: 24px;
    border-radius: 20px;
  }
`;

const CloseBtn = styled(motion.button)`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.badgeBg};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ModalTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 4px;
`;

const ModalSubtitle = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 24px;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 6px;
  font-family: 'Poppins', sans-serif;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  background: ${({ theme }) => theme.colors.inputBg};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
  font-family: 'Poppins', sans-serif;
  outline: none;
  transition: border-color 0.3s ease;
  box-sizing: border-box;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  background: ${({ theme }) => theme.colors.inputBg};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
  font-family: 'Poppins', sans-serif;
  outline: none;
  resize: vertical;
  min-height: 70px;
  transition: border-color 0.3s ease;
  box-sizing: border-box;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const QtyRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const QtyButton = styled(motion.button)`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.badgeBg};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const QtyValue = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  min-width: 32px;
  text-align: center;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  padding: 16px;
  background: ${({ theme }) => theme.colors.badgeBg};
  border-radius: 14px;
`;

const TotalLabel = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const TotalPrice = styled.span`
  font-size: 1.15rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textOnPrimary};
  font-size: 0.95rem;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default function OrderModal({ product, onClose }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');
  const [qty, setQty] = useState(1);
  const [variant, setVariant] = useState(product.variants?.[0] || '');

  if (!product) return null;

  const total = product.price * qty;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !address.trim()) {
      toast.error('Nama dan alamat wajib diisi!');
      return;
    }

    const message = generateSingleOrderMessage({
      name,
      address,
      note,
      productName: product.name,
      variant,
      qty,
      price: product.price,
    });

    toast.success('Mengarahkan ke WhatsApp…');
    setTimeout(() => {
      openWhatsApp(message);
      onClose();
    }, 500);
  };

  return (
    <AnimatePresence>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <Modal
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <CloseBtn onClick={onClose} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <X size={18} />
          </CloseBtn>

          <ModalTitle>Pesan {product.name}</ModalTitle>
          <ModalSubtitle>{product.contents} • {formatRupiah(product.price)}</ModalSubtitle>

          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Nama Pemesan *</Label>
              <Input
                type="text"
                placeholder="Masukkan nama kamu"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Alamat Lengkap *</Label>
              <TextArea
                placeholder="Masukkan alamat lengkap"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </FormGroup>

            {product.variants && product.variants.length > 0 && (
              <FormGroup>
                <Label>Varian</Label>
                <Input
                  as="select"
                  value={variant}
                  onChange={(e) => setVariant(e.target.value)}
                >
                  {product.variants.map((v) => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </Input>
              </FormGroup>
            )}

            <FormGroup>
              <Label>Jumlah</Label>
              <QtyRow>
                <QtyButton
                  type="button"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Minus size={16} />
                </QtyButton>
                <QtyValue>{qty}</QtyValue>
                <QtyButton
                  type="button"
                  onClick={() => setQty(qty + 1)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Plus size={16} />
                </QtyButton>
              </QtyRow>
            </FormGroup>

            <FormGroup>
              <Label>Catatan (opsional)</Label>
              <TextArea
                placeholder="Contoh: mau yang pedas, tanpa bawang, dll"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </FormGroup>

            <TotalRow>
              <TotalLabel>Total</TotalLabel>
              <TotalPrice>{formatRupiah(total)}</TotalPrice>
            </TotalRow>

            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ShoppingBag size={18} />
              Order via WhatsApp
            </SubmitButton>
          </form>
        </Modal>
      </Overlay>
    </AnimatePresence>
  );
}
