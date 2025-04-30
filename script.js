document.addEventListener('DOMContentLoaded', function() {
    // Initialize data
    const categories = [
        { id: 1, name: 'Traditional Wear', image: 'https://images.unsplash.com/photo-1595341595379-cf1cd0fb7fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { id: 2, name: 'Western Wear', image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { id: 3, name: 'Swim & Beachwear', image: 'https://images.unsplash.com/photo-1551829142-d9b8cf2c9232?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { id: 4, name: 'Winter & Seasonal Wear', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { id: 5, name: 'Beauty & Grooming', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { id: 6, name: 'Jewellery', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { id: 7, name: 'Personal Care Appliances', image: 'https://images.unsplash.com/photo-1591378603223-e15b45a81640?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { id: 8, name: 'International Brands', image: 'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { id: 9, name: 'Foot Wear', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { id: 10, name: 'Watches', image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { id: 11, name: 'Accessories', image: 'https://images.unsplash.com/photo-1591348122449-02525d703936?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }
    ];

    const products = [
        { 
            id: 1, 
            title: 'Red leather GUCCI bag', 
            price: 4500, 
            originalPrice: 6000,
            image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            category: 'Accessories',
            rating: 4.5,
            badge: 'Limited Offer'
        },
        { 
            id: 2, 
            title: 'LEXRX face cream', 
            price: 300, 
            originalPrice: 400,
            image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            category: 'Beauty & Grooming',
            rating: 4.2,
            badge: '30% OFF'
        },
        { 
            id: 3, 
            title: 'Fuji Film DSLR camera', 
            price: 35000, 
            originalPrice: 40000,
            image: 'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            category: 'Electronics',
            rating: 4.8
        },
        { 
            id: 4, 
            title: 'Sky blue kids shoe', 
            price: 910, 
            originalPrice: 1200,
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            category: 'Foot Wear',
            rating: 4.0,
            badge: 'New'
        },
        { 
            id: 5, 
            title: 'Brown leather wallet', 
            price: 600, 
            originalPrice: 800,
            image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            category: 'Accessories',
            rating: 3.9
        },
        { 
            id: 6, 
            title: 'Black watch', 
            price: 990, 
            originalPrice: 1200,
            image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            category: 'Watches',
            rating: 4.3,
            badge: 'Best Seller'
        },
        { 
            id: 7, 
            title: 'Wireless Headphones', 
            price: 1999, 
            originalPrice: 2999,
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            category: 'Electronics',
            rating: 4.6,
            badge: '33% OFF'
        },
        { 
            id: 8, 
            title: 'Cotton T-Shirt', 
            price: 499, 
            originalPrice: 799,
            image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            category: 'Western Wear',
            rating: 3.8
        }
    ];

    // Load user data from localStorage or initialize
    let user = JSON.parse(localStorage.getItem('user')) || {
        name: "John Doe",
        email: "john@example.com",
        address: "",
        profilePic: "https://randomuser.me/api/portraits/men/1.jpg"
    };

    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];

    // DOM Elements
    const profileBtn = document.getElementById('profile-btn');
    const wishlistBtn = document.getElementById('wishlist-btn');
    const cartBtn = document.getElementById('cart-btn');
    const profileModal = document.getElementById('profile-modal');
    const wishlistModal = document.getElementById('wishlist-modal');
    const cartModal = document.getElementById('cart-modal');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const categoryNav = document.querySelector('.category-nav');
    const categoryList = document.getElementById('category-list');
    const categoriesGrid = document.getElementById('categories-grid');
    const featuredProducts = document.getElementById('featured-products');
    const dealsProducts = document.getElementById('deals-products');
    const recentlyViewedContainer = document.getElementById('recently-viewed');
    const wishlistItemsContainer = document.getElementById('wishlist-items-container');
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartShipping = document.getElementById('cart-shipping');
    const cartTotal = document.getElementById('cart-total');
    const wishlistCount = document.getElementById('wishlist-count');
    const cartCount = document.getElementById('cart-count');
    const profileForm = document.getElementById('profile-form');
    const changePicBtn = document.getElementById('change-pic-btn');
    const profileImage = document.getElementById('profile-image');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const dealsTimer = document.getElementById('deals-timer');

    // Initialize the page
    function init() {
        renderCategories();
        renderProducts();
        updateWishlistCount();
        updateCartCount();
        updateCartSummary();
        setupEventListeners();
        startDealTimer();
        loadUserData();
    }

    // Render categories
    function renderCategories() {
        // Navigation categories
        categoryList.innerHTML = '';
        categories.forEach(category => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="#" data-id="${category.id}">${category.name}</a>`;
            categoryList.appendChild(li);
        });

        // Categories grid
        categoriesGrid.innerHTML = '';
        categories.slice(0, 6).forEach(category => {
            const categoryCard = document.createElement('div');
            categoryCard.className = 'category-card';
            categoryCard.innerHTML = `
                <img src="${category.image}" alt="${category.name}" class="category-img">
                <div class="category-title">${category.name}</div>
            `;
            categoryCard.addEventListener('click', () => filterByCategory(category.id));
            categoriesGrid.appendChild(categoryCard);
        });
    }

    // Render products
    function renderProducts(filteredProducts = products) {
        // Featured products
        featuredProducts.innerHTML = '';
        filteredProducts.slice(0, 4).forEach(product => {
            const isInWishlist = wishlist.some(item => item.id === product.id);
            featuredProducts.appendChild(createProductCard(product, isInWishlist));
        });

        // Deals products
        dealsProducts.innerHTML = '';
        filteredProducts.slice(2, 6).forEach(product => {
            const isInWishlist = wishlist.some(item => item.id === product.id);
            dealsProducts.appendChild(createProductCard(product, isInWishlist));
        });

        // Recently viewed
        recentlyViewedContainer.innerHTML = '';
        if (recentlyViewed.length > 0) {
            recentlyViewed.forEach(productId => {
                const product = products.find(p => p.id === productId);
                if (product) {
                    const isInWishlist = wishlist.some(item => item.id === product.id);
                    recentlyViewedContainer.appendChild(createProductCard(product, isInWishlist));
                }
            });
        } else {
            recentlyViewedContainer.innerHTML = '<p class="empty-message">No recently viewed items</p>';
        }
    }

    // Create product card
    function createProductCard(product, isInWishlist = false) {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        let badgeHTML = '';
        if (product.badge) {
            badgeHTML = `<div class="product-badge">${product.badge}</div>`;
        }
        
        let priceHTML = '';
        if (product.originalPrice) {
            priceHTML = `
                <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                <span class="discounted-price">$${product.price.toFixed(2)}</span>
            `;
        } else {
            priceHTML = `<span class="product-price">$${product.price.toFixed(2)}</span>`;
        }
        
        productCard.innerHTML = `
            ${badgeHTML}
            <img src="${product.image}" alt="${product.title}" class="product-img">
            <div class="product-info">
                <h4 class="product-title">${product.title}</h4>
                ${priceHTML}
                <div class="product-rating">
                    ${createRatingStars(product.rating)}
                    (${product.rating.toFixed(1)})
                </div>
                <div class="product-actions">
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                    <button class="add-to-wishlist ${isInWishlist ? 'active' : ''}" data-id="${product.id}">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        `;
        
        // Add event listeners
        productCard.querySelector('.add-to-cart').addEventListener('click', () => addToCart(product.id));
        productCard.querySelector('.add-to-wishlist').addEventListener('click', (e) => {
            e.preventDefault();
            toggleWishlist(product.id);
            e.target.classList.toggle('active');
        });
        
        // Add to recently viewed when clicked
        productCard.addEventListener('click', (e) => {
            if (!e.target.closest('.add-to-cart') && !e.target.closest('.add-to-wishlist')) {
                addToRecentlyViewed(product.id);
            }
        });
        
        return productCard;
    }

    // Create rating stars
    function createRatingStars(rating) {
        let stars = '';
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        
        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }
        
        return stars;
    }

    // Update wishlist count
    function updateWishlistCount() {
        wishlistCount.textContent = wishlist.length;
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }

    // Update cart count
    function updateCartCount() {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Update cart summary
    function updateCartSummary() {
        const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        const shipping = subtotal > 0 ? 50 : 0; // Flat shipping rate
        const total = subtotal + shipping;
        
        cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
        cartShipping.textContent = `$${shipping.toFixed(2)}`;
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }

    // Render wishlist items
    function renderWishlist() {
        wishlistItemsContainer.innerHTML = '';
        
        if (wishlist.length === 0) {
            wishlistItemsContainer.innerHTML = '<p class="empty-message">Your wishlist is empty</p>';
            return;
        }
        
        wishlist.forEach(item => {
            const product = products.find(p => p.id === item.id);
            if (!product) return;
            
            const wishlistItem = document.createElement('div');
            wishlistItem.className = 'wishlist-item-card';
            wishlistItem.innerHTML = `
                <img src="${product.image}" alt="${product.title}" class="wishlist-item-img">
                <div class="wishlist-item-info">
                    <h4 class="wishlist-item-title">${product.title}</h4>
                    <p class="wishlist-item-price">$${product.price.toFixed(2)}</p>
                    <div class="wishlist-item-actions">
                        <button class="move-to-cart" data-id="${product.id}">Add to Cart</button>
                        <button class="remove-item" data-id="${product.id}">Remove</button>
                    </div>
                </div>
            `;
            
            wishlistItemsContainer.appendChild(wishlistItem);
        });
        
        // Add event listeners
        document.querySelectorAll('.move-to-cart').forEach(btn => {
            btn.addEventListener('click', (e) => {
                addToCart(parseInt(e.target.getAttribute('data-id')));
                showNotification('Item moved to cart');
            });
        });
        
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                removeFromWishlist(parseInt(e.target.getAttribute('data-id')));
                renderWishlist();
                updateWishlistCount();
                showNotification('Item removed from wishlist');
            });
        });
    }

    // Render cart items
    function renderCart() {
        cartItemsContainer.innerHTML = '';
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-message">Your cart is empty</p>';
            updateCartSummary();
            return;
        }
        
        cart.forEach(item => {
            const product = products.find(p => p.id === item.id);
            if (!product) return;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item-card';
            cartItem.innerHTML = `
                <img src="${product.image}" alt="${product.title}" class="cart-item-img">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${product.title}</h4>
                    <p class="cart-item-price">$${product.price.toFixed(2)}</p>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn minus" data-id="${product.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn plus" data-id="${product.id}">+</button>
                    </div>
                    <div class="cart-item-actions">
                        <button class="save-for-later" data-id="${product.id}">Save for Later</button>
                        <button class="remove-from-cart" data-id="${product.id}">Remove</button>
                    </div>
                </div>
            `;
            
            cartItemsContainer.appendChild(cartItem);
        });
        
        // Add event listeners
        document.querySelectorAll('.minus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                updateCartItem(parseInt(e.target.getAttribute('data-id')), -1);
            });
        });
        
        document.querySelectorAll('.plus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                updateCartItem(parseInt(e.target.getAttribute('data-id')), 1);
            });
        });
        
        document.querySelectorAll('.save-for-later').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.target.getAttribute('data-id'));
                addToWishlist(productId);
                removeFromCart(productId);
                showNotification('Item saved for later');
            });
        });
        
        document.querySelectorAll('.remove-from-cart').forEach(btn => {
            btn.addEventListener('click', (e) => {
                removeFromCart(parseInt(e.target.getAttribute('data-id')));
                showNotification('Item removed from cart');
            });
        });
        
        updateCartSummary();
    }

    // Toggle wishlist
    function toggleWishlist(productId) {
        const index = wishlist.findIndex(item => item.id === productId);
        
        if (index === -1) {
            const product = products.find(p => p.id === productId);
            if (product) {
                wishlist.push({ id: productId });
                showNotification('Added to wishlist');
            }
        } else {
            wishlist.splice(index, 1);
            showNotification('Removed from wishlist');
        }
        
        updateWishlistCount();
    }

    // Add to wishlist
    function addToWishlist(productId) {
        if (!wishlist.some(item => item.id === productId)) {
            wishlist.push({ id: productId });
            updateWishlistCount();
        }
    }

    // Remove from wishlist
    function removeFromWishlist(productId) {
        wishlist = wishlist.filter(item => item.id !== productId);
        updateWishlistCount();
    }

    // Add to cart
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: productId,
                price: product.price,
                quantity: 1
            });
        }
        
        updateCartCount();
        updateCartSummary();
        showNotification('Added to cart');
    }

    // Update cart item quantity
    function updateCartItem(productId, change) {
        const item = cart.find(item => item.id === productId);
        if (!item) return;
        
        item.quantity += change;
        
        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }
        
        renderCart();
        updateCartCount();
    }

    // Remove from cart
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        renderCart();
        updateCartCount();
    }

    // Add to recently viewed
    function addToRecentlyViewed(productId) {
        // Remove if already exists
        recentlyViewed = recentlyViewed.filter(id => id !== productId);
        
        // Add to beginning
        recentlyViewed.unshift(productId);
        
        // Keep only last 4 items
        if (recentlyViewed.length > 4) {
            recentlyViewed = recentlyViewed.slice(0, 4);
        }
        
        localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
    }

    // Filter by category
    function filterByCategory(categoryId) {
        const category = categories.find(c => c.id === categoryId);
        if (!category) return;
        
        const filteredProducts = products.filter(product => 
            product.category === category.name
        );
        
        renderProducts(filteredProducts);
        showNotification(`Showing ${category.name} products`);
    }

    // Search products
    function searchProducts(query) {
        if (!query.trim()) {
            renderProducts();
            return;
        }
        
        const filteredProducts = products.filter(product => 
            product.title.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );
        
        renderProducts(filteredProducts);
    }

    // Load user data
    function loadUserData() {
        document.getElementById('name').value = user.name;
        document.getElementById('email').value = user.email;
        document.getElementById('address').value = user.address;
        profileImage.src = user.profilePic;
    }

    // Save user data
    function saveUserData() {
        user = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            address: document.getElementById('address').value,
            profilePic: profileImage.src
        };
        
        localStorage.setItem('user', JSON.stringify(user));
        showNotification('Profile updated successfully');
    }

    // Change profile picture
    function changeProfilePic() {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        profileImage.src = `https://randomuser.me/api/portraits/men/${randomNum}.jpg`;
    }

    // Start deal timer
    function startDealTimer() {
        let hours = 23;
        let minutes = 59;
        let seconds = 59;
        
        const timer = setInterval(() => {
            seconds--;
            
            if (seconds < 0) {
                seconds = 59;
                minutes--;
            }
            
            if (minutes < 0) {
                minutes = 59;
                hours--;
            }
            
            if (hours < 0) {
                clearInterval(timer);
                dealsTimer.textContent = "Deal Expired";
                return;
            }
            
            const timerString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} Left`;
            dealsTimer.textContent = timerString;
        }, 1000);
    }

    // Show notification
    function showNotification(message, isError = false) {
        const notification = document.createElement('div');
        notification.className = `notification ${isError ? 'error' : ''}`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Setup event listeners
    function setupEventListeners() {
        // Modal toggles
        profileBtn.addEventListener('click', (e) => {
            e.preventDefault();
            profileModal.style.display = 'block';
        });
        
        wishlistBtn.addEventListener('click', (e) => {
            e.preventDefault();
            wishlistModal.style.display = 'block';
            renderWishlist();
        });
        
        cartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            cartModal.style.display = 'block';
            renderCart();
        });
        
        // Close modals
        closeModalBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                profileModal.style.display = 'none';
                wishlistModal.style.display = 'none';
                cartModal.style.display = 'none';
            });
        });
        
        // Close when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === profileModal) profileModal.style.display = 'none';
            if (e.target === wishlistModal) wishlistModal.style.display = 'none';
            if (e.target === cartModal) cartModal.style.display = 'none';
        });
        
        // Mobile menu toggle
        mobileMenuToggle.addEventListener('click', () => {
            categoryNav.classList.toggle('active');
        });
        
        // Profile form
        profileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            saveUserData();
        });
        
        // Change profile pic
        changePicBtn.addEventListener('click', (e) => {
            e.preventDefault();
            changeProfilePic();
        });
        
        // Search
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            searchProducts(searchInput.value);
        });
        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                searchProducts(searchInput.value);
            }
        });
        
        // Category navigation
        categoryList.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                e.preventDefault();
                const categoryId = parseInt(e.target.getAttribute('data-id'));
                filterByCategory(categoryId);
            }
        });
        
        // Checkout button
        document.querySelector('.checkout-btn')?.addEventListener('click', () => {
            if (cart.length === 0) {
                showNotification('Your cart is empty', true);
                return;
            }
            
            showNotification('Order placed successfully!');
            cart = [];
            renderCart();
            updateCartCount();
            cartModal.style.display = 'none';
        });
    }

    // Initialize the app
    init();
});