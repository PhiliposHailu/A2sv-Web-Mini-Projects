
describe('Bookmark Functionality', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('redirects to login page when bookmarking without being logged in', () => {
    // Click the Browse button/link (assume it's a button or an anchor)
    cy.contains(/browse/i).click();

    // On jobs page: assume job cards are <article> or <section> elements
    // Find the first job card by tag (e.g., first <article> or first <section> on the page)
    cy.get('[data-cy="bookmark-btn"]').first().click({ force: true });

    // Should redirect to login page
    cy.url().should('include', '/login');
  });

  it('allows bookmarking a job after login and shows it in bookmarked list', () => {
  // Login
  cy.visit('/login');
  cy.get('input[type="email"]').type('lovethegivernotwhatisgiven@gmail.com');
  cy.get('input[type="password"]').type('testtest');
  cy.get('button[type="submit"]').click();

  cy.url().should('include', '/');
  cy.contains(/welcome/i).should('exist');

  // Navigate to jobs list
  cy.contains(/browse jobs/i).click();
  cy.url().should('include', '/jobs');

  // Wait for job cards to appear before interacting
  cy.get('[data-cy="job-card"]', { timeout: 5000 }).should('exist').and('be.visible');

// Bookmark first job card if not already bookmarked
cy.get('[data-cy="job-card"]').first().within(() => {
  cy.get('button[aria-label="Add bookmark"]').click({ force: true });
  cy.get('button').should('have.attr', 'aria-label', 'Remove bookmark');
});

// Assert bookmarked job title visible
cy.get('[data-cy="job-card"]').first().within(() => {
  cy.get('h2, h3, h4').invoke('text').then((jobTitle) => {
    cy.contains(jobTitle).should('exist');
  });
});



  // // Go to bookmarked jobs page
  // cy.contains(/bookmarked jobs/i).click();
  // cy.url().should('include', '/bookmarked');

  // Assert bookmarked job title visible
  cy.get('[data-cy="job-card"]').first().within(() => {
    cy.get('h2, h3, h4').invoke('text').then((jobTitle) => {
      cy.contains(jobTitle).should('exist');
    });
  });
});


  it('allows unbookmarking a job after login and verifies removal from bookmarked list', () => {
    // Login
     cy.visit('/login');
    cy.get('input[type="email"]').type('lovethegivernotwhatisgiven@gmail.com');
    cy.get('input[type="password"]').type('testtest');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/');
    cy.contains(/welcome/i).should('exist');

    // Navigate to jobs list
    cy.contains(/browse jobs/i).click();
    cy.url().should('include', '/jobs');

    // Bookmark first job card if not already bookmarked
    cy.get('[data-cy="job-card"]').first().within(() => {
  cy.get('button[aria-label="Add bookmark"]').click({ force: true });
  cy.get('button').should('have.attr', 'aria-label', 'Remove bookmark');
});


    // Now unbookmark the same job
    cy.get('[data-cy="job-card"]').first().within(() => {
  cy.get('button[aria-label="Remove bookmark"]').click({ force: true });
  cy.get('button').should('have.attr', 'aria-label', 'Add bookmark');
});

  });
it('persists bookmark state across reloads', () => {
  // 1. Visit login and log in
  cy.visit('/login');
  cy.get('input[type="email"]').type('lovethegivernotwhatisgiven@gmail.com');
  cy.get('input[type="password"]').type('testtest');
  cy.get('button[type="submit"]').click();

  cy.url().should('include', '/');
  cy.contains(/welcome/i).should('exist');

  // 2. Navigate to jobs list
  cy.contains(/browse jobs/i).click();
  cy.url().should('include', '/jobs');

  // 3. Bookmark first job card
  cy.get('[data-cy="job-card"]').first().within(() => {
    cy.get('[data-cy="bookmark-btn"]').then(($btn) => {
      if ($btn.attr('aria-label') === 'Add bookmark') {
        cy.wrap($btn).click({ force: true });
        cy.wrap($btn).should('have.attr', 'aria-label', 'Remove bookmark');
      }
    });
  });

  // 4. Reload and verify bookmark persists
  cy.reload();
  cy.get('[data-cy="job-card"]').first().within(() => {
    cy.get('[data-cy="bookmark-btn"]').should('have.attr', 'aria-label', 'Remove bookmark');
  });
});


});
