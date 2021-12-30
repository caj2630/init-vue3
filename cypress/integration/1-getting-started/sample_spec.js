describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit('http://192.168.6.209:8088')

        cy.contains('button').click()
    })
})
