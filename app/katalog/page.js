'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, Minus, Trash2, X, ShoppingCart, MapPin, ChevronDown } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { toast } from 'sonner';
import AnimatedSection from '@/components/AnimatedSection';
import { products, categories } from '@/data/products';
import { formatRupiah } from '@/lib/formatRupiah';
import { generateOrderMessage, openWhatsApp } from '@/lib/whatsapp';
import useCartStore from '@/store/cartStore';

/* ===== PAGE LAYOUT ===== */
const HeroBanner = styled.section`
  padding: 80px 24px 40px;
  text-align: center;
  background: ${({ theme }) => theme.colors.heroOverlay};
  color: #FFFFFF;
  min-height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 60px 16px 30px;
    min-height: 220px;
  }
`;

const HeroContent = styled(motion.div)`
  max-width: 600px;
`;

const PageTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PageSubtitle = styled.p`
  font-size: 1rem;
  opacity: 0.9;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px 80px;
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 32px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 24px 16px 80px;
  }
`;

/* ===== FILTERS ===== */
const FiltersBar = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 28px;
  flex-wrap: wrap;
  align-items: center;
`;

const SearchBox = styled.div`
  position: relative;
  flex: 1;
  min-width: 200px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px 12px 44px;
  border-radius: 16px;
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

const SearchIcon = styled.div`
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.textMuted};
`;

const CategoryTabs = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const CategoryTab = styled(motion.button)`
  padding: 8px 18px;
  border-radius: 14px;
  border: 1px solid ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.border)};
  background: ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.surface)};
  color: ${({ theme, $active }) => ($active ? theme.colors.textOnPrimary : theme.colors.text)};
  font-size: 0.82rem;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme, $active }) => ($active ? theme.colors.textOnPrimary : theme.colors.primary)};
  }
`;

/* ===== PRODUCT GRID ===== */
const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
`;

const ProductCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 35px ${({ theme }) => theme.colors.shadowMd};
    border-color: ${({ theme }) => theme.colors.supporting};
  }
`;

const ProductImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  background: ${({ theme }) => theme.colors.borderLight};
  overflow: hidden;
`;

const Badge = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 4px 12px;
  background: ${({ theme }) => theme.colors.badgeBg};
  color: ${({ theme }) => theme.colors.badgeText};
  font-size: 0.7rem;
  font-weight: 600;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  z-index: 2;
`;

const ProductInfo = styled.div`
  padding: 16px 18px 18px;
`;

const ProductName = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 3px;
`;

const ProductContents = styled.span`
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const ProductPrice = styled.p`
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin: 8px 0 12px;
`;

const AddButton = styled(motion.button)`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textOnPrimary};
  font-size: 0.82rem;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: ${({ theme }) => theme.colors.textMuted};

  p {
    font-size: 0.95rem;
    margin-top: 8px;
  }
`;

/* ===== ORDER SUMMARY ===== */
const OrderPanel = styled.div`
  position: sticky;
  top: 90px;
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 22px;
  padding: 24px;
  max-height: calc(100vh - 110px);
  overflow-y: auto;

  @media (max-width: 900px) {
    position: static;
    border-radius: 20px;
  }
`;

const PanelTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CartEmpty = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.85rem;
  padding: 20px 0;
`;

const CartItem = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 12px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};

  &:last-of-type {
    border-bottom: none;
  }
`;

const CartItemInfo = styled.div`
  flex: 1;
`;

const CartItemName = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  display: block;
`;

const CartItemVariant = styled.span`
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const CartItemPrice = styled.span`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  display: block;
  margin-top: 2px;
`;

const CartItemSubtotal = styled.span`
  font-size: 0.82rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  display: block;
  margin-top: 2px;
`;

const CartItemActions = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const QtyBtn = styled(motion.button)`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.75rem;

  &:hover {
    background: ${({ theme }) => theme.colors.badgeBg};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const QtyValue = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  min-width: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

const DeleteBtn = styled(motion.button)`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.textMuted};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 4px;

  &:hover {
    color: #E53935;
    background: rgba(229, 57, 53, 0.08);
  }
`;

const ClearCartBtn = styled(motion.button)`
  width: 100%;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  background: transparent;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.78rem;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  margin-top: 8px;
  transition: all 0.3s ease;

  &:hover {
    border-color: #E53935;
    color: #E53935;
  }
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0 12px;
  border-top: 2px solid ${({ theme }) => theme.colors.border};
  margin-top: 8px;
`;

const TotalLabel = styled.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const TotalValue = styled.span`
  font-size: 1.15rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

/* ===== CHECKOUT FORM ===== */
const CheckoutForm = styled.div`
  margin-top: 18px;
  padding-top: 18px;
  border-top: 1px solid ${({ theme }) => theme.colors.borderLight};
`;

const FormTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 14px;
  font-family: 'Poppins', sans-serif;
`;

const FormGroup = styled.div`
  margin-bottom: 12px;
`;

const Label = styled.label`
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 5px;
  font-family: 'Poppins', sans-serif;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  background: ${({ theme }) => theme.colors.inputBg};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.85rem;
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
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  background: ${({ theme }) => theme.colors.inputBg};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.85rem;
  font-family: 'Poppins', sans-serif;
  outline: none;
  resize: vertical;
  min-height: 60px;
  transition: border-color 0.3s ease;
  box-sizing: border-box;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  background: ${({ theme }) => theme.colors.inputBg};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.85rem;
  font-family: 'Poppins', sans-serif;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  appearance: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const SelectWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.textMuted};
    pointer-events: none;
  }
`;

const CheckoutButton = styled(motion.button)`
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 16px;
  background: #25D366;
  color: #FFFFFF;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
  transition: all 0.3s ease;

  &:hover {
    background: #20BD5A;
    box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

/* ===== MOBILE CART BUTTON ===== */
const MobileCartButton = styled(motion.button)`
  display: none;
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 56px;
  height: 56px;
  border-radius: 18px;
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textOnPrimary};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 998;
  box-shadow: 0 4px 20px ${({ theme }) => theme.colors.shadowMd};

  @media (max-width: 900px) {
    display: flex;
  }
`;

const CartBadge = styled.span`
  position: absolute;
  top: -4px;
  right: -4px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #E53935;
  color: #FFFFFF;
  font-size: 0.7rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* ===== MOBILE CART DRAWER ===== */
const CartOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.overlay};
  z-index: 1500;
`;

const CartDrawer = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-height: 85vh;
  background: ${({ theme }) => theme.colors.surface};
  z-index: 1501;
  border-radius: 24px 24px 0 0;
  padding: 24px;
  overflow-y: auto;
`;

const DrawerHandle = styled.div`
  width: 40px;
  height: 4px;
  border-radius: 2px;
  background: ${({ theme }) => theme.colors.border};
  margin: 0 auto 16px;
`;

/* ===== SKELETON ===== */
const SkeletonCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  overflow: hidden;
`;

export default function KatalogPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [loading, setLoading] = useState(true);
  const [mobileCartOpen, setMobileCartOpen] = useState(false);

  // Checkout form
  const [checkoutName, setCheckoutName] = useState('');
  const [checkoutAddress, setCheckoutAddress] = useState('');
  const [checkoutNote, setCheckoutNote] = useState('');
  const [checkoutMethod, setCheckoutMethod] = useState('Ambil di tempat');

  const { items, addItem, incrementItem, decrementItem, deleteItem, clearCart, getTotal } =
    useCartStore();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchCategory = activeCategory === 'Semua' || p.category === activeCategory;
      return matchSearch && matchCategory;
    });
  }, [search, activeCategory]);

  const handleAddToCart = (product) => {
    addItem(product);
    toast.success(`${product.name} ditambahkan ke pesanan`);
  };

  const handleCheckout = () => {
    if (!checkoutName.trim() || !checkoutAddress.trim()) {
      toast.error('Nama dan alamat wajib diisi!');
      return;
    }
    if (items.length === 0) {
      toast.error('Keranjang masih kosong!');
      return;
    }

    const message = generateOrderMessage({
      name: checkoutName,
      address: checkoutAddress,
      note: checkoutNote,
      method: checkoutMethod,
      items,
    });

    toast.success('Mengarahkan ke WhatsApp…');
    setTimeout(() => {
      openWhatsApp(message);
    }, 500);
  };

  const total = getTotal();

  const renderCartContent = () => (
    <>
      <PanelTitle>
        <ShoppingCart size={20} />
        Ringkasan Pesanan
      </PanelTitle>

      {items.length === 0 ? (
        <CartEmpty>Belum ada pesanan. Yuk pilih produk!</CartEmpty>
      ) : (
        <>
          <AnimatePresence>
            {items.map((item) => (
              <CartItem
                key={`${item.productId}-${item.selectedVariant}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                layout
              >
                <CartItemInfo>
                  <CartItemName>{item.name}</CartItemName>
                  {item.selectedVariant && (
                    <CartItemVariant>{item.selectedVariant}</CartItemVariant>
                  )}
                  <CartItemPrice>{formatRupiah(item.price)} × {item.qty}</CartItemPrice>
                  <CartItemSubtotal>{formatRupiah(item.price * item.qty)}</CartItemSubtotal>
                </CartItemInfo>
                <CartItemActions>
                  <QtyBtn
                    onClick={() => decrementItem(item.productId, item.selectedVariant)}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Minus size={12} />
                  </QtyBtn>
                  <QtyValue>{item.qty}</QtyValue>
                  <QtyBtn
                    onClick={() => incrementItem(item.productId, item.selectedVariant)}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Plus size={12} />
                  </QtyBtn>
                  <DeleteBtn
                    onClick={() => deleteItem(item.productId, item.selectedVariant)}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Trash2 size={14} />
                  </DeleteBtn>
                </CartItemActions>
              </CartItem>
            ))}
          </AnimatePresence>

          <ClearCartBtn onClick={clearCart} whileTap={{ scale: 0.98 }}>
            Kosongkan Keranjang
          </ClearCartBtn>

          <TotalRow>
            <TotalLabel>Total</TotalLabel>
            <TotalValue>{formatRupiah(total)}</TotalValue>
          </TotalRow>

          <CheckoutForm>
            <FormTitle>Checkout via WhatsApp</FormTitle>
            <FormGroup>
              <Label>Nama *</Label>
              <Input
                placeholder="Nama pemesan"
                value={checkoutName}
                onChange={(e) => setCheckoutName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>Alamat Lengkap *</Label>
              <TextArea
                placeholder="Alamat pengiriman"
                value={checkoutAddress}
                onChange={(e) => setCheckoutAddress(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>Catatan (opsional)</Label>
              <Input
                placeholder="Catatan tambahan"
                value={checkoutNote}
                onChange={(e) => setCheckoutNote(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>Metode Pengiriman</Label>
              <SelectWrapper>
                <Select
                  value={checkoutMethod}
                  onChange={(e) => setCheckoutMethod(e.target.value)}
                >
                  <option>Ambil di tempat</option>
                  <option>Delivery</option>
                  <option>Kirim luar kota</option>
                </Select>
                <ChevronDown size={16} />
              </SelectWrapper>
            </FormGroup>
            <CheckoutButton
              onClick={handleCheckout}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaWhatsapp size={18} />
              Checkout via WhatsApp
            </CheckoutButton>
          </CheckoutForm>
        </>
      )}
    </>
  );

  return (
    <>
      <HeroBanner>
        <HeroContent
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <PageTitle>Katalog Produk</PageTitle>
          <PageSubtitle>Pilih produk favoritmu dan langsung pesan via WhatsApp.</PageSubtitle>
        </HeroContent>
      </HeroBanner>

      <ContentWrapper>
        <div>
          <FiltersBar>
            <SearchBox>
              <SearchIcon>
                <Search size={18} />
              </SearchIcon>
              <SearchInput
                type="text"
                placeholder="Cari produk..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </SearchBox>
            <CategoryTabs>
              {categories.map((cat) => (
                <CategoryTab
                  key={cat}
                  $active={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {cat}
                </CategoryTab>
              ))}
            </CategoryTabs>
          </FiltersBar>

          {loading ? (
            <ProductGrid>
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <SkeletonCard key={i}>
                    <Skeleton height={200} />
                    <div style={{ padding: '16px 18px' }}>
                      <Skeleton width="70%" height={18} />
                      <Skeleton width="40%" height={14} style={{ marginTop: 6 }} />
                      <Skeleton width="50%" height={20} style={{ marginTop: 10 }} />
                      <Skeleton height={38} style={{ marginTop: 12 }} borderRadius={14} />
                    </div>
                  </SkeletonCard>
                ))}
            </ProductGrid>
          ) : filteredProducts.length === 0 ? (
            <EmptyState>
              <Search size={40} />
              <p>Tidak ada produk ditemukan.</p>
            </EmptyState>
          ) : (
            <ProductGrid>
              {filteredProducts.map((product, i) => (
                <AnimatedSection key={product.id} delay={i * 0.06}>
                  <ProductCard whileHover={{ y: -4 }}>
                    <ProductImageWrapper>
                      <Badge>{product.category}</Badge>
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 600px) 100vw, 50vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </ProductImageWrapper>
                    <ProductInfo>
                      <ProductName>{product.name}</ProductName>
                      <ProductContents>{product.contents}</ProductContents>
                      <ProductPrice>{formatRupiah(product.price)}</ProductPrice>
                      <AddButton
                        onClick={() => handleAddToCart(product)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Plus size={16} />
                        Tambah Pesanan
                      </AddButton>
                    </ProductInfo>
                  </ProductCard>
                </AnimatedSection>
              ))}
            </ProductGrid>
          )}
        </div>

        {/* Desktop order panel */}
        <OrderPanel className="desktop-only" style={{ display: '' }}>
          {renderCartContent()}
        </OrderPanel>
      </ContentWrapper>

      {/* Mobile cart button */}
      {items.length > 0 && (
        <MobileCartButton
          onClick={() => setMobileCartOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ShoppingCart size={22} />
          <CartBadge>{items.reduce((s, i) => s + i.qty, 0)}</CartBadge>
        </MobileCartButton>
      )}

      {/* Mobile cart drawer */}
      <AnimatePresence>
        {mobileCartOpen && (
          <>
            <CartOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileCartOpen(false)}
            />
            <CartDrawer
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <DrawerHandle />
              {renderCartContent()}
            </CartDrawer>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
