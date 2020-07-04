const { cyan } = require("@material-ui/core/colors")

describe('Dashboard', function()
{
    it("Open Dashboard", function()
    {
        cyan.visit('http://localhost:3002/dashboard')
    })
})