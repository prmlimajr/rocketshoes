const rewire = require("rewire")
const index = rewire("./index")
const Home = index.__get__("Home")
// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new Home()
    })

    test("0", async () => {
        await inst.componentDidMount()
    })
})
