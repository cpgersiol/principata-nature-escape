
import { useState } from 'react';
import { GalleryHorizontal, ArrowLeft, ArrowRight } from 'lucide-react';
import { Facebook } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'nature', name: 'Nature' },
    { id: 'facilities', name: 'Facilities' },
    { id: 'activities', name: 'Activities' },
    { id: 'accommodation', name: 'Accommodation' }
  ];

  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      alt: 'Mountain landscape with sunlight',
      category: 'nature'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      alt: 'River between mountains',
      category: 'nature'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      alt: 'Pine trees forest',
      category: 'nature'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      alt: 'Lake surrounded by trees',
      category: 'nature'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      alt: 'Sunlight through trees',
      category: 'nature'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      alt: 'Deer in natural habitat',
      category: 'nature'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      alt: 'Misty mountain summit',
      category: 'nature'
    },
    // Adding some facility placeholders
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      alt: 'Camping facilities',
      category: 'facilities'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      alt: 'Recreation area',
      category: 'activities'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      alt: 'Tent accommodation',
      category: 'accommodation'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      alt: 'Lake activities',
      category: 'activities'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      alt: 'Camping spot setup',
      category: 'accommodation'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-sage-600 to-forest-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800&q=80"
            alt="Forest landscape"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <GalleryHorizontal size={64} className="mx-auto mb-6 opacity-80" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Photo Gallery
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Discover the natural beauty and comfortable facilities that await you 
              at Camping Principata through our photo collection.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons - Mobile Optimized */}
      <section className="py-8 md:py-16 bg-white sticky top-20 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-forest-600 text-white shadow-lg'
                    : 'bg-sage-100 text-forest-700 hover:bg-sage-200'
                }`}
              >
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">
                  {category.name === 'All Photos' ? 'All' : 
                   category.name === 'Accommodation' ? 'Rooms' : 
                   category.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-16 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openLightbox(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <GalleryHorizontal size={32} className="mx-auto mb-2" />
                    <p className="text-sm font-medium">View Image</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <GalleryHorizontal size={64} className="mx-auto mb-4 text-gray-400" />
              <p className="text-xl text-gray-500">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-800 mb-6 animate-fade-in">
            Follow Our Adventure
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Stay connected with us on social media for the latest updates, guest photos, 
            and seasonal highlights from Camping Principata.
          </p>
          <div className="flex justify-center gap-8">
            <div className="bg-sage-50 rounded-2xl p-12 max-w-md animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-sage-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-forest-800 mb-2">@CampingPrincipata</h3>
              <p className="text-gray-600 text-sm">
                Instagram integration coming soon! Follow us for daily inspiration and guest adventures.
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-12 max-w-md animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-blue-400 mb-4">
                <Facebook size={64} className="mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-forest-800 mb-2">Camping Principata</h3>
              <p className="text-gray-600 text-sm">
                Join our Facebook community for updates, events, and connect with fellow campers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Buttons */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 p-2"
                >
                  <ArrowLeft size={32} />
                </button>
                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 p-2"
                >
                  <ArrowRight size={32} />
                </button>
              </>
            )}

            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Image Counter */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-white text-center">
              <p className="text-sm">
                {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} of {filteredImages.length}
              </p>
              <p className="text-xs text-gray-300 mt-1">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
