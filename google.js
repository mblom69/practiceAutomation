module.exports = {
    beforeEach: browser => {
        browser.url('http://www.google.com')
        },
    after: browser => {
        browser.end()
    },
    'Google Search': browser => {
        browser
        .setValue('input[name="q"]', ['Sailboats', browser.Keys.ENTER])
        .waitForElementVisible('#res')
        .verify.containsText('#res', 'Sailboats')
        .pause(30000)
    }
}