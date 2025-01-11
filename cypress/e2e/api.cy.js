describe('API', () => {
  describe('Suite: Posts', () => {
    let testData
    const api = '/posts/'

    before(() => {
      cy.fixture('posts.json').then((json) => {
        testData = json
      })
    })

    it('Scenario 1: Validate Post', () => {
      // Description -----------------------------------------------------------
      /*
        - Validate that the title is not empty
        - Validate that the userId is a positive number
      */
      // Test Data -------------------------------------------------------------
      const expectedPost = testData.posts[0]

      // Prerequisites ---------------------------------------------------------
      cy.request('GET', `${api}${expectedPost.id}`).as('post')

      // Test Steps ------------------------------------------------------------
      cy.get('@post').then(post => {
        expect(post.body.title).not.empty
        expect(post.body.userId).is.greaterThan(0)
      })
    })
  })

  describe('Suite: Users', () => {
    let testData
    const api = '/users/'

    before(() => {
      cy.fixture('users.json').then((json) => {
        testData = json
      })
    })

    it('Scenario 1: User by ID', () => {
      // Description -----------------------------------------------------------
      /*
        - Validate that the email field contains a valid email address
        - Validate that the address.city field is not nul
      */
      // Test Data -------------------------------------------------------------
      const expectedUser = testData.users[0]
      const emailRegex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')

      // Prerequisites ---------------------------------------------------------
      cy.request('GET', `${api}${expectedUser.id}`).as('user')

      // Test Steps ------------------------------------------------------------
      cy.get('@user').then(user => {
        expect(user.body.email).to.match(emailRegex)
        expect(user.body.address.city).not.empty
      })
    })
  })
})
