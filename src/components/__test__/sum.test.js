import { sum } from "../sum";

describe("Sample Test Cases Group 1", ()=>{
    test("Sum check 1", ()=>{
        const val = sum(1,2)
        expect(val).toBe(3)
    });
    test("Sum check 2", ()=>{
        const val = sum(2,5)
        expect(val).not.toBe(10)
    })
})
describe("Sample Test Cases Group 2", ()=>{
    it("Sum check 1", ()=>{
        const val = sum(3,4)
        expect(val).toBe(7)
    });
    it("Sum check 2", ()=>{
        const val = sum(3,3)
        expect(val).not.toBe(9)
    })
})

