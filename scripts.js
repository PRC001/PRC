// script.js - Script principal pour toutes les pages
document.addEventListener('DOMContentLoaded', function() {
    // Animation pour les sections au scroll
    const animateOnScroll = function() {
      const elements = document.querySelectorAll('.slide-up');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.classList.add('active');
        }
      });
    };
    
    // Initialiser les animations
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Pour animer les éléments visibles au chargement initial
    
    // Gestion des menus actifs dans la navbar
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.navbar .item a');
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      }
    });
  
    // Ajout de classes d'animation aux éléments
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('slide-up');
    });
    
    // Fonctionnalité pour le bouton Contact
    const contactBtn = document.querySelector('.navbar .btn input');
    if (contactBtn) {
      contactBtn.addEventListener('click', function() {
        // Redirection vers une page de contact ou ouverture d'un modal selon votre choix
        window.location.href = '#contactForm';
      });
    }
  });
  
  // reseaux.js - Script spécifique pour la page Reseaux
  document.addEventListener('DOMContentLoaded', function() {
    const downloadButtons = document.querySelectorAll('.download-btn');
    
    // Liste des fichiers fictifs à télécharger
    const fileData = [
      { name: 'cisco-router-config.pdf', size: '2.4 MB' },
      { name: 'enterprise-network-schema.pdf', size: '1.8 MB' },
      { name: 'firewall-config-template.pdf', size: '3.2 MB' },
      { name: 'vpn-protocol-guide.pdf', size: '4.1 MB' },
      { name: 'switch-config-templates.pdf', size: '2.7 MB' },
      { name: 'network-security-best-practices.pdf', size: '5.3 MB' },
      { name: 'wifi-enterprise-config.pdf', size: '1.9 MB' },
      { name: 'network-monitoring-guide.pdf', size: '3.7 MB' },
      { name: 'cloud-networking-integration.pdf', size: '4.5 MB' },
      { name: 'ipv6-migration-plan.pdf', size: '2.8 MB' }
    ];
    
    downloadButtons.forEach((button, index) => {
      button.addEventListener('click', function() {
        // Simulation de téléchargement
        const file = fileData[index] || { name: 'document.pdf', size: '1.0 MB' };
        
        // Animation de téléchargement
        this.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Téléchargement...';
        
        // Feedback utilisateur avec délai simulé
        setTimeout(() => {
          alert(`Téléchargement de "${file.name}" (${file.size}) démarré. Le fichier sera enregistré dans votre dossier Téléchargements.`);
          this.innerHTML = '<i class="fa-solid fa-download"></i> Télécharger';
        }, 1500);
      });
    });
  });
  
  // service.js - Script spécifique pour la page Service
  document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    // Animation des cartes de service
    serviceCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(-5px)';
      });
    });
  });
  
  // magasine.js - Script spécifique pour la page Magasine
  document.addEventListener('DOMContentLoaded', function() {
    // Filtres de catégorie
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Mettre à jour le bouton actif
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        const category = this.getAttribute('data-category');
        
        // Filtrer les produits
        productCards.forEach(card => {
          if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
    
    // Modal de contact
    const modal = document.getElementById('contactModal');
    const contactButtons = document.querySelectorAll('.contact-btn');
    const closeModal = document.querySelector('.close-modal');
    const productInput = document.getElementById('produit');
    const contactForm = document.getElementById('contactForm');
    
    contactButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Récupérer le nom du produit
        const productName = this.closest('.product-card').querySelector('h3').textContent;
        
        // Définir le produit dans le formulaire
        productInput.value = productName;
        
        // Afficher le modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Empêcher le défilement
      });
    });
    
    closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto'; // Réactiver le défilement
    });
    
    // Fermer le modal en cliquant à l'extérieur
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
    
    // Soumission du formulaire
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Simuler l'envoi du formulaire
      const submitBtn = this.querySelector('.submit-btn');
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Envoi en cours...';
      
      // Simulation de délai de traitement
      setTimeout(() => {
        alert(`Votre demande concernant le produit "${productInput.value}" a été envoyée avec succès. Nous vous contacterons prochainement.`);
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Réinitialiser le formulaire
        contactForm.reset();
        submitBtn.textContent = 'Envoyer';
      }, 1500);
    });
    
    // Animation des prix
    const priceElements = document.querySelectorAll('.product-price');
    priceElements.forEach(price => {
      price.addEventListener('mouseenter', function() {
        this.style.color = 'rgb(13, 255, 0)';
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'all 0.3s ease';
      });
      
      price.addEventListener('mouseleave', function() {
        this.style.color = '#333';
        this.style.transform = 'scale(1)';
      });
    });
  });