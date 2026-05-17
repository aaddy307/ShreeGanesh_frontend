export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  }).format(price);
};

export const getImageUrl = (imagePath) => {
  if (!imagePath) return '/images/products/placeholder.jpg';
  if (imagePath.startsWith('http')) return imagePath;
  return imagePath.replace('http://res.cloudinary.com', 'https://res.cloudinary.com');
};

export const truncateText = (text, maxLength) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export const getWhatsAppLink = (productName) => {
  const message = `Hi, I'm interested in "${productName}". Please share more details.`;
  return `https://wa.me/918149678734?text=${encodeURIComponent(message)}`;
};

export const getCallLink = () => {
  return 'tel:+918149678734';
};